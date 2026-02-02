"use client"

import { motion } from "framer-motion"
import { estatisticas } from "@/lib/config"
import { PremiumBackground, FadeInView } from "./animations"
import { SectionLabel, GlassCard } from "./ui"

export function ProblemSection() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-14">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="dot" className="justify-center mb-4">
              Problema que ninguém fala
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Você Não Está Sozinho Nessa Luta.
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-base text-text-light max-w-2xl mx-auto">
              A maioria dos dentistas brasileiros enfrenta o mesmo paradoxo: <strong className="text-primary">agenda lotada, mas lucro que não aparece.</strong>
            </p>
          </FadeInView>

          <FadeInView animation="fadeUp" delay={0.3}>
            <p className="text-accent font-medium mt-6 italic">
              "Faturar alto não significa ter lucro."
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {estatisticas.map((stat, index) => (
            <FadeInView key={index} animation="fadeUp" delay={0.2 + index * 0.1}>
              <GlassCard variant="light" className="text-center h-full">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-3xl md:text-4xl block mb-2" aria-hidden>
                    {stat.emoji}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    {stat.destaque}
                  </span>
                  <span className="text-lg text-primary font-medium ml-1">
                    {stat.label}
                  </span>
                </motion.div>
                <p className="text-text-light text-sm mt-3 leading-relaxed">
                  {stat.descricao}
                </p>
              </GlassCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
