"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView, AnimatedButton } from "./animations"
import { GlassCard, SectionLabel } from "./ui"

export function BenefitsSection() {
  return (
    <section id="ebook" className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="lines" className="justify-center mb-6">
              O que você vai aprender
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Conteúdo <span className="text-accent">exclusivo</span> para você
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Um guia completo com tudo que você precisa saber para conquistar o sorriso dos seus sonhos
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.ebook.bullets.map((bullet, index) => (
            <FadeInView 
              key={index} 
              animation="fadeUp" 
              delay={0.1 * index}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <GlassCard 
                variant="light" 
                className={`h-full ${index === 0 ? "lg:row-span-1" : ""}`}
              >
                <div className="flex flex-col h-full">
                  <motion.span 
                    className="text-5xl md:text-6xl font-bold text-accent/15 mb-4 block"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  
                  <p className="text-text text-lg leading-relaxed flex-grow">
                    {bullet}
                  </p>

                  <motion.div 
                    className="mt-4 pt-4 border-t border-neutral/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(208, 162, 87, 0.2)" }}
                      >
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-sm text-text-light">Incluso no e-book</span>
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </FadeInView>
          ))}
        </div>

        <FadeInView animation="fadeUp" delay={0.5} className="text-center mt-14">
          <AnimatedButton href="#formulario" variant="primary">
            Quero Receber o E-book
          </AnimatedButton>
        </FadeInView>
      </div>
    </section>
  )
}
