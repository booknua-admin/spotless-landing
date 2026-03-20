'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageInit() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);

  useEffect(() => {
    // Skip the first render — main.js handles initial page load.
    // Only re-init on client-side navigations (pathname change).
    if (pathname === initialPath.current) return;
    initialPath.current = pathname;

    if (typeof window.initPage === 'function') {
      requestAnimationFrame(() => window.initPage());
    }
  }, [pathname]);

  return null;
}
