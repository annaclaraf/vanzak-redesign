"use client";

import { RevealText } from "./reveal-text";
import { ServiceCard } from "./service-card";
import { services } from '@/data/services';

export function ServiceLayout() {
  return (
    <section className="py-15 md:py-25 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSOS SERVIÇOS
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4">
              Soluções, Estratégias e <span className="text-primary">Crescimento</span>
            </h2>
          </RevealText>

          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Oferecemos uma gama abrangente de serviços digitais projetados para ajudar sua empresa a prosperar no cenário digital.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealText key={service.slug} delay={index * 0.1}>
              <ServiceCard service={service} />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}