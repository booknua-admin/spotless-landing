import { notFound } from 'next/navigation';
import { getAllLocationParams, getLocation, getCountryName, getCurrencyForCountry } from '../../../../lib/locations';
import { SITE_URL } from '../../../../lib/seo';
import JsonLd from '../../../../components/json-ld';
import { breadcrumbSchema, softwareApplicationSchema } from '../../../../lib/schema';

export function generateStaticParams() {
  return getAllLocationParams();
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const location = getLocation(params.country, params.city);
  if (!location) return {};

  const countryName = getCountryName(params.country);
  const title = `Cleaning Business Software in ${location.city}, ${countryName} | Spotless`;
  const description = `The #1 cleaning business software for companies in ${location.city}. Scheduling, invoicing, staff management, and online booking — built for ${countryName} cleaning businesses. Start free.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/locations/${params.country}/${params.city}`,
      siteName: 'Spotless',
      type: 'website',
    },
    alternates: {
      canonical: `${SITE_URL}/locations/${params.country}/${params.city}`,
    },
  };
}

const FEATURES = [
  {
    icon: '📅',
    title: 'Drag-and-Drop Scheduling',
    description: 'Manage your cleaning schedule with an intuitive calendar. Recurring jobs, one-off cleans, and team assignments — all in one view.',
  },
  {
    icon: '💳',
    title: 'Invoicing & Payments',
    description: 'Send professional invoices and collect card payments automatically. No more chasing late payments.',
  },
  {
    icon: '👥',
    title: 'Staff Management',
    description: 'Assign jobs, track availability, manage shifts, and give your team their own portal to view schedules.',
  },
  {
    icon: '📝',
    title: 'Online Booking Forms',
    description: 'Embed booking forms on your website. Capture leads and convert enquiries into jobs automatically.',
  },
  {
    icon: '⭐',
    title: 'Reviews & Referrals',
    description: 'Automatically request Google reviews after every job. Run referral programs that turn happy clients into new business.',
  },
  {
    icon: '⚡',
    title: 'Automations',
    description: 'Automate reminders, follow-ups, invoicing, and more. Build workflows that run your business on autopilot.',
  },
];

export default function LocationPage({ params }) {
  const location = getLocation(params.country, params.city);
  if (!location) notFound();

  const countryName = getCountryName(params.country);
  const currency = getCurrencyForCountry(params.country);
  const currencySymbol = currency === 'GBP' ? '£' : '€';

  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
    { name: countryName, url: `${SITE_URL}/locations/${params.country}` },
    { name: location.city, url: `${SITE_URL}/locations/${params.country}/${params.city}` },
  ];

  const faqs = [
    {
      question: `What is the best cleaning business software in ${location.city}?`,
      answer: `Spotless is the top-rated cleaning business software for companies in ${location.city}, ${countryName}. It includes scheduling, invoicing, staff management, online booking, and automated review collection — all in one platform. Start free with no credit card required.`,
    },
    {
      question: `How much does cleaning software cost in ${countryName}?`,
      answer: `Spotless offers a free plan for solo cleaners, with paid plans starting from ${currencySymbol}29/month. All plans include core features like scheduling, invoicing, and client management. No contracts or hidden fees.`,
    },
    {
      question: `Can I manage my cleaning team in ${location.city} with Spotless?`,
      answer: `Yes. Spotless includes full staff management — assign jobs, track availability, manage shifts, and give your team access to their own portal. Perfect for cleaning companies in ${location.city} with growing teams.`,
    },
    {
      question: `Does Spotless work for cleaning companies across ${countryName}?`,
      answer: `Absolutely. Spotless is used by cleaning companies across ${countryName}. Whether you're based in ${location.city} or serve clients nationwide, Spotless handles multi-location scheduling, ${currency} invoicing, and local tax compliance.`,
    },
    {
      question: `How do I get started with Spotless in ${location.city}?`,
      answer: `Sign up for a free Spotless account — no credit card needed. You can start scheduling jobs, sending invoices, and booking clients in ${location.city} within minutes.`,
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <section className="niche-hero" style={{ textAlign: 'center', padding: '80px 24px 60px' }}>
        <div className="container">
          <p className="section-tag" style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '12px' }}>
            Cleaning Software in {location.city}
          </p>
          <h1>
            The #1 Cleaning Business Software in {location.city}, {countryName}
          </h1>
          <p className="niche-subtitle" style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '20px auto 0', color: 'var(--text-secondary)' }}>
            Join cleaning companies across {location.city} who use Spotless to schedule jobs,
            collect payments, manage staff, and grow their business — all from one platform.
            {location.population > 200000
              ? ` With over ${Math.round(location.population / 1000)}k people in the ${location.city} area, there's never been a better time to streamline your cleaning operations.`
              : ` Serving the ${location.city} area and surrounding ${location.region} region.`}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="https://app.spotlessapp.io/register" className="btn btn-primary">
              Start Free Trial
            </a>
            <a href="/pricing" className="btn btn-outline">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: 'var(--bg-secondary, #f8f9fa)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>
            Everything Your {location.city} Cleaning Business Needs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {FEATURES.map((feature) => (
              <div key={feature.title} style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border, #e5e7eb)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>
            Why Cleaning Companies in {location.city} Choose Spotless
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.05rem' }}>
            Whether you run a solo operation or manage a team of 50+ cleaners in {location.city},
            Spotless scales with your business.
          </p>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              `Purpose-built for cleaning companies in ${countryName} — not a generic tool`,
              `${currency} pricing and invoicing with local tax support`,
              'Free plan to get started — no credit card required',
              'Supports residential, commercial, and 10+ other service types',
              'Online booking forms you can embed on your website',
              'Automated Google review collection after every job',
              'Built-in referral programs to grow through word of mouth',
              `Used by cleaning companies across ${location.city} and ${countryName}`,
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 24px', background: 'var(--bg-secondary, #f8f9fa)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>{faq.question}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Grow Your {location.city} Cleaning Business?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 32px' }}>
            Join cleaning companies across {countryName} using Spotless. Start your free trial today — no credit card required.
          </p>
          <a href="https://app.spotlessapp.io/register" className="btn btn-primary">
            Start Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
