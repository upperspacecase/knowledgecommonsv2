const strings = {
  en: {
    // Global
    siteName: "Land Library",
    siteTagline: "Your land, made legible",
    languageToggle: "PT",

    // Navigation
    navHome: "Home",
    navNewPassport: "New Passport",
    navDashboard: "Dashboard",

    // Home page
    heroTitle: "Give your land a voice",
    heroSubtitle:
      "The Land Passport creates a living knowledge profile for your property — assembling what you know with what the earth already knows.",
    heroAction: "Create your Land Passport",
    heroFireHook: "Is your land fire-ready?",
    heroFireHookSub:
      "Your Land Passport includes a fire preparedness section — what to do before, during, and after fire season.",

    // Value props
    valueTitle: "What the Land Passport does",
    value1Title: "Maps your boundary",
    value1Desc:
      "Draw the outline of your property on the map. An intimate act of saying: this is mine, this is what I'm responsible for.",
    value2Title: "Learns your land",
    value2Desc:
      "Soil, water, plants, fire risk — captured through a conversation, not a government form.",
    value3Title: "Enriches with public data",
    value3Desc:
      "Your passport pulls in seasonal climate patterns, bioregional context, and geological layers automatically.",
    value4Title: "Creates a living document",
    value4Desc:
      "Share it, build on it, return to it. Your land, rendered intelligently.",

    // Onboarding
    onboardingTitle: "Create your Land Passport",
    onboardingIntro:
      "This begins with you drawing the outline of your property, then unfolds as a conversation in chapters. Each chapter captures what you know. The platform adds what it can from open sources.",
    onboardingStart: "Begin",
    onboardingNext: "Next chapter",
    onboardingPrev: "Previous",
    onboardingFinish: "Create my passport",
    onboardingSaving: "Saving...",

    // Property basics
    basicsTitle: "Your property",
    basicsName: "Give your property a name",
    basicsNamePlaceholder: "e.g., Quinta da Serra",
    basicsOwner: "Your name",
    basicsOwnerPlaceholder: "e.g., Maria Silva",

    // Chapter: Boundary
    chapterBoundaryTitle: "Draw your boundary",
    chapterBoundaryDesc:
      "Click on the map to draw the outline of your property. Each click adds a point. Close the shape by clicking near the first point.",
    chapterBoundaryHint: "Use the polygon tool on the left to start drawing",

    // Chapter: Soil
    chapterSoilTitle: "Tell us about your soil",
    chapterSoilDesc:
      "What do you know about the ground beneath your feet? Even a little is valuable.",
    soilTexture: "Soil texture",
    soilTexturePlaceholder: "e.g., Sandy loam, Clay, Rocky...",
    soilPh: "Soil pH (if known)",
    soilPhPlaceholder: "e.g., 6.5",
    soilOrganicMatter: "Organic matter",
    soilOrganicMatterPlaceholder: "e.g., Low, Moderate, Rich...",
    soilLastTest: "Last soil test date",
    soilNotes: "Anything else about your soil?",
    soilNotesPlaceholder:
      "What does it smell like after rain? Where is it deepest? Where does it crack in summer?",

    // Chapter: Water
    chapterWaterTitle: "Where does the water flow?",
    chapterWaterDesc:
      "Water shapes everything. Tell us what you've observed.",
    waterSources: "Water sources (comma-separated)",
    waterSourcesPlaceholder: "e.g., Well, Spring, Stream, Rainwater collection",
    waterFlow: "Flow direction",
    waterFlowPlaceholder: "e.g., North to south slope, collects in lower field",
    waterSeasonal: "Seasonal patterns",
    waterSeasonalPlaceholder:
      "e.g., Stream dries in August, spring flows year-round",
    waterIrrigation: "Irrigation method",
    waterIrrigationPlaceholder: "e.g., Drip, Flood, None",
    waterNotes: "Anything else about water on your land?",
    waterNotesPlaceholder: "Where does it pool? Where is it always dry?",

    // Chapter: Plants
    chapterPlantsTitle: "What grows here?",
    chapterPlantsDesc:
      "Every plant tells a story about what the land wants to become.",
    plantsExisting: "Existing species (comma-separated)",
    plantsExistingPlaceholder: "e.g., Cork oak, Cistus, Lavender, Wild grasses",
    plantsDesired: "Species you'd like to grow",
    plantsDesiredPlaceholder: "e.g., Olive, Almond, Fig, Cover crops",
    plantsCanopy: "Describe the canopy / tree cover",
    plantsCanopyPlaceholder:
      "e.g., Sparse cork oak woodland, mostly open grassland",
    plantsGround: "Describe the ground cover",
    plantsGroundPlaceholder:
      "e.g., Bare soil on slopes, dense undergrowth near stream",
    plantsNotes: "Anything else about what grows on your land?",
    plantsNotesPlaceholder:
      "What volunteers appear each spring? What won't grow no matter what you try?",

    // Chapter: Fire
    chapterFireTitle: "Is your land fire-ready?",
    chapterFireDesc:
      "In Mediterranean climates, fire isn't abstract. This section helps you think through preparedness — and creates a record you can act on.",
    fireRisk: "Perceived fire risk level",
    fireRiskLow: "Low",
    fireRiskMedium: "Medium",
    fireRiskHigh: "High",
    fireRiskUnknown: "I don't know yet",
    fireBreak: "Firebreak status",
    fireBreakPlaceholder: "e.g., 50m cleared perimeter, needs maintenance",
    fireDefensible: "Defensible space",
    fireDefensiblePlaceholder:
      "e.g., 10m cleared around house, fuel load high on east side",
    fireEvacuation: "Evacuation plan",
    fireEvacuationPlaceholder:
      "e.g., Single road access via N120, 15min to town",
    fireLastEvent: "Last fire event",
    fireLastEventPlaceholder: "e.g., 2017, burned northeast corner",
    fireNotes: "Preparedness notes",
    fireNotesPlaceholder:
      "What keeps you up at night? What have you done? What do you still need to do?",

    // Passport display
    passportTitle: "Land Passport",
    passportSubtitle: "A living knowledge profile",
    passportProperty: "Property",
    passportOwner: "Steward",
    passportArea: "Area",
    passportHectares: "hectares",
    passportBioregion: "Bioregion",
    passportClimate: "Climate context",
    passportCompletion: "Knowledge completeness",
    passportCreated: "Passport created",
    passportUpdated: "Last updated",
    passportShare: "Share this passport",
    passportEdit: "Continue building",
    passportSectionSoil: "Soil",
    passportSectionWater: "Water",
    passportSectionPlants: "Plants",
    passportSectionFire: "Fire preparedness",

    // Dashboard
    dashboardTitle: "Land Passports",
    dashboardSubtitle: "Progress toward 15 contributions",
    dashboardCount: "passports created",
    dashboardGoal: "of 15 goal",
    dashboardEmpty: "No passports yet. Be the first to create one.",
    dashboardCreate: "Create a new passport",

    // Footer
    footerText: "Land Library — Knowledge Commons for Land Stewardship",
    footerMilestone: "Milestone 1: The Land Passport",
  },

  pt: {
    // Global
    siteName: "Biblioteca da Terra",
    siteTagline: "A sua terra, tornada legível",
    languageToggle: "EN",

    // Navigation
    navHome: "Início",
    navNewPassport: "Novo Passaporte",
    navDashboard: "Painel",

    // Home page
    heroTitle: "Dê voz à sua terra",
    heroSubtitle:
      "O Passaporte da Terra cria um perfil de conhecimento vivo para a sua propriedade — reunindo o que sabe com o que a terra já sabe.",
    heroAction: "Crie o seu Passaporte da Terra",
    heroFireHook: "A sua terra está preparada para o fogo?",
    heroFireHookSub:
      "O seu Passaporte da Terra inclui uma secção de preparação para incêndios — o que fazer antes, durante e depois da época de fogos.",

    // Value props
    valueTitle: "O que o Passaporte da Terra faz",
    value1Title: "Mapeia os seus limites",
    value1Desc:
      "Desenhe o contorno da sua propriedade no mapa. Um acto íntimo de dizer: isto é meu, sou eu o responsável.",
    value2Title: "Conhece a sua terra",
    value2Desc:
      "Solo, água, plantas, risco de incêndio — capturados através de uma conversa, não de um formulário governamental.",
    value3Title: "Enriquece com dados públicos",
    value3Desc:
      "O seu passaporte integra automaticamente padrões climáticos sazonais, contexto bio-regional e camadas geológicas.",
    value4Title: "Cria um documento vivo",
    value4Desc:
      "Partilhe-o, construa sobre ele, volte a ele. A sua terra, inteligentemente apresentada.",

    // Onboarding
    onboardingTitle: "Crie o seu Passaporte da Terra",
    onboardingIntro:
      "Começa por desenhar o contorno da sua propriedade, e depois desdobra-se como uma conversa em capítulos. Cada capítulo captura o que sabe. A plataforma acrescenta o que pode a partir de fontes abertas.",
    onboardingStart: "Começar",
    onboardingNext: "Próximo capítulo",
    onboardingPrev: "Anterior",
    onboardingFinish: "Criar o meu passaporte",
    onboardingSaving: "A guardar...",

    // Property basics
    basicsTitle: "A sua propriedade",
    basicsName: "Dê um nome à sua propriedade",
    basicsNamePlaceholder: "ex., Quinta da Serra",
    basicsOwner: "O seu nome",
    basicsOwnerPlaceholder: "ex., Maria Silva",

    // Chapter: Boundary
    chapterBoundaryTitle: "Desenhe os seus limites",
    chapterBoundaryDesc:
      "Clique no mapa para desenhar o contorno da sua propriedade. Cada clique adiciona um ponto. Feche a forma clicando perto do primeiro ponto.",
    chapterBoundaryHint:
      "Use a ferramenta de polígono à esquerda para começar a desenhar",

    // Chapter: Soil
    chapterSoilTitle: "Fale-nos do seu solo",
    chapterSoilDesc:
      "O que sabe sobre o chão debaixo dos seus pés? Mesmo pouco é valioso.",
    soilTexture: "Textura do solo",
    soilTexturePlaceholder: "ex., Franco-arenoso, Argiloso, Rochoso...",
    soilPh: "pH do solo (se conhecido)",
    soilPhPlaceholder: "ex., 6.5",
    soilOrganicMatter: "Matéria orgânica",
    soilOrganicMatterPlaceholder: "ex., Baixa, Moderada, Rica...",
    soilLastTest: "Data do último teste de solo",
    soilNotes: "Mais alguma coisa sobre o seu solo?",
    soilNotesPlaceholder:
      "Qual o cheiro depois da chuva? Onde é mais profundo? Onde racha no verão?",

    // Chapter: Water
    chapterWaterTitle: "Para onde flui a água?",
    chapterWaterDesc:
      "A água molda tudo. Diga-nos o que observou.",
    waterSources: "Fontes de água (separadas por vírgula)",
    waterSourcesPlaceholder: "ex., Poço, Nascente, Ribeira, Recolha de chuva",
    waterFlow: "Direcção do fluxo",
    waterFlowPlaceholder:
      "ex., Declive norte-sul, acumula no campo inferior",
    waterSeasonal: "Padrões sazonais",
    waterSeasonalPlaceholder:
      "ex., Ribeira seca em Agosto, nascente corre todo o ano",
    waterIrrigation: "Método de irrigação",
    waterIrrigationPlaceholder: "ex., Gota a gota, Alagamento, Nenhum",
    waterNotes: "Mais alguma coisa sobre a água na sua terra?",
    waterNotesPlaceholder: "Onde se acumula? Onde está sempre seco?",

    // Chapter: Plants
    chapterPlantsTitle: "O que cresce aqui?",
    chapterPlantsDesc:
      "Cada planta conta uma história sobre o que a terra quer tornar-se.",
    plantsExisting: "Espécies existentes (separadas por vírgula)",
    plantsExistingPlaceholder:
      "ex., Sobreiro, Esteva, Alfazema, Gramíneas selvagens",
    plantsDesired: "Espécies que gostaria de cultivar",
    plantsDesiredPlaceholder: "ex., Oliveira, Amendoeira, Figueira, Culturas de cobertura",
    plantsCanopy: "Descreva a cobertura arbórea",
    plantsCanopyPlaceholder:
      "ex., Montado de sobreiros esparso, maioritariamente pastagem aberta",
    plantsGround: "Descreva a cobertura do solo",
    plantsGroundPlaceholder:
      "ex., Solo nu nas encostas, vegetação densa junto à ribeira",
    plantsNotes: "Mais alguma coisa sobre o que cresce na sua terra?",
    plantsNotesPlaceholder:
      "O que aparece espontaneamente cada primavera? O que não cresce por mais que tente?",

    // Chapter: Fire
    chapterFireTitle: "A sua terra está preparada para o fogo?",
    chapterFireDesc:
      "Em climas mediterrânicos, o fogo não é abstracto. Esta secção ajuda-o a pensar na preparação — e cria um registo sobre o qual pode agir.",
    fireRisk: "Nível de risco de incêndio percebido",
    fireRiskLow: "Baixo",
    fireRiskMedium: "Médio",
    fireRiskHigh: "Alto",
    fireRiskUnknown: "Ainda não sei",
    fireBreak: "Estado das faixas corta-fogo",
    fireBreakPlaceholder: "ex., Perímetro de 50m limpo, precisa de manutenção",
    fireDefensible: "Espaço defensável",
    fireDefensiblePlaceholder:
      "ex., 10m limpos à volta da casa, carga combustível alta no lado este",
    fireEvacuation: "Plano de evacuação",
    fireEvacuationPlaceholder:
      "ex., Acesso por estrada única via N120, 15min até à vila",
    fireLastEvent: "Último evento de fogo",
    fireLastEventPlaceholder: "ex., 2017, ardeu o canto nordeste",
    fireNotes: "Notas de preparação",
    fireNotesPlaceholder:
      "O que o preocupa? O que já fez? O que ainda precisa de fazer?",

    // Passport display
    passportTitle: "Passaporte da Terra",
    passportSubtitle: "Um perfil de conhecimento vivo",
    passportProperty: "Propriedade",
    passportOwner: "Guardião",
    passportArea: "Área",
    passportHectares: "hectares",
    passportBioregion: "Bio-região",
    passportClimate: "Contexto climático",
    passportCompletion: "Completude do conhecimento",
    passportCreated: "Passaporte criado",
    passportUpdated: "Última actualização",
    passportShare: "Partilhar este passaporte",
    passportEdit: "Continuar a construir",
    passportSectionSoil: "Solo",
    passportSectionWater: "Água",
    passportSectionPlants: "Plantas",
    passportSectionFire: "Preparação para incêndios",

    // Dashboard
    dashboardTitle: "Passaportes da Terra",
    dashboardSubtitle: "Progresso para 15 contribuições",
    dashboardCount: "passaportes criados",
    dashboardGoal: "de 15 objectivo",
    dashboardEmpty: "Ainda sem passaportes. Seja o primeiro a criar um.",
    dashboardCreate: "Criar um novo passaporte",

    // Footer
    footerText:
      "Biblioteca da Terra — Repositório de Conhecimento para Guardiões da Terra",
    footerMilestone: "Marco 1: O Passaporte da Terra",
  },
} as const;

export type Locale = "en" | "pt";
export type StringKey = keyof (typeof strings)["en"];

export function t(locale: Locale, key: StringKey): string {
  return strings[locale][key];
}

export default strings;
