"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

interface LeadFormProps {
  variant?: "light" | "dark"
}

interface FormData {
  nome: string
  instagram: string
  whatsapp: string
  email: string
  consentimento: boolean
}

// Simple UUID generator for browser
function generateEventId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

function formatWhatsApp(value: string): string {
  const numbers = value.replace(/\D/g, "")

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : ""
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function LeadForm({ variant = "light" }: LeadFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    instagram: "",
    whatsapp: "",
    email: "",
    consentimento: false,
  })

  const isDark = variant === "dark"

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else if (name === "whatsapp") {
      setFormData(prev => ({ ...prev, whatsapp: formatWhatsApp(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Informe seu nome"
    }

    if (!formData.instagram.trim()) {
      newErrors.instagram = "Informe seu Instagram"
    }

    if (!formData.email) {
      newErrors.email = "Informe seu e-mail"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.consentimento) {
      newErrors.consentimento = "Aceite os termos"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Generate unique Event ID for deduplication
      const eventId = generateEventId()

      // Track Client-Side Lead Event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Ebook Lead',
          currency: 'BRL',
          value: 0,
        }, { eventID: eventId })
      }

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          instagram: formData.instagram,
          eventId: eventId, // Pass to server for CAPI
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Form submission error:", errorData)
        throw new Error(errorData.error || "Erro ao enviar formulário")
      }

      router.push("/obrigado")
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
      // Optionally show error to user here
    }
  }

  const inputClass = isDark
    ? "w-full px-4 py-3 border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all duration-200 bg-white/10 text-white placeholder-white/40 border-white/20"
    : "w-full px-4 py-3 border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all duration-200 bg-white text-text placeholder-text-light/50 border-neutral"

  const labelClass = isDark ? "text-white/70" : "text-primary"
  const errorClass = "text-red-400 text-xs mt-1"

  const fields = [
    { name: "nome", label: "Nome Completo", type: "text", placeholder: "Seu nome completo" },
    { name: "instagram", label: "Instagram", type: "text", placeholder: "@seu.instagram" },
    { name: "whatsapp", label: "WhatsApp (opcional)", type: "tel", placeholder: "(00) 00000-0000", optional: true },
    { name: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {fields.slice(0, 2).map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <label htmlFor={field.name} className={`block text-xs font-medium mb-1.5 ${labelClass}`}>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name as keyof FormData] as string}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`${inputClass} ${errors[field.name as keyof FormData]
                ? "border-red-400 focus:ring-red-200"
                : focusedField === field.name
                  ? "border-accent"
                  : ""
                }`}
              disabled={isSubmitting}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
            />
            <AnimatePresence>
              {errors[field.name as keyof FormData] && (
                <motion.p
                  className={errorClass}
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                >
                  {errors[field.name as keyof FormData]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {fields.slice(2, 4).map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <label htmlFor={field.name} className={`block text-xs font-medium mb-1.5 ${labelClass}`}>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name as keyof FormData] as string}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`${inputClass} ${errors[field.name as keyof FormData]
                ? "border-red-400 focus:ring-red-200"
                : focusedField === field.name
                  ? "border-accent"
                  : ""
                }`}
              disabled={isSubmitting}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
            />
            <AnimatePresence>
              {errors[field.name as keyof FormData] && (
                <motion.p
                  className={errorClass}
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                >
                  {errors[field.name as keyof FormData]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label className="flex items-start gap-2.5 cursor-pointer group">
          <div
            className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors ${formData.consentimento
              ? "bg-accent border-accent"
              : errors.consentimento
                ? "border-red-400"
                : isDark
                  ? "border-white/30 group-hover:border-accent"
                  : "border-neutral group-hover:border-accent"
              }`}
          >
            <input
              type="checkbox"
              name="consentimento"
              checked={formData.consentimento}
              onChange={handleChange}
              className="sr-only"
              disabled={isSubmitting}
            />
            <AnimatePresence>
              {formData.consentimento && (
                <motion.svg
                  className="w-2.5 h-2.5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
          <span className={`text-xs leading-relaxed ${isDark ? "text-white/50" : "text-text-light"}`}>
            Concordo em receber comunicações relacionadas ao conteúdo. Posso cancelar quando quiser.
          </span>
        </label>
        <AnimatePresence>
          {errors.consentimento && (
            <motion.p
              className={errorClass}
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
            >
              {errors.consentimento}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="relative overflow-hidden w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          whileHover={{
            scale: isSubmitting ? 1 : 1.01,
            boxShadow: isSubmitting ? "none" : "0 8px 25px rgba(208, 162, 87, 0.3)",
          }}
          whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative z-10">
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </motion.svg>
                Enviando...
              </span>
            ) : (
              "Receber E-book Grátis"
            )}
          </span>
        </motion.button>
      </motion.div>
    </form>
  )
}
