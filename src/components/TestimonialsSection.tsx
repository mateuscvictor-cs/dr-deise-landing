"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView } from "./animations"
import { GlassCard, SectionLabel } from "./ui"

export function TestimonialsSection() {
  const featuredTestimonial = siteConfig.depoimentos[0]
  const otherTestimonials = siteConfig.depoimentos.slice(1)

  return (
    <section id="depoimentos" className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="lines" className="justify-center mb-6">
              Depoimentos
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              O que nossos <span className="text-accent">pacientes</span> dizem
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Histórias reais de quem transformou o sorriso com nosso atendimento
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <FadeInView animation="fadeUp" className="lg:col-span-7">
            <GlassCard variant="light" className="h-full relative">
              <motion.div 
                className="absolute -top-4 -left-4 text-8xl text-accent/20 font-serif"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                &ldquo;
              </motion.div>
              
              <div className="relative pt-8">
                <p className="text-xl md:text-2xl text-text leading-relaxed mb-8 italic">
                  {featuredTestimonial.texto}
                </p>

                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-2 border-accent/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xl text-accent font-bold">
                      {featuredTestimonial.iniciais}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-primary text-lg">{featuredTestimonial.nome}</p>
                    {featuredTestimonial.tratamento && (
                      <p className="text-sm text-text-light">{featuredTestimonial.tratamento}</p>
                    )}
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-4 h-4 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeInView>

          <div className="lg:col-span-5 space-y-6">
            {otherTestimonials.map((depoimento, index) => (
              <FadeInView key={index} animation="fadeLeft" delay={0.2 + index * 0.1}>
                <GlassCard variant="light" className="relative">
                  <motion.div 
                    className="absolute -top-2 -left-2 text-4xl text-accent/30 font-serif"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    &ldquo;
                  </motion.div>
                  
                  <p className="text-text-light mb-4 pt-4 line-clamp-3">
                    {depoimento.texto}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-sm text-accent font-bold">
                        {depoimento.iniciais}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">{depoimento.nome}</p>
                      {depoimento.tratamento && (
                        <p className="text-xs text-text-light">{depoimento.tratamento}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </FadeInView>
            ))}
          </div>
        </div>

        <FadeInView animation="fadeUp" delay={0.4}>
          <GlassCard variant="light" className="border border-accent/20">
            <p className="text-center text-text-light mb-6">
              Avaliações verificadas de pacientes
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="aspect-[4/3] bg-secondary/50 border border-accent/20 rounded-xl flex items-center justify-center overflow-hidden"
                  whileHover={{ 
                    borderColor: "rgba(208, 162, 87, 0.5)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 text-accent/50 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-primary text-sm font-medium">PRINT {i}</p>
                    <p className="text-xs text-text-light">Google / Facebook</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </FadeInView>
      </div>
    </section>
  )
}
