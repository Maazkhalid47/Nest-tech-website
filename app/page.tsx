import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ResearchTags from "@/components/ResearchTags";
import { workItems, articles } from "@/lib/data";

const SERVICES = [
  {
    num: "01",
    title: "Product Strategy",
    desc: "Helping founders validate ideas, define product roadmaps, prioritize features, and transform concepts into products users genuinely need.",
  },
  {
    num: "02",
    title: "UI / UX Design",
    desc: "Designing clean, intuitive, and accessible user experiences that balance business goals with exceptional usability.",
  },
  {
    num: "03",
    title: "Web Application Development",
    desc: "Building modern, secure, and scalable web applications using industry-standard technologies and best engineering practices.",
  },
  {
    num: "04",
    title: "Mobile Application Development",
    desc: "Developing high-performance cross-platform mobile applications that deliver seamless experiences across iOS and Android.",
  },
  {
    num: "05",
    title: "Backend & Cloud Engineering",
    desc: "Designing secure APIs, authentication systems, cloud infrastructure, databases, and integrations that scale with growing businesses.",
  },
];

const TECH_STACK = [
  { category: "Frontend", items: ["Flutter", "FlutterFlow", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL"] },
  { category: "Cloud", items: ["Firebase", "Google Cloud"] },
  { category: "Payments", items: ["Stripe"] },
];

const APPROACH_ITEMS = [
  {
    num: "01",
    title: "Clear User Flows",
    desc: "Intuitive journeys that guide users naturally through every interaction and decision.",
  },
  {
    num: "02",
    title: "Clean Architecture",
    desc: "Code that's readable, testable, and maintainable by every engineer on the team.",
  },
  {
    num: "03",
    title: "Scalable Foundations",
    desc: "Infrastructure designed to grow with your needs — never a bottleneck, always a platform.",
  },
  {
    num: "04",
    title: "Consistent Design Systems",
    desc: "Unified visual language across all touchpoints, devices, and product surfaces.",
  },
];

const statusClass: Record<string, string> = {
  production: "status-production",
  beta: "status-beta",
  development: "status-development",
};

export default function Home() {
  return (
    <div id="mainSite">
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="grid-bg" />
        <p className="hero-eyebrow">Product Engineering Studio</p>
        <h1 className="hero-title">
          Building products with purpose,
          <br />
          <em>engineered to last.</em>
        </h1>
        <p className="hero-sub">
          Nest Technologies is a product engineering studio helping startups
          and businesses transform ambitious ideas into scalable digital
          products. We combine product strategy, thoughtful design, and
          modern engineering to build software that solves real business
          problems—not just ship features.
        </p>
        <div className="hero-actions">
          <Link href="#work" className="btn btn-primary">
            View Our Work
          </Link>
          <Link href="#approach" className="btn btn-ghost">
            Our Approach
          </Link>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy">
        <Reveal>
          <p className="section-tag">Our Philosophy</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            More than <span>code.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="hero-sub" style={{ maxWidth: "640px", marginBottom: "3rem" }}>
            We believe successful products are built on more than code. Every
            great digital product begins with understanding the people who
            use it, defining the right strategy, designing intuitive
            experiences, and engineering systems that can grow with the
            business. At Nest Technologies, we work closely with founders and
            organizations to build reliable, maintainable, and scalable
            software that creates long-term value.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="section-tag">Our Services</p>
        </Reveal>
        <Reveal delay={2}>
          <h2 className="section-title">
            What we <span>build.</span>
          </h2>
        </Reveal>
        <div className="focus-grid">
          {SERVICES.map((f, i) => (
            <Reveal key={f.num} delay={((i % 3) + 1) as 1 | 2 | 3} className="focus-card">
              <div className="focus-number">{f.num}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach">
        <div className="approach-header">
          <div>
            <Reveal>
              <p className="section-tag">Approach</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="section-title">
                Products are built as systems —
                <br />
                <span>not screens.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="approach-desc">
              Designed for clarity. Built for growth. Every decision we make
              is in service of the whole.
            </p>
          </Reveal>
        </div>
        <div className="approach-list">
          {APPROACH_ITEMS.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i === 0 ? undefined : (i as 1 | 2 | 3)}
              className="approach-item"
            >
              <span className="approach-num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <Reveal>
          <p className="section-tag">Work</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Products & systems
            <br />
            <span>we&apos;ve built.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="work-list">
            {workItems.map((item) => (
              <Link key={item.slug} className="work-item" href={`/work/${item.slug}`}>
                <span className="work-item-num">{item.num}</span>
                <div className="work-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="work-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="work-item-right">
                  <span className={`status-badge ${statusClass[item.status]}`}>
                    {item.statusLabel}
                  </span>
                  <span className="work-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* INSIGHTS */}
      <section id="insights">
        <Reveal>
          <p className="section-tag">Insights</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Thinking in <span>public.</span>
          </h2>
        </Reveal>
        <Reveal
          delay={2}
          style={{
            marginTop: 20,
            fontSize: 16,
            color: "var(--text2)",
            fontWeight: 300,
          }}
        >
          We share our learnings, research, and perspectives on building
          products.
        </Reveal>
        <Reveal delay={3}>
          <ResearchTags />
        </Reveal>
        <Reveal delay={2}>
          <div className="research-list">
            {articles.map((article) => (
              <Link key={article.slug} className="research-item" href={`/research/${article.slug}`}>
                <div>
                  <div className="research-meta">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.category}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
                <span className="research-arrow">↗</span>
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <Link className="research-view-all" href="/research/all">
            View all articles →
          </Link>
        </Reveal>
      </section>

      {/* TECH STACK */}
      <section id="stack">
        <Reveal>
          <p className="section-tag">Technology Stack</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Tools we <span>build with.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="focus-grid">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="focus-card">
                <h3>{group.category}</h3>
                <div className="work-tags" style={{ marginTop: 14 }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Reveal>
          <p className="section-tag">Let&apos;s Work Together</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Building something
            <br />
            <span>ambitious? We should talk.</span>
          </h2>
        </Reveal>
        <div className="contact-grid">
          <Reveal delay={2} className="contact-left">
            <p>
              We partner with founders and businesses who are building
              ambitious digital products. Whether you&apos;re validating a
              new idea, redesigning an experience, or scaling an existing
              platform — we&apos;re interested.
            </p>
            <div className="contact-actions">
              <Link href="#work" className="btn btn-ghost">
                View Case Studies
              </Link>
            </div>
            <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 28 }}>
              <div className="contact-detail">
                <label>Email</label>
                <a href="mailto:info@nesttechnologies.io">info@nesttechnologies.io</a>
              </div>
              <div className="contact-detail">
                <label>Location</label>
                <span>Karachi, Pakistan</span>
              </div>
              <div className="contact-detail">
                <label>Business Hours</label>
                <span>Monday–Friday, 9:00 AM – 6:00 PM PKT</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={3} className="contact-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
