import Reveal from "@/components/Reveal";
import { workItems, techIcons } from "@/data/work";
import Link from "next/link";

const statusClass: Record<string, string> = {
    production:
        "border border-[rgba(0,200,100,0.2)] bg-[rgba(0,200,100,0.08)] text-[#00c864]",
    beta:
        "border border-[rgba(56,152,255,0.2)] bg-[rgba(56,152,255,0.08)] text-[#3898ff]",
    development:
        "border border-[rgba(255,180,0,0.2)] bg-[rgba(255,180,0,0.08)] text-[#ffb400]",
};

function Work() {
    return (
        <section
            id="work"
            className="bg-white px-12 py-30 max-[900px]:px-6 max-[900px]:py-20"
        >
            <Reveal>
                <p className="mb-10 font-semibold text-sm text-gray-400">
                    Work
                </p>
            </Reveal>

            <Reveal delay={1}>
                <h2 className="font-bold text-6xl">
                    Products &amp; systems
                    <br />
                    <span className="font-semibold text-5xl">
                        we&apos;ve built.
                    </span>
                </h2>
            </Reveal>

            <Reveal delay={2}>
                <div className="mt-18 flex flex-col gap-5 bg-white">
                    {workItems.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/work/${item.slug}`}
                            className="flex flex-row group relative items-center gap-10 border rounded-4xl px-12 py-10 duration-300 ease-in-out hover:scale-95 h-80 "
                        >
                            <div className="flex flex-row gap-x-5">
                                <p className="font-mono w-20 text-6xl pt-10 text-gray-400 group-hover:text-black">
                                    {item.num}
                                </p>

                                <div className="min-w-0 text-gray-600">
                                    <h3 className="mb-2 text-3xl font-bold text-black">
                                        {item.name}
                                        {/* <span
                                            className={`rounded-full px-3 py-1.25 font-mono text-xs uppercase tracking-[0.06em] ${statusClass[item.status] ??
                                                "border border-white/15 "
                                                }`}>
                                            {item.statusLabel}
                                        </span> */}
                                    </h3>

                                    <p className="max-w-130 text-[15px] font-light ">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1.5 border rounded-lg px-2.5 py-1 font-mono text-xs "
                                            >
                                                <span className="inline-flex items-center justify-center text-xs">
                                                    {techIcons[tag] || "•"}
                                                </span>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

export default Work;


// ↗