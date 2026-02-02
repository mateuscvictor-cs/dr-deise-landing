"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteConfig } from "@/lib/config"
import { FadeInView } from "./animations"
import { GlassCard } from "./ui"
import { LeadForm } from "./LeadForm"

export function HeroSection() {
  return (
    <section id="ebook" className="relative w-full flex flex-col md:block bg-primary">
      {/* Mobile: Image Section (Top) */}
      <div className="md:hidden relative w-full h-[65vh]">
        <Image
          src="/hero-mobile.png"
          alt="Dra. Deise Kersten"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      {/* Desktop: Background Image */}
      <div className="absolute inset-0 hidden md:block z-0">
        <Image
          src="/hero-desktop.png"
          alt=""
          fill
          className="object-cover object-[left_15%]"
          priority
          quality={90}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/50 to-primary/95" />
      </div>

      {/* Mobile: Text Section (Bottom) & Desktop: Grid Content */}
      <div className="relative z-10 w-full md:min-h-screen md:flex md:items-center">
        <div className="container-wide mx-auto px-4 md:pt-36 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center w-full">
            <div className="lg:col-span-4 lg:col-start-4 order-2 lg:order-1 text-center lg:text-left min-w-0 bg-primary md:bg-transparent pb-12 pt-4 md:py-0 -mt-10 md:mt-0 relative z-20 rounded-t-3xl md:rounded-none">
              <motion.div
                className="mb-4 md:mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-accent/20 text-accent text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full inline-block">
                  E-book Gratuito
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-5 text-balance md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {siteConfig.ebook.titulo}
              </motion.h1>

              <motion.p
                className="text-sm md:text-base text-white/80 leading-relaxed mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {siteConfig.ebook.subtitulo}
              </motion.p>

              {/* Mobile Only: CTA Button */}
              <motion.div
                className="md:hidden flex flex-col items-center gap-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#formulario-mobile"
                  className="bg-accent text-primary px-8 py-3 rounded-lg font-bold w-full max-w-xs shadow-lg shadow-accent/20 animate-pulse"
                >
                  BAIXAR AGORA
                </a>
              </motion.div>

              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-sm text-accent font-medium mb-4">O que você vai descobrir:</p>
                <ul className="space-y-4 inline-block text-left">
                  {siteConfig.ebook.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-white/90 text-sm"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-accent mt-0.5 flex-shrink-0 opacity-100">✓</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div id="formulario" className="hidden lg:block lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
              <FadeInView animation="fadeLeft" delay={0.3}>
                <GlassCard variant="dark" hover={false} className="p-6 md:p-8 border border-white/10 backdrop-blur-xl bg-primary/60">
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Baixe Grátis Agora
                    </h3>
                    <p className="text-white/50 text-sm">
                      Preencha os dados abaixo e receba em menos de 2 minutos.
                    </p>
                  </div>

                  <LeadForm variant="dark" />

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
                        <span className="text-accent font-semibold">+{siteConfig.dentista.numeroPacientes}</span> pessoas já baixaram
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
