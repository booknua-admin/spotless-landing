const STORAGE_KEY = 'spotless_lead';

const WEBHOOK_URL =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_LEAD_WEBHOOK_URL) ||
  'https://your-webhook-endpoint.example.com/leads';

function sendToWebhook(payload) {
  try {
    const json = JSON.stringify(payload);

    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([json], { type: 'application/json' });
      const sent = navigator.sendBeacon(WEBHOOK_URL, blob);
      if (sent) return;
    }

    // Fallback to fetch (fire-and-forget)
    if (typeof fetch !== 'undefined') {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Never let webhook failures affect the user experience
  }
}

function submitEmail(email, toolName, metadata = {}) {
  if (typeof window === 'undefined') return;
  const lead = {
    email,
    toolName,
    metadata,
    capturedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));

  sendToWebhook({
    email,
    source: 'spotless-tools',
    toolName,
    metadata,
    capturedAt: lead.capturedAt,
    pageUrl: window.location.href,
  });
}

function isEmailCaptured() {
  if (typeof window === 'undefined') return false;
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return false;
  try {
    const lead = JSON.parse(data);
    return Boolean(lead.email);
  } catch {
    return false;
  }
}

function getLeadData() {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

function getCapturedEmail() {
  const lead = getLeadData();
  return lead ? lead.email : '';
}

function trackToolUsage(toolName, action, data = {}) {
  if (typeof window === 'undefined') return;
  sendToWebhook({
    type: 'tool_event',
    toolName,
    action,
    data,
    timestamp: new Date().toISOString(),
  });
}

export { submitEmail, isEmailCaptured, getLeadData, getCapturedEmail, trackToolUsage };
