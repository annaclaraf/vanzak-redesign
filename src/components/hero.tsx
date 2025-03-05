"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { RevealText } from "./reveal-text";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="w-full relative min-h-screen flex items-center justify-center overflow-hidden"> 
      <motion.div className="container mx-auto px-4 z-10" style={{ y, opacity }}>
        <div className="max-w-[400px] md:max-w-xl lg:max-w-4xl mx-auto text-center">
          <RevealText delay={0.2}>
            <h1 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-6">
              Criamos <span className="bg-gradient-to-r from-[#0638e5] to-[#ec4899] bg-clip-text text-transparent">Experiências Digitais</span> que Importam
            </h1>
          </RevealText>
          
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-[#a1a1aa] mb-12 mx-auto">
              Transformamos ideias em soluções digitais inovadoras que impulsionam o crescimento e aprimoram a experiência do usuário.
            </p>
          </RevealText>
          
          <RevealText delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <MagneticButton className="bg-[#0638e5] text-[##f8fafc] px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Explore Nosso Trabalho
              </MagneticButton>
              
              <MagneticButton className="bg-transparent border border-[#0638e3] text-[#0638e3] px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Entre em Contato
              </MagneticButton>
            </div>
          </RevealText>
        </div>
      </motion.div>

      <RevealText delay={0.8} className="absolute bottom-7.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300 ease">
        <span className="text-[14px] tracking-[2px] uppercase">Scroll</span>
        <div className="w-[2px] h-15 bg-white relative overflow-hidden fter:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0638e5] after:animate-scroll-down"></div>
        <ArrowDown size={20} className="animate-bounce" />
      </RevealText>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0638e533] rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e76e5033] rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
    </section>
  );
}