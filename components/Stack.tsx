
import Reveal from "@/components/Reveal";
import { TECH_STACK } from "@/data/stack";

function Stack() {
  return (
    <section
      id="stack"
      className="px-12 py-30 max-[600px]:px-6 max-[600px]:py-20 bg-[#fdfdfd]"
    >
      {/* <Reveal>
        <p className="mb-5 text-gray-400">
          Technology Stack
        </p>
      </Reveal> */}

      <Reveal delay={1}>
        <h2 className="text-black text-4xl sm:text-6xl">
          Tools we <span className="font-semibold">build with.</span>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="relative overflow-hidden p-10 border border-gray-300 rounded bg-white transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <h3 className="mb-3 text-2xl font-semibold text-black">
                {group.category}
              </h3>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={typeof item === "string" ? item : item.name}
                    className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs text-gray-400"
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