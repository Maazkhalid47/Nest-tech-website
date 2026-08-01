import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import { workItems } from "@/lib/data";

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
        <div className="case-meta">
          {item.tags.slice(1).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="case-body">
        <div className="case-content">
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
    </div>
  );
}
