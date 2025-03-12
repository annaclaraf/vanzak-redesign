"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticLink } from "./magnetic-link";
import { RevealText } from "./reveal-text";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section ref={ref} className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      <motion.div className="container mx-auto px-4 z-10" style={{ y, opacity }}>
        <div className="max-w-[400px] md:max-w-xl lg:max-w-4xl mx-auto text-center">
          <RevealText delay={0.2}>
            <h1 className="text-3xl lg:text-7xl md:text-5xl font-bold mb-6">
              Criamos <span className="text-primary">Experiências Digitais</span> que Importam
            </h1>
          </RevealText>
          
          <RevealText delay={0.4}>
            <p className="text-[16px] md:text-[18px] lg:text-2xl text-muted mb-12 mx-auto">
              Transformamos ideias em soluções digitais inovadoras que impulsionam o crescimento e aprimoram a experiência do usuário.
            </p>
          </RevealText>
          
          <RevealText delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <MagneticLink href="/cases" className="bg-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Explore Nosso Trabalho
              </MagneticLink>
              
              <MagneticLink href="/contato" className="bg-transparent border border-primary text-primary px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
                Entre em Contato
              </MagneticLink>
            </div>
          </RevealText>
        </div>
      </motion.div>

      <RevealText delay={0.8} className="absolute bottom-7.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300 ease">
        <span className="text-[14px] tracking-[2px] uppercase">Scroll</span>
        <div className="w-[2px] h-15 bg-white relative overflow-hidden fter:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:animate-scroll-down"></div>
        <ArrowDown size={20} className="animate-bounce" />
      </RevealText>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
    </section>
  );
}