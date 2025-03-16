import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { RelatedCases } from "@/components/related-cases";
import { ServiceHero } from "@/components/service-hero";
import { ServiceBenefits } from "@/components/service-benefits";
import { services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

function findService(slug: string) {
  return services.find((service) => service.slug === slug) || null;
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return {
      title: "Serviço não encontrado | Vanzak Labs",
    };
  }

  return {
    title: `${service.title} | Vanzak Labs`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Service({params}: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return notFound();
  }

  const currentIndex = services.findIndex(service => service.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div>
      <ServiceHero service={service} />
      <ServiceBenefits benefits={service.benefits} />
      <RelatedCases currentSlug="" services={[service.title]} />
      <Navigation prevPage={prevService} nextPage={nextService} page="/service" />
    </div>
  );
}