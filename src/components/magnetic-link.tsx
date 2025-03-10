"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
}

export function MagneticLink({ children, className, href, target }: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = linkRef.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      ref={linkRef}
      target={target}
      className={`block relative cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}