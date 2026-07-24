"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Products } from "@/components/products"
import { Research } from "@/components/research"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { useScrollReveal } from "./scroll-animations"

export default function Home() {
  useScrollReveal()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <div data-reveal>
        <Philosophy />
      </div>
      <div data-reveal>
        <Products />
      </div>
      <div data-reveal>
        <Research />
      </div>
      <div data-reveal>
        <CallToAction />
      </div>
      <div data-reveal>
        <Footer />
      </div>
    </main>
  )
}
