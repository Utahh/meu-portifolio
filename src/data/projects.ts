export type Project = {
  name: string;
  tag: string;
  description: string;
  accent: "sky" | "terracotta";
  // image?: string — adicione o caminho do logo/print em /public/projects quando disponível
};

export const company = {
  name: "ADDAI",
  role: "Consultoria e Tecnologia · Fundador",
  description:
    "Empresa que fundei com o propósito de facilitar a tomada de decisões a partir de dados e inteligência artificial. Reúne os produtos e projetos abaixo.",
};

export const projects: Project[] = [
  {
    name: "CITData",
    tag: "Observatório de dados municipais",
    description:
      "Painel que dá a gestores públicos uma visão de 360° sobre o desempenho do município, cruzando indicadores para apoiar decisões mais informadas.",
    accent: "sky",
  },
  {
    name: "Nous",
    tag: "Gestão centralizada",
    description:
      "Plataforma para empresas centralizarem suas operações em um único lugar, com mais controle, visibilidade e gestão do negócio.",
    accent: "terracotta",
  },
  {
    name: "Sistemas ERP",
    tag: "Sob medida para lojas",
    description:
      "Desenvolvimento de sistemas ERP para lojas, com foco em processos simples, confiáveis e adaptados à realidade de cada negócio.",
    accent: "sky",
  },
  {
    name: "Sites Imobiliários",
    tag: "Corretores & imobiliárias",
    description:
      "Sites institucionais e de captação para corretores e imobiliárias, unindo design, performance e geração de leads.",
    accent: "terracotta",
  },
];
