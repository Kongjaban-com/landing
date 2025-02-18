"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const blocks = [
  { letter: "O", color: "bg-green-400" },
  { letter: "N", color: "bg-pink-400" },
  { letter: "G", color: "bg-purple-400" },
  { letter: "J", color: "bg-yellow-400" },
  { letter: "A", color: "bg-blue-400" },
  { letter: "B", color: "bg-orange-400" },
  { letter: "A", color: "bg-indigo-400" },
  { letter: "N", color: "bg-red-400" },
]

export function AlphabetBlocks() {
  const [positions, setPositions] = useState<{ x: number; y: number; rotate: number }[]>([])

  useEffect(() => {
    const calculatePositions = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      return blocks.map(() => ({
        x: Math.random() * (windowWidth * 0.3) + windowWidth * 0.7, // 화면 오른쪽 30% 영역에 배치
        y: Math.random() * windowHeight,
        rotate: Math.random() * 30 - 15,
      }))
    }

    setPositions(calculatePositions())

    const handleResize = () => {
      setPositions(calculatePositions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {blocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, z: -100 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: positions[index]?.x,
            y: positions[index]?.y,
            rotateX: positions[index]?.rotate,
            rotateY: positions[index]?.rotate,
            z: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: index * 0.1,
          }}
          className={`absolute ${block.color} w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg flex items-center justify-center`}
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <span className="text-white text-xl md:text-2xl font-medium">{block.letter}</span>
        </motion.div>
      ))}
    </div>
  )
}

