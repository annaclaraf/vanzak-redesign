"use client";

import Logo from "@/icons/logo";
import Link from "next/link";
import { services } from '@/data/services';
import { RevealText } from "./reveal-text";

const companyLink = [
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/cases", label: "Cases" },
  { href: "/services", label: "Serviços" },
  { href: "/contato", label: "Contato" }
];

const externalLinks = [
  { href: "https://www.instagram.com/vanzak.labs/", label: "Instagram" },
  { href: "https://br.linkedin.com/company/vanzak-labs", label: "LinkedIn" },
  { href: "https://www.behance.net/vanzaklabs", label: "Behance" }
];

export function Footer() {
  return (
    <footer className="bg-surface py-16">
      <div className="container">
        <RevealText delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-5">
            <div>
              <Link href="/" className="inline-block w-15 md:w-25 mb-4 [&>svg]:w-full [&>svg]:h-auto">
                <Logo />
              </Link>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg text-light font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={`/service/${service.slug}`} className="text-muted text-sm lg:text-base hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg text-light font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                {companyLink.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted text-sm lg:text-base hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg text-light font-semibold mb-4">Contato</h4>
              <address className="not-italic text-muted text-sm lg:text-base">
                <p>Rua Haddock Lobo, 1307 - Jardim Paulista</p>
                <p className="mt-2">
                  <a href="mailto:thais@vanzaklabs.com.br" target="_blank" className="hover:text-primary transition-colors break-words">
                    thais@vanzaklabs.com.br
                  </a>
                </p>
                <p className="mt-2">
                  <a href="https://api.whatsapp.com/send?phone=5511987220805&text=Ol%C3%A1" target="_blank" className="hover:text-primary transition-colors">
                    (11) 98722-0805
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-muted/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} VanzakLabs
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {externalLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" className="text-muted hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </RevealText>
      </div>
    </footer>
  );
}