"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link className={active ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
