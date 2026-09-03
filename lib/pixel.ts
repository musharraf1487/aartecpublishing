// Meta Pixel helper. The base code lives in index.html and defines window.fbq.
// This wrapper is safe to call even if the pixel script was blocked or failed to load.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type MetaStandardEvent =
  | "Contact"
  | "Lead"
  | "Schedule"
  | "ViewContent"
  | "InitiateCheckout"
  | "CompleteRegistration";

export const trackEvent = (
  event: MetaStandardEvent,
  params?: Record<string, string | number>,
): void => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
};

export {};
