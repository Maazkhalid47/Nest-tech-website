import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }
  
  return {
    title: `${project.title} — Studio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    notFound()
  }
  
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
          
          {/* Header */}
          <header className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-muted-foreground">{project.category}</span>
              <span className="text-sm font-mono px-2 py-0.5 border border-border rounded-sm text-muted-foreground">
                {project.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 border border-border rounded-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Year */}
            <div className="mt-8 pt-8 border-t border-border">
              <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
            </div>
          </header>
          
          {/* Content */}
          <div className="space-y-16 md:space-y-20">
            {/* Overview */}
            <section>
              <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                Overview
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            
            {/* Challenges */}
            <section>
              <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-sm font-mono text-muted-foreground mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/80 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Approach */}
            <section>
              <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                Approach
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {project.approach.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            
            {/* Outcomes */}
            <section>
              <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                Outcomes
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {project.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="p-6 border border-border rounded-sm"
                  >
                    <p className="text-foreground font-medium">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      
      {/* Next Project */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
            Next Project
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {nextProject.title}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
