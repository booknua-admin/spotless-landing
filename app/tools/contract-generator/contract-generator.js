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

const FREQUENCY_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'biweekly', label: 'Biweekly' },
  { value: 'monthly', label: 'Monthly' },
];

const DEFAULT_CLAUSES = `TERMINATION: Either party may terminate this agreement with 30 days written notice. In the event of termination, payment is due for all services rendered up to the termination date.

LIABILITY: The Service Provider maintains public liability insurance. Liability for any single incident shall not exceed the monthly service fee. The Service Provider is not liable for pre-existing damage or conditions not reported prior to service commencement.

INSURANCE: The Service Provider maintains current public liability insurance and workers' compensation coverage for all staff performing services under this agreement.

CONFIDENTIALITY: Both parties agree to keep confidential any proprietary information disclosed during the term of this agreement.

DISPUTE RESOLUTION: Any disputes arising from this agreement shall first be addressed through good faith negotiation. If unresolved within 30 days, disputes may be referred to mediation.

AMENDMENTS: This agreement may only be amended in writing with the consent of both parties.`;

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function defaultEndDate() {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split('T')[0];
}

const EMPTY_SERVICE = { description: '', frequency: 'weekly', included: true };

export default function ContractGenerator() {
  const [currency, setCurrency] = useState('USD');
  const [logo, setLogo] = useState(null);
  const [form, setForm] = useState({
    providerName: '',
    providerAddress: '',
    providerPhone: '',
    providerEmail: '',
    clientName: '',
    clientAddress: '',
    clientContact: '',
    startDate: todayStr(),
    endDate: defaultEndDate(),
    autoRenewal: false,
    monthlyFee: 0,
    paymentTerms: 'net_14',
    lateFeePercent: 5,
    clauses: DEFAULT_CLAUSES,
    providerSignName: '',
    providerSignDate: todayStr(),
    clientSignName: '',
    clientSignDate: todayStr(),
  });
  const [services, setServices] = useState([{ ...EMPTY_SERVICE, description: 'General cleaning service' }]);

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleServiceChange(index, field, value) {
    setServices((prev) =>
      prev.map((svc, i) =>
        i === index
          ? { ...svc, [field]: field === 'included' ? value : value }
          : svc
      )
    );
  }

  function addService() {
    setServices((prev) => [...prev, { ...EMPTY_SERVICE }]);
  }

  function removeService(index) {
    if (services.length <= 1) return;
    setServices((prev) => prev.filter((_, i) => i !== index));
  }

  function saveDraft() {
    const draft = { form, services, logo, currency };
    localStorage.setItem('spotless_contract_draft', JSON.stringify(draft));
  }

  function loadDraft() {
    const data = localStorage.getItem('spotless_contract_draft');
    if (!data) return;
    try {
      const draft = JSON.parse(data);
      if (draft.form) setForm(draft.form);
      if (draft.services) setServices(draft.services);
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
              <h3>Contract Details</h3>
              <div className="tool-form-actions">
                <button type="button" className="tool-btn-secondary" onClick={saveDraft}>Save Draft</button>
                <button type="button" className="tool-btn-secondary" onClick={loadDraft}>Load Draft</button>
              </div>
            </div>

            <CurrencySelector onChange={setCurrency} />

            <div className="tool-section-label">Service Provider</div>
            <LogoUpload logo={logo} onLogoChange={setLogo} />
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Business Name</label>
                <input className="tool-input" value={form.providerName} onChange={(e) => handleChange('providerName', e.target.value)} placeholder="Your Company Name" />
              </div>
              <div className="tool-input-group">
                <label>Email</label>
                <input className="tool-input" type="email" value={form.providerEmail} onChange={(e) => handleChange('providerEmail', e.target.value)} placeholder="info@company.com" />
              </div>
            </div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Address</label>
                <input className="tool-input" value={form.providerAddress} onChange={(e) => handleChange('providerAddress', e.target.value)} placeholder="123 Main St, City" />
              </div>
              <div className="tool-input-group">
                <label>Phone</label>
                <input className="tool-input" value={form.providerPhone} onChange={(e) => handleChange('providerPhone', e.target.value)} placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="tool-section-label">Client Details</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Client Name</label>
                <input className="tool-input" value={form.clientName} onChange={(e) => handleChange('clientName', e.target.value)} placeholder="Client or Business Name" />
              </div>
              <div className="tool-input-group">
                <label>Contact Person</label>
                <input className="tool-input" value={form.clientContact} onChange={(e) => handleChange('clientContact', e.target.value)} placeholder="Contact Person Name" />
              </div>
            </div>
            <div className="tool-input-group">
              <label>Client Address</label>
              <input className="tool-input" value={form.clientAddress} onChange={(e) => handleChange('clientAddress', e.target.value)} placeholder="456 Oak Ave, City" />
            </div>

            <div className="tool-section-label">Contract Period</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Start Date</label>
                <input className="tool-input" type="date" value={form.startDate} onChange={(e) => handleChange('startDate', e.target.value)} />
              </div>
              <div className="tool-input-group">
                <label>End Date</label>
                <input className="tool-input" type="date" value={form.endDate} onChange={(e) => handleChange('endDate', e.target.value)} />
              </div>
            </div>
            <div className="tool-input-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" checked={form.autoRenewal} onChange={(e) => handleChange('autoRenewal', e.target.checked)} />
                Auto-renewal at end of term
              </label>
            </div>

            <div className="tool-section-label">Scope of Services</div>
            <div className="line-items-table">
              <div className="line-items-header">
                <span className="line-item-desc">Service Description</span>
                <span className="line-item-qty">Frequency</span>
                <span className="line-item-price">Included</span>
                <span className="line-item-action"></span>
              </div>
              {services.map((svc, i) => (
                <div className="line-item-row" key={i}>
                  <input className="tool-input line-item-desc" value={svc.description} onChange={(e) => handleServiceChange(i, 'description', e.target.value)} placeholder="Service description" />
                  <select className="tool-select line-item-qty" value={svc.frequency} onChange={(e) => handleServiceChange(i, 'frequency', e.target.value)}>
                    {FREQUENCY_OPTIONS.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                  <span className="line-item-price" style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="checkbox" checked={svc.included} onChange={(e) => handleServiceChange(i, 'included', e.target.checked)} />
                  </span>
                  <button type="button" className="line-item-remove" onClick={() => removeService(i)} title="Remove">&times;</button>
                </div>
              ))}
              <button type="button" className="tool-btn-secondary line-item-add" onClick={addService}>+ Add Service</button>
            </div>

            <div className="tool-section-label">Pricing</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Monthly Fee</label>
                <input className="tool-input" type="number" min="0" step="0.01" value={form.monthlyFee} onChange={(e) => handleChange('monthlyFee', Number(e.target.value))} placeholder="0.00" />
              </div>
              <div className="tool-input-group">
                <label>Payment Terms</label>
                <select className="tool-select" value={form.paymentTerms} onChange={(e) => handleChange('paymentTerms', e.target.value)}>
                  {PAYMENT_TERMS.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="tool-input-group">
              <label>Late Payment Fee (%)</label>
              <input className="tool-input" type="number" min="0" max="100" step="0.5" value={form.lateFeePercent} onChange={(e) => handleChange('lateFeePercent', Number(e.target.value))} />
            </div>

            <div className="tool-section-label">Contract Clauses</div>
            <div className="tool-input-group">
              <textarea className="tool-input" rows={12} value={form.clauses} onChange={(e) => handleChange('clauses', e.target.value)} style={{ fontFamily: 'inherit', lineHeight: '1.6' }} />
            </div>

            <div className="tool-section-label">Signatures</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Provider Name</label>
                <input className="tool-input" value={form.providerSignName} onChange={(e) => handleChange('providerSignName', e.target.value)} placeholder="Provider signatory name" />
              </div>
              <div className="tool-input-group">
                <label>Date</label>
                <input className="tool-input" type="date" value={form.providerSignDate} onChange={(e) => handleChange('providerSignDate', e.target.value)} />
              </div>
            </div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Client Name</label>
                <input className="tool-input" value={form.clientSignName} onChange={(e) => handleChange('clientSignName', e.target.value)} placeholder="Client signatory name" />
              </div>
              <div className="tool-input-group">
                <label>Date</label>
                <input className="tool-input" type="date" value={form.clientSignDate} onChange={(e) => handleChange('clientSignDate', e.target.value)} />
              </div>
            </div>

            <EmailGate toolName="contract-generator">
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
                    <div className="invoice-doc-company">{form.providerName || 'Your Company Name'}</div>
                    <div className="invoice-doc-meta-text">{form.providerAddress}</div>
                    <div className="invoice-doc-meta-text">{form.providerPhone}</div>
                    <div className="invoice-doc-meta-text">{form.providerEmail}</div>
                  </div>
                </div>
                <div className="invoice-doc-title">SERVICE CONTRACT</div>
              </div>

              <div className="invoice-doc-info">
                <div className="invoice-doc-client">
                  <div className="invoice-doc-label">Client</div>
                  <div className="invoice-doc-client-name">{form.clientName || 'Client Name'}</div>
                  <div className="invoice-doc-meta-text">{form.clientAddress}</div>
                  {form.clientContact && <div className="invoice-doc-meta-text">Attn: {form.clientContact}</div>}
                </div>
                <div className="invoice-doc-details">
                  <div><span className="invoice-doc-label">Start:</span> {form.startDate}</div>
                  <div><span className="invoice-doc-label">End:</span> {form.endDate}</div>
                  <div><span className="invoice-doc-label">Auto-Renewal:</span> {form.autoRenewal ? 'Yes' : 'No'}</div>
                  <div><span className="invoice-doc-label">Terms:</span> {PAYMENT_TERMS.find((t) => t.value === form.paymentTerms)?.label}</div>
                </div>
              </div>

              <div className="invoice-doc-label" style={{ marginTop: '24px', marginBottom: '8px' }}>Scope of Services</div>
              <table className="invoice-doc-table">
                <thead>
                  <tr>
                    <th>Service Description</th>
                    <th>Frequency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((svc, i) => (
                    <tr key={i}>
                      <td>{svc.description || '\u2014'}</td>
                      <td>{FREQUENCY_OPTIONS.find((f) => f.value === svc.frequency)?.label}</td>
                      <td>{svc.included ? 'Included' : 'Not Included'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="invoice-doc-totals">
                <div className="invoice-doc-total-row">
                  <span>Monthly Fee</span>
                  <span>{fc(form.monthlyFee)}</span>
                </div>
                <div className="invoice-doc-total-row">
                  <span>Late Payment Fee</span>
                  <span>{form.lateFeePercent}%</span>
                </div>
                <div className="invoice-doc-total-row invoice-doc-grand-total">
                  <span>Annual Value</span>
                  <span>{fc(form.monthlyFee * 12)}</span>
                </div>
              </div>

              {form.clauses && (
                <div className="invoice-doc-notes" style={{ marginTop: '24px' }}>
                  <div className="invoice-doc-label">Terms &amp; Conditions</div>
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: '11px', lineHeight: '1.6' }}>{form.clauses}</div>
                </div>
              )}

              <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
                <div style={{ flex: 1 }}>
                  <div className="invoice-doc-label">Service Provider</div>
                  <div style={{ borderBottom: '1px solid #ccc', minHeight: '32px', marginTop: '24px', marginBottom: '4px' }}></div>
                  <div className="invoice-doc-meta-text">{form.providerSignName || 'Name'}</div>
                  <div className="invoice-doc-meta-text">{form.providerSignDate}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="invoice-doc-label">Client</div>
                  <div style={{ borderBottom: '1px solid #ccc', minHeight: '32px', marginTop: '24px', marginBottom: '4px' }}></div>
                  <div className="invoice-doc-meta-text">{form.clientSignName || 'Name'}</div>
                  <div className="invoice-doc-meta-text">{form.clientSignDate}</div>
                </div>
              </div>
            </div>
          </PrintableDocument>
        </div>
      </div>

      <ToolCTA
        headline="Manage all your contracts in one place with Spotless"
        description="Stop juggling contract templates. With Spotless, contracts are tied to your clients and jobs — auto-generated, tracked, and stored in one place."
        featureLink="/product/contracts"
      />

      <StickyTrialBar />
    </>
  );
}
