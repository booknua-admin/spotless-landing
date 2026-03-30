import { SITE_URL } from './seo';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Spotless',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      'The purpose-built operating system for cleaning companies. Bookings, payments, scheduling, staff management, reviews, and analytics — all in one platform.',
    sameAs: [
      'https://www.linkedin.com/company/spotlessapp',
      'https://x.com/spotlessapp',
      'https://www.facebook.com/spotlessapp',
      'https://www.instagram.com/spotlessapp',
      'https://www.youtube.com/@spotlessapp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${SITE_URL}/contact`,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Spotless',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    description:
      'All-in-one cleaning business software for scheduling, payments, staff management, and growth.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500',
      bestRating: '5',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'EUR',
        description: 'For solo cleaners just getting started',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '29',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '29',
          priceCurrency: 'EUR',
          unitCode: 'MON',
        },
        description: 'For growing teams ready to scale',
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '69',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '69',
          priceCurrency: 'EUR',
          unitCode: 'MON',
        },
        description: 'For companies scaling fast with automation',
      },
      {
        '@type': 'Offer',
        name: 'Business',
        price: '129',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '129',
          priceCurrency: 'EUR',
          unitCode: 'MON',
        },
        description: 'For established companies with large teams',
      },
    ],
  };
}

export function faqPageSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/images/og-default.png`,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spotless',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function howToSchema({ title, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function localBusinessSchema({ city, country, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Cleaning Business Software in ${city}`,
    description,
    about: {
      '@type': 'SoftwareApplication',
      name: 'Spotless',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'Country',
        name: country,
      },
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Spotless',
    url: SITE_URL,
    description: 'The all-in-one platform for cleaning businesses. Scheduling, invoicing, staff management, and more.',
    publisher: { '@type': 'Organization', name: 'Spotless', url: SITE_URL },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function serviceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Spotless — ${name}`,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Free plan available'
    }
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
