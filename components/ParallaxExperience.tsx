"use client";

import { useEffect } from "react";

/**
 * Progressive, reduced-motion-aware scroll depth.
 * Animates only transform on presentation layers; content remains visible without JS.
 */
export function ParallaxExperience() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-entrance]"));
    let frame = 0;
    let previousY = -1;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - previousY) < 0.5) return;
      previousY = scrollY;
      const h = window.innerHeight;
      for (const layer of layers) {
        const bounds = layer.parentElement?.getBoundingClientRect();
        if (!bounds || bounds.bottom < -180 || bounds.top > h + 180) continue;
        const depth = Math.max(-0.25, Math.min(0.25, Number(layer.dataset.depth) || 0));
        const relative = (bounds.top + bounds.height / 2 - h / 2) / h;
        const movement = Math.max(-90, Math.min(90, -relative * h * depth));
        layer.style.setProperty("--depth-y", movement.toFixed(1) + "px");
      }
      const progress = Math.min(1, scrollY / Math.max(1, h));
      document.documentElement.style.setProperty("--hero-scroll", progress.toFixed(3));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("entered");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );
    reveals.forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--hero-scroll");
    };
  }, []);

  return null;
}
