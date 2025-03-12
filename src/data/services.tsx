import { Service } from "@/types/service";
import { ShoppingCart, ClipboardList, Star, BarChart, MonitorSmartphone, LayoutGrid } from 'lucide-react';

export const services: Service[] = [
  {
    icon: <ClipboardList size={32} />,
    slug: "consultoria",
    title: "Consultoria",
    headline: "Desenvolva seu produto e negócio com a nossa ajuda",
    description: "Os melhores profissionais, treinados e capacitados para trazer visibilidade, conhecimento e resultados à sua empresa.",
  },
  {
    icon: <LayoutGrid size={32} />,
    slug: "social-media",
    title: "Social Media",
    headline: "Porque tudo hoje começa nas redes sociais",
    description: "Conteúdos assertivos, específicos, para fortalecer o engajamento, interação e rentabilidade através das mídias sociais de sua empresa.",
  },
  {
    icon: <BarChart size={32} />,
    slug: "branding",
    title: "Branding",
    headline: "Sua marca, seu primeiro cartão de visitas",
    description: "Desenvolvemos a estratégia de branding ideal para consolidação de sua empresa e melhor conexão com seus clientes.",
  },
  {
    icon: <ShoppingCart size={32} />,
    slug: "ecommerce",
    title: "E-commerce",
    headline: "Shopify Experts",
    description: "Nossos especialistas em programação e Web Design são capazes de criar o e-commerce perfeito para a sua empresa, a partir de um site dinâmico e uma plataforma ágil, segura e moderna.",
  },
  {
    icon: <Star size={32} />,
    slug: "influencers",
    title: "Influencers",
    headline: "A melhor vitrine digital para divulgar a sua empresa",
    description: "A grandeza do marketing de influência através de nossa rede de contatos, com os melhores influenciadores do país.",
  },
  {
    icon: <MonitorSmartphone size={32} />,
    slug: "web-design",
    title: "Web Design",
    headline: "Design moderno e responsivo",
    description: "Desenvolvemos sites responsivos, com design moderno e intuitivo, para que sua empresa tenha a melhor presença online.",
  }
]