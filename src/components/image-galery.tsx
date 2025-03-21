"use client";

import { motion } from "framer-motion";
import { RevealText } from "./reveal-text";

const images = ["/team-1.png", "/team-2.png",  "/vanzak.png" ];

export function ImageGalery() {
  return (
    <section className="py-16 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="md:col-span-2 relative aspect-square md:aspect-[16/9] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent hover:bg-none" />
              <motion.img
                src={images[0]}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {images.slice(1).map((image, index) => (
              <motion.div
                key={image}
                className="relative aspect-square overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent hover:bg-none" />
                <motion.img
                  src={image}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <RevealText delay={0.4}>
              <p className="text-muted max-w-3xl mx-auto">
                Nosso espaço de trabalho colaborativo estimula a criatividade, a inovação e o trabalho em equipe, permitindo-nos oferecer soluções digitais excepcionais para nossos clientes.
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}