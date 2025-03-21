"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealText } from "./reveal-text";
import { cases } from "@/data/cases";

interface RelatedCasesProps {
  currentSlug: string;
  services?: string[];
}

export function RelatedCases({ currentSlug, services }: RelatedCasesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  

  const filteredCases = cases
    .filter(project => project.slug !== currentSlug)
    .filter(project => {
      if (services && services.some(service => project.services.includes(service))) return true;
      return false;
    }).slice(0, 3);
  
  if (filteredCases.length === 0) return null;
  
  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <RevealText>
          <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold mb-6">
            Cases
          </h2>
        </RevealText>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((project, index) => (
            <motion.div
              key={project.slug}
              className="bg-surface rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case/${project.slug}`} className="block h-full">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent flex items-end p-4">
                    <div>
                      <div className="text-sm text-muted font-medium mb-1">{project.category}</div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Ver Case
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}