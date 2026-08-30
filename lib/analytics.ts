export const GA_MEASUREMENT_ID = "G-7Y9QPDV3CF";

export type AnalyticsParams = Record<
  string,
  string | number | boolean | null | undefined | Record<string, unknown> | unknown[]
>;

type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, params?: AnalyticsParams) => void;
  }
}

export function sendGAEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function sendPageView(pathname: string) {
  if (typeof window === "undefined") return;

  sendGAEvent("page_view", {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}
