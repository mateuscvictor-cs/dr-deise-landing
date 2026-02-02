"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <motion.h1
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Confira seu email!
        </motion.h1>

        <motion.p
          className="text-white/70 mb-8 text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          O link para download do e-book <strong className="text-accent">{siteConfig.ebook.titulo}</strong> foi enviado para seu email. Verifique também a caixa de spam.
        </motion.p>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="block w-full bg-accent text-primary px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-light transition-colors"
          >
            Voltar ao Início
          </Link>
          
          <a
            href={`https://wa.me/55${siteConfig.clinica.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-transparent border border-accent text-accent px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-accent hover:text-primary transition-colors"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.p
          className="text-white/40 text-xs mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} {siteConfig.clinica.nome}
        </motion.p>
      </div>
    </div>
  )
}
