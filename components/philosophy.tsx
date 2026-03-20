export function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Systems Thinking",
      description:
        "We approach every problem by understanding the full system. Components don't exist in isolation—they're part of larger ecosystems that must work together seamlessly.",
    },
    {
      number: "02",
      title: "Intentional Design",
      description:
        "Every decision is deliberate. From architecture to interface, we question assumptions and make choices that serve both immediate needs and long-term evolution.",
    },
    {
      number: "03",
      title: "Engineering Rigor",
      description:
        "We build things that last. Our work is grounded in solid engineering principles, thorough testing, and documentation that enables teams to maintain and extend systems confidently.",
    },
    {
      number: "04",
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly. We invest in research, experimentation, and knowledge sharing to stay at the edge of what's possible.",
    },
  ]

  return (
    <section id="philosophy" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Section Header */}
          <div className="md:col-span-4">
            <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
              Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              How we think about building.
            </h2>
          </div>

          {/* Principles Grid */}
          <div className="md:col-span-8">
            <div className="grid gap-12">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group grid sm:grid-cols-[auto,1fr] gap-4 sm:gap-8"
                >
                  <span className="text-sm font-mono text-muted-foreground">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div className="mt-24 md:mt-32 border-t border-border" />
    </section>
  )
}
