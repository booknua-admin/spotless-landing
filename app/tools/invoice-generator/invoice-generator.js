'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import LogoUpload from '../../../components/logo-upload';
import EmailGate from '../../../components/email-gate';
import ToolCTA from '../../../components/tool-cta';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import PrintableDocument from '../../../components/printable-document';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

const PAYMENT_TERMS = [
  { value: 'due_on_receipt', label: 'Due on Receipt' },
  { value: 'net_7', label: 'Net 7 Days' },
  { value: 'net_14', label: 'Net 14 Days' },
  { value: 'net_30', label: 'Net 30 Days' },
  { value: 'net_60', label: 'Net 60 Days' },
];

function generateInvoiceNumber() {
  const d = new Date();
  return `INV-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function dueDateStr(terms) {
  const d = new Date();
  const days = terms === 'net_7' ? 7 : terms === 'net_14' ? 14 : terms === 'net_30' ? 30 : terms === 'net_60' ? 60 : 0;
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

const EMPTY_ITEM = { description: '', quantity: 1, unitPrice: 0 };

export default function InvoiceGenerator() {
  const [currency, setCurrency] = useState('USD');
  const [logo, setLogo] = useState(null);
  const [form, setForm] = useState({
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    companyEmail: '',
    clientName: '',
    clientAddress: '',
    clientEmail: '',
    invoiceNumber: generateInvoiceNumber(),
    invoiceDate: todayStr(),
    paymentTerms: 'net_14',
    dueDate: dueDateStr('net_14'),
    taxRate: 0,
    notes: '',
  });
  const [items, setItems] = useState([{ ...EMPTY_ITEM, description: 'Standard cleaning service' }]);

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'paymentTerms') {
        next.dueDate = dueDateStr(value);
      }
      return next;
    });
  }

  function handleItemChange(index, field, value) {
    setItems((prev) => prev.map((item, i) => i === index ? { ...item, [field]: field === 'description' ? value : Number(value) } : item));
  }

  function addItem() {
    setItems((prev) => [...prev, { ...EMPTY_ITEM }]);
  }

  function removeItem(index) {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const taxAmount = subtotal * (form.taxRate / 100);
  const total = subtotal + taxAmount;

  function saveDraft() {
    const draft = { form, items, logo, currency };
    localStorage.setItem('spotless_invoice_draft', JSON.stringify(draft));
  }

  function loadDraft() {
    const data = localStorage.getItem('spotless_invoice_draft');
    if (!data) return;
    try {
      const draft = JSON.parse(data);
      if (draft.form) setForm(draft.form);
      if (draft.items) setItems(draft.items);
      if (draft.logo) setLogo(draft.logo);
      if (draft.currency) setCurrency(draft.currency);
    } catch {}
  }

  const fc = (amount) => formatCurrency(amount, currency);

  return (
    <>
      <div className="doc-generator-layout">
        {/* Form Panel */}
        <div className="doc-generator-form">
          <div className="tool-form">
            <div className="tool-form-header">
              <h3>Invoice Details</h3>
              <div className="tool-form-actions">
                <button type="button" className="tool-btn-secondary" onClick={saveDraft}>Save Draft</button>
                <button type="button" className="tool-btn-secondary" onClick={loadDraft}>Load Draft</button>
              </div>
            </div>

            <CurrencySelector onChange={setCurrency} />

            <div className="tool-section-label">Your Company</div>
            <LogoUpload logo={logo} onLogoChange={setLogo} />
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Business Name</label>
                <input className="tool-input" value={form.companyName} onChange={(e) => handleChange('companyName', e.target.value)} placeholder="Your Company Name" />
              </div>
              <div className="tool-input-group">
                <label>Email</label>
                <input className="tool-input" type="email" value={form.companyEmail} onChange={(e) => handleChange('companyEmail', e.target.value)} placeholder="billing@company.com" />
              </div>
            </div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Address</label>
                <input className="tool-input" value={form.companyAddress} onChange={(e) => handleChange('companyAddress', e.target.value)} placeholder="123 Main St, City" />
              </div>
              <div className="tool-input-group">
                <label>Phone</label>
                <input className="tool-input" value={form.companyPhone} onChange={(e) => handleChange('companyPhone', e.target.value)} placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="tool-section-label">Client Details</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Client Name</label>
                <input className="tool-input" value={form.clientName} onChange={(e) => handleChange('clientName', e.target.value)} placeholder="Client Name" />
              </div>
              <div className="tool-input-group">
                <label>Client Email</label>
                <input className="tool-input" type="email" value={form.clientEmail} onChange={(e) => handleChange('clientEmail', e.target.value)} placeholder="client@email.com" />
              </div>
            </div>
            <div className="tool-input-group">
              <label>Client Address</label>
              <input className="tool-input" value={form.clientAddress} onChange={(e) => handleChange('clientAddress', e.target.value)} placeholder="456 Oak Ave, City" />
            </div>

            <div className="tool-section-label">Invoice Info</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Invoice Number</label>
                <input className="tool-input" value={form.invoiceNumber} onChange={(e) => handleChange('invoiceNumber', e.target.value)} />
              </div>
              <div className="tool-input-group">
                <label>Invoice Date</label>
                <input className="tool-input" type="date" value={form.invoiceDate} onChange={(e) => handleChange('invoiceDate', e.target.value)} />
              </div>
            </div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Payment Terms</label>
                <select className="tool-select" value={form.paymentTerms} onChange={(e) => handleChange('paymentTerms', e.target.value)}>
                  {PAYMENT_TERMS.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
              <div className="tool-input-group">
                <label>Due Date</label>
                <input className="tool-input" type="date" value={form.dueDate} onChange={(e) => handleChange('dueDate', e.target.value)} />
              </div>
            </div>

            <div className="tool-section-label">Line Items</div>
            <div className="line-items-table">
              <div className="line-items-header">
                <span className="line-item-desc">Description</span>
                <span className="line-item-qty">Qty</span>
                <span className="line-item-price">Price</span>
                <span className="line-item-total">Total</span>
                <span className="line-item-action"></span>
              </div>
              {items.map((item, i) => (
                <div className="line-item-row" key={i}>
                  <input className="tool-input line-item-desc" value={item.description} onChange={(e) => handleItemChange(i, 'description', e.target.value)} placeholder="Service description" />
                  <input className="tool-input line-item-qty" type="number" min="1" value={item.quantity} onChange={(e) => handleItemChange(i, 'quantity', e.target.value)} />
                  <input className="tool-input line-item-price" type="number" min="0" step="0.01" value={item.unitPrice} onChange={(e) => handleItemChange(i, 'unitPrice', e.target.value)} />
                  <span className="line-item-total">{fc(item.quantity * item.unitPrice)}</span>
                  <button type="button" className="line-item-remove" onClick={() => removeItem(i)} title="Remove">&times;</button>
                </div>
              ))}
              <button type="button" className="tool-btn-secondary line-item-add" onClick={addItem}>+ Add Line Item</button>
            </div>

            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Tax Rate (%)</label>
                <input className="tool-input" type="number" min="0" max="100" step="0.1" value={form.taxRate} onChange={(e) => handleChange('taxRate', Number(e.target.value))} />
              </div>
              <div className="tool-input-group">
                <label>Notes / Terms</label>
                <input className="tool-input" value={form.notes} onChange={(e) => handleChange('notes', e.target.value)} placeholder="Payment instructions, thank you message, etc." />
              </div>
            </div>

            <div className="invoice-totals">
              <div className="tool-result-row">
                <span className="tool-result-label">Subtotal</span>
                <span className="tool-result-value">{fc(subtotal)}</span>
              </div>
              {form.taxRate > 0 && (
                <div className="tool-result-row">
                  <span className="tool-result-label">Tax ({form.taxRate}%)</span>
                  <span className="tool-result-value">{fc(taxAmount)}</span>
                </div>
              )}
              <div className="tool-result-row">
                <span className="tool-result-label">Total</span>
                <span className="tool-result-value highlight">{fc(total)}</span>
              </div>
            </div>

            <EmailGate toolName="invoice-generator">
              <button className="tool-calculate-btn" onClick={triggerPrint}>
                Download PDF
              </button>
            </EmailGate>
          </div>
        </div>

        {/* Live Preview */}
        <div className="doc-generator-preview">
          <div className="doc-preview-label">Live Preview</div>
          <PrintableDocument>
            <div className="invoice-doc">
              <div className="invoice-doc-header">
                <div className="invoice-doc-brand">
                  {logo && <img src={logo} alt="Logo" className="invoice-doc-logo" width={120} height={60} />}
                  <div>
                    <div className="invoice-doc-company">{form.companyName || 'Your Company Name'}</div>
                    <div className="invoice-doc-meta-text">{form.companyAddress}</div>
                    <div className="invoice-doc-meta-text">{form.companyPhone}</div>
                    <div className="invoice-doc-meta-text">{form.companyEmail}</div>
                  </div>
                </div>
                <div className="invoice-doc-title">INVOICE</div>
              </div>

              <div className="invoice-doc-info">
                <div className="invoice-doc-client">
                  <div className="invoice-doc-label">Bill To</div>
                  <div className="invoice-doc-client-name">{form.clientName || 'Client Name'}</div>
                  <div className="invoice-doc-meta-text">{form.clientAddress}</div>
                  <div className="invoice-doc-meta-text">{form.clientEmail}</div>
                </div>
                <div className="invoice-doc-details">
                  <div><span className="invoice-doc-label">Invoice #:</span> {form.invoiceNumber}</div>
                  <div><span className="invoice-doc-label">Date:</span> {form.invoiceDate}</div>
                  <div><span className="invoice-doc-label">Due:</span> {form.dueDate}</div>
                  <div><span className="invoice-doc-label">Terms:</span> {PAYMENT_TERMS.find((t) => t.value === form.paymentTerms)?.label}</div>
                </div>
              </div>

              <table className="invoice-doc-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.description || '—'}</td>
                      <td>{item.quantity}</td>
                      <td>{fc(item.unitPrice)}</td>
                      <td>{fc(item.quantity * item.unitPrice)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="invoice-doc-totals">
                <div className="invoice-doc-total-row">
                  <span>Subtotal</span>
                  <span>{fc(subtotal)}</span>
                </div>
                {form.taxRate > 0 && (
                  <div className="invoice-doc-total-row">
                    <span>Tax ({form.taxRate}%)</span>
                    <span>{fc(taxAmount)}</span>
                  </div>
                )}
                <div className="invoice-doc-total-row invoice-doc-grand-total">
                  <span>Total Due</span>
                  <span>{fc(total)}</span>
                </div>
              </div>

              {form.notes && (
                <div className="invoice-doc-notes">
                  <div className="invoice-doc-label">Notes</div>
                  <div>{form.notes}</div>
                </div>
              )}
            </div>
          </PrintableDocument>
        </div>
      </div>

      <ToolCTA
        headline="Send invoices automatically with Spotless"
        description="Stop creating invoices manually. With Spotless, invoices are generated from your jobs and sent directly to clients with payment links."
        featureLink="/product/invoicing"
      />

      <StickyTrialBar />
    </>
  );
}
