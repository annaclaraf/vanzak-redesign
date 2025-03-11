import { Hero } from "@/components/hero";
import { Cases } from "@/components/cases";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Founders } from "@/components/founders";
import { AboutUs } from "@/components/about-us";
import { InfiniteScrolling } from "@/components/infinite-scrolling";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfiniteScrolling />
      <AboutUs />
      <Cases />
      <Process />
      <Founders />
      <Services />
    </div>
  );
}
