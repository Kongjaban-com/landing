"use client"

import { motion } from "framer-motion"

const letters = "ONGJABAN".split("")
const colors = [
  "from-red-400 to-red-500",
  "from-blue-400 to-blue-500",
  "from-green-400 to-green-500",
  "from-yellow-400 to-yellow-500",
  "from-purple-400 to-purple-500",
  "from-pink-400 to-pink-500",
  "from-indigo-400 to-indigo-500",
  "from-orange-400 to-orange-500",
]

export function FloatingBlocks() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {letters.map((letter, index) => (
        <motion.div
          key={letter}
          className={`absolute bg-gradient-to-br ${colors[index % colors.length]} w-16 h-16 rounded-xl shadow-lg flex items-center justify-center`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 180 - 90,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            rotate: [null, Math.random() * 180 - 90],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            zIndex: 1,
          }}
        >
          <span className="text-white text-2xl font-bold">{letter}</span>
        </motion.div>
      ))}
    </div>
  )
}

