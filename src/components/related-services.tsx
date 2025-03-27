"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealText } from "./reveal-text";
import { services } from "@/data/services";

interface RelatedServicesProps {
  services: string[];
}

export function RelatedServices({ services: serviceNames }: RelatedServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const filteredServices = services.filter(service => serviceNames.includes(service.title));
  
  if (filteredServices.length === 0) return null;
  
  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <RevealText>
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-6">
            Serviços Entregues
          </h2>
        </RevealText>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              className="bg-surface group rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/service/${service.slug}`} className="block h-full">
                <div className="relative flex items-center justify-center bg-gradient-to-t from-dark to-transparent p-7">
                  <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] rounded-full flex items-center justify-center p-5 md:p-12 [&>svg]:w-full [&>svg]:h-full">
                    {service.icon}
                  </div>
                  <div className="absolute w-full h-full overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-21 bg-light/20 rounded-full filter blur-3xl"></div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Ver Detalhes
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
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