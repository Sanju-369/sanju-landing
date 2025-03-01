"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Youtube, Instagram, Twitter, Facebook } from "lucide-react"
import emailjs from "emailjs-com"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        "service_aqlaas9", // Replace with your Service ID
        "template_xsdxfgt", // Replace with your Template ID
        form,
        "kEk78107cMmnM9Re5" // Replace with your User ID
      )
      alert("Message sent successfully!")
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send message. Try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us to learn more about how our AI agents can help your YouTube research. 
            If the contact form is not working, send an email directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-gray-400">Odisha, India 760010</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">rs5163287@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+91 9876543210</p> {/* Replace with your number */}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-6 mt-4">
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-8 h-8 text-red-500 hover:text-red-400" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8 text-pink-500 hover:text-pink-400" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-8 h-8 text-blue-500 hover:text-blue-400" />
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-8 h-8 text-blue-700 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="user_name" type="text" placeholder="Your Name" className="bg-white/5 border-white/10 text-white" required />
              <Input name="user_email" type="email" placeholder="Your Email" className="bg-white/5 border-white/10 text-white" required />
              <Textarea name="message" placeholder="Your Message" className="bg-white/5 border-white/10 text-white min-h-[150px]" required />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
