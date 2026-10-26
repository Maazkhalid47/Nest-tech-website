import Reveal from "@/components/Reveal";
import { SERVICES } from "@/data/service";
import {
  Compass, PenTool, Earth, Smartphone, Server, Gauge, CreditCard, ChartNoAxesCombined, BriefcaseBusiness, Network, Rocket, Globe, Palette, Search,
} from "lucide-react";

const ICONS = {
  Compass, PenTool, Earth, Smartphone, Server, Gauge, CreditCard, ChartNoAxesCombined, BriefcaseBusiness, Network, Rocket, Globe, Palette, Search,
};

function Service() {
  return (
    <section id="service" className="px-12 py-30 bg-[#f5f9f6]">
      <Reveal delay={1}>
        <p className="mb-5 text-gray-600">
          Our Services
        </p>
      </Reveal>

      <Reveal delay={2}>
        <div className="flex">
          <p className="font-bold text-6xl w-180">Everything you need to <span className="text-4xl font-(--font-arima)">build, launch & scale.</span></p>

          <p className=" text-gray-600 w-80 ml-52 pt-10 text-sm">One partner from first idea to millions of users — strategy, design, engineering and growth.</p>
        </div>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-7 bg-[#f5f9f6] md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((f, i) => {
          const Icon = ICONS[f.icon as keyof typeof ICONS];

          return (
            <Reveal
              key={f.num}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative overflow-hidden border border-gray-300 rounded-4xl bg-white p-10 transition-colors duration-300"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-300 bg-gray-100 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <div className="font-mono text-xs tracking-widest text-gray-400">
                  {f.num}
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold tracking-tight text-black">
                {f.title}
              </h3>

              <p className="text-[15px] font-light leading-relaxed text-black">
                {f.desc}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Service;