"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { LeadForm } from "./LeadForm"
import { PremiumBackground, FadeInView } from "./animations"
import { GlassCard } from "./ui"

export function FinalCTA() {
  return (
    <section id="formulario-final" className="section-padding bg-primary relative overflow-hidden">
      <PremiumBackground variant="section" />
      
      <div className="container-narrow mx-auto relative z-10">
        <FadeInView animation="fadeUp" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto Para Sair da "Roda Viva da Cadeira"?
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            O primeiro passo é o diagnóstico. Baixe o ebook gratuitamente e descubra onde está o problema antes que seja tarde demais.
          </p>
        </FadeInView>

        <FadeInView animation="scaleIn" delay={0.2}>
          <GlassCard variant="light" hover={false} className="p-6 md:p-8 max-w-lg mx-auto border border-accent/20">
            <div className="max-w-sm mx-auto">
              <LeadForm variant="light" />
            </div>
            
            <p className="text-center text-xs text-text-light mt-4">
              🔒 Seus dados estão 100% seguros.
            </p>
          </GlassCard>
        </FadeInView>
      </div>
    </section>
  )
}
