"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RevealText } from './reveal-text';
import { cases } from '@/data/cases';
import { MagneticLink } from './magnetic-link';

gsap.registerPlugin(ScrollTrigger);

export function Cases() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (horizontalRef.current && sectionRef.current) {
      const scrollTween = gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current!.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current!.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });
      
      return () => {
        scrollTween.kill();
      };
    }
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-15 md:py-25 relative">
      <div className="container text-center max-w-[850px] mx-auto mb-16">
        <RevealText>
          <span className="inline-block text-white font-mono text-sm tracking-wider mb-4">
            NOSSO TRABALHO
          </span>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="text-4xl lg:text-7xl md:text-5xl font-bold mb-4">
            Cases <span className="text-primary">Recentes</span>
          </h2>
        </RevealText>
        <RevealText delay={0.4}>
          <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted max-w-2xl mx-auto">
            Explore nossos projetos mais recentes e veja como ajudamos empresas a atingir suas metas digitais.
          </p>
        </RevealText>
      </div>
      
      <div className="overflow-hidden">
        <div ref={horizontalRef} className="flex gap-8 pl-5 md:pl-8 lg:pl-12 pr-12">
          {cases.map((project, index) => (
            <motion.div 
              key={index}
              className="relative min-w-[350px] md:min-w-[500px] border border-light/10 rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/80 to-black/0 md:translate-y-1/5 md:opacity-0 md:transition-all md:duration-300 md:ease-in-out md:group-hover:translate-y-0 md:group-hover:opacity-100 translate-y-0 opacity-100">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-[16px] md:text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <MagneticLink href={`case/${project.slug}`} className="inline-flex items-center text-white hover:text-primary transition-colors text-sm">
                    Ver Case <ArrowUpRight size={16} className="ml-1" />
                  </MagneticLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto mt-12 text-center">
        <RevealText delay={0.2}>
          <MagneticLink href="/cases" className="inline-block bg-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
            Veja todos os cases
          </MagneticLink>
        </RevealText>
      </div>
    </section>
  );
};
