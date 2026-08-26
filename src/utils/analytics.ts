declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackPageView(path: string): void {
  sendEvent('page_view', { page_path: path });
}

export function trackLeadSubmit(formName: string, extra: Record<string, unknown> = {}): void {
  sendEvent('generate_lead', { form_name: formName, ...extra });
}

export function trackBookNowClick(source: string): void {
  sendEvent('book_now_click', { source });
}

export function trackPhoneClick(source: string): void {
  sendEvent('phone_click', { source });
}

export function trackQuoteRequest(source: string): void {
  sendEvent('quote_request', { source });
}
