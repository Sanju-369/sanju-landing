"use client"

import { motion } from "framer-motion"
import { Search, FileText, PenTool } from "lucide-react"

export function AIAgentAnimation() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <div className="flex space-x-4">
            <Search className="w-12 h-12 text-red-500" />
            <FileText className="w-12 h-12 text-orange-500" />
            <PenTool className="w-12 h-12 text-yellow-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

