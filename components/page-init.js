'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__pageInitRan) {
      if (typeof window.initPage === 'function') window.initPage();
    } else {
      window.__pageInitRan = true;
    }
  }, [pathname]);

  return null;
}
