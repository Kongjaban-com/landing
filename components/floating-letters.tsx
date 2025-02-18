"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const letters = "ONGJABAN".split("")

export function FloatingLetters() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {letters.map((letter, index) => (
        <motion.div
          key={letter}
          className="absolute text-4xl font-light text-gray-200"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
            delay: index * 2,
          }}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  )
}

