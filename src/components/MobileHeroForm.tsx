"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { FadeInView } from "./animations"
import { GlassCard } from "./ui"

export function MobileHeroForm() {
  return (
    <section id="formulario-mobile" className="lg:hidden relative w-full bg-primary pb-20 px-4 -mt-10 z-20">
      <FadeInView animation="fadeUp" delay={0.3}>
        <GlassCard variant="dark" hover={false} className="p-6 border border-white/10 backdrop-blur-xl bg-primary/95">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-1">
              Descubra seu Score GIA
            </h3>
            <p className="text-white/50 text-sm">
              9 perguntas · Menos de 3 minutos · Resultado na hora
            </p>
          </div>
          <Link
            href="/quiz"
            className="block w-full bg-accent text-primary px-6 py-4 rounded-lg font-semibold text-center hover:bg-accent-light transition-colors"
          >
            Fazer o Quiz
          </Link>
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {siteConfig.pessoasQueBaixaram.map((pessoa, i) => (
                  <motion.div
                    key={i}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-accent/50 ring-2 ring-primary flex-shrink-0"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    <Image
                      src={pessoa.foto}
                      alt={pessoa.nome}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-xs text-white/50">
                <span className="text-accent font-semibold">+{siteConfig.dentista.numeroPacientes}</span> já fizeram o quiz
              </div>
            </div>
          </div>
        </GlassCard>
      </FadeInView>
    </section>
  )
}
