import locationData from '../data/locations.json';

export function getAllLocations() {
  const locations = [];
  for (const [country, cities] of Object.entries(locationData)) {
    for (const city of cities) {
      locations.push({ ...city, country });
    }
  }
  return locations;
}

export function getLocation(country, citySlug) {
  const cities = locationData[country];
  if (!cities) return null;
  return cities.find((c) => c.slug === citySlug) || null;
}

export function getLocationsByCountry(country) {
  return locationData[country] || [];
}

export function getAllLocationParams() {
  return getAllLocations().map((loc) => ({
    country: loc.country,
    city: loc.slug,
  }));
}

export function getCountryName(code) {
  const names = { ireland: 'Ireland', uk: 'United Kingdom' };
  return names[code] || code;
}

export function getCurrencyForCountry(country) {
  return country === 'uk' ? 'GBP' : 'EUR';
}
