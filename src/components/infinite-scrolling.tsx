"use client";

import React from 'react';

import { motion } from "framer-motion";

const words: string[] = ["Tráfego Pago", "Shopify Experts", "Influenciadores", "Social Media", "Branding", "Marketing Digital"];

export function InfiniteScrolling() {
  return (
    <section className="py-5 md:py-5">
      <div className="container">
        <div className="max-w-[1020px] mx-auto flex relative overflow-hidden [mask-image:linear-gradient(to_right,#00000000_0%,#000_12%,#000_87%,#00000000_100%)]">
          <motion.ul
            transition={{
              duration: 50,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex flex-none gap-8 md:gap-16 pr-16"
          >
            {[...new Array(6)].fill(0).map((_, i) => (
              <React.Fragment key={i}>
                {words.map((word, index) => (
                  <li  key={`${i}-${index}`} className="text-lg md:text-xl text-muted">
                    {word}
                  </li>
                ))}
              </React.Fragment>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
};
