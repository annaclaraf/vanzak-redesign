"use client";

import { motion } from "framer-motion";
import { RevealText } from "./reveal-text";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  isLast: boolean;
}

export function TimelineStep({ step, title, description, isLast }: TimelineStepProps) {
  return (
    <div className="flex">
      <div className="flex mr-6">
        <RevealText delay={0.1} className="flex flex-col items-center">
          <motion.div 
            className="w-12 h-12 rounded-full bg-primary text-muted flex items-center justify-center font-bold text-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {step}
          </motion.div>
          {!isLast && (
            <div className="flex-1 w-0.25 h-24 bg-muted mt-2"></div>
          )}
        </RevealText>
      </div>
      
      <div className="pb-12">
        <RevealText delay={0.1}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="text-muted">{description}</p>
        </RevealText>
      </div>
    </div>
  );
}