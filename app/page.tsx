import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Products } from "@/components/products"
import { Research } from "@/components/research"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Philosophy />
      <Products />
      <Research />
      <CallToAction />
      <Footer />
    </main>
  )
}
