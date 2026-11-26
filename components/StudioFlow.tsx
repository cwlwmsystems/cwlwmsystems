"use client";

import { useState } from "react";

const stages = [
  { number: "01", title: "Understand", label: "Business requirement", detail: "Clarify the goal, current workflow, users and operational constraints.", highlight: "Discover" },
  { number: "02", title: "Structure", label: "Data & architecture", detail: "Define sources of truth, data relationships, integrations and permissions.", highlight: "Design" },
  { number: "03", title: "Connect", label: "Build & integrate", detail: "Create reliable application workflows with validation and clear handoffs.", highlight: "Develop" },
  { number: "04", title: "Validate", label: "Test & improve", detail: "Verify real scenarios, document exceptions and prepare for sustained use.", highlight: "Deliver" },
] as const;

export function StudioFlow() {
  const [active, setActive] = useState(1);
  const current = stages[active];

  return (
    <div className="studio-flow" aria-label="Explore the Cwlwm Systems delivery approach">
      <div className="studio-flow-topline"><span>THE SYSTEMS APPROACH</span><span>INTERACTIVE / 01—04</span></div>
      <div className="studio-flow-diagram">
        <svg className="studio-flow-lines" viewBox="0 0 520 370" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="studio-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#6fa88b"/><stop offset="1" stopColor="#c9ab7b"/>
            </linearGradient>
          </defs>
          <path d="M55 190 C110 190 115 92 192 92 S298 277 351 277 S436 182 472 182" fill="none" stroke="url(#studio-line)" strokeWidth="2.5" strokeLinecap="round" className="studio-flow-trace"/>
          <path d="M55 190 C120 190 139 280 195 280 S286 93 355 93 S444 182 472 182" fill="none" stroke="#9fb7aa" strokeWidth="1" strokeDasharray="3 9" opacity=".55"/>
          <circle cx="55" cy="190" r="6" fill="#c9ab7b"/>
          <circle cx="192" cy="92" r="7" fill="#d8e8d8"/>
          <circle cx="351" cy="277" r="7" fill="#d8e8d8"/>
          <circle cx="472" cy="182" r="6" fill="#c9ab7b"/>
          <circle cx={ [55,192,351,472][active] } cy={ [190,92,277,182][active] } r="18" fill="none" stroke="#d4bb88" strokeWidth="1.5" className="studio-flow-pulse" />
        </svg>
        <div className="studio-flow-center" aria-live="polite">
          <span>{current.highlight.toUpperCase()}</span>
          <strong>{current.title}</strong>
          <p>{current.detail}</p>
        </div>
        <span className="studio-orbit-label studio-orbit-top">DATA / PEOPLE / PROCESS</span>
        <span className="studio-orbit-label studio-orbit-bottom">ONE CONNECTED WORKFLOW</span>
      </div>
      <div className="studio-flow-steps" role="group" aria-label="Delivery stages">
        {stages.map((stage, index) => (
          <button
            key={stage.number}
            type="button"
            className={index === active ? "studio-flow-step is-active" : "studio-flow-step"}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span>{stage.number}</span>
            <strong>{stage.label}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
