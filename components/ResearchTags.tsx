"use client";

import { useState } from "react";

const TAGS = [
  "All",
  "Distributed Systems",
  "Systems Architecture",
  "Developer Tools",
];

export default function ResearchTags() {
  const [active, setActive] = useState("All");
  return (
    <div className="research-tags-row">
      {TAGS.map((tag) => (
        <span
          key={tag}
          className={`rtag${active === tag ? " active" : ""}`}
          onClick={() => setActive(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
