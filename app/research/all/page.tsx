import Link from "next/link";
import BackLink from "@/components/BackLink";
import { articles } from "@/lib/data";

export default function AllArticlesPage() {
  return (
    <div className="page-wrap">
      <BackLink href="/#insights" />
      <p className="section-tag" style={{ marginBottom: 16 }}>
        Insights
      </p>
      <h1
        style={{
          fontSize: "clamp(32px,4vw,56px)",
          fontWeight: 300,
          letterSpacing: "-.025em",
          color: "var(--white)",
          marginBottom: 64,
        }}
      >
        All Articles
      </h1>
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
    </div>
  );
}
