import { AnimatedSVG } from "./animated-svg";
import { RevealText } from "./reveal-text";
import { TimelineStep } from "./timeline-step";

const steps = [
  {
    title: "Estratégia",
    description: "Revisamos seus projetos em detalhes e fornecemos um detalhamento de preço fixo para cada página e um cronograma para o projeto.",
  },
  {
    title: "Planejamento",
    description: "Se você estiver satisfeito com o preço, começaremos o trabalho imediatamente, criando cada página em dispositivos móveis, tablets e computadores.",
  },
  {
    title: "Execução",
    description: "Depois que o proejto for submetido aos testes finais, transferiremos o site para sua própria conta e domínio do Webflow e lançaremos o site na data desejada.",
  }
];

export function WhatWeDo() {
  return (
    <section className="bg-surface/50 py-16">
      <div className="container">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <RevealText>
            <h2 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-4">
              É assim que fazemos nosso trabalho
            </h2>
          </RevealText>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <AnimatedSVG />
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}