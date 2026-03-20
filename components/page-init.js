'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageInit() {
  const pathname = usePathname();

  useEffect(() => {
    function run() {
      if (typeof window.initPage === 'function') {
        window.initPage();
      } else {
        // main.js hasn't loaded yet, retry shortly
        setTimeout(run, 100);
      }
    }
    // Wait one frame for DOM to be fully painted
    requestAnimationFrame(run);
  }, [pathname]);

  return null;
}
