"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Green%20Modern%20Initial%20Logo%20(1)-bRrlCnco7SkLrjWiZM45BS8eN8hZdW.png"
          alt="Tube Trend Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="/privacy">Privacy</NavLink>
        <NavLink href="/terms">Terms</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-[#DCC6AF] transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all group-hover:w-full" />
    </Link>
  )
}

