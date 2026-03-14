"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { QUIZ_QUESTIONS, NIVEL_LABELS } from "@/lib/quiz-questions"
import { calculateScores } from "@/lib/quiz-scoring"
import { GlassCard } from "@/components/ui"
import type { QuizAnswer } from "@/types"

type Step = "intro" | number | "email" | "result"

const TOTAL_QUESTIONS = 9

const slideVariants: {
  enter: (dir: number) => { x: number; opacity: number }
  center: { x: number; opacity: number }
  exit: (dir: number) => { x: number; opacity: number }
} = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function QuizFlow() {
  const router = useRouter()
  const [step, setStep] = useState<Step>("intro")
  const [answers, setAnswers] = useState<Record<string, QuizAnswer>>({})
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [direction, setDirection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const currentQuestionIndex = typeof step === "number" ? step : null
  const progressLabel =
    step === "intro"
      ? null
      : step === "email"
        ? "Quase lá"
        : step === "result"
          ? "Resultado"
          : `Pergunta ${(currentQuestionIndex ?? 0) + 1} de ${TOTAL_QUESTIONS}`

  const handleAnswer = (qIndex: number, value: QuizAnswer) => {
    setAnswers((prev) => ({ ...prev, [`q${qIndex + 1}`]: value }))
    setDirection(1)
    if (qIndex + 1 <= 6) {
      setStep(qIndex + 1)
    } else {
      setStep("email")
    }
  }

  const handleEmailSubmit = () => {
    const trimmed = email.trim()
    if (!trimmed) {
      setEmailError("Informe seu e-mail")
      return
    }
    if (!validateEmail(trimmed)) {
      setEmailError("E-mail inválido")
      return
    }
    setEmailError("")
    setDirection(1)
    setStep(7)
  }

  const handleQ8Q9Answer = (qIndex: number, value: QuizAnswer) => {
    setAnswers((prev) => ({ ...prev, [`q${qIndex + 1}`]: value }))
    setDirection(1)
    if (qIndex + 1 < TOTAL_QUESTIONS) {
      setStep(qIndex + 1)
    } else {
      setStep("result")
    }
  }

  const handleResultSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setSubmitError("")
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          answers: {
            q1: answers.q1,
            q2: answers.q2,
            q3: answers.q3,
            q4: answers.q4,
            q5: answers.q5,
            q6: answers.q6,
            q7: answers.q7,
            q8: answers.q8,
            q9: answers.q9,
          },
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setSubmitError(data.error || "Erro ao salvar")
        setIsSubmitting(false)
        return
      }
      const s = calculateScores(answers)
      const pctG = (s.score_g / 40) * 100
      const pctI = (s.score_i / 20) * 100
      const pctA = (s.score_a / 40) * 100
      const pilarMaisFraco = pctG <= pctI && pctG <= pctA ? "G" : pctI <= pctA ? "I" : "A"
      const opts = "path=/; domain=.gestaokersten.com.br; max-age=604800"
      document.cookie = `gia_email=${encodeURIComponent(email.trim())}; ${opts}`
      document.cookie = `gia_score_total=${s.score_total}; ${opts}`
      document.cookie = `gia_nivel=${s.nivel}; ${opts}`
      document.cookie = `gia_pilar_mais_fraco=${pilarMaisFraco}; ${opts}`
      router.push("/obrigado")
    } catch {
      setSubmitError("Erro de conexão")
      setIsSubmitting(false)
    }
  }

  const scores = step === "result" ? calculateScores(answers) : null

  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {progressLabel && (
        <p className="text-white/60 text-sm font-medium mb-6">
          {progressLabel}
        </p>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        {step === "intro" && (
          <motion.div
            key="intro"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <GlassCard variant="dark" hover={false} className="p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Descubra seu Score GIA
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                9 perguntas rápidas para avaliar Gestão, Influência e Automação da sua clínica. Ao final você recebe seu score e o Relatório Estratégico completo por e-mail.
              </p>
              <motion.button
                type="button"
                onClick={() => {
                  setDirection(1)
                  setStep(0)
                }}
                className="w-full bg-accent text-primary px-6 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Iniciar Quiz
              </motion.button>
            </GlassCard>
          </motion.div>
        )}

        {typeof step === "number" && step >= 0 && step <= 6 && QUIZ_QUESTIONS[step] && (
          <QuestionStep
            key={`q-${step}`}
            question={QUIZ_QUESTIONS[step]}
            questionNumber={step + 1}
            onSelect={(value) => handleAnswer(step, value)}
            direction={direction}
            slideVariants={slideVariants}
          />
        )}

        {step === "email" && (
          <motion.div
            key="email"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <GlassCard variant="dark" hover={false} className="p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Você está quase lá!
              </h2>
              <p className="text-white/70 mb-6 text-lg">
                Informe seu e-mail para receber seu Score GIA. O próximo passo é preencher a Calculadora CHC; o Relatório Estratégico completo será enviado por e-mail após você concluir a Calculadora.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError("")
                }}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-accent focus:border-accent outline-none mb-4"
                onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
              />
              {emailError && (
                <p className="text-red-400 text-sm mb-2">{emailError}</p>
              )}
              <motion.button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full bg-accent text-primary px-6 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Continuar e ver meu Score →
              </motion.button>
            </GlassCard>
          </motion.div>
        )}

        {typeof step === "number" && step >= 7 && step <= 8 && QUIZ_QUESTIONS[step] && (
          <QuestionStep
            key={`q-${step}`}
            question={QUIZ_QUESTIONS[step]}
            questionNumber={step + 1}
            onSelect={(value) => handleQ8Q9Answer(step, value)}
            direction={direction}
            slideVariants={slideVariants}
          />
        )}

        {step === "result" && scores && (
          <motion.div
            key="result"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <GlassCard variant="dark" hover={false} className="p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Seu Score GIA
              </h2>
              <p className="text-white/60 text-lg mb-6">
                {scores.score_total}/100 — {NIVEL_LABELS[scores.nivel] ?? scores.nivel}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-accent font-bold text-xl">G</p>
                  <p className="text-white/80 text-sm">Gestão</p>
                  <p className="text-white font-semibold">{scores.score_g}/40</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-accent font-bold text-xl">I</p>
                  <p className="text-white/80 text-sm">Influência</p>
                  <p className="text-white font-semibold">{scores.score_i}/20</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-accent font-bold text-xl">A</p>
                  <p className="text-white/80 text-sm">Automação</p>
                  <p className="text-white font-semibold">{scores.score_a}/40</p>
                </div>
              </div>
              {submitError && (
                <p className="text-red-400 text-sm mb-2">{submitError}</p>
              )}
              <motion.button
                type="button"
                onClick={handleResultSubmit}
                disabled={isSubmitting}
                className="w-full bg-accent text-primary px-6 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors disabled:opacity-70"
                whileHover={isSubmitting ? {} : { scale: 1.01 }}
                whileTap={isSubmitting ? {} : { scale: 0.99 }}
              >
                {isSubmitting ? "Enviando..." : "Continuar para a Calculadora e receber meu Relatório"}
              </motion.button>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function QuestionStep({
  question,
  questionNumber,
  onSelect,
  direction,
  slideVariants,
}: {
  question: (typeof QUIZ_QUESTIONS)[number]
  questionNumber: number
  onSelect: (value: QuizAnswer) => void
  direction: number
  slideVariants: {
    enter: (dir: number) => { x: number; opacity: number }
    center: { x: number; opacity: number }
    exit: (dir: number) => { x: number; opacity: number }
  }
}) {
  return (
    <motion.div
      key={`q-${question.id}`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl"
    >
      <GlassCard variant="dark" hover={false} className="p-8 md:p-10 border border-white/10">
        <p className="text-accent text-sm font-medium mb-2">
          {question.pilar} — {question.subarea}
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
          {question.question}
        </h2>
        <div className="space-y-3">
          {question.options.map((opt) => (
            <motion.button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className="w-full text-left px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 transition-all"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="font-medium text-accent mr-2">{opt.value}.</span>
              {opt.label}
            </motion.button>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}
