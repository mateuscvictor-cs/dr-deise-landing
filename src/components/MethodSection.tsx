"use client"

import { motion } from "framer-motion"
import { metodoGIA } from "@/lib/config"
import { FadeInView } from "./animations"
import { SectionLabel, GlassCardDark } from "./ui"

export function MethodSection() {
  return (
    <section id="metodo" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg-method.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-14">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="dot" dark className="justify-center mb-4">
              A Solução
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {metodoGIA.titulo}
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              {metodoGIA.subtitulo}
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <FadeInView animation="fadeRight">
            <GlassCardDark className="h-full">
              <h3 className="text-lg font-bold text-white mb-6">O Método G.I.A. 7D</h3>
              <div className="space-y-5">
                {metodoGIA.pilares.map((pilar, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">{pilar.letra}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{pilar.nome}</p>
                      <p className="text-white/60 text-sm">{pilar.descricao}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCardDark>
          </FadeInView>

          <FadeInView animation="fadeLeft" delay={0.2}>
            <GlassCardDark className="h-full border border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✦</span>
                <h3 className="text-lg font-bold text-white">{metodoGIA.ia.titulo}</h3>
              </div>
              <p className="text-accent text-sm font-medium mb-6">
                {metodoGIA.ia.subtitulo}
              </p>
              <ul className="space-y-3">
                {metodoGIA.ia.beneficios.map((beneficio, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3 text-white/80 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-accent">✦</span>
                    <span>{beneficio}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCardDark>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
