import { notFound } from "next/navigation";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import CaseGallery from "@/components/CaseGallery";
import { techIcons, workItems } from "@/lib/data";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

const statusClass: Record<string, string> = {
  production: "status-production",
  beta: "status-beta",
  development: "status-development",
};

export default async function WorkCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();
  const currentIndex = workItems.findIndex((w) => w.slug === slug);
  const nextItem = workItems[(currentIndex + 1) % workItems.length];

  return (
    <div className="page-wrap">
      <BackLink href="/#work" />
      <div className="case-hero">
        <div className="case-meta" style={{ marginBottom: 20 }}>
          <span className="tag">{item.tags[0]}</span>
          <span className={`status-badge ${statusClass[item.status]}`}>
            {item.statusLabel}
          </span>
        </div>
        <h1>{item.name}</h1>
        <p className="case-tagline">{item.tagline}</p>
        <div className="case-meta">
          {item.tags.slice(1).map((tag) => (
            <span key={tag} className="tag">
              <span className="tech-icon">{techIcons[tag] || "•"}</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="case-hero-banner">
        <img src={item.gallery[0].src} alt={item.gallery[0].title} />
      </div>
      <section className="case-gallery-section">
        <h2>Key Features</h2>
        <CaseGallery gallery={item.gallery.slice(1)} />
      </section>
      <div className="case-body">
        <div className="case-content">
          <h2>Overview</h2>
          <p>{item.description}</p>
          <h2>The Problem</h2>
          <p>{item.problem}</p>
          <h2>{item.approachTitle}</h2>
          {item.approach.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h2>{item.outcomeTitle}</h2>
          <p>{item.outcome}</p>
        </div>
        <div className="case-sidebar">
          <div className="sidebar-block">
            <h4>Status</h4>
            <p>{item.statusLabel}</p>
          </div>
          <div className="sidebar-block">
            <h4>Stack</h4>
            <div className="sidebar-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  <span className="tech-icon">{techIcons[tag] || "•"}</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="sidebar-block">
            <h4>Category</h4>
            <p>{item.category}</p>
          </div>
        </div>
      </div>
      <Link className="case-next" href={`/work/${nextItem.slug}`}>
        <span className="case-next-label">Next Project</span>
        <span className="case-next-name">{nextItem.name} →</span>
      </Link>
    </div>
  );
}
