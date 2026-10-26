
import Reveal from "@/components/Reveal";
import { TECH_STACK } from "@/data/stack";

function Stack() {
  return (
    <section
      id="stack"
      className="px-12 py-30 max-[600px]:px-6 max-[600px]:py-20 bg-[#f5f9f6]"
    >
      <Reveal>
        <p className="mb-5 text-xs uppercase tracking-[0.18em] text-gray-400">
          Technology Stack
        </p>
      </Reveal>

      <Reveal delay={1}>
        <h2 className="font-bold text-7xl text-black">
          Tools we <span className="font-semibold text-5xl">build with.</span>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-20 grid grid-cols-3 gap-px bg-white max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="relative overflow-hidden p-10 border"
            >
              <h3 className="mb-3 text-lg font-semibold text-black">
                {group.category}
              </h3>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={typeof item === "string" ? item : item.name}
                    className="inline-flex items-center gap-1.5 rounded-[3px] border border-white/15 px-2.5 py-1 font-mono text-xs text-gray-400"
                  >
                    <span className="inline-flex items-center justify-center text-xs">
                      {typeof item === "string" ? "•" : item.icon}
                    </span>

                    {typeof item === "string" ? item : item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Stack;