"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("ebook")
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsVisible(rect.bottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 p-4 bg-primary/95 backdrop-blur-sm border-t border-accent/20 shadow-lg z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.a
            href="#formulario"
            className="block text-center w-full bg-transparent border-2 border-accent text-white hover:bg-accent hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            whileTap={{ scale: 0.98 }}
          >
            Baixar E-book Grátis
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
