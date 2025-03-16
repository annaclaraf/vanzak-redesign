"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Case } from "@/types/case";

interface CaseCardProps {
  project: Case;
}

export function CaseCard({ project }: CaseCardProps) {
  return (
    <Link href={`/case/${project.slug}`}>
      <motion.div 
        className="group bg-surface rounded-lg overflow-hidden h-full flex flex-col"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div>
              <span className="text-sm text-light font-medium mb-1">{project.category}</span>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            <p className="text-muted mb-4 flex-grow line-clamp-2">{project.description}</p>

            {project.services.slice(0, 3).map((service, index) => (
              <span key={index} className="bg-dark px-2 py-1 rounded-full text-xs">
                {service}
              </span>
            ))}
            {project.services.length > 3 && (
              <span className="bg-dark px-2 py-1 rounded-full text-xs">
                +{project.services.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center font-medium text-primary ">
            Ver Case
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}