import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Founders } from "@/components/founders";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cases />
      <Process />
      <Services />
      <Founders />
    </div>
  );
}
