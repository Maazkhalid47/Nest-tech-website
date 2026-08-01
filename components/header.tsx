"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight text-foreground">
          Nest Technologies
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#philosophy" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Philosophy
          </Link>
          <Link 
            href="#work" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link 
            href="#research" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Research
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium text-accent-foreground bg-accent px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link 
              href="#philosophy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Philosophy
            </Link>
            <Link 
              href="#work" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="#research" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium text-accent-foreground bg-accent px-4 py-2 rounded-sm text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
