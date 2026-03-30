const CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'USD ($)' },
  { code: 'EUR', symbol: '€', label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', label: 'GBP (£)' },
  { code: 'AUD', symbol: 'A$', label: 'AUD (A$)' },
  { code: 'CAD', symbol: 'C$', label: 'CAD (C$)' },
];

const STORAGE_KEY = 'spotless_currency';

function getStoredCurrency() {
  if (typeof window === 'undefined') return 'EUR';
  return localStorage.getItem(STORAGE_KEY) || 'EUR';
}

function setStoredCurrency(code) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, code);
  }
}

function getCurrencySymbol(code) {
  const currency = CURRENCIES.find((c) => c.code === code);
  return currency ? currency.symbol : '€';
}

function formatCurrency(amount, code) {
  const symbol = getCurrencySymbol(code || getStoredCurrency());
  const num = Number(amount);
  if (isNaN(num)) return `${symbol}0`;
  return `${symbol}${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

export { CURRENCIES, getStoredCurrency, setStoredCurrency, getCurrencySymbol, formatCurrency };
