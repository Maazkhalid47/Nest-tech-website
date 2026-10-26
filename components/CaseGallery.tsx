"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryShot = { src: string; title: string; desc: string };

export default function CaseGallery({ gallery }: { gallery: GalleryShot[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeShot = gallery[activeIndex];

  const move = (direction: 1 | -1) => {
    setActiveIndex((activeIndex + direction + gallery.length) % gallery.length);
  };

  return (
    <div className="mb-0 w-full">
      <div className="grid grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)] overflow-hidden rounded-2xl border border-white/10 bg-[#141414] max-[900px]:grid-cols-1">
        <div className="relative flex min-h-[clamp(420px,48vw,620px)] items-center justify-center bg-[#1b1b1b] p-8 max-[560px]:min-h-[340px] max-[560px]:p-4">
          <img
            key={activeShot.src}
            className="h-full w-full max-h-[620px] animate-[caseImageIn_0.35s_ease] object-contain"
            src={activeShot.src}
            alt={activeShot.title}
          />

          <div className="absolute right-6 bottom-6 flex items-center gap-2.5 rounded-full border border-white/15 bg-black/80 p-[7px] font-mono text-[11px] text-gray-400 backdrop-blur-[10px] max-[560px]:right-3 max-[560px]:bottom-3">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous screenshot"
              className="grid size-[30px] cursor-pointer place-items-center rounded-full border-0 bg-white/10 text-white transition-colors duration-200 hover:bg-emerald-400 hover:text-black"
            >
              <ChevronLeft size={18} />
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next screenshot"
              className="grid size-[30px] cursor-pointer place-items-center rounded-full border-0 bg-white/10 text-white transition-colors duration-200 hover:bg-emerald-400 hover:text-black"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-end border-l border-white/10 p-[52px_42px] max-[900px]:border-t max-[900px]:border-l-0 max-[560px]:p-[24px_20px_28px]">
          <span className="mb-[18px] font-mono text-[11px] tracking-[0.12em] text-emerald-400 uppercase">
            Selected view
          </span>

          <h3 className="mb-3.5 text-[clamp(24px,2.4vw,34px)] leading-[1.2] font-normal text-white max-[560px]:text-xl">
            {activeShot.title}
          </h3>

          <p className="m-0 max-w-[30ch] text-sm leading-[1.75] text-gray-400">
            {activeShot.desc}
          </p>
        </div>
      </div>

      <div className="mt-3.5 grid grid-cols-[repeat(auto-fit,minmax(78px,1fr))] gap-2.5 max-[560px]:grid-cols-[repeat(auto-fit,minmax(60px,1fr))] max-[560px]:gap-[7px]">
        {gallery.map((shot, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`View ${shot.title}`}
            className={`relative h-[92px] cursor-pointer overflow-hidden rounded-lg border p-1.5 transition-[border-color,transform] duration-200 max-[560px]:h-[72px] ${
              index === activeIndex
                ? "border-emerald-400 shadow-[0_0_0_1px_#34d399]"
                : "border-white/10 hover:-translate-y-0.5 hover:border-gray-500"
            } bg-[#141414]`}
            key={shot.src}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className="h-full w-full object-contain"
              src={shot.src}
              alt=""
            />

            <span className="absolute bottom-[7px] left-[9px] font-mono text-[10px] text-gray-400 [text-shadow:0_1px_4px_#0a0a0a]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
