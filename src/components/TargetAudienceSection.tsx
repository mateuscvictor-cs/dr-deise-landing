"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView, AnimatedButton } from "./animations"
import { SectionLabel, GlassCardDark } from "./ui"

export function TargetAudienceSection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <PremiumBackground variant="section" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="brackets" dark className="justify-center mb-6">
              Para quem é
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Este e-book foi feito para <span className="text-accent">você?</span>
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Descubra se este conteúdo é ideal para o seu momento
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <FadeInView animation="fadeRight">
            <GlassCardDark className="h-full">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(208, 162, 87, 0.3)" }}
                >
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Para Quem É</h3>
                  <p className="text-white/50 text-sm">Ideal para você se...</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {siteConfig.paraQuemE.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-accent/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCardDark>
          </FadeInView>

          <FadeInView animation="fadeLeft" delay={0.2}>
            <GlassCardDark className="h-full border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <svg className="w-7 h-7 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white/70">Não É Para Você Se</h3>
                  <p className="text-white/40 text-sm">Talvez não seja o momento...</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {siteConfig.paraQuemNaoE.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: -5 }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-white/10 transition-colors">
                      <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-white/50 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCardDark>
          </FadeInView>
        </div>

        <FadeInView animation="fadeUp" delay={0.5} className="text-center mt-14">
          <p className="text-white/60 mb-6">Se você se identificou, este e-book é para você!</p>
          <AnimatedButton href="#formulario" variant="primary">
            Baixar Meu E-book
          </AnimatedButton>
        </FadeInView>
      </div>
    </section>
  )
}
