"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { RevealText } from "./reveal-text";
import { MagneticLink } from "./magnetic-link";
import { ArrowRight } from "lucide-react";

export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="about" ref={sectionRef} className="py-15 md:py-25 relative">
      <div className="container flex flex-col lg:flex-row items-stretch justify-center gap-8">
        <div className="lg:w-1/2 w-full max-w-[850px] lg:max-w-full mx-auto text-center lg:text-left">
          <RevealText>
            <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
              SOBRE NÓS
            </span>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl lg:text-[54px] md:text-5xl font-bold mb-4">
              <span className="text-primary">Vanzak Labs:</span> Agência de performance
            </h2>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-xl text-muted max-w-2xl md:max-w-full mx-auto">
              Fundada em 2019 por <strong>Eduardo Vanzak</strong> e <strong>Rafael Mendes</strong>, a <strong> Vanzak Labs </strong> nasceu para transformar marcas e impulsionar negócios no ambiente digital. Combinando criatividade, estratégia e tecnologia, a agência se especializa em e-commerce, redes sociais e campanhas com influenciadores.
              <br /> <br />
              A Vanzak Labs se destaca pelo compromisso em criar experiências digitais inovadoras e orientadas a resultados.
            </p>
          </RevealText>

          <RevealText delay={0.6}>
            <div className="mt-12 text-center">
              <MagneticLink href="https://exame.com/pme/conheca-o-vanzak-labs-nova-empresa-do-fundador-da-desincha/" className="inline-flex items-center bg-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg" target="_blank">
                Leia a matéria na Exame <ArrowRight size={16} className="ml-1" />
              </MagneticLink>
            </div>
          </RevealText>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full h-auto"
        >
          <RevealText delay={0.4} className="h-full">
            <img src="./vanzak-labs.png" alt="Vanzak Labs" className="w-full h-full object-cover rounded-2xl" />
          </RevealText>
        </motion.div>
      </div>
    </section>
  );
}
