"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/lib/config"
import { LeadForm } from "./LeadForm"
import { PremiumBackground, FadeInView } from "./animations"
import { SectionLabel, GlassCard } from "./ui"

export function FormSection() {
  const benefits = [
    { icon: "📘", text: "Conteúdo 100% gratuito" },
    { icon: "⚡", text: "Entrega imediata por e-mail e WhatsApp" },
    { icon: "✨", text: "Informações exclusivas e práticas" },
  ]

  return (
    <section id="formulario" className="section-padding bg-primary relative overflow-hidden">
      <PremiumBackground variant="section" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeInView animation="fadeUp">
              <SectionLabel variant="dot" dark className="mb-6">
                E-book Gratuito
              </SectionLabel>
            </FadeInView>
            
            <FadeInView animation="fadeUp" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Baixe seu e-book <span className="text-accent">gratuito</span> agora
              </h2>
            </FadeInView>
            
            <FadeInView animation="fadeUp" delay={0.2}>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Preencha o formulário ao lado e receba imediatamente o e-book 
                <strong className="text-accent"> {siteConfig.ebook.titulo}</strong> no seu e-mail e WhatsApp.
              </p>
            </FadeInView>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <FadeInView key={index} animation="fadeUp" delay={0.3 + index * 0.1}>
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(208, 162, 87, 0.2)" }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <span className="text-white/90 text-lg">{benefit.text}</span>
                  </motion.div>
                </FadeInView>
              ))}
            </div>

            <FadeInView animation="fadeUp" delay={0.6}>
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {siteConfig.pessoasQueBaixaram.map((pessoa, i) => (
                      <motion.div
                        key={i}
                        className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-accent/50 ring-2 ring-primary flex-shrink-0"
                        initial={{ x: -15, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Image
                          src={pessoa.foto}
                          alt={pessoa.nome}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-sm text-white/60">
                    <span className="text-accent font-semibold">+{siteConfig.dentista.numeroPacientes}</span> pessoas já baixaram
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          <FadeInView animation="fadeLeft" delay={0.3}>
            <GlassCard variant="light" hover={false} className="p-8 md:p-10 border border-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Receba seu E-book Grátis
                </h3>
                <p className="text-text-light text-sm">
                  Preencha os dados abaixo para receber
                </p>
              </div>
              
              <LeadForm variant="light" />
              
              <div className="mt-6 pt-6 border-t border-neutral/20">
                <div className="flex items-center justify-center gap-4 text-xs text-text-light">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Dados seguros
                  </div>
                  <span className="w-1 h-1 rounded-full bg-neutral" />
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Sem spam
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
