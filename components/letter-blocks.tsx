"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useState } from "react"

const blocks = [
  { letter: "O", color: "bg-[#E7B7A1]" },
  { letter: "N", color: "bg-[#C8B4A1]" },
  { letter: "G", color: "bg-[#A1B7B7]" },
  { letter: "J", color: "bg-[#B7A1A1]" },
  { letter: "A", color: "bg-[#A1B7A1]" },
  { letter: "B", color: "bg-[#B7B7A1]" },
  { letter: "A", color: "bg-[#A1A1B7]" },
  { letter: "N", color: "bg-[#B7A1B7]" },
]

function LetterBlock({
  block,
  position,
  index,
}: {
  block: (typeof blocks)[0]
  position: { x: number; y: number; rotate: number }
  index: number
}) {
  const controls = useAnimationControls()

  const handleHoverStart = () => {
    controls.start({
      scale: 1.1,
      rotateZ: position.rotate + (Math.random() > 0.5 ? 15 : -15),
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    })
  }

  const handleHoverEnd = () => {
    controls.start({
      scale: 1,
      rotateZ: position.rotate,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
        rotateZ: position.rotate,
      }}
      whileHover={{ cursor: "pointer" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      className={`absolute ${block.color} w-16 h-16 rounded-lg shadow-lg flex items-center justify-center pointer-events-auto`}
      style={{
        perspective: "1000px",
      }}
    >
      <span className="text-white text-2xl font-medium select-none">{block.letter}</span>
    </motion.div>
  )
}

export function LetterBlocks() {
  const [positions, setPositions] = useState<{ x: number; y: number; rotate: number }[]>([])

  useEffect(() => {
    const calculatePositions = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      return blocks.map(() => ({
        x: Math.random() * (windowWidth * 0.3) + windowWidth * 0.65,
        y: Math.random() * (windowHeight * 0.6) + windowHeight * 0.2,
        rotate: Math.random() * 20 - 10,
      }))
    }

    const handleResize = () => {
      setPositions(calculatePositions())
    }

    // Initial position calculation
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (positions.length === 0) {
    return null // Or a loading indicator
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {blocks.map((block, index) => (
        <LetterBlock key={index} block={block} position={positions[index]} index={index} />
      ))}
    </div>
  )
}

