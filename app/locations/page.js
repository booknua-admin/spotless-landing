import { getLocationsByCountry, getCountryName } from '../../lib/locations';
import { SITE_URL } from '../../lib/seo';
import JsonLd from '../../components/json-ld';
import { breadcrumbSchema } from '../../lib/schema';

export const metadata = {
  title: 'Cleaning Business Software by Location | Spotless',
  description:
    'Find cleaning business software for your city. Spotless serves cleaning companies across Ireland and the United Kingdom with local support, pricing, and features.',
  openGraph: {
    title: 'Cleaning Business Software by Location | Spotless',
    description:
      'Find cleaning business software for your city. Spotless serves cleaning companies across Ireland and the United Kingdom.',
    url: `${SITE_URL}/locations`,
    siteName: 'Spotless',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
};

export default function LocationsIndex() {
  const irelandCities = getLocationsByCountry('ireland');
  const ukCities = getLocationsByCountry('uk');

  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}/locations` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section style={{ textAlign: 'center', padding: '80px 24px 40px' }}>
        <div className="container">
          <h1>Cleaning Business Software by Location</h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '16px auto 0', color: 'var(--text-secondary)' }}>
            Spotless helps cleaning companies across Ireland and the United Kingdom manage their
            business. Find your city below.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 24px 80px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ marginBottom: '24px' }}>Ireland</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', marginBottom: '48px' }}>
            {irelandCities.map((city) => (
              <a
                key={city.slug}
                href={`/locations/ireland/${city.slug}`}
                style={{
                  padding: '16px',
                  border: '1px solid var(--border, #e5e7eb)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s',
                }}
              >
                <strong>{city.city}</strong>
                <br />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {city.region}
                </span>
              </a>
            ))}
          </div>

          <h2 style={{ marginBottom: '24px' }}>United Kingdom</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {ukCities.map((city) => (
              <a
                key={city.slug}
                href={`/locations/uk/${city.slug}`}
                style={{
                  padding: '16px',
                  border: '1px solid var(--border, #e5e7eb)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s',
                }}
              >
                <strong>{city.city}</strong>
                <br />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {city.region}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
