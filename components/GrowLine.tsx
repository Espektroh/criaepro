"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function GrowLine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  if (reduce) return null;

  return (
    <div aria-hidden className="growline">
      <motion.span className="growline__fill" style={{ scaleY }} />
    </div>
  );
}
