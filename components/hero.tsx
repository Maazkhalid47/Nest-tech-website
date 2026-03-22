import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wide uppercase">
            Software, Systems, and beyond
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground text-balance">
            Building systems that matter.
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A technology company focused on engineering, systems thinking, and product development. 
            We work at the intersection of software, hardware, and human-centered design.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              View Our Work
            </Link>
            <Link 
              href="#approach"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
            >
              Our Approach
            </Link>
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex items-center gap-3 text-muted-foreground">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm">Scroll to explore</span>
        </div>
      </div>

      {/* Thin divider */}
      <div className="border-t border-border" />
    </section>
  )
}
