"use client"

import { motion } from "framer-motion"
import { Search, FileText, PenTool, Youtube, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "AI-powered search across 10,000+ videos to find the most relevant content based on views and hashtags",
  },
  {
    icon: FileText,
    title: "Video Summaries",
    description: "Intelligent AI agent watches and summarizes top videos to extract key insights",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Deep-dive analysis and custom content generation tailored to your audience",
  },
  {
    icon: Youtube,
    title: "Trend Analysis",
    description: "Identify emerging trends and topics in your niche",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor and analyze content performance metrics",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Deep understanding of your target audience preferences",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leverage our multi-agent AI system to revolutionize your YouTube research and content strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

