"use client"

import Link from "next/link"
import { PremiumBackground, FadeInView } from "./animations"
import { GlassCard } from "./ui"

export function FinalCTA() {
  return (
    <section id="formulario-final" className="section-padding bg-primary relative overflow-hidden">
      <PremiumBackground variant="section" />
      <div className="container-narrow mx-auto relative z-10">
        <FadeInView animation="fadeUp" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto para descobrir seu Score GIA?
          </h2>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            O primeiro passo é o diagnóstico. Faça o quiz em menos de 3 minutos e receba seu Relatório Estratégico completo por e-mail.
          </p>
        </FadeInView>
        <FadeInView animation="scaleIn" delay={0.2}>
          <GlassCard variant="light" hover={false} className="p-6 md:p-8 max-w-lg mx-auto border border-accent/20 text-center">
            <Link
              href="/quiz"
              className="inline-block w-full max-w-sm bg-accent text-primary px-6 py-4 rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
              Fazer o Quiz — Descobrir meu Score
            </Link>
            <p className="text-center text-xs text-text-light mt-4">
              🔒 Seus dados estão 100% seguros.
            </p>
          </GlassCard>
        </FadeInView>
      </div>
    </section>
  )
}
