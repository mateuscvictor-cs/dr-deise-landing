"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Método", href: "#metodo" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-[#0d1f3d]/95 backdrop-blur-xl shadow-lg border-b border-white/5"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container-wide mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 py-2">
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/logo.png"
              alt="Gestão Kersten - Clínica Inteligente"
              className="h-10 md:h-14 w-auto object-contain"
              fetchPriority="high"
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Baixar E-book
            </motion.a>
          </div>

          <motion.button
            className="ml-auto md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.path
                    key="close"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.path
                    key="menu"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-24 bg-primary/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-2xl text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#formulario"
                  className="mt-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Baixar E-book Grátis
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
