"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // ── Scroll progress bar ──
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? `${Math.min((window.scrollY / h) * 100, 100)}%` : "0%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Reveal on scroll ──
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // ── Smooth anchor scroll ──
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 64, behavior: "smooth" });
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", handleClick)
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return <div id="scroll-progress" className="fixed top-0 left-0 h-0.5 bg-accent z-[200]" style={{ width: 0 }} />;
}
