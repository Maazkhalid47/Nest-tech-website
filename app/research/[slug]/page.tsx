import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { articles } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  
  if (!article) {
    return { title: "Article Not Found" }
  }
  
  return {
    title: `${article.title} — Nest Technologies Research`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  
  if (!article) {
    notFound()
  }
  
  const articleIndex = articles.findIndex((a) => a.slug === slug)
  const nextArticle = articles[(articleIndex + 1) % articles.length]

  // Parse markdown-like content into sections
  const parseContent = (content: string) => {
    const lines = content.split('\n')
    const sections: { type: 'heading' | 'subheading' | 'paragraph' | 'list'; content: string; items?: string[] }[] = []
    let currentList: string[] = []
    
    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        if (currentList.length > 0) {
          sections.push({ type: 'list', content: '', items: currentList })
          currentList = []
        }
        sections.push({ type: 'heading', content: line.replace('## ', '') })
      } else if (line.startsWith('### ')) {
        if (currentList.length > 0) {
          sections.push({ type: 'list', content: '', items: currentList })
          currentList = []
        }
        sections.push({ type: 'subheading', content: line.replace('### ', '') })
      } else if (line.startsWith('- ')) {
        currentList.push(line.replace('- ', ''))
      } else if (line.trim()) {
        if (currentList.length > 0) {
          sections.push({ type: 'list', content: '', items: currentList })
          currentList = []
        }
        sections.push({ type: 'paragraph', content: line })
      }
    })
    
    if (currentList.length > 0) {
      sections.push({ type: 'list', content: '', items: currentList })
    }
    
    return sections
  }

  const contentSections = parseContent(article.content)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
          
          {/* Header */}
          <header className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Topics */}
            <div className="flex flex-wrap gap-2 mt-8">
              {article.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-3 py-1.5 border border-border rounded-sm text-muted-foreground"
                >
                  {topic}
                </span>
              ))}
            </div>
          </header>
          
          {/* Divider */}
          <div className="border-t border-border mb-12 md:mb-16" />
          
          {/* Content */}
          <div className="space-y-6">
            {contentSections.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold text-foreground mt-12 mb-4 first:mt-0"
                    >
                      {section.content}
                    </h2>
                  )
                case 'subheading':
                  return (
                    <h3
                      key={index}
                      className="text-lg font-medium text-foreground mt-8 mb-3"
                    >
                      {section.content}
                    </h3>
                  )
                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="text-foreground/80 leading-relaxed text-lg"
                    >
                      {section.content}
                    </p>
                  )
                case 'list':
                  return (
                    <ul key={index} className="space-y-2 ml-4">
                      {section.items?.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-foreground/80 leading-relaxed flex gap-3"
                        >
                          <span className="text-muted-foreground mt-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-current" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>
        </div>
      </article>
      
      {/* Next Article */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
            Continue Reading
          </p>
          <Link
            href={`/research/${nextArticle.slug}`}
            className="group block"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                  {nextArticle.title}
                </h3>
                <p className="text-muted-foreground">{nextArticle.excerpt}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
