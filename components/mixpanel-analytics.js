'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const mixpanelApiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST || 'https://api-js.mixpanel.com';
const mixpanelDebug = process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === 'true';
const ctaSelector = 'a.btn-primary, a.btn-ghost, button.btn-primary, button.btn-ghost';
const bookedDemoQueryKeys = ['booked_demo', 'demo_booked', 'scheduled_demo'];

function getMixpanel() {
  if (typeof window === 'undefined') {
    return null;
  }

  const { mixpanel } = window;

  if (!mixpanel || typeof mixpanel.track !== 'function') {
    return null;
  }

  return mixpanel;
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function buildPageProperties() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_query: window.location.search.replace(/^\?/, '') || undefined,
    page_title: document.title,
    page_url: window.location.href,
  };
}

function trackMixpanelEvent(eventName, properties = {}) {
  const mixpanel = getMixpanel();

  if (!mixpanel) {
    return false;
  }

  mixpanel.track(eventName, {
    ...buildPageProperties(),
    ...properties,
  });

  return true;
}

function getElementText(element) {
  if (!element) {
    return '';
  }

  return normalizeText(element.getAttribute('aria-label') || element.textContent);
}

function getCtaHref(element) {
  if (!element || element.tagName !== 'A') {
    return '';
  }

  return element.getAttribute('href') || '';
}

function getCtaStyle(element) {
  if (!element) {
    return 'unknown';
  }

  if (element.classList.contains('btn-primary')) {
    return 'primary';
  }

  if (element.classList.contains('btn-ghost')) {
    return 'ghost';
  }

  return 'unknown';
}

function getCtaLocation(element) {
  if (!element) {
    return 'unknown';
  }

  if (element.closest('.signup-form')) {
    return 'signup_form';
  }

  if (element.closest('.final-cta')) {
    return 'final_cta';
  }

  if (element.closest('.niche-cta')) {
    return 'niche_cta';
  }

  if (element.closest('.pricing-card')) {
    return 'pricing_card';
  }

  if (element.closest('.hero')) {
    return 'hero';
  }

  if (element.closest('.niche-hero')) {
    return 'niche_hero';
  }

  if (element.closest('.mobile-menu')) {
    return 'mobile_menu';
  }

  if (element.closest('.nav-cta') || element.closest('#navbar')) {
    return 'navbar';
  }

  if (element.closest('footer')) {
    return 'footer';
  }

  return 'unknown';
}

function getCtaKind(element, text, href) {
  const normalizedValue = `${text} ${href}`.toLowerCase();

  if (normalizedValue.includes('demo')) {
    return 'demo';
  }

  if (normalizedValue.includes('log in') || normalizedValue.includes('login')) {
    return 'login';
  }

  if (
    normalizedValue.includes('trial') ||
    href === '#cta' ||
    Boolean(element?.closest('.signup-form'))
  ) {
    return 'trial';
  }

  return 'general';
}

function getFormMetadata(formElement) {
  if (!formElement) {
    return {
      field_count: 0,
      filled_field_count: 0,
      field_types: undefined,
    };
  }

  const fields = Array.from(formElement.querySelectorAll('input, select, textarea')).filter(
    (field) => field.type !== 'hidden',
  );
  const filledFieldCount = fields.reduce((count, field) => {
    if (field.type === 'checkbox' || field.type === 'radio') {
      return count + (field.checked ? 1 : 0);
    }

    return count + (normalizeText(field.value).length > 0 ? 1 : 0);
  }, 0);
  const fieldTypes = Array.from(
    new Set(
      fields.map((field) => {
        if (field.tagName === 'TEXTAREA') {
          return 'textarea';
        }

        if (field.tagName === 'SELECT') {
          return 'select';
        }

        return (field.getAttribute('type') || 'text').toLowerCase();
      }),
    ),
  );

  return {
    field_count: fields.length,
    filled_field_count: filledFieldCount,
    field_types: fieldTypes.join(',') || undefined,
  };
}

function getBookedDemoQuery(searchParams) {
  for (const queryKey of bookedDemoQueryKeys) {
    if (!searchParams?.has(queryKey)) {
      continue;
    }

    const value = normalizeText(searchParams.get(queryKey)).toLowerCase();

    if (!value || ['1', 'true', 'yes', 'booked', 'scheduled'].includes(value)) {
      return {
        query_key: queryKey,
        query_value: value || 'true',
      };
    }
  }

  return null;
}

function getTrackedQueryStorageKey(pagePath, queryKey, queryValue) {
  return `spotless:mixpanel:${pagePath}:${queryKey}:${queryValue}`;
}

function sanitizeDemoBookedDetail(detail) {
  if (!detail || typeof detail !== 'object') {
    return {};
  }

  const allowedKeys = ['provider', 'source', 'booking_type', 'meeting_type', 'cta_location'];

  return allowedKeys.reduce((properties, key) => {
    const value = detail[key];

    if (typeof value !== 'string') {
      return properties;
    }

    const normalizedValue = normalizeText(value);

    if (!normalizedValue) {
      return properties;
    }

    properties[key] = normalizedValue;
    return properties;
  }, {});
}

export default function MixpanelAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initializedRef = useRef(false);
  const trackedUrlRef = useRef('');
  const queryString = searchParams?.toString() || '';

  const pagePath = useMemo(() => {
    if (!pathname) {
      return '';
    }

    return queryString ? `${pathname}?${queryString}` : pathname;
  }, [pathname, queryString]);

  const trackPageView = useCallback(() => {
    if (!mixpanelToken || !pagePath || typeof window === 'undefined') {
      return;
    }

    const { mixpanel } = window;

    if (!mixpanel || typeof mixpanel.track !== 'function') {
      return;
    }

    if (trackedUrlRef.current === pagePath) {
      return;
    }

    trackedUrlRef.current = pagePath;
    mixpanel.track('Page Viewed', {
      page_path: pathname,
      page_query: queryString || undefined,
      page_title: document.title,
      page_url: window.location.href,
    });
  }, [pagePath, pathname, queryString]);

  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  useEffect(() => {
    if (!mixpanelToken || typeof document === 'undefined') {
      return undefined;
    }

    const handleClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const ctaElement = event.target.closest(ctaSelector);

      if (!ctaElement) {
        return;
      }

      const ctaText = getElementText(ctaElement);
      const ctaHref = getCtaHref(ctaElement);
      const ctaLocation = getCtaLocation(ctaElement);
      const ctaKind = getCtaKind(ctaElement, ctaText, ctaHref);
      const baseProperties = {
        cta_text: ctaText || undefined,
        cta_href: ctaHref || undefined,
        cta_kind: ctaKind,
        cta_location: ctaLocation,
        cta_style: getCtaStyle(ctaElement),
      };

      trackMixpanelEvent('CTA Clicked', baseProperties);

      if (ctaKind === 'demo') {
        trackMixpanelEvent('Demo CTA Clicked', baseProperties);
      }

      if (ctaLocation === 'signup_form' && !ctaElement.closest('form')) {
        trackMixpanelEvent('Signup Form CTA Clicked', {
          ...baseProperties,
          form_mode: 'custom',
          ...getFormMetadata(ctaElement.closest('.signup-form')),
        });
      }
    };

    const handleSubmit = (event) => {
      if (!(event.target instanceof HTMLFormElement) || !event.target.matches('.signup-form')) {
        return;
      }

      const submitter = event.submitter instanceof Element ? event.submitter : null;

      trackMixpanelEvent('Signup Form Submitted', {
        form_mode: 'native',
        form_location: getCtaLocation(event.target),
        submitter_text: getElementText(submitter) || undefined,
        ...getFormMetadata(event.target),
      });
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('submit', handleSubmit, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('submit', handleSubmit, true);
    };
  }, []);

  useEffect(() => {
    if (!mixpanelToken || typeof window === 'undefined' || !pagePath) {
      return;
    }

    const bookedDemoQuery = getBookedDemoQuery(searchParams);

    if (!bookedDemoQuery) {
      return;
    }

    const storageKey = getTrackedQueryStorageKey(
      pagePath,
      bookedDemoQuery.query_key,
      bookedDemoQuery.query_value,
    );

    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    if (
      trackMixpanelEvent('Demo Booked', {
        conversion_source: 'query_param',
        ...bookedDemoQuery,
      })
    ) {
      window.sessionStorage.setItem(storageKey, '1');
    }
  }, [pagePath, searchParams]);

  useEffect(() => {
    if (!mixpanelToken || typeof window === 'undefined') {
      return undefined;
    }

    const handleDemoBooked = (event) => {
      trackMixpanelEvent('Demo Booked', {
        conversion_source: 'browser_event',
        ...sanitizeDemoBookedDetail(event?.detail),
      });
    };

    window.addEventListener('spotless:demo-booked', handleDemoBooked);

    return () => {
      window.removeEventListener('spotless:demo-booked', handleDemoBooked);
    };
  }, []);

  const handleLoad = useCallback(() => {
    if (!mixpanelToken || typeof window === 'undefined' || initializedRef.current) {
      return;
    }

    window.mixpanel.init(mixpanelToken, {
      api_host: mixpanelApiHost,
      autocapture: true,
      debug: mixpanelDebug,
      persistence: 'localStorage',
      track_pageview: false,
    });

    initializedRef.current = true;
    trackPageView();
  }, [trackPageView]);

  if (!mixpanelToken) {
    return null;
  }

  return (
    <Script
      src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
}
