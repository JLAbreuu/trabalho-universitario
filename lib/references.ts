export interface Reference {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  url?: string;
  color: string;
}

export const references: Reference[] = [
  {
    id: "ref-1",
    title: "OECD (2017). Water Governance in Brazil",
    category: "Governança & Políticas",
    tags: ["Governança", "Políticas Públicas", "Institucional"],
    description: "Análise profunda sobre a coordenação multinível no setor de água e saneamento.",
    color: "#5856D6", // Indigo
  },
  {
    id: "ref-2",
    title: "IBGE. Censo Demográfico 2022",
    category: "Dados Populacionais",
    tags: ["Dados", "Demografia", "IBGE", "Desigualdade"],
    description: "Informações atualizadas sobre as condições de habitação e acesso a serviços básicos.",
    color: "#007AFF", // Blue
  },
  {
    id: "ref-3",
    title: "SNIS. Diagnóstico do Saneamento 2023",
    category: "Infraestrutura",
    tags: ["Infraestrutura", "SNIS", "Dados", "Água", "Esgoto"],
    description: "O maior banco de dados sobre a prestação de serviços de saneamento no Brasil.",
    color: "#FF9500", // Orange
  },
  {
    id: "ref-4",
    title: "WORLD BANK GROUP. The Water State of Brazil",
    category: "Economia & Sustentabilidade",
    tags: ["Economia", "Sustentabilidade", "Banco Mundial", "Investimentos"],
    description: "Relatórios sobre o impacto econômico e social do saneamento no desenvolvimento nacional.",
    color: "#34C759", // Green
  },
  {
    id: "ref-5",
    title: "Novo Marco Legal (Lei 14.026/20)",
    category: "Legislação",
    tags: ["Legislação", "Marco Legal", "Universalização", "Regulação"],
    description: "Texto oficial e diretrizes para a universalização do saneamento até 2033.",
    color: "#FF3B30", // Red
  },
  {
    id: "ref-6",
    title: "WHO/UNICEF (2021). Progress on WASH",
    category: "Saúde Global",
    tags: ["Saúde Pública", "Internacional", "OMS", "UNICEF"],
    description: "Dados globais comparativos sobre higiene, água e esgoto.",
    color: "#AF52DE", // Purple
  }
];

// Helper para obter todas as tags únicas
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  references.forEach(ref => {
    ref.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};
