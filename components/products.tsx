import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"

export function Products() {
  return (
    <section id="work" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-xl">
            Products & systems we&apos;ve built.
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-1">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <article className="border border-border rounded-sm p-6 md:p-8 hover:bg-secondary/50 transition-colors">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                  {/* Project Number & Category */}
                  <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="md:col-span-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Status */}
                  <div className="md:col-span-3 flex md:flex-col md:items-end gap-4 md:gap-3">
                    <span className="text-xs font-mono px-2 py-1 border border-border rounded-sm text-muted-foreground">
                      {project.status}
                    </span>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Thin divider */}
      <div className="mt-24 md:mt-32 border-t border-border" />
    </section>
  )
}
