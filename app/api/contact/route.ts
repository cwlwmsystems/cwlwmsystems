import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function text(value: unknown, max = 4000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return map[character];
  });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (text(body.website2, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(body.name, 200);
  const email = text(body.email, 320);
  const company = text(body.company, 300);
  const phone = text(body.phone, 100);
  const interest = text(body.interest, 300);
  const problem = text(body.problem, 6000);
  const success = text(body.success, 4000);
  const tools = text(body.tools, 4000);
  const timeline = text(body.timeline, 200);
  const budget = text(body.budget, 200);
  const preferredTimes = text(body.preferredTimes, 500);

  if (!name || !company || !problem || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Phone", phone || "—"],
    ["Interest", interest || "General project inquiry"],
    ["Timeline", timeline || "—"],
    ["Budget", budget || "—"],
    ["Preferred call times", preferredTimes || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#17211c;line-height:1.55;max-width:700px">
      <h1 style="font-size:24px;margin-bottom:20px">New Cwlwm Systems inquiry</h1>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        ${rows.map(([label, value]) => `<tr><td style="padding:8px 12px 8px 0;color:#5d6d64;width:150px">${escapeHtml(label)}</td><td style="padding:8px 0"><strong>${escapeHtml(value)}</strong></td></tr>`).join("")}
      </table>
      <h2 style="font-size:17px">What is not working</h2>
      <p style="white-space:pre-wrap">${escapeHtml(problem)}</p>
      <h2 style="font-size:17px">What would success look like</h2>
      <p style="white-space:pre-wrap">${escapeHtml(success || "—")}</p>
      <h2 style="font-size:17px">Current tools / systems</h2>
      <p style="white-space:pre-wrap">${escapeHtml(tools || "—")}</p>
    </div>`;

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `${interest || "Project inquiry"} — ${company}`,
      html,
    }),
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
