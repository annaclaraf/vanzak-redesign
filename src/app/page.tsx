import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";
import { Process } from "@/components/process";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cases />
      <Process />
      <Services />
    </div>
  );
}
