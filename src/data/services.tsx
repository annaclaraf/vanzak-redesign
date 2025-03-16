import { Service } from "@/types/service";
import { ShoppingCart, ClipboardList, Star, BarChart, MonitorSmartphone, LayoutGrid } from 'lucide-react';

export const services: Service[] = [
  {
    icon: <ClipboardList size={32} />,
    slug: "consultoria",
    title: "Consultoria",
    headline: "Desenvolva seu produto e negócio com a nossa ajuda",
    description: "Os melhores profissionais, treinados e capacitados para trazer visibilidade, conhecimento e resultados à sua empresa.",
    benefits: [
      {
        title: "Expertise em Estratégia",
        description: "Desenvolvemos estratégias personalizadas para cada fase do seu negócio, garantindo crescimento sustentável."
      },
      {
        title: "Análise de Mercado",
        description: "Realizamos uma análise detalhada do mercado, proporcionando insights valiosos para posicionamento e diferenciação."
      },
      {
        title: "Gestão de Resultados",
        description: "Monitoramento constante e otimização das suas ações para garantir que os resultados atendam às suas expectativas."
      }
    ]
  },
  {
    icon: <LayoutGrid size={32} />,
    slug: "social-media",
    title: "Social Media",
    headline: "Porque tudo hoje começa nas redes sociais",
    description: "Conteúdos assertivos, específicos, para fortalecer o engajamento, interação e rentabilidade através das mídias sociais de sua empresa.",
    benefits: [
      {
        title: "Estratégia de Conteúdo",
        description: "Desenvolvemos conteúdos estratégicos para aumentar o alcance e engajamento nas plataformas sociais."
      },
      {
        title: "Análise de Desempenho",
        description: "Acompanhamos métricas e ajustamos as campanhas para garantir o melhor retorno sobre investimento."
      },
      {
        title: "Fidelização de Clientes",
        description: "Criamos estratégias para construir uma comunidade engajada e fiel à sua marca."
      }
    ]
  },
  {
    icon: <BarChart size={32} />,
    slug: "branding",
    title: "Branding",
    headline: "Sua marca, seu primeiro cartão de visitas",
    description: "Desenvolvemos a estratégia de branding ideal para consolidação de sua empresa e melhor conexão com seus clientes.",
    benefits: [
      {
        title: "Identidade Visual Forte",
        description: "Criamos uma identidade visual única que transmite a essência da sua marca de forma consistente."
      },
      {
        title: "Posicionamento de Mercado",
        description: "Ajudamos a sua marca a se destacar e se posicionar de maneira eficaz no mercado."
      },
      {
        title: "Estratégias de Crescimento",
        description: "Desenvolvemos ações para fortalecer o reconhecimento da marca e expandir sua presença no mercado."
      }
    ]
  },
  {
    icon: <ShoppingCart size={32} />,
    slug: "ecommerce",
    title: "E-Commerce",
    headline: "Shopify Experts",
    description: "Nossos especialistas em programação e Web Design são capazes de criar o e-commerce perfeito para a sua empresa, a partir de um site dinâmico e uma plataforma ágil, segura e moderna.",
    benefits: [
      {
        title: "Plataforma Intuitiva",
        description: "Criamos lojas virtuais com navegação intuitiva, garantindo uma experiência de compra agradável."
      },
      {
        title: "Design Responsivo",
        description: "Sites que funcionam perfeitamente em todos os dispositivos, maximizando o alcance e as conversões."
      },
      {
        title: "SEO Integrado",
        description: "Aplicamos estratégias de SEO diretamente na estrutura do site para aumentar a visibilidade da sua loja nos motores de busca e gerar mais tráfego orgânico."
      }
    ]
  },
  {
    icon: <Star size={32} />,
    slug: "influencers",
    title: "Influencers",
    headline: "A melhor vitrine digital para divulgar a sua empresa",
    description: "A grandeza do marketing de influência através de nossa rede de contatos, com os melhores influenciadores do país.",
    benefits: [
      {
        title: "Alcance Amplificado",
        description: "Utilizamos a rede de influenciadores para ampliar a visibilidade e atrair mais público para sua marca."
      },
      {
        title: "Campanhas Personalizadas",
        description: "Desenvolvemos campanhas personalizadas para atingir o público certo de forma eficaz."
      },
      {
        title: "Monitoramento de Resultados",
        description: "Analisamos o impacto das campanhas de influenciadores para garantir que seus objetivos sejam alcançados."
      }
    ]
  },
  {
    icon: <MonitorSmartphone size={32} />,
    slug: "web-design",
    title: "Web Design",
    headline: "Design moderno e responsivo",
    description: "Desenvolvemos sites responsivos, com design moderno e intuitivo, para que sua empresa tenha a melhor presença online.",
    benefits: [
      {
        title: "Design Responsivo",
        description: "Sites que se adaptam a qualquer dispositivo, proporcionando uma experiência de usuário impecável."
      },
      {
        title: "Interface Intuitiva",
        description: "Desenvolvemos interfaces limpas e intuitivas para facilitar a navegação e engajamento dos usuários."
      },
      {
        title: "Atração Visual",
        description: "Utilizamos as últimas tendências de design para criar sites visualmente atrativos que se destacam no mercado."
      }
    ]
  }
];
