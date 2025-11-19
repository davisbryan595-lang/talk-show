'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-1 hover:scale-105 transition-transform">
            <div className="text-2xl font-bold">
              <span className="text-primary">VOICES</span>
              <span className="text-secondary"> OF</span>
              <span className="text-primary"> MASS</span>
            </div>
            <span className="text-xs text-secondary font-bold">COM</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#latest" className="text-foreground hover:text-secondary transition-colors">Watch</a>
            <a href="#episodes" className="text-foreground hover:text-secondary transition-colors">Episodes</a>
            <a href="#form" className="text-foreground hover:text-secondary transition-colors">Be a Guest</a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-4">
            <a href="#latest" className="block text-foreground hover:text-secondary transition-colors py-2">Watch</a>
            <a href="#episodes" className="block text-foreground hover:text-secondary transition-colors py-2">Episodes</a>
            <a href="#form" className="block text-foreground hover:text-secondary transition-colors py-2">Be a Guest</a>
            <a href="#contact" className="block text-foreground hover:text-secondary transition-colors py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
