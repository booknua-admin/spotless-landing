const STORAGE_KEY = 'spotless_lead';

function submitEmail(email, toolName, metadata = {}) {
  if (typeof window === 'undefined') return;
  const lead = {
    email,
    toolName,
    metadata,
    capturedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));

  // Future GHL integration: uncomment and set webhook URL
  // fetch('https://your-ghl-webhook-url.com', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(lead),
  // }).catch(() => {});
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

export { submitEmail, isEmailCaptured, getLeadData, getCapturedEmail };
