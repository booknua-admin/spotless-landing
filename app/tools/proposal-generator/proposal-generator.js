'use client';

import { useState, useEffect } from 'react';
import CurrencySelector from '../../../components/currency-selector';
import LogoUpload from '../../../components/logo-upload';
import EmailGate from '../../../components/email-gate';
import ToolGateway from '../../../components/tool-gateway';
import { serializeToolData } from '../../../lib/lead-capture';
import StickyTrialBar from '../../../components/sticky-trial-bar';
import PrintableDocument from '../../../components/printable-document';
import { formatCurrency, getStoredCurrency } from '../../../lib/currency';
import { triggerPrint } from '../../../lib/pdf-export';

const FREQUENCY_OPTIONS = [
  { value: 'one_off', label: 'One-Off' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
];

const DEFAULT_TERMS =
  '1. This proposal is valid for 30 days from the date of issue.\n2. Services will begin within 5 business days of acceptance.\n3. Payment is due within 14 days of invoice date.\n4. Either party may terminate this agreement with 30 days written notice.\n5. Prices are subject to annual review.\n6. All work is covered by our public liability insurance.';

function generateProposalNumber() {
  const d = new Date();
  return `PRO-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function validUntilStr() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split('T')[0];
}

const EMPTY_SERVICE = { name: '', description: '', frequency: 'monthly', price: 0 };

function frequencyMultiplier(freq) {
  switch (freq) {
    case 'weekly': return 52;
    case 'fortnightly': return 26;
    case 'monthly': return 12;
    case 'one_off': return 1;
    default: return 12;
  }
}

function monthlyEquivalent(price, freq) {
  switch (freq) {
    case 'weekly': return price * 52 / 12;
    case 'fortnightly': return price * 26 / 12;
    case 'monthly': return price;
    case 'one_off': return 0;
    default: return price;
  }
}

export default function ProposalGenerator() {
  const [currency, setCurrency] = useState('USD');
  const [logo, setLogo] = useState(null);
  const [form, setForm] = useState({
    companyName: '',
    companyTagline: '',
    clientCompany: '',
    clientContact: '',
    clientAddress: '',
    proposalNumber: generateProposalNumber(),
    proposalDate: todayStr(),
    validUntil: validUntilStr(),
    introduction: '',
    terms: DEFAULT_TERMS,
  });
  const [services, setServices] = useState([{ ...EMPTY_SERVICE, name: 'Standard cleaning service' }]);

  useEffect(() => {
    setCurrency(getStoredCurrency());
  }, []);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleServiceChange(index, field, value) {
    setServices((prev) =>
      prev.map((svc, i) =>
        i === index ? { ...svc, [field]: field === 'price' ? Number(value) : value } : svc
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

  const monthlyTotal = services.reduce((sum, svc) => sum + monthlyEquivalent(svc.price, svc.frequency), 0);
  const annualTotal = services.reduce((sum, svc) => sum + svc.price * frequencyMultiplier(svc.frequency), 0);

  function saveDraft() {
    const draft = { form, services, logo, currency };
    localStorage.setItem('spotless_proposal_draft', JSON.stringify(draft));
  }

  function loadDraft() {
    const data = localStorage.getItem('spotless_proposal_draft');
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
              <h3>Proposal Details</h3>
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
                <label>Tagline</label>
                <input className="tool-input" value={form.companyTagline} onChange={(e) => handleChange('companyTagline', e.target.value)} placeholder="Professional cleaning you can trust" />
              </div>
            </div>

            <div className="tool-section-label">Client Details</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Company Name</label>
                <input className="tool-input" value={form.clientCompany} onChange={(e) => handleChange('clientCompany', e.target.value)} placeholder="Client Company Name" />
              </div>
              <div className="tool-input-group">
                <label>Contact Person</label>
                <input className="tool-input" value={form.clientContact} onChange={(e) => handleChange('clientContact', e.target.value)} placeholder="Contact Name" />
              </div>
            </div>
            <div className="tool-input-group">
              <label>Address</label>
              <input className="tool-input" value={form.clientAddress} onChange={(e) => handleChange('clientAddress', e.target.value)} placeholder="456 Oak Ave, City, State" />
            </div>

            <div className="tool-section-label">Proposal Info</div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Proposal Number</label>
                <input className="tool-input" value={form.proposalNumber} onChange={(e) => handleChange('proposalNumber', e.target.value)} />
              </div>
              <div className="tool-input-group">
                <label>Date</label>
                <input className="tool-input" type="date" value={form.proposalDate} onChange={(e) => handleChange('proposalDate', e.target.value)} />
              </div>
            </div>
            <div className="tool-input-row">
              <div className="tool-input-group">
                <label>Valid Until</label>
                <input className="tool-input" type="date" value={form.validUntil} onChange={(e) => handleChange('validUntil', e.target.value)} />
              </div>
              <div className="tool-input-group" />
            </div>

            <div className="tool-section-label">Introduction</div>
            <div className="tool-input-group">
              <label>Cover Letter / Introduction</label>
              <textarea className="tool-input" rows={4} value={form.introduction} onChange={(e) => handleChange('introduction', e.target.value)} placeholder="Thank you for the opportunity to submit this proposal. We are pleased to offer our professional cleaning services tailored to your needs..." />
            </div>

            <div className="tool-section-label">Scope of Services</div>
            <div className="line-items-table">
              <div className="line-items-header">
                <span className="line-item-desc">Service</span>
                <span className="line-item-qty">Frequency</span>
                <span className="line-item-price">Price</span>
                <span className="line-item-total">Annual</span>
                <span className="line-item-action"></span>
              </div>
              {services.map((svc, i) => (
                <div className="line-item-row" key={i}>
                  <div className="line-item-desc" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <input className="tool-input" value={svc.name} onChange={(e) => handleServiceChange(i, 'name', e.target.value)} placeholder="Service name" />
                    <input className="tool-input" value={svc.description} onChange={(e) => handleServiceChange(i, 'description', e.target.value)} placeholder="Brief description" style={{ fontSize: '0.85em' }} />
                  </div>
                  <select className="tool-select line-item-qty" value={svc.frequency} onChange={(e) => handleServiceChange(i, 'frequency', e.target.value)}>
                    {FREQUENCY_OPTIONS.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                  <input className="tool-input line-item-price" type="number" min="0" step="0.01" value={svc.price} onChange={(e) => handleServiceChange(i, 'price', e.target.value)} />
                  <span className="line-item-total">{fc(svc.price * frequencyMultiplier(svc.frequency))}</span>
                  <button type="button" className="line-item-remove" onClick={() => removeService(i)} title="Remove">&times;</button>
                </div>
              ))}
              <button type="button" className="tool-btn-secondary line-item-add" onClick={addService}>+ Add Service</button>
            </div>

            <div className="invoice-totals">
              <div className="tool-result-row">
                <span className="tool-result-label">Monthly Total</span>
                <span className="tool-result-value">{fc(monthlyTotal)}</span>
              </div>
              <div className="tool-result-row">
                <span className="tool-result-label">Annual Total</span>
                <span className="tool-result-value highlight">{fc(annualTotal)}</span>
              </div>
            </div>

            <div className="tool-section-label">Terms &amp; Conditions</div>
            <div className="tool-input-group">
              <textarea className="tool-input" rows={6} value={form.terms} onChange={(e) => handleChange('terms', e.target.value)} />
            </div>

            <EmailGate toolName="proposal-generator">
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
                    {form.companyTagline && (
                      <div className="invoice-doc-meta-text" style={{ fontStyle: 'italic' }}>{form.companyTagline}</div>
                    )}
                  </div>
                </div>
                <div className="invoice-doc-title">PROPOSAL</div>
              </div>

              <div className="invoice-doc-info">
                <div className="invoice-doc-client">
                  <div className="invoice-doc-label">Prepared For</div>
                  <div className="invoice-doc-client-name">{form.clientCompany || 'Client Company'}</div>
                  {form.clientContact && <div className="invoice-doc-meta-text">Attn: {form.clientContact}</div>}
                  <div className="invoice-doc-meta-text">{form.clientAddress}</div>
                </div>
                <div className="invoice-doc-details">
                  <div><span className="invoice-doc-label">Proposal #:</span> {form.proposalNumber}</div>
                  <div><span className="invoice-doc-label">Date:</span> {form.proposalDate}</div>
                  <div><span className="invoice-doc-label">Valid Until:</span> {form.validUntil}</div>
                </div>
              </div>

              {form.introduction && (
                <div className="invoice-doc-notes" style={{ marginBottom: '24px' }}>
                  <div className="invoice-doc-label">Introduction</div>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{form.introduction}</div>
                </div>
              )}

              <div className="invoice-doc-label" style={{ marginBottom: '8px' }}>Scope of Services</div>
              <table className="invoice-doc-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Frequency</th>
                    <th>Price</th>
                    <th>Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((svc, i) => (
                    <tr key={i}>
                      <td>
                        <div>{svc.name || '—'}</div>
                        {svc.description && <div style={{ fontSize: '0.85em', opacity: 0.7 }}>{svc.description}</div>}
                      </td>
                      <td>{FREQUENCY_OPTIONS.find((f) => f.value === svc.frequency)?.label}</td>
                      <td>{fc(svc.price)}</td>
                      <td>{fc(svc.price * frequencyMultiplier(svc.frequency))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="invoice-doc-totals">
                <div className="invoice-doc-total-row">
                  <span>Monthly Total</span>
                  <span>{fc(monthlyTotal)}</span>
                </div>
                <div className="invoice-doc-total-row invoice-doc-grand-total">
                  <span>Annual Total</span>
                  <span>{fc(annualTotal)}</span>
                </div>
              </div>

              {form.terms && (
                <div className="invoice-doc-notes">
                  <div className="invoice-doc-label">Terms &amp; Conditions</div>
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.85em' }}>{form.terms}</div>
                </div>
              )}
            </div>
          </PrintableDocument>
        </div>
      </div>

      <ToolGateway
        toolName="proposal-generator"
        headline="Send this proposal professionally with Spotless"
        description="Generate proposals from service templates and send them with digital acceptance built in."
        toolData={serializeToolData('proposal-generator', form, null)}
        featureLink="/product/custom-forms"
        valueProp={[
          'Create proposals from your saved service templates',
          'Clients accept and sign digitally',
          'Auto-convert accepted proposals to scheduled jobs',
        ]}
      />

      <StickyTrialBar />
    </>
  );
}
