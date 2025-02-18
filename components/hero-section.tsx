"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrolled = window.scrollY
      containerRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-screen relative overflow-hidden flex items-center">
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Investing in
            <span className="text-red-600"> Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We build, grow, and transform companies that shape the future of technology, entertainment, and digital
            services.
          </p>
        </motion.div>
      </div>

      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>
    </div>
  )
}

