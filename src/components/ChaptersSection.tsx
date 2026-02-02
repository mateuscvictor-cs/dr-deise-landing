"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"
import { capitulos } from "@/lib/config"
import { FadeInView } from "./animations"
import { SectionLabel } from "./ui"

const parallaxOffsets = [-12, 8, -8, 12]

export function ChaptersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y0 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [parallaxOffsets[0], 0, 0, -parallaxOffsets[0]])
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [parallaxOffsets[1], 0, 0, -parallaxOffsets[1]])
  const y2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [parallaxOffsets[2], 0, 0, -parallaxOffsets[2]])
  const y3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [parallaxOffsets[3], 0, 0, -parallaxOffsets[3]])
  const yTransforms = [y0, y1, y2, y3]

  return (
    <section ref={sectionRef} id="conteudo" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide mx-auto relative z-10">
        <div className="text-center mb-14">
          <FadeInView animation="fadeUp">
            <SectionLabel variant="brackets" className="justify-center mb-4">
              Conteúdo
            </SectionLabel>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              O Que Você Vai Descobrir
            </h2>
          </FadeInView>
          
          <FadeInView animation="fadeUp" delay={0.2}>
            <p className="text-base text-primary/60 max-w-xl mx-auto">
              Capítulos diretos ao ponto para mudar sua visão.
            </p>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capitulos.map((capitulo, index) => (
            <ChapterCard
              key={index}
              capitulo={capitulo}
              index={index}
              y={yTransforms[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ChapterCard({
  capitulo,
  index,
  y,
}: {
  capitulo: { numero: number; titulo: string; descricao: string }
  index: number
  y: MotionValue<number>
}) {
  return (
    <FadeInView animation="fadeUp" delay={0.1 * index}>
      <motion.div
        className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 h-full shadow-lg shadow-primary/5"
        style={{ y }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 24px 48px rgba(13, 31, 61, 0.12)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
            <span className="text-accent font-bold">{capitulo.numero}</span>
          </div>
          <div>
            <p className="text-xs text-primary/40 uppercase tracking-wider mb-1">Capítulo</p>
            <h3 className="text-primary font-semibold mb-2">{capitulo.titulo}</h3>
            <p className="text-primary/60 text-sm leading-relaxed">{capitulo.descricao}</p>
          </div>
        </div>
      </motion.div>
    </FadeInView>
  )
}
