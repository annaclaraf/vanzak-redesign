"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticLink } from "./magnetic-link";
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
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className={`object-cover w-full h-full`}
        >
          <source src={'/Vanzak_BackgroundAzul.webm'} type="video/webm" />
        </video>

        <div className="absolute opacity-100 inset-0 bg-gradient-to-b from-[#111827]/60 to-dark"/>
      </div>
      <motion.div className="container mx-auto px-4 z-10" style={{ y, opacity }}>
        <div className="max-w-[400px] md:max-w-xl lg:max-w-4xl mx-auto text-center [text-shadow:_0_0_2px_#000]">
          <RevealText delay={0.2}>
            <h1 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Experiências Digitais</span> <br/> que Importam
            </h1>
          </RevealText>
          
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted mb-12 mx-auto">
              Transformamos ideias em soluções digitais inovadoras que impulsionam o crescimento e aprimoram a experiência do usuário.
            </p>
          </RevealText>
          
          <RevealText delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <MagneticLink href="/cases" className="bg-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Explore Nosso Trabalho
              </MagneticLink>
              
              <MagneticLink href="/contato" className="bg-transparent border border-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Entre em Contato
              </MagneticLink>
            </div>
          </RevealText>
        </div>
      </motion.div>

      <RevealText delay={0.8} className="absolute bottom-7.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300 ease">
        <span className="text-[14px] tracking-[2px] uppercase">Scroll</span>
        <div className="w-[2px] h-15 bg-white relative overflow-hidden fter:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:animate-scroll-down"></div>
        <ArrowDown size={20} className="animate-bounce" />
      </RevealText>
    </section>
  );
}