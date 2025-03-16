import { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedCases } from "@/components/related-cases";
import { RelatedServices } from "@/components/related-services";
import { CaseHero } from "@/components/case-hero";
import { VisualDocumentation } from "@/components/visual-documentation";
import { Navigation } from "@/components/navigation";
import { cases } from "@/data/cases";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);

  if (!slug) {
    return {
      title: "Case não encontrado | Vanzak Labs"
    };
  }

  const project = cases.find(proj => proj.slug === slug);
  
  if (!project) {
    return {
      title: "Case não encontrado | Vanzak Labs"
    };
  }
  
  return {
    title: `${project.title} | Vanzak Labs`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return cases.map(project => ({
    slug: project.slug,
  }));
}

export default async function Case({ params }: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(params);

  if (!slug) {
    notFound();
  }

  const project = cases.find(proj => proj.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  const currentIndex = cases.findIndex(proj => proj.slug === slug);
  const prevCase = currentIndex > 0 ? cases[currentIndex - 1] : null;
  const nextCase = currentIndex < cases.length - 1 ? cases[currentIndex + 1] : null;

  return (
    <div>
      <CaseHero project={project} />
      <RelatedServices services={project.services} />
      <VisualDocumentation images={project.images} />
      <RelatedCases currentSlug={project.slug} services={project.services} />
      <Navigation prevPage={prevCase} nextPage={nextCase} />
    </div>
  );
}