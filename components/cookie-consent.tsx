"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg border p-4 z-50"
        >
          <p className="text-sm text-gray-600 mb-4">
            This site uses cookies from Kongjaban to deliver services and analyze traffic.
          </p>
          <Button onClick={() => setIsVisible(false)} className="bg-red-600 hover:bg-red-700 text-white">
            OK, Got it
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

