"use client";

import { ImageGalery } from "@/components/image-galery";
import { Services } from "@/components/services";
import { Values } from "@/components/values";
import { WhatWeDo } from "@/components/what-we-do";

export default function About() {
  return (
    <div>
      <Values />
      <ImageGalery />
      <Services />
      <WhatWeDo />
    </div>
  );
}
