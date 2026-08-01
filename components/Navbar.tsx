"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.tsx";

const NAV_LINKS = [
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link href="/" className="nav-logo">
          Nest Technologies
        </Link>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          className="nav-mobile-toggle"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </nav>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
