const SERVICES = {
  sdai: {
    slug: 'sdai',
    contactName: 'Sistemas de alarmes e detecção (SDAI)',
    title: 'Sistemas de alarmes e detecção (SDAI)',
    navLabel: 'SDAI',
    navDesc: 'Alarmes e detecção',
    image: './imgs/services/SDAI.png',
    imageAlt: 'Sistema de alarme e detecção de incêndio',
    summary:
      'Sistemas responsáveis por indicar quando e onde há propagação de chamas, evitando o alastramento de fogo e reduzindo perdas materiais e humanas.',
    description:
      'O SDAI (Sistema de Detecção e Alarme de Incêndio) é a primeira linha de resposta em emergências. Detecta fumaça, calor ou chama, aciona alarmes sonoros e visuais e pode integrar portas corta-fogo, elevadores e centrais de monitoramento.',
    highlights: [
      'Projeto, instalação e comissionamento conforme normas técnicas',
      'Detecção por fumaça, temperatura ou chama, conforme o ambiente',
      'Integração com CBMERJ e rotinas de manutenção preventiva',
    ],
  },
  hidrantes: {
    slug: 'hidrantes',
    contactName: 'Equipamentos para hidrantes',
    title: 'Equipamentos para hidrantes',
    navLabel: 'Hidrantes',
    navDesc: 'Equipamentos e sistemas',
    image: './imgs/services/sistemahidrante.jpg',
    imageAlt: 'Sistema de hidrante contra incêndio',
    summary:
      'Sistemas hidráulicos que auxiliam no combate a incêndios e protegem pessoas e patrimônios em situações de emergência.',
    description:
      'Redes de hidrantes, mangotinhos, registros e acessórios garantem pressão e vazão adequadas para o Corpo de Bombeiros e brigadas internas. Dimensionamos e instalamos conforme a ocupação e as exigências do CBMERJ.',
    highlights: [
      'Dimensionamento hidráulico e especificação de materiais',
      'Instalação de hidrantes, mangotinhos e abrigos',
      'Testes de pressão e documentação para regularização',
    ],
  },
  extintores: {
    slug: 'extintores',
    contactName: 'Venda de Extintores',
    title: 'Venda de Extintores e Sinalização',
    navLabel: 'Extintores e Sinalização',
    navDesc: 'Venda e suporte',
    image: './imgs/services/extintores.jpg',
    imageAlt: 'Extintores de incêndio',
    summary:
      'Dispositivos de combate ao princípio de incêndio, com autonomia de ação para atuar diretamente no foco do fogo.',
    description:
      'Fornecemos extintores nas classes adequadas a cada risco (A, B, C, D e K), sinalização de emergência e suporte para recarga, inspeção e substituição conforme a NBR e as exigências do CBMERJ.',
    highlights: [
      'Venda de extintores portáteis e sobre rodas',
      'Sinalização fotoluminescente e placas de emergência',
      'Recarga, manutenção e laudos de conformidade',
    ],
  },
  cmi: {
    slug: 'cmi',
    contactName: 'Instalação e Manutenção de CMI',
    title: 'Casa de Máquinas de Incêndio (CMI)',
    navLabel: 'CMI',
    navDesc: 'Casa de máquinas',
    image: './imgs/services/cmi.webp',
    imageAlt: 'Casa de máquinas de incêndio',
    summary:
      'Compartimento destinado ao abrigo de bombas elétricas de incêndio e apetrechos complementares, sem uso para outro fim.',
    description:
      'A CMI concentra bombas, reservatórios, painéis e acessórios do sistema hidráulico contra incêndio. Executamos instalação, adequação estrutural e manutenção para garantir operação confiável em emergências.',
    highlights: [
      'Projeto e execução de casas de máquinas',
      'Instalação de bombas, painéis e acessórios',
      'Manutenção preventiva e corretiva do conjunto',
    ],
  },
  'co2-saponificante': {
    slug: 'co2-saponificante',
    contactName: 'Instalação de Sistema Fixos de Co2 e Saponificante',
    title: 'Sistemas Fixos de CO2 e Saponificante',
    navLabel: 'CO2 e Saponificante',
    navDesc: 'Sistemas fixos',
    image: './imgs/services/saponificante.jpg',
    imageAlt: 'Sistema fixo de CO2 e saponificante',
    summary:
      'Proteção de dutos de exaustão de cozinhas e ambientes de risco, seguindo normas técnicas e parâmetros de maior exigência.',
    description:
      'Sistemas fixos com CO2 ou agente saponificante atuam em focos específicos — como cozinhas industriais e áreas com risco de incêndio classe K — com acionamento automático ou manual e dimensionamento conforme NFPA e normas aplicáveis.',
    highlights: [
      'Proteção de coifas, dutos e áreas de cocção',
      'Sistemas com CO2 ou agente saponificante',
      'Instalação, testes e treinamento de operação',
    ],
  },
  projetos: {
    slug: 'projetos',
    contactName: 'Elaboração de Projetos',
    title: 'Elaboração de Projetos',
    navLabel: 'Projetos',
    navDesc: 'Engenharia contra incêndio',
    image: './imgs/services/projetos.jpg',
    imageAlt: 'Projetos de engenharia contra incêndio',
    summary:
      'Sistematiza o trabalho em etapas, define o objetivo, identifica deficiências e aponta falhas antes e durante a execução.',
    description:
      'Elaboramos projetos de prevenção e combate a incêndio para novas edificações, reformas e regularizações. Documentação técnica completa para aprovação no CBMERJ, com memorial descritivo, plantas e especificações.',
    highlights: [
      'Projetos de PPCI para diversas ocupações',
      'Memorial descritivo, plantas e especificações técnicas',
      'Acompanhamento em aprovações e adequações',
    ],
  },
  sprinklers: {
    slug: 'sprinklers',
    contactName: 'Instalação de Sprinklers',
    title: 'Sistemas de Sprinklers',
    navLabel: 'Sprinklers',
    navDesc: 'Chuveiros automáticos',
    image: './imgs/services/sprinklers.jpg',
    imageAlt: 'Sistema hidráulico contra incêndio',
    summary:
      'Chuveiros automáticos que protegem ambientes contra incêndios e são fundamentais para a segurança de patrimônios e vidas.',
    description:
      'Sprinklers detectam e controlam incêndios no início, reduzindo danos e ganhando tempo para evacuação. Projetamos e instalamos sistemas wet, dry ou preaction conforme a ocupação e as normas vigentes.',
    highlights: [
      'Dimensionamento hidráulico e layout de sprinklers',
      'Instalação de tubulações, heads e acessórios',
      'Testes hidrostáticos e comissionamento',
    ],
  },
  legalizacao: {
    slug: 'legalizacao',
    contactName: 'Legalização junto ao CBMERJ',
    title: 'Legalização junto ao CBMERJ',
    navLabel: 'Legalização',
    navDesc: 'Regularização CBMERJ',
    image: './imgs/services/cbmerj.jpg',
    imageAlt: 'Legalização junto ao CBMERJ',
    summary:
      'Etapas conduzidas por empresa credenciada, conforme legislações e normas vigentes e exigências de cada edificação.',
    description:
      'Cuidamos de todo o processo de regularização junto ao Corpo de Bombeiros do RJ: vistorias, adequações, ART, laudos e obtenção do AVCB/CLCB para sua edificação operar em conformidade legal.',
    highlights: [
      'Diagnóstico e plano de adequação técnica',
      'Acompanhamento em vistorias e exigências',
      'Emissão de documentação e certificados',
    ],
  },
};

const SERVICE_SLUGS = Object.keys(SERVICES);

function getServiceBySlug(slug) {
  return SERVICES[slug] || null;
}

function getServicePageUrl(slug) {
  return `./servico.html?slug=${slug}`;
}
