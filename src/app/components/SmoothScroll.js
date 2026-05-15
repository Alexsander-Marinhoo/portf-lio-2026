'use client';

import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function RouteChangeReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true, force: true });
      requestAnimationFrame(() => {
        lenis.start();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{
      lerp: 0.2,
      duration: 1,
      smoothWheel: true
    }}>
      <RouteChangeReset />
      {children}
    </ReactLenis>
  )
}