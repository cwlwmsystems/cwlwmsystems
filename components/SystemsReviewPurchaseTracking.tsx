"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@/lib/analytics";

export function SystemsReviewPurchaseTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    sendGAEvent("systems_review_confirmation_view", {
      source_page: window.location.pathname,
      has_checkout_session: Boolean(sessionId),
    });

    if (!sessionId) return;

    const storageKey = `cwlwm_systems_review_purchase_${sessionId}`;

    try {
      if (window.localStorage.getItem(storageKey)) return;
    } catch {
      // Continue if localStorage is unavailable.
    }

    sendGAEvent("purchase", {
      transaction_id: sessionId,
      currency: "USD",
      value: 750,
      items: [
        {
          item_id: "systems_workflow_review",
          item_name: "Systems & Workflow Review",
          item_category: "Professional Services",
          price: 750,
          quantity: 1,
        },
      ],
    });

    sendGAEvent("systems_review_purchase_confirmed", {
      transaction_id: sessionId,
      currency: "USD",
      value: 750,
    });

    try {
      window.localStorage.setItem(storageKey, "1");
    } catch {
      // Ignore storage failures after the event is sent.
    }
  }, []);

  return null;
}
