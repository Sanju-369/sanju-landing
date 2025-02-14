"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Search, Sparkles } from "lucide-react"
import { FloatingVideo } from "@/components/floating-video"
import { AIAgentAnimation } from "@/components/ai-agent-animation"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating video thumbnails background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingVideo count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
               Transform Your Research 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
                {" "}
                Less Then Time For a Cofee Break 
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Harness the power of multi-agent AI to search, summarize, and create content from top YouTube videos in your
            niche.
          </motion.p>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <a href="https://php-subscription-app.onrender.com" target="_blank" rel="noopener noreferrer">
    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
      <Search className="mr-2 h-5 w-5" />
      Start Researching
    </Button>
  </a>

  <a href="https://php-subscription-app.onrender.com" target="_blank" rel="noopener noreferrer">
    <Button size="lg" variant="outline" className="text-white border-red-500 hover:bg-red-500/20">
      <Sparkles className="mr-2 h-5 w-5" />
      See How It Works
    </Button>
  </a>
</motion.div>

        </div>
      </div>

      {/* Animated AI agents */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <AIAgentAnimation />
      </div>
    </div>
  )
}

