import { notFound } from "next/navigation";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import CaseGallery from "@/components/CaseGallery";
import { techIcons, workItems } from "@/data/work";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

const statusClass: Record<string, string> = {
  production:
    "border border-[rgba(0,200,100,0.2)] bg-[rgba(0,200,100,0.08)] text-[#00c864]",
  beta:
    "border border-[rgba(56,152,255,0.2)] bg-[rgba(56,152,255,0.08)] text-[#3898ff]",
  development:
    "border border-[rgba(255,180,0,0.2)] bg-[rgba(255,180,0,0.08)] text-[#ffb400]",
};

const tagClass =
  "rounded-[3px] border border-white/15 px-2.5 py-1 font-mono text-xs text-gray-400";

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
    <div className="min-h-screen px-12 pt-36 pb-20 max-[600px]:px-5 max-[600px]:pt-24">
      <BackLink href="/#work" />

      <div className="mb-20">
        <div className="mb-5 flex flex-wrap items-center gap-6">
          <span className={tagClass}>{item.tags[0]}</span>

          <span
            className={`rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.06em] ${statusClass[item.status] ??
              "border border-white/15 text-gray-400"
              }`}
          >
            {item.statusLabel}
          </span>
        </div>

        <h1 className="mb-6 text-[clamp(32px,4vw,56px)] leading-[1.06] font-light tracking-[-0.03em] text-white">
          {item.name}
        </h1>

        <p className="mb-6 text-lg font-normal tracking-[-0.01em] text-emerald-400">
          {item.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {item.tags.slice(1).map((tag) => (
            <span key={tag} className={tagClass}>
              <span className="mr-1.5 inline-flex items-center justify-center">
                {techIcons[tag] || "•"}
              </span>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-16 flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 max-[600px]:p-4">
        <img
          className="max-h-120 w-full object-contain"
          src={item.gallery[0].src}
          alt={item.gallery[0].title}
        />
      </div>

      <section className="mb-20 w-full max-[560px]:mb-14">
        <h2 className="mb-4.5 text-lg font-semibold tracking-[-0.01em] text-white">
          Key Features
        </h2>

        <CaseGallery gallery={item.gallery.slice(1)} />
      </section>

      <div className="grid grid-cols-[2fr_1fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <div>
          <h2 className="mt-12 mb-4 text-lg font-semibold tracking-[-0.01em] text-white">
            Overview
          </h2>
          <p className="mb-6 text-[15px] leading-[1.75] font-light text-gray-400">
            {item.description}
          </p>

          <h2 className="mt-12 mb-4 text-lg font-semibold tracking-[-0.01em] text-white">
            The Problem
          </h2>
          <p className="mb-6 text-[15px] leading-[1.75] font-light text-gray-400">
            {item.problem}
          </p>

          <h2 className="mt-12 mb-4 text-lg font-semibold tracking-[-0.01em] text-white">
            {item.approachTitle}
          </h2>
          {item.approach.map((p, i) => (
            <p
              key={i}
              className="mb-6 text-[15px] leading-[1.75] font-light text-gray-400"
            >
              {p}
            </p>
          ))}

          <h2 className="mt-12 mb-4 text-lg font-semibold tracking-[-0.01em] text-white">
            {item.outcomeTitle}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.75] font-light text-gray-400">
            {item.outcome}
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.12em] text-gray-500 uppercase">
              Status
            </h4>
            <p className="text-[15px] text-gray-400">{item.statusLabel}</p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.12em] text-gray-500 uppercase">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className={tagClass}>
                  <span className="mr-1.5 inline-flex items-center justify-center">
                    {techIcons[tag] || "•"}
                  </span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.12em] text-gray-500 uppercase">
              Category
            </h4>
            <p className="text-[15px] text-gray-400">{item.category}</p>
          </div>
        </div>
      </div>

      <Link
        className="mt-16 flex items-center justify-between rounded-2xl border border-white/10 bg-[#141414] px-8 py-7 no-underline transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-emerald-400 max-[600px]:gap-4 max-[600px]:px-5"
        href={`/work/${nextItem.slug}`}
      >
        <span className="text-xs font-semibold tracking-[0.06em] text-gray-500 uppercase">
          Next Project
        </span>
        <span className="text-lg font-semibold text-emerald-400 max-[600px]:text-right max-[600px]:text-sm">
          {nextItem.name} →
        </span>
      </Link>
    </div>
  );
}