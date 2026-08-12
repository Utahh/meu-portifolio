export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Analista de Dados",
    company: "Empresa de tecnologia e suporte para cinemas",
    period: "3 anos",
    summary:
      "Da modelagem de pipelines à entrega de dashboards estratégicos, atuando na ponte entre negócio e dados.",
    bullets: [
      "Desenvolvimento de dashboards com DevExpress, integrando SQL Server e MongoDB para gerar insights estratégicos para o negócio.",
      "Monitoramento de rotinas automatizadas, garantindo o correto processamento e a entrega dos dados às áreas envolvidas.",
      "Levantamento de requisitos com usuários, atuando também como analista de produto, traduzindo demandas de negócio em soluções de dados.",
      "Apoio às equipes de CRM e Marketing na segmentação de leads e montagem de campanhas, via Mautic e plataforma interna de segmentação.",
      "Modelagem de pipelines e automação de relatórios: redução de até 80% em tarefas manuais e ganho de 38% em performance após projeto de migração de servidor.",
      "Suporte às áreas de negócio na criação de métricas, acompanhamento de KPIs e análises para tomada de decisão.",
    ],
  },
  {
    role: "Analista de Suporte · Trainee",
    company: "Mesma empresa, início de carreira",
    period: "10 meses",
    summary:
      "Primeira experiência profissional, com atendimento B2B e B2C e suporte técnico ao sistema ERP da empresa.",
    bullets: [
      "Atendimento pós-venda via Livechat, e-mail e Reclame Aqui: cancelamentos, dúvidas e informações sobre programações e promoções.",
      "Suporte técnico remoto a gestores e funcionários de cinemas B2B na configuração e uso do sistema ERP da empresa.",
      "Cadastro e atualização de filmes no sistema, garantindo consistência na exibição das informações.",
      "Atendimento a clientes finais (B2C), solucionando questões de ingressos, promoções e funcionamento do sistema.",
      "Contribuição para a melhoria dos processos de suporte entre cinemas parceiros e consumidores finais.",
    ],
  },
];
