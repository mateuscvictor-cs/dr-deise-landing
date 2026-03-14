import type { QuizAnswer } from "./quiz-scoring"

export interface QuizOption {
  value: QuizAnswer
  label: string
  points: number
}

export interface QuizQuestion {
  id: number
  subarea: string
  pilar: "G" | "I" | "A"
  question: string
  options: QuizOption[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    subarea: "Gestão Financeira",
    pilar: "G",
    question: "Você sabe quanto custa cada hora que fica na cadeira — mesmo sem paciente?",
    options: [
      { value: "A", label: "Nunca calculei. Não sei o que é o Custo da Hora Clínica.", points: 0 },
      { value: "B", label: "Tenho uma noção, mas nunca calculei com precisão.", points: 5 },
      { value: "C", label: "Sei exatamente meu CHC e o uso para precificar.", points: 10 },
    ],
  },
  {
    id: 2,
    subarea: "Gestão Financeira",
    pilar: "G",
    question: "Como você define os preços dos seus procedimentos?",
    options: [
      { value: "A", label: "Copio os preços que vejo em outras clínicas da cidade.", points: 0 },
      { value: "B", label: "Levo os custos em conta, mas é uma estimativa.", points: 5 },
      { value: "C", label: "Calculo com base nos custos reais + margem de lucro definida.", points: 10 },
    ],
  },
  {
    id: 3,
    subarea: "Previsibilidade de Receita",
    pilar: "G",
    question: "Você consegue prever quanto vai faturar no próximo mês?",
    options: [
      { value: "A", label: "Não tenho ideia. O faturamento varia muito.", points: 0 },
      { value: "B", label: "Tenho uma estimativa aproximada, com grande margem de erro.", points: 5 },
      { value: "C", label: "Projeto o faturamento mensal com razoável precisão.", points: 10 },
    ],
  },
  {
    id: 4,
    subarea: "Previsibilidade de Receita",
    pilar: "G",
    question: "Sua clínica tem metas financeiras definidas — faturamento, ticket médio, margem?",
    options: [
      { value: "A", label: "Não tenho metas formais. Trabalho sem número definido.", points: 0 },
      { value: "B", label: "Tenho metas mentais, mas não estão escritas nem acompanhadas.", points: 5 },
      { value: "C", label: "Tenho metas claras, por escrito, e reviso periodicamente.", points: 10 },
    ],
  },
  {
    id: 5,
    subarea: "Captação de Pacientes",
    pilar: "I",
    question: "De onde vêm a maioria dos seus novos pacientes hoje?",
    options: [
      { value: "A", label: "Quase 100% por indicação boca a boca — sem controle.", points: 0 },
      { value: "B", label: "Indicação + alguma busca no Google ou Instagram, sem sistema.", points: 5 },
      { value: "C", label: "Tenho múltiplas fontes ativas: digital, indicação estruturada, Google.", points: 10 },
    ],
  },
  {
    id: 6,
    subarea: "Captação de Pacientes",
    pilar: "I",
    question: "Você tem processo definido para transformar um interessado em paciente agendado?",
    options: [
      { value: "A", label: "Não tenho processo. Cada atendimento acontece diferente.", points: 0 },
      { value: "B", label: "Tenho algumas práticas, mas sem processo documentado.", points: 5 },
      { value: "C", label: "Tenho script de atendimento, follow-up e taxa de conversão acompanhada.", points: 10 },
    ],
  },
  {
    id: 7,
    subarea: "Tecnologia e IA",
    pilar: "A",
    question: "Você já usou Inteligência Artificial em algum processo da clínica?",
    options: [
      { value: "A", label: "Nunca usei. Não sei como aplicar IA na odontologia.", points: 0 },
      { value: "B", label: "Já experimentei (ex: ChatGPT), mas sem estratégia.", points: 5 },
      { value: "C", label: "Uso IA regularmente em pelo menos uma área com resultado.", points: 10 },
    ],
  },
  {
    id: 8,
    subarea: "Tecnologia e Conteúdo",
    pilar: "A",
    question: "Como é seu processo de criação de conteúdo para redes sociais?",
    options: [
      { value: "A", label: "Não crio conteúdo com regularidade — é caótico ou inexistente.", points: 0 },
      { value: "B", label: "Crio conteúdo, mas demanda muito tempo e esforço manual.", points: 5 },
      { value: "C", label: "Tenho processo semi-automatizado com IA que reduz o tempo de produção.", points: 10 },
    ],
  },
  {
    id: 9,
    subarea: "Autonomia da Clínica",
    pilar: "A",
    question: "Se você ficasse impossibilitado de trabalhar 30 dias, o que aconteceria com sua clínica?",
    options: [
      { value: "A", label: "Pararia completamente. Tudo depende da minha presença.", points: 0 },
      { value: "B", label: "Ficaria difícil, mas a equipe seguraria parte das operações.", points: 5 },
      { value: "C", label: "Funcionaria com autonomia. Tenho processos e equipe estruturados. (+10 bônus)", points: 20 },
    ],
  },
]

export const NIVEL_LABELS: Record<string, string> = {
  risco: "Clínica em Risco",
  transicao: "Clínica em Transição",
  crescimento: "Clínica em Crescimento",
  estruturado: "Clínica Estruturada",
}
