"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "#services", label: "サービス" },
    { href: "#about", label: "自己紹介" },
    { href: "#skills", label: "スキル" },
    { href: "#works", label: "制作実績" },
    { href: "#schedule", label: "稼働時間" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50 bg-base-primary/85 backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-[1.05rem] font-semibold text-txt-primary hover:text-accent transition-colors tracking-tight"
        >
          <span className="text-accent mr-0.5">&gt;_</span> Godai Mikami
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[0.88rem] font-medium text-txt-secondary hover:text-txt-primary transition-colors relative"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/lp"
            className="nav-link text-[0.88rem] font-medium text-txt-secondary hover:text-txt-primary transition-colors relative"
          >
            LP サンプル
          </Link>
          <a
            href="#contact"
            className="bg-accent text-base-primary px-[18px] py-1.5 rounded-md text-[0.88rem] font-semibold hover:bg-accent-light transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="メニューを開く"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-[22px] h-0.5 bg-txt-primary transition-all duration-300 origin-center"
            style={
              menuOpen
                ? { transform: "rotate(45deg) translate(5px, 5px)" }
                : {}
            }
          />
          <span
            className="block w-[22px] h-0.5 bg-txt-primary transition-all duration-300 origin-center"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-[22px] h-0.5 bg-txt-primary transition-all duration-300 origin-center"
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                : {}
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-base-primary/[0.97] backdrop-blur-xl flex flex-col p-8 gap-5 border-b border-line transition-transform duration-300 ease-out ${
          menuOpen ? "translate-y-0" : "-translate-y-[110%]"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="block text-[0.95rem] font-medium text-txt-secondary hover:text-txt-primary transition-colors py-1"
          >
            {l.label}
          </a>
        ))}
        <Link
          href="/lp"
          onClick={closeMenu}
          className="block text-[0.95rem] font-medium text-txt-secondary hover:text-txt-primary transition-colors py-1"
        >
          LP サンプル
        </Link>
        <a
          href="#contact"
          onClick={closeMenu}
          className="block bg-accent text-base-primary text-center px-[18px] py-2.5 rounded-md text-[0.95rem] font-semibold hover:bg-accent-light transition-colors mt-2"
        >
          お問い合わせ
        </a>
      </div>
    </nav>
  );
}
