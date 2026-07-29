"use client";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      {/* grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#1e1e2e 1px, transparent 1px), linear-gradient(90deg, #1e1e2e 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(107,107,255,0.06) 0%, transparent 70%)",
        }}
      />

      <p className="relative mb-7 animate-[fadeUp_0.8s_0.2s_ease_forwards] text-[11px] uppercase tracking-[0.18em] text-[#5a5a78] opacity-0">
        Software, Systems, and beyond
      </p>

      <h1 className="relative max-w-[900px] animate-[fadeUp_0.9s_0.35s_ease_forwards] text-[48px] font-light leading-[1.04] tracking-[-0.03em] text-[var(--text)] opacity-0 sm:text-[64px] lg:text-[96px]">
        Building systems
        <br />
        that <em className="not-italic text-[var(--accent)]">matter.</em>
      </h1>

      <p className="relative mt-8 max-w-[520px] animate-[fadeUp_0.9s_0.5s_ease_forwards] text-[17px] font-light leading-[1.65] text-[#9090b0] opacity-0">
        A technology company focused on engineering, systems thinking, and
        product development. We work at the intersection of software,
        hardware, and human-centered design.
      </p>

      <div className="relative mt-12 flex animate-[fadeUp_0.9s_0.65s_ease_forwards] gap-4 opacity-0">
 <a
  href="#work"
  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-px px-6 py-3 text-sm font-medium tracking-[0.01em]"
>
  View Our Work
</a>


   <a
  href="#approach"
  className="inline-flex items-center gap-2 rounded-md border border-[#c8c8da] bg-transparent px-6 py-3 text-sm font-medium tracking-[0.01em] text-[#3f425c] transition-all hover:bg-[#08080f] hover:text-white hover:border-[#08080f] dark:border-[#383853] dark:text-[#b9b9d2] dark:hover:bg-white dark:hover:text-[#08080f] dark:hover:border-white"
>
  Our Approach
</a>


      </div>

      <div className="absolute bottom-10 left-6 flex animate-[fadeUp_0.8s_1s_ease_forwards] items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#5a5a78] opacity-0 md:left-12">
        <div className="h-px w-10 bg-[#5a5a78]" />
        <span className="h-1.5 w-1.5 animate-[blink_2s_infinite] rounded-full bg-[#5a5a78]" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}