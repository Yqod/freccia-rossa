export const CONSENT_KEY = "freccia-rossa-consent";
export const CONSENT_EVENT = "freccia-rossa-consent-change";

export function getConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(CONSENT_KEY);
}

export function setConsent(value) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
