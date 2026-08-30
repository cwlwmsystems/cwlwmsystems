"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { sendGAEvent } from "@/lib/analytics";

const calendlyUrl =
  "https://calendly.com/cwlwmsystems/30min?background_color=f4f0e7&text_color=252825&primary_color=02592d";

export function CalendlyBooking() {
  const scheduledTracked = useRef(false);

  useEffect(() => {
    const handleCalendlyMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;

      const data = event.data as { event?: string } | null;
      if (data?.event === "calendly.event_scheduled") {
        if (!scheduledTracked.current) {
          scheduledTracked.current = true;
          sendGAEvent("generate_lead", {
            method: "Calendly",
            lead_type: "project_fit_call",
            source_page: window.location.pathname,
          });
          sendGAEvent("calendly_booking_completed", {
            booking_type: "30_minute_project_fit_call",
            source_page: window.location.pathname,
          });
        }

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
