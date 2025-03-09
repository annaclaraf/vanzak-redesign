"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "@/icons/logo";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
    }
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/cases", label: "Cases" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" }
  ];

  const externalLinks = [
    { href: "https://www.instagram.com/vanzak.labs/", label: "Instagram" },
    { href: "https://br.linkedin.com/company/vanzak-labs", label: "LinkedIn" },
    { href: "https://www.behance.net/vanzaklabs", label: "Behance" },
    { href: "https://web.whatsapp.com/send?phone=5511945806935&text=Ol%C3%A1%20%3F", label: "Whatsapp" }
  ];

  const menuVariants = {
    closed: {
      y: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 50
      }
    },
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 50,
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const menuItemVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#09090bcc] border-b border-[#27272a66] ${!isOpen && !isClosing ? 'backdrop-blur-md' : ''} ${hidden && 'translate-y-[-100%]'}`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 py-5 flex items-center justify-between">
        <Link href="/" className="w-15 md:w-25 [&>svg]:w-full [&>svg]:h-auto">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`relative inline-block py-[0.5rem] weight-500 transition-colors duration-300 ease after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0638e5] after:transition-all after:duration-300 after:ease hover:after:w-full`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden block">
          <button
            className="flex flex-col items-center justify-center gap-1.5 w-auto h-auto z-50 relative cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              className="bg-white h-1 w-7 rounded"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="bg-white h-1 w-7 rounded"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </button>

          <AnimatePresence onExitComplete={() => setIsClosing(false)}>
            {isOpen && (
              <motion.div 
                className="w-full h-full bg-[#252527] fixed inset-0 z-40 flex flex-col justify-center items-center"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >                
                <nav className="flex flex-col space-y-6 text-center">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="text-3xl font-display font-medium text-[#e5e5dc] hover:text-[#0638e5] transition-colors"
                      onClick={toggleMenu}
                      variants={menuItemVariants}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                
                <motion.div 
                  className="absolute bottom-12 left-0 right-0 text-center"
                  variants={menuItemVariants}
                >
                  <div className="flex justify-center space-x-6 mb-4">
                    {externalLinks.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" className="text-[#e5e5dc8e] hover:text-[#0638e5] transition-colors">
                        {link.label}
                        </a>
                    ))}
                  </div>
                  <p className="text-[#e5e5dc8e]">© {new Date().getFullYear()} VanzakLabs</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}