"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/service/${service.slug}`}>
      <motion.div 
        className="group bg-gradient-to-br from-[#212121] to-[#050505] rounded-2xl h-full flex flex-col"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="text-light bg-dark rounded-lg border border-surface relative -top-5 -mb-5 [&>svg]:w-12 [&>svg]:h-auto p-5">
            {service.icon}
          </div>
        </div>
        
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-muted mb-6">{service.description}</p>
          <div className="flex items-center text-primary font-medium">
            Saiba Mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}