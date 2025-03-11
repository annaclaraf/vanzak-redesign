"use client";

import { motion, useScroll } from "framer-motion";

export function ProgressScroll() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}