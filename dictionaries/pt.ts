export const pt = {
  accessibility: {
    title: "Acessibilidade",
    textSize: "Tamanho do Texto",
    reduceMotion: "Reduzir Movimento",
    increaseContrast: "Aumentar Contraste",
    boldText: "Texto em Negrito",
    presentationMode: "Modo Apresentação",
    language: "Idioma / Language",
  },
  hero: {
    badge: "Análise Sistêmica e Estrutural",
    title: "A Crise",
    titleHighlight: "Invisível",
    titleEnd: "do Saneamento.",
    descriptionStart: "Uma exploração profunda do saneamento básico no Brasil sob a ótica da ",
    descriptionBold1: "gestão fiscal municipal",
    descriptionMiddle: ", falhas de mercado, Teoria dos Jogos e as ",
    descriptionBold2: "desigualdades socioambientais",
    descriptionEnd: "."
  },
  footer: {
    hubBadge: "HUB DE REFERÊNCIAS",
    title: "Acervo Bibliográfico",
    description: "Explore a base de dados, literatura e legislação que fundamentam a nossa análise sistêmica sobre o Saneamento no Brasil.",
    filterTheme: "Filtrar por tema:",
    allThemes: "Todos os Temas",
    all: "Todos",
    credits: "© 2026 • Projeto Acadêmico Saneamento"
  },
  layeredJourney: {
    header: {
      titleStart: "O que vamos ",
      titleHighlight: "cobrir hoje",
      description: "Uma jornada por camadas — do sintoma à raiz. Entenda as engrenagens que movem (ou travam) o saneamento."
    },
    cards: [
      {
        title: "O Problema Visível",
        subtitle: "Números, realidade e o que o Censo 2022 revela",
      },
      {
        title: "Desigualdade Estrutural",
        subtitle: "Como a fragmentação municipal agrava a crise",
      },
      {
        title: "Como o Sistema Funciona",
        subtitle: "Coordenação, incentivos e falhas de mercado",
      },
      {
        title: "Causas Raiz",
        subtitle: "Modelos mentais e estruturas que perpetuam a crise",
      },
      {
        title: "Soluções Sistêmicas",
        subtitle: "ESG, novo marco legal e oportunidades de mercado",
      }
    ]
  },
  sanitationIceberg: {
    badge: "MAPEAMENTO SISTÊMICO",
    titleStart: "A Teoria por trás do ",
    titleHighlight: "Déficit Sanitário",
    description: "Exploramos as falhas de coordenação municipal e a fragmentação do setor, analisando a influência do Novo Marco Legal e o papel da agenda ESG na superação da crise.",
    button: "Explorar o Sistema",
    svg: {
      visibleHidden: "VISÍVEL / OCULTO",
      lackOfWater: "FALTA DE ÁGUA",
      localSewage: "ESGOTO LOCAL",
      fiscalManagement: "GESTÃO FISCAL",
      coordination: "COORDENAÇÃO",
      incentives: "INCENTIVOS"
    }
  },
  visibleProblem: {
    badge: "01 — O PROBLEMA VISÍVEL",
    titleStart: "O Brasil tem ",
    titleHighlight: "duas faces",
    description: "A crise de saneamento não é uniforme. Está concentrada, é desigual e expõe as fraturas profundas da infraestrutura brasileira.",
    cards: [
      { value: "100M+", label: "Pessoas sem acesso a água potável" },
      { value: "33M+", label: "Vivendo em áreas sem rede de esgoto" },
      { value: "40%", label: "Da população exposta a riscos sanitários" },
      { value: "R$15B", label: "Investimento necessário anualmente" }
    ],
    chart: {
      title: "Cobertura de rede de esgoto por região",
      subtitle: "Disparidades significativas de acesso aos serviços básicos (Censo 2022)",
      mapHintDesktop: "Passe o cursor sobre a região",
      mapHintMobile: "Toque na região para ver dados",
      observationTab: "Observação",
      defaultObservation: "Selecione uma região no mapa para ver análise detalhada sobre o déficit sanitário e os desafios de cobertura.",
      stats: [
        { label: "Diferença Sudeste × Norte", value: "64 p.p." },
        { label: "Meta do Marco Legal 2033", value: "90%" },
        { label: "Regiões abaixo da meta", value: "4 de 5" },
        { label: "Média nacional estimada", value: "54%" }
      ],
      source: "Fonte:"
    },
    regions: {
      norte: {
        name: "Norte",
        observation: "Apenas 18% de cobertura — o maior déficit do país. Estados como Amazonas e Pará carecem de investimento histórico em infraestrutura sanitária."
      },
      nordeste: {
        name: "Nordeste",
        observation: "38% de cobertura. Desigualdade racial e fiscal profunda; populações negras e pardas são as mais afetadas pela ausência de esgoto tratado."
      },
      "centro-oeste": {
        name: "Centro-Oeste",
        observation: "58% de cobertura. Região em expansão econômica, mas com disparidades urbano-rurais severas. O agronegócio coexiste com déficit sanitário."
      },
      sudeste: {
        name: "Sudeste",
        observation: "82% de cobertura — o melhor índice. Concentra grande parte dos investimentos históricos, mas periferias de SP e RJ ainda sofrem exclusão sanitária."
      },
      sul: {
        name: "Sul",
        observation: "72% de cobertura. Maior urbanização planejada e menor desigualdade regional, mas ainda distante da meta de 90% até 2033."
      }
    }
  },
  structuralInequality: {
    badge: "02 — DESIGUALDADE ESTRUTURAL",
    titleStart: "Um déficit que tem ",
    titleHighlight: "cor e endereço",
    description: "A crise sanitária no Brasil não é um acidente geográfico, mas o resultado de um modelo de urbanização segregador.",
    cards: [
      {
        title: "Segregação geográfica",
        description: "As comunidades com menor renda concentram-se em áreas periféricas com infraestrutura inadequada. Favelas, morros e distritões afastados do centro urbano historicamente recebem menos investimento em saneamento básico."
      },
      {
        title: "Segregação racial",
        description: "A população negra representa 56% dos brasileiros em situação de pobreza extrema. A falta de acesso a água potável e saneamento é ainda mais crítica nessas populações, perpetuando ciclos de desigualdade e doença."
      },
      {
        title: "Informalidade como pretexto",
        description: "Assentamentos informais servem como justificativa para a inação governamental. A falta de regularização fundiária é usada como argumento para negar investimentos em saneamento, deixando milhões sem acesso básico."
      },
      {
        title: "Gênero e vulnerabilidade",
        description: "Mulheres e meninas enfrentam riscos desproporcionais quando há falta de saneamento. Ausência de banheiros adequados impede frequência escolar e aumenta vulnerabilidade a assédio e abuso."
      }
    ]
  },
  externalities: {
    badge: "03 — COMO O SISTEMA FUNCIONA",
    titleStart: "Três falhas de mercado que ",
    titleHighlight: "se reforçam",
    description: "O saneamento é um caso clássico onde o mercado sozinho não consegue entregar um resultado eficiente sem regulação forte.",
    cards: [
      {
        title: "Monopólio Natural",
        points: [
          "Redes de tubulação exigem investimento massivo",
          "Custo marginal baixo após instalação",
          "Difícil competição em mercado de saneamento",
          "Regulação fraca permite exploração de monopólio"
        ]
      },
      {
        title: "Externalidades Negativas",
        points: [
          "Tragédia dos Comuns — recurso compartilhado",
          "Poluição de rios afeta comunidades inteiras",
          "Custos não internalizados pelas empresas",
          "Governo não cobra pelo dano ambiental"
        ]
      },
      {
        title: "Assimetria de Informação",
        points: [
          "Cidadão desconhece qualidade real da água",
          "Empresas conhecem verdadeira condição",
          "Falta transparência em relatórios públicos",
          "Mercado não consegue funcionar sem dados"
        ]
      }
    ]
  },
  nashEquilibrium: {
    badge: "04 — A ARMADILHA DOS INCENTIVOS",
    titleStart: "Equilíbrio de Nash no ",
    titleHighlight: "Saneamento",
    description: "Quando a decisão racional individual leva ao desastre coletivo. Um dilema de cooperação que trava o progresso regional.",
    riverDown: "Rio Abaixo (Jusante)",
    riverUp: "Rio Acima (Montante)",
    municipalityA: "Município A (rio abaixo)",
    municipalityB: "Município B (rio acima)",
    decision: "Decisão",
    result: "Resultado",
    invests: "Investe em tratamento",
    notInvests: "Não investe — despeja esgoto",
    loss: "Prejuízo sem contrapartida",
    profit: "Lucro privado, custo social",
    vs: "VS",
    infoText: "O rio chega poluído por B independentemente de A investir.",
    conclusionBold: "O Equilíbrio de Nash:",
    conclusionText: " Quando A percebe que B não vai investir, a decisão racional de A também é não investir. O sistema trava em um estado de poluição mútua, mesmo que a cooperação fosse melhor para todos."
  },
  icebergModel: {
    badge: "05 — MODELO ICEBERG",
    titleStart: "O que vemos é ",
    titleHighlight: "só a ponta",
    layers: [
      {
        title: "EVENTOS",
        visibility: "(visíveis)",
        description: "O que acontece agora: Rios poluídos, racionamento e doenças de veiculação hídrica que sobrecarregam o SUS."
      },
      {
        title: "PADRÕES",
        visibility: "",
        description: "O que vem acontecendo: Investimentos baixos por décadas, obras inacabadas e manutenção reativa em vez de preventiva."
      },
      {
        title: "ESTRUTURAS",
        visibility: "(submersas)",
        description: "Como o sistema está organizado: Dilema de Nash entre municípios, federalismo fiscal desigual e marcos regulatórios instáveis."
      },
      {
        title: "MODELOS MENTAIS",
        visibility: "(raiz)",
        description: "O que as pessoas acreditam: A percepção de que 'saneamento é obra debaixo da terra que não gera votos'."
      }
    ],
    depth: "PROFUNDIDADE",
    insightStart: "\"A pergunta certa não é ",
    insightHighlight: "'por que não há dinheiro?'",
    insightEnd: " — é 'por que os incentivos não alinham quem decide com quem paga o custo?'\""
  },
  newLegalFramework: {
    badge: "06 — O NOVO MARCO LEGAL",
    titleStart: "Lei 14.026/2020 — ",
    titleHighlight: "Oportunidade e Riscos",
    description: "A lei representa o maior reordenamento do saneamento brasileiro em décadas. A implementação eficiente é o fator decisivo para o sucesso.",
    proposalsTitle: "O que a lei propõe",
    proposals: [
      { title: "Metas de Universalização", description: "99% de água potável e 90% de coleta/tratamento de esgoto até 2033." },
      { title: "Regionalização forçada", description: "Agrupamento de municípios para garantir viabilidade econômica." },
      { title: "Livre Concorrência", description: "Fim dos contratos de programa sem licitação (estatais)." }
    ],
    risksTitle: "Riscos e desafios",
    risks: [
      { title: "Resistência Municipal", description: "Prefeitos relutam em perder autonomia sobre taxas e serviços." },
      { title: "Cherry Picking Privado", description: "Interesse apenas em áreas rentáveis, ignorando periferias e zonas rurais." },
      { title: "Capacidade de Regulação", description: "ANA precisa padronizar milhares de normas municipais e estaduais." }
    ]
  },
  stakeholdersGrid: {
    badge: "STAKEHOLDERS",
    titleStart: "Quem tem o poder de ",
    titleHighlight: "mudar",
    description: "O sistema de saneamento é movido por uma complexa rede de atores com interesses divergentes e capacidades complementares.",
    stakeholders: [
      {
        name: "Governo Federal",
        power: "Alto poder · Ação lenta",
        description: "Define diretrizes nacionais e libera grandes volumes de recursos via bancos públicos."
      },
      {
        name: "ANA",
        power: "Poder normativo",
        description: "Agência Nacional de Águas: a nova 'xerife' do setor, padroniza normas e metas."
      },
      {
        name: "Municípios",
        power: "Poder concedente",
        description: "Donos do serviço na prática. Decidem entre privatização ou manter estatais."
      },
      {
        name: "Setor Privado",
        power: "Capital e Eficiência",
        description: "Busca retorno sobre investimento através de contratos de concessão a longo prazo."
      },
      {
        name: "Comunidades",
        power: "Poder de demanda",
        description: "As maiores interessadas e as que mais sofrem com a falta do serviço básico."
      },
      {
        name: "Investidores ESG",
        power: "Financiamento Seletivo",
        description: "Exigem metas ambientais e sociais claras para aportar capital no setor."
      }
    ]
  },
  esgAgenda: {
    badge: "07 — AGENDA ESG & SAÍDA",
    titleStart: "Os três pilares que precisam ",
    titleHighlight: "avançar juntos",
    description: "A universalização do saneamento depende de uma abordagem integrada que equilibre sustentabilidade, impacto social e rigor institucional.",
    pillars: [
      {
        title: "Environmental",
        items: ["Preservação de mananciais", "Recuperação de bacias hidrográficas", "Redução de perdas de água na rede", "Eficiência energética em bombas"]
      },
      {
        title: "Social",
        items: ["Universalização do acesso por CEP", "Tarifa social para famílias vulneráveis", "Saúde pública preventiva", "Dignidade e higiene menstrual"]
      },
      {
        title: "Governance",
        items: ["Transparência fiscal e tarifária", "Segurança jurídica em contratos", "Separação entre operação e regulação", "Combate à inércia dos incentivos"]
      }
    ],
    foundationTitleStart: "Sem o ",
    foundationTitleHighlight: "G (Governança)",
    foundationTitleEnd: ", E e S não se sustentam.",
    foundationDescription: "A estabilidade regulatória e a clareza contratual são as fundações necessárias para atrair o capital verde e as garantias de execução que transformam intenções em acesso real e dignidade para a população."
  },
  systemicLoops: {
    badge: "POR QUE PERSISTE — ARMADILHAS SISTÊMICAS",
    titleStart: "Quatro loops que se ",
    titleHighlight: "auto-reforçam",
    description: "O déficit sanitário é mantido por ciclos viciosos onde a falta de incentivos políticos e econômicos trava o desenvolvimento.",
    loops: [
      {
        title: "O Loop da Deterioração",
        cycle: ["Sem investimento", "Deterioração", "Sem receita", "Sem investimento"],
        description: "A falta de manutenção reduz a eficiência, o que diminui a arrecadação, impedindo novos aportes de capital."
      },
      {
        title: "O Loop Eleitoral",
        cycle: ["Obras invisíveis", "Baixo apelo", "Inércia política", "Obras invisíveis"],
        description: "Tubulações enterradas não são vistas pelo eleitor, incentivando gastos em projetos superficiais de curto prazo."
      },
      {
        title: "O Loop da Desconfiança",
        cycle: ["Insegurança jurídica", "Risco alto", "Fuga de capital", "Insegurança jurídica"],
        description: "Contratos frágeis afastam investidores institucionais, mantendo o setor dependente de orçamentos públicos escassos."
      },
      {
        title: "O Loop da Exclusão",
        cycle: ["Área informal", "Sem rede", "Custo social", "Área informal"],
        description: "Zonas irregulares não recebem rede oficial, forçando soluções paliativas que geram doenças e gastos em saúde."
      }
    ]
  },
  manifestoOutro: {
    badge: "INSIGHT FINAL",
    titleStart: "Este não é um problema técnico.<br />",
    titleHighlight: "É um problema político.",
    description: "A tecnologia existe. O dinheiro poderia existir. O que falta é o sistema de incentivos, instituições e accountability que torna o investimento racional — e a exclusão inaceitável.",
    solutions: [
      { label: "Redesenhar incentivos" },
      { label: "Reformar federalismo fiscal" },
      { label: "Padrões ESG reais" },
      { label: "Precificar externalidades" },
      { label: "Accountability radical" },
      { label: "Cooperação entre entes" }
    ]
  }
};
