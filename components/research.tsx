import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { articles, topics } from "@/lib/data"

export function Research() {
  return (
    <section id="research" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Section Header & Topics */}
          <div className="md:col-span-4">
            <p className="text-sm font-mono text-muted-foreground mb-3 tracking-wide uppercase">
              Research & Learning
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Thinking in public.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We share our learnings, research, and perspectives on building technology.
            </p>

            {/* Topics */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-4">Areas of Focus</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-3 py-1.5 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="md:col-span-8">
            <div className="grid gap-1">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/research/${article.slug}`}
                  className="group block"
                >
                  <article className="border border-border rounded-sm p-6 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>
                  </article>
                </Link>
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
