import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Founders } from "@/components/founders";
import { AboutUs } from "@/components/about-us";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Cases />
      <Process />
      <Services />
      <Founders />
    </div>
  );
}
