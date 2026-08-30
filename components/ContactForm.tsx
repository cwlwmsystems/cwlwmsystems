"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "fallback" | "error";

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  problem: string;
  success: string;
  tools: string;
  timeline: string;
  budget: string;
  preferredTimes: string;
};

function createInitialValues(initialInterest = ""): FormValues {
  return {
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: initialInterest,
    problem: "",
    success: "",
    tools: "",
    timeline: "",
    budget: "",
    preferredTimes: "",
  };
}

export function ContactForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [status, setStatus] = useState<State>("idle");
  const [values, setValues] = useState<FormValues>(() => createInitialValues(initialInterest));
  const [honeypot, setHoneypot] = useState("");

  const fallbackHref = useMemo(() => {
    const subject = `${values.interest || "Project inquiry"}${values.company ? ` — ${values.company}` : ""}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company}`,
      `Phone: ${values.phone}`,
      `Interest: ${values.interest}`,
      `Timeline: ${values.timeline}`,
      `${values.interest === "Ongoing Systems Partnership / Retainer" ? "Monthly budget range" : "Budget range"}: ${values.budget}`,
      `Preferred call times: ${values.preferredTimes}`,
      "",
      "What is not working:",
      values.problem,
      "",
      "What would success look like:",
      values.success,
      "",
      "Current tools / systems:",
      values.tools,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [values]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website2: honeypot }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.ok) {
        setStatus("sent");
        setValues(createInitialValues(initialInterest));
        return;
      }
      if (data.code === "not_configured") {
        setStatus("fallback");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("fallback");
    }
  }

  function field<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  const requestingCall = values.interest === "20-minute project fit call";
  const requestingOngoing = values.interest === "Ongoing Systems Partnership / Retainer";

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid two">
        <label>
          <span>Name *</span>
          <input required value={values.name} onChange={(e) => field("name", e.target.value)} autoComplete="name" />
        </label>
        <label>
          <span>Work email *</span>
          <input required type="email" value={values.email} onChange={(e) => field("email", e.target.value)} autoComplete="email" />
        </label>
      </div>
      <div className="form-grid two">
        <label>
          <span>Company *</span>
          <input required value={values.company} onChange={(e) => field("company", e.target.value)} autoComplete="organization" />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" value={values.phone} onChange={(e) => field("phone", e.target.value)} autoComplete="tel" />
        </label>
      </div>
      <label>
        <span>How would you like to start?</span>
        <select value={values.interest} onChange={(e) => field("interest", e.target.value)}>
          <option value="">General project inquiry</option>
          <option value="20-minute project fit call">20-minute project fit call</option>
          <option value="Systems & Workflow Review">Systems &amp; Workflow Review — $750</option>
          <option value="Automation & Integration">Automation &amp; Integration</option>
          <option value="Custom Internal Tool">Custom Internal Tool</option>
          <option value="Operational Platform">Operational Platform</option>
          <option value="Ongoing Systems Partnership / Retainer">Ongoing Systems Partnership / Retainer</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <label>
        <span>What is not working today? *</span>
        <textarea required rows={7} value={values.problem} onChange={(e) => field("problem", e.target.value)} placeholder="Describe the manual process, disconnected tools, reporting problem, handoff, bottleneck, or system you wish worked differently." />
      </label>
      <label>
        <span>What would a better outcome look like?</span>
        <textarea rows={4} value={values.success} onChange={(e) => field("success", e.target.value)} placeholder="Less manual entry, faster turnaround, one reliable status, fewer errors, better reporting, more capacity, etc." />
      </label>
      <label>
        <span>What tools or systems are involved?</span>
        <textarea rows={4} value={values.tools} onChange={(e) => field("tools", e.target.value)} placeholder="CRM, spreadsheets, forms, database, website, cloud tools, internal software, etc." />
      </label>
      <div className="form-grid two">
        <label>
          <span>Ideal timeline</span>
          <select value={values.timeline} onChange={(e) => field("timeline", e.target.value)}>
            <option value="">Select one</option>
            <option>As soon as practical</option>
            <option>Within 1–2 months</option>
            <option>Within 3–6 months</option>
            <option>Exploring for later</option>
          </select>
        </label>
        <label>
          <span>{requestingOngoing ? "Estimated monthly budget" : "Estimated project budget"}</span>
          <select value={values.budget} onChange={(e) => field("budget", e.target.value)}>
            <option value="">Not sure yet</option>
            {requestingOngoing ? (
              <>
                <option>Under $750/month</option>
                <option>$750–$1,500/month</option>
                <option>$1,500–$2,500/month</option>
                <option>$2,500–$5,000/month</option>
                <option>$5,000+/month</option>
              </>
            ) : (
              <>
                <option>Under $2,500</option>
                <option>$2,500–$5,000</option>
                <option>$5,000–$15,000</option>
                <option>$15,000–$50,000</option>
                <option>$50,000+</option>
              </>
            )}
          </select>
        </label>
      </div>
      {requestingCall ? (
        <label>
          <span>Preferred call times</span>
          <input value={values.preferredTimes} onChange={(e) => field("preferredTimes", e.target.value)} placeholder="Example: Tuesday 10–12 ET or Wednesday after 2 ET" />
        </label>
      ) : null}
      <label className="honeypot" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </label>
      <div className="form-submit-row">
        <button className="button primary" type="submit" disabled={status === "sending" || status === "sent"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Inquiry sent" : requestingCall ? "Request fit call" : "Send project inquiry"}
        </button>
        <p>By submitting, you agree that Cwlwm Systems may use these details to respond to your inquiry. <a href="/privacy">Privacy Policy</a></p>
      </div>
      {status === "sent" ? <div className="form-message success">Thanks — your inquiry was sent. I will respond by email.</div> : null}
      {status === "fallback" ? (
        <div className="form-message warning">
          The website form is not connected to email yet. Your information is still here — <a href={fallbackHref}>open a pre-filled email instead</a>.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="form-message error">The form could not send. Please email <a href={fallbackHref}>{site.email}</a> directly.</div>
      ) : null}
    </form>
  );
}
