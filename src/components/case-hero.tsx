"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealText } from "./reveal-text";
import { MagneticLink } from "./magnetic-link";
import { ArrowLeft } from "lucide-react";
import { Case } from "@/types/case";

interface CaseHeroProps {
  project: Case;
}

export function CaseHero({ project }: CaseHeroProps) {
  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <RevealText delay={0.1}>
          <Link href="/cases" className="group text-primary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar
          </Link>
        </RevealText>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-5">
          <div>
            <RevealText delay={0.2}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
            </RevealText>
            
            <RevealText delay={0.3}>
              <p className="text-base md:text-xl text-muted mb-6">
                {project.description}
              </p>
            </RevealText>
            
            <RevealText delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <Link key={index} href={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="bg-surface px-3 py-1 rounded-full text-sm transition-colors hover:text-primary">
                      {service}
                    </span>
                  </Link>
                ))}
              </div>
            </RevealText>

            {project.website  && (
              <RevealText delay={0.5}>
                <MagneticLink href={project.website} className="bg-primary text-light inline-block px-6 py-3 rounded-md font-medium mt-8" target="_blank">
                  Visitar Site
                </MagneticLink>
              </RevealText>
            )}
          </div>
          
          <motion.div 
            className="relative"
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <RevealText delay={0.4}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </RevealText>
          </motion.div>
        </div>
      </div>
    </section>
  );
}