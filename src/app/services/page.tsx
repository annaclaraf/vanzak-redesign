import { Metadata } from "next";
import { RevealText } from "@/components/reveal-text";
import { Waves } from "@/components/react-bits/waves";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Serviços | Vanzak Labs"
};

export default function Services() {
  return (
    <main>
      <div className="relative w-full h-[200px] md:h-[350px]">
        <Waves
          lineColor="#1c1e22"
          backgroundColor="#09090b"
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
            <h1 className="text-5xl md:text-7xl font-bold text-center">
              Serviços
            </h1>
          </RevealText>
        </div>
      </div>
      <ServiceLayout />
    </main>
  );
}