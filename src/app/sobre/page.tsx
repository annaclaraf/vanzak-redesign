"use client";

import { ImageGalery } from "@/components/image-galery";
import { RevealText } from "@/components/reveal-text";
import { Services } from "@/components/services";
import { Values } from "@/components/values";
import { WhatWeDo } from "@/components/what-we-do";
import { Waves } from "@/components/react-bits/waves";

export default function About() {
  return (
    <div>
      <div className="relative w-full h-[200px] md:h-[350px]">
        <Waves
          lineColor="#a1a1aa"
          backgroundColor="#1c1e22"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        <div className="w-full max-w-[850px] lg:max-w-full mx-auto text-center absolute top-[50%] -translate-y-1/2">
          <RevealText delay={0.4}>
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Sobre Nós
            </h1>
          </RevealText>
        </div>
      </div>
      <Values />
      <ImageGalery />
      <Services />
      <WhatWeDo />
    </div>
  );
}
