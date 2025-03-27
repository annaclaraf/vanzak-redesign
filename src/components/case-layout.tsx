"use client";

import { CaseCard } from "./case-card";
import { RevealText } from "./reveal-text";
import { cases } from '@/data/cases';

export function CaseLayout() {
  return (
    <section className="py-15 md:py-25 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSOS PROJETOS
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-4xl lg:text-7xl md:text-5xl font-bold mb-4">
              Ideias, Projetos e <span className="text-primary">Transformação</span>
            </h2>
          </RevealText>

          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Enviamos centenas de projetos e bem-sucedidos para nossos clientes.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <RevealText key={project.slug} delay={index * 0.1}>
              <CaseCard project={project} />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}