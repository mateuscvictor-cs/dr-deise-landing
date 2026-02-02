"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-10 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center">
          <p className="text-white/70 text-sm mb-4">
            © {currentYear} {siteConfig.clinica.nome}. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-xs text-white/40 mb-6">
            <motion.a 
              href="/politica-de-privacidade"
              className="hover:text-accent transition-colors"
              whileHover={{ y: -1 }}
            >
              Política de privacidade / LGPD
            </motion.a>
            <span>•</span>
            <motion.a 
              href={`https://wa.me/55${siteConfig.clinica.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              whileHover={{ y: -1 }}
            >
              Suporte
            </motion.a>
          </div>

          <p className="text-xs text-white/30 max-w-md mx-auto leading-relaxed">
            Ao se cadastrar, você concorda em receber comunicações relacionadas ao conteúdo. Seus dados ficam protegidos e você pode cancelar quando quiser.
          </p>
        </div>
      </div>
    </footer>
  )
}
