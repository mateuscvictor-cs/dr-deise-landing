"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView } from "./animations"
import { GlassCard, SectionLabel } from "./ui"

export function ClinicSection() {
  const photos = [
    { label: "CONSULTÓRIO", file: "clinica-consultorio.jpg", size: "1200x800px" },
    { label: "EQUIPAMENTOS", file: "clinica-equipamentos.jpg", size: "800x800px" },
    { label: "RECEPÇÃO", file: "clinica-recepcao.jpg", size: "800x800px" },
  ]

  return (
    <section id="clinica" className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="lines" className="justify-center mb-6">
              Nossa Clínica
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Um espaço <span className="text-accent">pensado</span> para você
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Ambiente moderno e acolhedor para o seu conforto e bem-estar
            </p>
          </FadeInView>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {photos.map((photo, index) => (
            <FadeInView 
              key={index} 
              animation="scaleIn" 
              delay={index * 0.1}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <motion.div 
                className={`relative bg-white rounded-2xl overflow-hidden border border-accent/20 group ${
                  index === 0 ? "aspect-square" : "aspect-square"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <motion.svg 
                      className={`${index === 0 ? "w-16 h-16" : "w-10 h-10"} text-accent/50 mx-auto mb-3`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </motion.svg>
                    <p className={`text-primary font-medium ${index === 0 ? "text-lg" : "text-sm"}`}>
                      FOTO {index + 3}
                    </p>
                    <p className={`text-text-light ${index === 0 ? "text-sm" : "text-xs"}`}>
                      {photo.label}
                    </p>
                    <p className="text-xs text-text-light/60 mt-1">{photo.size}</p>
                  </div>
                </div>

                <motion.div 
                  className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  <p className="text-white font-medium">{photo.label}</p>
                </motion.div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeInView animation="fadeRight">
            <GlassCard variant="light" className="h-full">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(208, 162, 87, 0.2)" }}
                >
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Localização</h3>
                  <p className="text-text font-medium mb-1">{siteConfig.clinica.nome}</p>
                  <p className="text-text-light text-sm mb-3">
                    {siteConfig.clinica.bairro}, {siteConfig.clinica.cidade} - {siteConfig.clinica.uf}
                  </p>
                  <div className="pt-3 border-t border-neutral/20">
                    <p className="text-xs text-text-light">
                      <span className="text-accent font-medium">Regiões atendidas:</span>
                      <br />
                      {siteConfig.clinica.regiaoAtendida}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeInView>

          <FadeInView animation="fadeLeft" delay={0.2}>
            <GlassCard variant="light" className="h-full">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(208, 162, 87, 0.2)" }}
                >
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Nossos Diferenciais</h3>
                  <ul className="space-y-2">
                    {siteConfig.diferenciais.slice(0, 4).map((diferencial, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-text-light">{diferencial}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
