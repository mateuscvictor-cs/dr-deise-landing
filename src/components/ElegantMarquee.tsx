"use client"

import { motion } from "framer-motion"

const items = [
  "Gestão Kersten",
  "Belém · Pará",
  "O Paradoxo da Agenda Cheia",
  "Método G.I.A. 7D",
  "Gestão Odontológica",
  "E-book Gratuito",
  "Dra. Deise Kersten",
  "CHC · Custo Hora Clínica",
  "Clínica Inteligente",
  "IA na Gestão",
  "Saia da Roda Viva da Cadeira",
  "Precificação Científica",
  "Dentista Dono de Negócio",
]

function MarqueeTrack() {
  return (
    <div className="flex items-center gap-10 md:gap-14 shrink-0">
      {items.map((label) => (
        <span
          key={label}
          className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/35 whitespace-nowrap"
        >
          {label}
        </span>
      ))}
    </div>
  )
}

export function ElegantMarquee() {
  return (
    <section className="relative py-3 md:py-4 bg-primary border-y border-white/5 overflow-hidden" aria-hidden>
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <MarqueeTrack />
        <MarqueeTrack />
      </motion.div>
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-primary to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-primary to-transparent pointer-events-none" />
    </section>
  )
}
