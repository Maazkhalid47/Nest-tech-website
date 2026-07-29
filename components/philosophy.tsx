"use client"

import { useState } from "react"
import { X } from "lucide-react"

const areasOfFocus = [
  {
    number: "01",
    title: "Product Systems",
    shortDesc: "Products built as systems — not isolated features.",
    detail: "Products built as systems — not isolated features. Structured for clarity, consistency, and scale. We design holistic product ecosystems where every component serves a purpose and works in harmony with the whole.",
  },
  {
    number: "02",
    title: "Interface Design",
    shortDesc: "Clear, intuitive interfaces with strong hierarchy.",
    detail: "Clear, intuitive interfaces with strong hierarchy. Designed for usability and focus. We craft experiences that guide users naturally, reducing cognitive load while maximizing clarity and engagement.",
  },
  {
    number: "03",
    title: "Application Architecture",
    shortDesc: "Scalable structures built for performance.",
    detail: "Scalable structures built for performance and maintainability. Designed to grow without complexity. Our architectures are resilient, well-documented, and built to evolve with your business needs.",
  },
  {
    number: "04",
    title: "Marketplace Design",
    shortDesc: "Systems that connect users through efficient flows.",
    detail: "Systems that connect users through efficient, trust-driven flows. Built for clarity and interaction. We design marketplace experiences that balance the needs of all parties while driving engagement and conversion.",
  },
  {
    number: "05",
    title: "Mobile Platforms",
    shortDesc: "Native experiences optimized for mobile contexts.",
    detail: "Native experiences optimized for mobile contexts and constraints. We build mobile applications that feel natural, perform exceptionally, and leverage platform-specific capabilities to their fullest.",
  },
  {
    number: "06",
    title: "Rapid Prototyping",
    shortDesc: "From idea to working product in minimal time.",
    detail: "From idea to working product in minimal time. Built for fast iteration and validation. We help teams test assumptions quickly, learn from real user feedback, and refine their vision before committing to full development.",
  },
]

const approachItems = [
  {
    number: "01",
    title: "Clear User Flows",
    shortDesc: "Intuitive journeys that guide users naturally.",
    detail: "Every interaction is mapped and optimized. We design user flows that minimize friction, reduce confusion, and create seamless pathways from intent to action. Users always know where they are and where they can go.",
  },
  {
    number: "02",
    title: "Clean Architecture",
    shortDesc: "Code that's readable, testable, and maintainable.",
    detail: "We follow proven architectural patterns that separate concerns, reduce coupling, and enable independent development. Our codebases are organized for clarity, making onboarding easier and reducing technical debt.",
  },
  {
    number: "03",
    title: "Scalable Foundations",
    shortDesc: "Infrastructure designed to grow with your needs.",
    detail: "From database design to API structure, we build foundations that handle growth gracefully. Performance, reliability, and cost-efficiency are considered from day one, not bolted on later.",
  },
  {
    number: "04",
    title: "Consistent Design Systems",
    shortDesc: "Unified visual language across all touchpoints.",
    detail: "We create comprehensive design systems with reusable components, clear guidelines, and documented patterns. This ensures consistency, speeds up development, and maintains quality as teams and products scale.",
  },
]

function DetailModal({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean
  onClose: () => void
  item: { number: string; title: string; detail: string } | null
}) {
  if (!isOpen || !item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-card border border-border rounded-sm p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-sm font-mono text-muted-foreground block mb-3">
          {item.number}
        </span>
        <h3 className="text-xl font-semibold text-foreground mb-4">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
      </div>
    </div>
  )
}

export function Philosophy() {
  const [selectedFocus, setSelectedFocus] = useState<(typeof areasOfFocus)[0] | null>(null)
  const [selectedApproach, setSelectedApproach] = useState<(typeof approachItems)[0] | null>(null)

  return (
    <>
      {/* Areas of Focus Section */}
      <section id="focus" className="py-24 md:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Section Header */}
            <div className="md:col-span-4">
              <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                Areas of Focus
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                What we build.
              </h2>
            </div>

            {/* Focus Grid */}
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {areasOfFocus.map((item) => (
                  <button
                    key={item.number}
                    onClick={() => setSelectedFocus(item)}
                    className="group text-left p-6 border border-border rounded-sm hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-200"
                  >
                    <span className="text-sm font-mono text-muted-foreground block mb-2">
                      {item.number}
                    </span>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="mt-24 md:mt-32 border-t border-border" />
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 md:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Section Header */}
            <div className="md:col-span-4">
              <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
                Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
                Products are built as systems — not screens.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Designed for clarity. Built for growth.
              </p>
            </div>

            {/* Approach Grid */}
            <div className="md:col-span-8">
              <div className="grid gap-6">
                {approachItems.map((item) => (
                  <button
                    key={item.number}
                    onClick={() => setSelectedApproach(item)}
                    className="group text-left p-6 border border-border rounded-sm hover:border-foreground/30 hover:bg-secondary/50 transition-all duration-200"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-sm font-mono text-muted-foreground shrink-0">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.shortDesc}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div className="mt-24 md:mt-32 border-t border-border" />
      </section>

      {/* Modals */}
      <DetailModal
        isOpen={!!selectedFocus}
        onClose={() => setSelectedFocus(null)}
        item={selectedFocus}
      />
      <DetailModal
        isOpen={!!selectedApproach}
        onClose={() => setSelectedApproach(null)}
        item={selectedApproach}
      />
    </>
  )
}
