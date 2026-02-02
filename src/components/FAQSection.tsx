"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/lib/config"
import { PremiumBackground, FadeInView } from "./animations"
import { SectionLabel } from "./ui"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <PremiumBackground variant="minimal" />
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-12">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="lines" className="justify-center mb-4">
              Dúvidas
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              Perguntas frequentes
            </h2>
          </FadeInView>
        </div>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => (
            <FadeInView 
              key={index} 
              animation="fadeUp" 
              delay={index * 0.05}
            >
              <motion.div
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-white border border-accent/20 shadow-sm" 
                    : "bg-white/50 border border-transparent hover:border-neutral/30"
                }`}
              >
                <motion.button
                  className="w-full px-5 py-4 flex items-center gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-primary flex-grow text-sm">
                    {item.pergunta}
                  </span>
                  
                  <motion.div
                    className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? "bg-accent/10" : "bg-neutral/10"
                    }`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      className={`w-3.5 h-3.5 transition-colors ${
                        openIndex === index ? "text-accent" : "text-text-light"
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-4">
                        <div className="text-text-light text-sm leading-relaxed">
                          {item.resposta}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
