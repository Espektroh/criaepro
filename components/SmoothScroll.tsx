"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}
    >
      {children}
    </ReactLenis>
  );
}
