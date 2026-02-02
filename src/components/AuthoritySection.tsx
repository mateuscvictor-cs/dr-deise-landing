"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView } from "./animations"
import { SectionLabel, GlassCard } from "./ui"

export function AuthoritySection() {
  return (
    <section id="sobre" className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-10">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="lines" className="justify-center mb-4">
              Quem está por trás
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              Autoridade sem coachzice.
            </h2>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          <FadeInView animation="fadeRight" className="lg:col-span-4">
            <div className="relative max-w-xs mx-auto">
              <motion.div 
                className="absolute -inset-2 border border-accent/20 rounded-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-accent/10">
                <Image
                  src="/deise-bio.png"
                  alt="Dra. Deise Kersten"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </FadeInView>

          <div className="lg:col-span-8">
            <FadeInView animation="fadeUp" delay={0.2}>
              <div className="prose prose-sm text-text-light leading-relaxed mb-6">
                {siteConfig.dentista.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-3">{paragraph}</p>
                ))}
              </div>
            </FadeInView>
            
            <FadeInView animation="fadeUp" delay={0.3}>
              <h3 className="text-xl font-bold text-primary mb-4">
                {siteConfig.dentista.nome}
              </h3>
            </FadeInView>

            <FadeInView animation="fadeUp" delay={0.4}>
              <GlassCard variant="light" className="p-4 inline-block">
                <p className="text-text-light text-sm italic">
                  "Previsibilidade não vem de trabalhar mais. Vem de enxergar e ajustar o que importa."
                </p>
                <p className="text-accent text-xs font-medium mt-2">— {siteConfig.dentista.nome}</p>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  )
}
