"use client";

import Link from "next/link";
import { RevealText } from "./reveal-text";
import { ArrowLeft } from "lucide-react";
import { Service } from "@/types/service";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <RevealText delay={0.1}>
          <Link href="/services" className="group text-primary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Voltar
          </Link>
        </RevealText>
          
        <div className="mt-5">
          <div>
            <RevealText delay={0.2}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
            </RevealText>
            
            <RevealText delay={0.3}>
              <p className="text-base md:text-xl text-muted mb-6">
                {service.description}
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}