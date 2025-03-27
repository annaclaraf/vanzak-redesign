"use client";

import { RevealText } from "./reveal-text";

interface ServiceBenefitsProps {
  benefits: { title: string; description: string; }[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-10 md:py-15 bg-[#111827]">
      <div className="container">
        <RevealText>
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-6">
            Benefícios
          </h2>
        </RevealText>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <RevealText key={index} delay={index * 0.1}>
              <div className="bg-dark rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}