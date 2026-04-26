"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navShell ${open ? "menuOpen" : ""}`}>
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Stratex home" onClick={closeMenu}>
          <span className="brandMark">S</span>
          <span>Stratex</span>
        </Link>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="navLinks" data-open={open}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="navCta" href="/contact" onClick={closeMenu}>
          Start
        </Link>
      </nav>
    </header>
  );
}
