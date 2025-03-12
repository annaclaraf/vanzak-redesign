import { Value } from "@/types/value";
import { Lightbulb, Users, Rocket, ClipboardList, LayoutGrid, Star } from "lucide-react";

export const values: Value[] = [
  {
    icon: <Lightbulb />,
    title: "Atenção",
    description: "Focada em construção e fortalecimento de marcas. A empresa foi criada por profissionais com mais de anos de experiência.",
  },
  {
    icon: <Users />,
    title: "Transparência",
    description: "Elaboramos contratos e produzimos relatórios com resultados dos projetos. Damos suporte para marcas e influenciadores durante todo o processo.",
  },
  {
    icon: <Rocket />,
    title: "Diferencial",
    description: "Com o nosso time de performance, ajudamos as empresas em todas as frentes digitais, com o aumento de faturamento, captação e fidelização de clientes.",
  },
  {
    icon: <Star size={32} />,
    title: "Influenciadores",
    description: "Campanhas com os maiores influenciadores do país, trabalhamos com produtores de conteúdo que possuem credibilidade com seus seguidores.",
  },
  {
    icon: <ClipboardList />,
    title: "Consultoria",
    description: "Dispomos de uma equipe especializada em planejamento estratégico para orientar sua empresa a ampliar os resultados.",
  },
  {
    icon: <LayoutGrid />,
    title: "Social Media",
    description: "Desenvolvimento de conteúdo e peças gráficas voltadas para fortalecimento da marca nas mídias digitais.",
  },
];