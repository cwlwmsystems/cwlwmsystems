"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { sendGAEvent, sendPageView } from "@/lib/analytics";

function cleanText(value: string | null) {
  return (value || "").replace(/\s+/g, " ").trim().slice(0, 120);
}

export function GoogleAnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    sendPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#")) return;

      const linkText = cleanText(anchor.textContent);
      const sourcePage = window.location.pathname;

      if (rawHref.startsWith("mailto:")) {
        sendGAEvent("contact_email_click", {
          contact_method: "email",
          source_page: sourcePage,
        });
        return;
      }

      let url: URL;
      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      const isInternal = url.origin === window.location.origin;
      const destination = `${url.pathname}${url.search}`;

      if (isInternal && (url.pathname === "/book" || url.pathname === "/contact")) {
        sendGAEvent("lead_cta_click", {
          source_page: sourcePage,
          destination,
          link_text: linkText,
        });

        if (sourcePage.startsWith("/case-studies/")) {
          sendGAEvent("case_study_lead_click", {
            case_study: sourcePage.replace("/case-studies/", ""),
            destination,
            link_text: linkText,
          });
        }
      }

      if (isInternal && url.pathname === "/systems-review") {
        sendGAEvent("systems_review_interest", {
          source_page: sourcePage,
          link_text: linkText,
        });
      }

      if (isInternal && url.pathname === "/pricing") {
        sendGAEvent("pricing_interest_click", {
          source_page: sourcePage,
          link_text: linkText,
        });
      }

      if (!isInternal && url.hostname === "buy.stripe.com") {
        sendGAEvent("begin_checkout", {
          checkout_provider: "stripe",
          source_page: sourcePage,
          link_text: linkText,
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
