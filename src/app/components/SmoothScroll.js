'use client';

import { ReactLenis } from 'lenis/react'

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.2,     
      duration: 1,     
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  )
}