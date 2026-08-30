import { ImageResponse } from "next/og";

export const alt = "Cwlwm Systems — Connected systems. Clearer operations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#071b13", color: "#f8f3e9", padding: 72, fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 500, height: 500, border: "1px solid rgba(255,255,255,.12)", borderRadius: 250, right: -100, top: -180 }} />
      <div style={{ position: "absolute", width: 330, height: 330, border: "1px solid rgba(173,45,47,.5)", borderRadius: 165, right: 40, bottom: -190 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 3, textTransform: "uppercase", color: "#d6c9b6" }}>CWLWM SYSTEMS</div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 870 }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>Make your business systems work together.</div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#c7d3cb" }}>Custom operational software · Integrations · Automation · AI</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#72aa87" }}>Connected systems. Clearer operations.</div>
      </div>
    </div>,
    size,
  );
}
