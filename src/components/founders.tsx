"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './reveal-text';

const founders = [
  {
    name: "Rafael Mendes",
    image: "./rafael-mendes.png",
    description: "Sócio da agência. Empreendedor, fundador da Hidratei Cosméticos, com grande experiência em gestão e criação de marcas inovadoras."
  },
  {
    name: "Eduardo Vanzak",
    image: "./eduardo-vanzak.png",
    description: "Sócio da agência. Forbes 30 Under 30, Empreendedor Endeavor, GQ Men of The Year na Categoria Negócios, Empreendedor serial fundador da Desinchá."
  }
];

export function Founders() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="team" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSOS FUNDADORES
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4">
              Visão que <span className="text-primary">Inspira</span>
            </h2>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Conheça nossos fundadores, mentes visionárias que transformam desafios em inovação e impulsionam nosso crescimento.
            </p>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {founders.map((founder, index) => (
            <RevealText delay={(index + 6 ) * 0.1} key={founder.name}>
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
                className="h-full bg-surface p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center text-center overflow-hidden relative"
              >
                <div className="max-w-[200px] md:max-w-92 w-full aspect-[1] rounded-full mb-4 border-5 border-primary overflow-hidden">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-xl md:text-[22px] lg:text-[26px] font-bold text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-muted text-sm md:text-[16px] lg:text-[18px]">
                  {founder.description}
                </p>
              </motion.div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};