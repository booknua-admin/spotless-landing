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

const SIGNUP_BASE_URL = 'https://app.spotlessapp.io/register';

function buildSignupUrl(toolName, toolData = {}) {
  const params = new URLSearchParams({
    ref: 'tool',
    tool: toolName,
  });

  const email = getCapturedEmail();
  if (email) params.set('email', email);

  if (toolData && Object.keys(toolData).length > 0) {
    try {
      const json = JSON.stringify(toolData);
      // Keep URL under 2KB — skip data if too large
      if (json.length < 1500) {
        params.set('data', btoa(json));
      }
    } catch {
      // Skip data encoding on failure
    }
  }

  return `${SIGNUP_BASE_URL}?${params.toString()}`;
}

function submitGatewaySignup(email, businessName, toolName, toolData = {}) {
  if (typeof window === 'undefined') return;
  submitEmail(email, toolName, { businessName, gateway: true });

  sendToWebhook({
    type: 'gateway_signup',
    email,
    businessName,
    toolName,
    toolData,
    timestamp: new Date().toISOString(),
    pageUrl: window.location.href,
  });
}

function serializeToolData(toolName, form, results) {
  if (!form && !results) return {};
  const data = {};
  if (form) {
    // Keep only primitive values and short arrays from form state
    for (const [key, value] of Object.entries(form)) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        data[key] = value;
      } else if (Array.isArray(value) && value.length <= 10 && value.every((v) => typeof v === 'string')) {
        data[key] = value;
      }
    }
  }
  if (results) {
    data._results = {};
    for (const [key, value] of Object.entries(results)) {
      if (typeof value === 'string' || typeof value === 'number') {
        data._results[key] = value;
      }
    }
  }
  return data;
}

export {
  submitEmail,
  isEmailCaptured,
  getLeadData,
  getCapturedEmail,
  trackToolUsage,
  buildSignupUrl,
  submitGatewaySignup,
  serializeToolData,
};
