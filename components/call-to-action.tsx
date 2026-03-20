import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
            Let&apos;s Work Together
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight text-balance">
            Building something ambitious? We should talk.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            We partner with teams who are solving hard problems. Whether you&apos;re 
            rethinking infrastructure, building developer tools, or bridging software 
            and hardware—we&apos;re interested.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:hello@studio.dev"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
            >
              View Case Studies
            </Link>
          </div>

          {/* Contact Details */}
          <div className="mt-16 grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Email</p>
              <a 
                href="mailto:hello@studio.dev" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@studio.dev
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Location</p>
              <p className="text-sm text-muted-foreground">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
