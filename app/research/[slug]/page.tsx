import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import { articles } from "@/lib/data";

export function generateStaticParams() {
  return articles
    .filter((a) => a.slug !== "all")
    .map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="page-wrap">
      <BackLink href="/#insights" />
      <div className="article-hero">
        <div className="research-meta" style={{ marginBottom: 16 }}>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
          <span>·</span>
          <span>{article.category}</span>
        </div>
        <h1>{article.title}</h1>
      </div>
      <div className="article-content">
        {article.content.map((block, i) => {
          if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
          if (block.type === "quote")
            return <blockquote key={i}>{block.text}</blockquote>;
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </div>
  );
}
