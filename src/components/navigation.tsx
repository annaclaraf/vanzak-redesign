"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationProps {
  prevPage: { slug: string; title: string } | null;
  nextPage: { slug: string; title: string } | null;
}

export function Navigation({ prevPage, nextPage }: NavigationProps) {
  if (!prevPage && !nextPage) return null;

  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <div className="flex justify-between items-center border-t border-light pt-8">
          <div>
            {prevPage && (
              <Link href={`/case/${prevPage.slug}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <div className="text-sm text-muted">Anterior</div>
                  <div className="font-medium">{prevPage.title}</div>
                </div>
              </Link>
            )}
          </div>
          
          <div className="text-right">
            {nextPage && (
              <Link href={`/case/${nextPage.slug}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <div>
                  <div className="text-sm text-muted">Próximo</div>
                  <div className="font-medium">{nextPage.title}</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}