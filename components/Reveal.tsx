"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  delay,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal${delayClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
