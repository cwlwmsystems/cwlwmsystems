import Image from "next/image";

const nodes = [
  { label: "CRM", className: "node-crm" },
  { label: "Forms", className: "node-forms" },
  { label: "Operations", className: "node-ops" },
  { label: "Data", className: "node-data" },
  { label: "AI", className: "node-ai" },
  { label: "Reporting", className: "node-report" },
];

export function SystemMap() {
  return (
    <div className="system-map" aria-label="Diagram showing Cwlwm Systems connecting business tools and workflows">
      <svg viewBox="0 0 600 500" role="img" aria-hidden="true">
        <path d="M300 250 C210 175 165 116 99 88" />
        <path d="M300 250 C385 170 426 111 505 84" />
        <path d="M300 250 C178 252 127 259 68 292" />
        <path d="M300 250 C422 251 474 258 531 291" />
        <path d="M300 250 C219 335 191 390 139 429" />
        <path d="M300 250 C379 338 407 392 463 430" />
        <circle cx="300" cy="250" r="91" />
      </svg>
      <div className="system-knot" aria-hidden="true">
        <Image src="/cwlwm-knot.png" alt="" width={514} height={505} priority />
      </div>
      <div className="system-center">
        <span>Cwlwm</span>
        <strong>Connected<br />operating layer</strong>
      </div>
      {nodes.map((node) => <div key={node.label} className={`system-node ${node.className}`}>{node.label}</div>)}
    </div>
  );
}
