"use client";

import { RevealText } from "./reveal-text";
import { values } from '@/data/values';

export function Values() {
  return (
    <section id="values" className="py-15 md:py-25 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSOS VALORES
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl lg:text-7xl md:text-5xl font-bold mb-4">
              Criatividade, Inovação e <span className="text-primary">Resultados</span>
            </h2>
          </RevealText>

          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Criamos soluções criativas que trazem resultados rápidos
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <RevealText key={index} delay={index * 0.1}>
              <div className="relative bg-surface/30 h-full rounded-lg p-6 overflow-hidden">
                <div className="text-primary mb-3 md:mb-6">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-light/70 text-sm md:text-[16px] mb-6">{value.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}