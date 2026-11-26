"use client";

import Image from "next/image";
import { useState } from "react";

const chapters = [
  { index: "01", title: "Experience", descriptor: "The interface", text: "Considered design that makes complex work feel simple." },
  { index: "02", title: "Intelligence", descriptor: "The data", text: "Structured information that moves with confidence." },
  { index: "03", title: "Connection", descriptor: "The integration", text: "People, platforms and processes working as one." },
] as const;

export function KnotExperience() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return (
    <div className="v4-knot-experience" data-knot-experience>
      <div className="v4-knot-orbit v4-knot-orbit-outer" aria-hidden="true" />
      <div className="v4-knot-orbit v4-knot-orbit-inner" aria-hidden="true" />
      <div className="v4-knot-crosshair v4-knot-crosshair-h" aria-hidden="true" />
      <div className="v4-knot-crosshair v4-knot-crosshair-v" aria-hidden="true" />
      <div className="v4-knot-image-wrap" data-depth="0.12">
        <Image src="/cwlwm-knot.png" width={514} height={505} alt="Cwlwm Systems interwoven knot symbol" className="v4-knot-symbol" priority />
      </div>
      <span className="v4-knot-coordinate v4-knot-coordinate-top" aria-hidden="true">CWLWM / ONE CONNECTED SYSTEM</span>
      <span className="v4-knot-coordinate v4-knot-coordinate-bottom" aria-hidden="true">DESIGN  ·  ENGINEERING  ·  OPERATIONS</span>
      <div className="v4-knot-control">
        <p>THREE DISCIPLINES. ONE THINKING.</p>
        <div className="v4-knot-buttons" role="group" aria-label="Explore the three disciplines">
          {chapters.map((item, i) => (
            <button type="button" key={item.index} className={i===active?"v4-knot-button is-active":"v4-knot-button"} aria-pressed={i===active} onClick={()=>setActive(i)}>
              <span>{item.index}</span> {item.descriptor}
            </button>
          ))}
        </div>
        <div className="v4-knot-description" aria-live="polite">
          <strong>{chapter.title}</strong>
          <span>{chapter.text}</span>
        </div>
      </div>
    </div>
  );
}
