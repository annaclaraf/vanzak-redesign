"use client";

import React, { useRef } from 'react';
import { Lightbulb, Code, Rocket, MessageCircle } from 'lucide-react';
import { RevealText } from './reveal-text';

const processSteps = [
  {
    icon: <Lightbulb size={32} />,
    title: "Projeto",
    description: "Revisamos seus projetos em detalhes e fornecemos um detalhamento de preço fixo para cada página e um cronograma para o projeto.",
    number: "01"
  },
  {
    icon: <Code size={32} />,
    title: "Desenvolvimento",
    description: "Se você estiver satisfeito com o preço, começaremos o trabalho imediatamente, criando cada página em dispositivos móveis, tablets e computadores.",
    number: "02"
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Feedback",
    description: "Quando estivermos 80% do caminho para a conclusão, compartilharemos um link para você revisar o site em um site de teste e fornecer feedback.",
    number: "03"
  },
  {
    icon: <Rocket size={32} />,
    title: "Lançamento",
    description: "Depois que o site for submetido aos testes finais, transferiremos o site para sua própria conta e domínio do Webflow e lançaremos o site na data desejada.",
    number: "04"
  }
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-[850px] mx-auto mb-16">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              NOSSO PROCESSO
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4">
              Como nós <span className="text-primary">Trabalhamos</span>
            </h2>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
              Nosso processo comprovado garante que entregaremos resultados excepcionais que atendem aos seus objetivos de negócios.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, index) => (
            <RevealText key={index} delay={index * 0.1}>
              <div className="relative bg-surface border border-light/10 rounded-lg p-6 h-full">
                <div className="absolute -top-2.5 -right-2.5 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="text-primary mb-3 md:mb-6">{step.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-light/70 text-sm md:text-[16px]">{step.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};
