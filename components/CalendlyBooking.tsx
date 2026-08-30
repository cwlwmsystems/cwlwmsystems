"use client";

import Script from "next/script";
import { useEffect } from "react";

const calendlyUrl =
  "https://calendly.com/cwlwmsystems/30min?background_color=f4f0e7&text_color=252825&primary_color=02592d";

export function CalendlyBooking() {
  useEffect(() => {
    const handleCalendlyMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;

      const data = event.data as { event?: string } | null;
      if (data?.event === "calendly.event_scheduled") {
        window.setTimeout(() => {
          window.location.assign("/booking-confirmed");
        }, 250);
      }
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  return (
    <>
      <div className="calendly-frame" aria-label="Schedule a project fit call with Cwlwm Systems">
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: 320, height: 760 }}
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
