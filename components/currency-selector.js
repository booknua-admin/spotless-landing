'use client';

import { useState, useEffect } from 'react';
import { CURRENCIES, getStoredCurrency, setStoredCurrency } from '../lib/currency';

export default function CurrencySelector({ onChange }) {
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(e) {
    const code = e.target.value;
    setCurrency(code);
    setStoredCurrency(code);
    if (onChange) onChange(code);
  }

  return (
    <div className="tool-currency-selector">
      <label>Currency</label>
      <select className="tool-select" value={currency} onChange={handleChange}>
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>{c.label}</option>
        ))}
      </select>
    </div>
  );
}
