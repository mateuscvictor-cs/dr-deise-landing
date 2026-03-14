import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
  dentista: {
    nome: "Dra. Deise Kersten",
    cro: "CRO-RS",
    especialidade: "Reabilitação Oral e Prótese | MBA Gestão Empresarial",
    anosExperiencia: "15",
    numeroPacientes: "2.500",
    bio: `Cirurgiã-Dentista, Empresária e Mentora de Gestão Odontológica.

Especialista em Reabilitação Oral e Prótese com MBA em Gestão Empresarial.

Desenvolveu o Método G.I.A. 7D após viver na pele o paradoxo da agenda cheia sem lucro proporcional. Sua missão é transformar dentistas em donos de negócios lucrativos sem sacrificar a saúde mental.`,
  },

  clinica: {
    nome: "Gestão Kersten - Clínica Inteligente",
    endereco: "",
    bairro: "",
    cidade: "Belém",
    uf: "PA",
    whatsapp: "5199999999",
    regiaoAtendida: "Todo o Brasil (Online)",
    calculadoraUrl: "https://calculadora.gestaokersten.com.br",
  },

  ebook: {
    titulo: "O Paradoxo da Agenda Cheia",
    subtitulo: "Por que 70% dos dentistas trabalham no prejuízo sem saber — e como usar IA para sair dessa estatística.",
    bullets: [
      "Descubra o diagnóstico chocante que 90% dos dentistas ignoram",
      "Calcule em 5 minutos se você está pagando para trabalhar",
      "Identifique os 3 ladrões silenciosos que roubam seu lucro diariamente",
      "Aprenda a métrica que a faculdade esqueceu de ensinar",
    ],
  },

  seo: {
    title: "Score GIA | Quiz Gestão, Influência e Automação | Dra. Deise Kersten",
    description: "Descubra seu Score GIA em 9 perguntas. Avalie Gestão, Influência e Automação da sua clínica e receba o Relatório Estratégico completo por e-mail.",
  },

  diferenciais: [
    "Método G.I.A. 7D exclusivo",
    "Potencializado por Inteligência Artificial",
    "MBA em Gestão Empresarial",
    "Experiência real no mercado odontológico",
  ],

  paraQuemE: [
    "Dentistas que trabalham muito mas o lucro não aparece",
    "Donos de clínica que sentem que estão pagando para trabalhar",
    "Profissionais que querem usar IA para automatizar a gestão",
    "Quem quer sair da 'roda viva da cadeira'",
  ],

  paraQuemNaoE: [
    "Quem busca fórmulas mágicas sem aplicar",
    "Dentistas que não querem olhar para os números",
    "Profissionais satisfeitos com o atual modelo de trabalho",
  ],

  depoimentos: [
    {
      nome: "Dr. Marcos Silva",
      iniciais: "MS",
      texto: "Depois de aplicar o método, descobri que 3 dos meus procedimentos davam prejuízo. Ajustei e meu lucro aumentou 40% em 2 meses.",
      tratamento: "Clínica Geral",
    },
    {
      nome: "Dra. Carolina Santos",
      iniciais: "CS",
      texto: "A calculadora de CHC mudou minha visão. Finalmente entendi porque trabalhava tanto e sobrava tão pouco.",
      tratamento: "Ortodontia",
    },
    {
      nome: "Dr. Roberto Mendes",
      iniciais: "RM",
      texto: "Os prompts de IA economizam pelo menos 10 horas por semana. Consigo focar no que realmente importa.",
      tratamento: "Implantodontia",
    },
  ],

  faq: [
    {
      pergunta: "Quanto custa?",
      resposta: "Nada. É gratuito.",
    },
    {
      pergunta: "Como eu recebo?",
      resposta: "Você coloca seu e-mail e recebe o link de download em seguida.",
    },
    {
      pergunta: "Isso serve pra clínica pequena?",
      resposta: "Serve principalmente pra clínica pequena e consultório autoral, onde tudo depende do dono.",
    },
    {
      pergunta: "Eu não sou bom(a) com números. Vai dar certo?",
      resposta: "Vai. A proposta aqui é clareza, não contabilidade. Você precisa do básico bem feito, não do perfeito.",
    },
    {
      pergunta: "Você vai ficar me mandando spam?",
      resposta: "Não. Você recebe conteúdos relacionados ao tema. Se não fizer sentido, você sai com 1 clique.",
    },
  ],

  pessoasQueBaixaram: [
    { nome: "Dr. Marcos S.", iniciais: "MS", foto: "https://ui-avatars.com/api/?name=Marcos+Silva&background=d0a257&color=fff&size=80" },
    { nome: "Dra. Carolina S.", iniciais: "CS", foto: "https://ui-avatars.com/api/?name=Carolina+Santos&background=173757&color=fff&size=80" },
    { nome: "Dr. Roberto M.", iniciais: "RM", foto: "https://ui-avatars.com/api/?name=Roberto+Mendes&background=0d1f3d&color=d0a257&size=80" },
    { nome: "Dra. Ana P.", iniciais: "AP", foto: "https://ui-avatars.com/api/?name=Ana+Paula&background=173757&color=fff&size=80" },
  ],

  interesseOpcoes: [
    "Gestão Financeira",
    "Precificação",
    "Marketing",
    "Automação com IA",
    "Método G.I.A. 7D Completo",
    "Outro",
  ],
}

export const capitulos = [
  {
    numero: 1,
    titulo: "O Diagnóstico Chocante",
    descricao: "Por que a métrica 'estar ocupado' é a mais perigosa.",
  },
  {
    numero: 2,
    titulo: "A Métrica Esquecida",
    descricao: "A fórmula passo a passo para calcular seu CHC (Custo Hora Clínica).",
  },
  {
    numero: 3,
    titulo: "Os 3 Ladrões Silenciosos",
    descricao: "Precificação no achismo, custo de no-show e baixa margem.",
  },
  {
    numero: 4,
    titulo: "O Início da Revolução",
    descricao: "A mudança de identidade de Dentista-Técnico para Dono de Negócio.",
  },
]

export const estatisticas = [
  {
    emoji: "📉",
    destaque: "60-70%",
    label: "no Vermelho",
    descricao: "Dos dentistas trabalham no prejuízo em certos procedimentos sem saber.",
  },
  {
    emoji: "👥",
    destaque: "270 mil",
    label: "Dentistas",
    descricao: "Proprietários no Brasil enfrentam esse paradoxo diariamente.",
  },
  {
    emoji: "💸",
    destaque: "R$ 24 mil",
    label: "/ano",
    descricao: "Perdidos anualmente apenas com no-shows (média por clínica).",
  },
]

export const metodoGIA = {
  titulo: "O Método G.I.A. 7D & Inteligência Artificial",
  subtitulo: "O sistema completo que está transformando dentistas tecnicamente excelentes em donos de clínicas lucrativas e autogerenciáveis.",
  pilares: [
    {
      letra: "G",
      nome: "Gestão",
      descricao: "Domine seus números, aprenda a calcular seu CHC e precificar cientificamente.",
    },
    {
      letra: "I",
      nome: "Influência",
      descricao: "Posicione-se como autoridade, atraia pacientes de alto valor e venda com ética.",
    },
    {
      letra: "A",
      nome: "Automação",
      descricao: "Use IA para multiplicar seu tempo, libertando-se das tarefas operacionais.",
    },
  ],
  ia: {
    titulo: "Inteligência Artificial (O Diferencial)",
    subtitulo: "A Primeira Metodologia de Gestão Odontológica Potencializada por IA. Automatize 80% da sua gestão.",
    beneficios: [
      "Economize 10h por semana com prompts de IA prontos",
      "Crie 30 dias de posts em apenas 15 minutos",
      "Diagnóstico Financeiro com IA: analise seus números em minutos",
      "Automação de Confirmação: de consultas a follow-ups",
    ],
  },
}
