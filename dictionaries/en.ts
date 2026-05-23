export const en = {
  accessibility: {
    title: "Accessibility",
    textSize: "Text Size",
    reduceMotion: "Reduce Motion",
    increaseContrast: "Increase Contrast",
    boldText: "Bold Text",
    presentationMode: "Presentation Mode",
    language: "Language / Idioma",
  },
  hero: {
    badge: "Systemic and Structural Analysis",
    title: "The",
    titleHighlight: "Invisible",
    titleEnd: "Sanitation Crisis.",
    descriptionStart: "A deep exploration of basic sanitation in Brazil from the perspective of ",
    descriptionBold1: "municipal fiscal management",
    descriptionMiddle: ", market failures, Game Theory, and ",
    descriptionBold2: "socio-environmental inequalities",
    descriptionEnd: "."
  },
  footer: {
    hubBadge: "REFERENCES HUB",
    title: "Bibliographic Collection",
    description: "Explore the database, literature, and legislation that support our systemic analysis of Sanitation in Brazil.",
    filterTheme: "Filter by theme:",
    allThemes: "All Themes",
    all: "All",
    credits: "© 2026 • Academic Sanitation Project"
  },
  layeredJourney: {
    header: {
      titleStart: "What we will ",
      titleHighlight: "cover today",
      description: "A layered journey — from symptom to root. Understand the gears that drive (or block) sanitation."
    },
    cards: [
      {
        title: "The Visible Problem",
        subtitle: "Numbers, reality, and what the 2022 Census reveals",
      },
      {
        title: "Structural Inequality",
        subtitle: "How municipal fragmentation worsens the crisis",
      },
      {
        title: "How the System Works",
        subtitle: "Coordination, incentives, and market failures",
      },
      {
        title: "Root Causes",
        subtitle: "Mental models and structures that perpetuate the crisis",
      },
      {
        title: "Systemic Solutions",
        subtitle: "ESG, the new legal framework, and market opportunities",
      }
    ]
  },
  sanitationIceberg: {
    badge: "SYSTEMIC MAPPING",
    titleStart: "The Theory behind the ",
    titleHighlight: "Sanitation Deficit",
    description: "We explore the failures of municipal coordination and sector fragmentation, analyzing the influence of the New Legal Framework and the role of the ESG agenda in overcoming the crisis.",
    button: "Explore the System",
    svg: {
      visibleHidden: "VISIBLE / HIDDEN",
      lackOfWater: "LACK OF WATER",
      localSewage: "LOCAL SEWAGE",
      fiscalManagement: "FISCAL MANAGEMENT",
      coordination: "COORDINATION",
      incentives: "INCENTIVES"
    }
  },
  visibleProblem: {
    badge: "01 — THE VISIBLE PROBLEM",
    titleStart: "Brazil has ",
    titleHighlight: "two faces",
    description: "The sanitation crisis is not uniform. It is concentrated, unequal, and exposes the deep fractures of Brazilian infrastructure.",
    cards: [
      { value: "100M+", label: "People without access to drinking water" },
      { value: "33M+", label: "Living in areas without sewage networks" },
      { value: "40%", label: "Of the population exposed to health risks" },
      { value: "R$15B", label: "Annual investment required" }
    ],
    chart: {
      title: "Sewage network coverage by region",
      subtitle: "Significant disparities in access to basic services (2022 Census)",
      mapHintDesktop: "Hover over the region",
      mapHintMobile: "Tap the region to see data",
      observationTab: "Observation",
      defaultObservation: "Select a region on the map to see a detailed analysis of the sanitation deficit and coverage challenges.",
      stats: [
        { label: "Difference Southeast × North", value: "64 p.p." },
        { label: "Legal Framework 2033 Target", value: "90%" },
        { label: "Regions below target", value: "4 of 5" },
        { label: "Estimated national average", value: "54%" }
      ],
      source: "Source:"
    },
    regions: {
      norte: {
        name: "North",
        observation: "Only 18% coverage — the largest deficit in the country. States like Amazonas and Pará lack historical investment in sanitary infrastructure."
      },
      nordeste: {
        name: "Northeast",
        observation: "38% coverage. Deep racial and fiscal inequality; black and mixed-race populations are most affected by the absence of treated sewage."
      },
      "centro-oeste": {
        name: "Midwest",
        observation: "58% coverage. Region with economic expansion, but severe urban-rural disparities. Agribusiness coexists with a sanitary deficit."
      },
      sudeste: {
        name: "Southeast",
        observation: "82% coverage — the best index. Concentrates a large part of historical investments, but peripheries of SP and RJ still suffer sanitary exclusion."
      },
      sul: {
        name: "South",
        observation: "72% coverage. Greater planned urbanization and less regional inequality, but still far from the 90% target by 2033."
      }
    }
  },
  structuralInequality: {
    badge: "02 — STRUCTURAL INEQUALITY",
    titleStart: "A deficit that has a ",
    titleHighlight: "color and an address",
    description: "The sanitary crisis in Brazil is not a geographical accident, but the result of a segregating urbanization model.",
    cards: [
      {
        title: "Geographical segregation",
        description: "Lower-income communities are concentrated in peripheral areas with inadequate infrastructure. Slums, hills, and distant districts historically receive less investment in basic sanitation."
      },
      {
        title: "Racial segregation",
        description: "The black population represents 56% of Brazilians in extreme poverty. The lack of access to drinking water and sanitation is even more critical in these populations, perpetuating cycles of inequality and disease."
      },
      {
        title: "Informality as a pretext",
        description: "Informal settlements serve as a justification for governmental inaction. The lack of land regularization is used as an argument to deny investments in sanitation, leaving millions without basic access."
      },
      {
        title: "Gender and vulnerability",
        description: "Women and girls face disproportionate risks when there is a lack of sanitation. The absence of adequate bathrooms prevents school attendance and increases vulnerability to harassment and abuse."
      }
    ]
  },
  externalities: {
    badge: "03 — HOW THE SYSTEM WORKS",
    titleStart: "Three market failures that ",
    titleHighlight: "reinforce each other",
    description: "Sanitation is a classic case where the market alone cannot deliver an efficient result without strong regulation.",
    cards: [
      {
        title: "Natural Monopoly",
        points: [
          "Piping networks require massive investment",
          "Low marginal cost after installation",
          "Difficult competition in the sanitation market",
          "Weak regulation allows monopoly exploitation"
        ]
      },
      {
        title: "Negative Externalities",
        points: [
          "Tragedy of the Commons — shared resource",
          "River pollution affects entire communities",
          "Costs not internalized by companies",
          "Government does not charge for environmental damage"
        ]
      },
      {
        title: "Information Asymmetry",
        points: [
          "Citizen doesn't know real water quality",
          "Companies know the true condition",
          "Lack of transparency in public reports",
          "Market cannot function without data"
        ]
      }
    ]
  },
  nashEquilibrium: {
    badge: "04 — THE INCENTIVE TRAP",
    titleStart: "Nash Equilibrium in ",
    titleHighlight: "Sanitation",
    description: "When individual rational decision leads to collective disaster. A cooperation dilemma that stalls regional progress.",
    riverDown: "Downstream",
    riverUp: "Upstream",
    municipalityA: "Municipality A (downstream)",
    municipalityB: "Municipality B (upstream)",
    decision: "Decision",
    result: "Result",
    invests: "Invests in treatment",
    notInvests: "Does not invest — dumps sewage",
    loss: "Loss without counterpart",
    profit: "Private profit, social cost",
    vs: "VS",
    infoText: "The river arrives polluted by B regardless of whether A invests.",
    conclusionBold: "The Nash Equilibrium:",
    conclusionText: " When A realizes that B will not invest, A's rational decision is also not to invest. The system is locked in a state of mutual pollution, even if cooperation were better for everyone."
  },
  icebergModel: {
    badge: "05 — ICEBERG MODEL",
    titleStart: "What we see is ",
    titleHighlight: "just the tip",
    layers: [
      {
        title: "EVENTS",
        visibility: "(visible)",
        description: "What happens now: Polluted rivers, rationing, and waterborne diseases that overload the health system."
      },
      {
        title: "PATTERNS",
        visibility: "",
        description: "What has been happening: Low investments for decades, unfinished works, and reactive rather than preventive maintenance."
      },
      {
        title: "STRUCTURES",
        visibility: "(submerged)",
        description: "How the system is organized: Nash dilemma between municipalities, unequal fiscal federalism, and unstable regulatory frameworks."
      },
      {
        title: "MENTAL MODELS",
        visibility: "(root)",
        description: "What people believe: The perception that 'sanitation is underground work that doesn't generate votes'."
      }
    ],
    depth: "DEPTH",
    insightStart: "\"The right question is not ",
    insightHighlight: "'why is there no money?'",
    insightEnd: " — it is 'why do incentives not align those who decide with those who pay the cost?'\""
  },
  newLegalFramework: {
    badge: "06 — THE NEW LEGAL FRAMEWORK",
    titleStart: "Law 14.026/2020 — ",
    titleHighlight: "Opportunity and Risks",
    description: "The law represents the largest rearrangement of Brazilian sanitation in decades. Efficient implementation is the decisive factor for success.",
    proposalsTitle: "What the law proposes",
    proposals: [
      { title: "Universalization Goals", description: "99% drinking water and 90% sewage collection/treatment by 2033." },
      { title: "Forced Regionalization", description: "Grouping of municipalities to guarantee economic viability." },
      { title: "Free Competition", description: "End of program contracts without bidding (state-owned companies)." }
    ],
    risksTitle: "Risks and challenges",
    risks: [
      { title: "Municipal Resistance", description: "Mayors are reluctant to lose autonomy over fees and services." },
      { title: "Private Cherry Picking", description: "Interest only in profitable areas, ignoring peripheries and rural zones." },
      { title: "Regulatory Capacity", description: "ANA needs to standardize thousands of municipal and state norms." }
    ]
  },
  stakeholdersGrid: {
    badge: "STAKEHOLDERS",
    titleStart: "Who has the power to ",
    titleHighlight: "change",
    description: "The sanitation system is driven by a complex network of actors with divergent interests and complementary capabilities.",
    stakeholders: [
      {
        name: "Federal Government",
        power: "High power · Slow action",
        description: "Defines national guidelines and releases large volumes of resources via public banks."
      },
      {
        name: "ANA",
        power: "Normative power",
        description: "National Water Agency: the new 'sheriff' of the sector, standardizes norms and goals."
      },
      {
        name: "Municipalities",
        power: "Granting power",
        description: "Owners of the service in practice. They decide between privatization or keeping state-owned companies."
      },
      {
        name: "Private Sector",
        power: "Capital and Efficiency",
        description: "Seeks return on investment through long-term concession contracts."
      },
      {
        name: "Communities",
        power: "Demand power",
        description: "The most interested and those who suffer the most from the lack of basic service."
      },
      {
        name: "ESG Investors",
        power: "Selective Financing",
        description: "Demand clear environmental and social goals to provide capital to the sector."
      }
    ]
  },
  esgAgenda: {
    badge: "07 — ESG AGENDA & WAY OUT",
    titleStart: "The three pillars that must ",
    titleHighlight: "advance together",
    description: "Universal sanitation depends on an integrated approach that balances sustainability, social impact, and institutional rigor.",
    pillars: [
      {
        title: "Environmental",
        items: ["Preservation of springs", "Recovery of watersheds", "Reduction of water loss in the network", "Energy efficiency in pumps"]
      },
      {
        title: "Social",
        items: ["Universal access by postal code", "Social tariff for vulnerable families", "Preventive public health", "Dignity and menstrual hygiene"]
      },
      {
        title: "Governance",
        items: ["Fiscal and tariff transparency", "Legal security in contracts", "Separation between operation and regulation", "Combating the inertia of incentives"]
      }
    ],
    foundationTitleStart: "Without the ",
    foundationTitleHighlight: "G (Governance)",
    foundationTitleEnd: ", E and S are not sustainable.",
    foundationDescription: "Regulatory stability and contractual clarity are the necessary foundations to attract green capital and the execution guarantees that transform intentions into real access and dignity for the population."
  },
  systemicLoops: {
    badge: "WHY IT PERSISTS — SYSTEMIC TRAPS",
    titleStart: "Four loops that ",
    titleHighlight: "self-reinforce",
    description: "The sanitation deficit is maintained by vicious cycles where the lack of political and economic incentives halts development.",
    loops: [
      {
        title: "The Deterioration Loop",
        cycle: ["No investment", "Deterioration", "No revenue", "No investment"],
        description: "Lack of maintenance reduces efficiency, which decreases revenue, preventing new capital contributions."
      },
      {
        title: "The Electoral Loop",
        cycle: ["Invisible works", "Low appeal", "Political inertia", "Invisible works"],
        description: "Underground pipes are not seen by voters, incentivizing spending on short-term superficial projects."
      },
      {
        title: "The Distrust Loop",
        cycle: ["Legal insecurity", "High risk", "Capital flight", "Legal insecurity"],
        description: "Fragile contracts drive away institutional investors, keeping the sector dependent on scarce public budgets."
      },
      {
        title: "The Exclusion Loop",
        cycle: ["Informal area", "No network", "Social cost", "Informal area"],
        description: "Irregular zones do not receive official networks, forcing palliative solutions that generate diseases and health costs."
      }
    ]
  },
  manifestoOutro: {
    badge: "FINAL INSIGHT",
    titleStart: "This is not a technical problem.<br />",
    titleHighlight: "It is a political problem.",
    description: "The technology exists. The money could exist. What is missing is the system of incentives, institutions, and accountability that makes investment rational — and exclusion unacceptable.",
    solutions: [
      { label: "Redesign incentives" },
      { label: "Reform fiscal federalism" },
      { label: "Real ESG standards" },
      { label: "Price externalities" },
      { label: "Radical accountability" },
      { label: "Cooperation between entities" }
    ]
  }
};
