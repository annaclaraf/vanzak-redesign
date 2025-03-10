"use client";

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealText } from './reveal-text';
import { services } from '@/data/services';
import { MagneticLink } from './magnetic-link';

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSOS SERVIÇOS
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4">
              Transformando Ideias em <span className="text-primary">Realidade Digital</span>
            </h2>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Do branding ao e-commerce, oferecemos soluções completas para fortalecer sua presença digital.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <RevealText key={index} delay={index * 0.1}>
              <div className="relative h-full bg-surface border border-light/10 rounded-lg p-6 overflow-hidden">
                <div className="text-primary mb-3 md:mb-6">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-light/70 text-sm md:text-[16px] mb-6">{service.description}</p>

                <MagneticLink href={`service/${service.slug}`} className="text-light font-medium hover:text-primary transition-colors flex items-center gap-2 w-fit">
                  Ver Mais <ArrowRight size={20} />
                </MagneticLink>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};
