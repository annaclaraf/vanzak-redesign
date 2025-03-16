"use client";

import { RevealText } from "./reveal-text";

export function VisualDocumentation({ images }: { images: string[] }) {
  return (
    <section className="py-10 md:py-15">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <RevealText key={index} delay={index * 0.1}>
              <div className="bg-secondary rounded-lg overflow-hidden">
                <img
                  src={image}
                  className="w-full h-auto"
                />
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}