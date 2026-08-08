"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching" },
  { href: "/education", label: "Experience" },
  { href: "/grants-awards", label: "Awards" },
  { href: "/service", label: "Service" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Sajal Chakroborty, home">
          <span className="grid size-9 place-items-center rounded-full bg-signal text-xs font-black tracking-tight text-ink transition-transform group-hover:rotate-6">
            SC
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-paper sm:block">Sajal Chakroborty</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${active ? "text-paper" : "text-muted hover:text-paper"}`}
              >
                {link.label}
                {active && <span className="absolute inset-x-3 -bottom-[1.15rem] h-px bg-signal" />}
              </Link>
            );
          })}
        </div>

        <a
          href="mailto:schakroborty@wpi.edu"
          className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-signal hover:text-signal sm:flex"
        >
          Get in touch <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-full border border-line text-paper sm:ml-3 xl:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-ink px-5 py-7 sm:px-8 xl:hidden">
          <div className="mx-auto grid max-w-[90rem] gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between border-b border-line py-3 text-lg ${pathname === link.href ? "text-signal" : "text-paper"}`}
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
