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
    <div className="case-gallery-showcase">
      <div className="case-gallery-feature">
        <div className="case-gallery-feature-image">
          <img src={activeShot.src} alt={activeShot.title} />
          <div className="case-gallery-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous screenshot">
              <ChevronLeft size={18} />
            </button>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => move(1)} aria-label="Next screenshot">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="case-gallery-feature-copy">
          <span className="case-gallery-kicker">Selected view</span>
          <h3>{activeShot.title}</h3>
          <p>{activeShot.desc}</p>
        </div>
      </div>
      <div className="case-gallery-thumbnails" role="tablist" aria-label="Project screenshots">
        {gallery.map((shot, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`View ${shot.title}`}
            className={`case-gallery-thumb${index === activeIndex ? " is-active" : ""}`}
            key={shot.src}
            onClick={() => setActiveIndex(index)}
          >
            <img src={shot.src} alt="" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}