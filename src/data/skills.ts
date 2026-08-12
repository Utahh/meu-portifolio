export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Dados & BI",
    note: "Uso diário",
    items: ["SQL", "Excel Avançado", "Power BI", "Python (Pandas, NumPy)"],
  },
  {
    title: "Cloud & Engenharia",
    note: "Em especialização",
    items: ["Microsoft Azure", "Data Factory", "MongoDB (NoSQL)"],
  },
  {
    title: "Ferramentas & Sistemas",
    note: "Aplicado em projetos",
    items: ["DevExpress", "CRM", "Mautic", "ERP", "Migração de infraestrutura"],
  },
];
