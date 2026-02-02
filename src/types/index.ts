export interface LeadFormData {
  nome: string
  whatsapp: string
  email: string
  interesse?: string
  consentimento: boolean
}

export interface Testimonial {
  nome: string
  iniciais: string
  texto: string
  tratamento?: string
}

export interface FAQItem {
  pergunta: string
  resposta: string
}

export interface SiteConfig {
  dentista: {
    nome: string
    cro: string
    especialidade: string
    anosExperiencia: string
    numeroPacientes: string
    bio: string
  }
  clinica: {
    nome: string
    endereco: string
    bairro: string
    cidade: string
    uf: string
    whatsapp: string
    regiaoAtendida: string
  }
  ebook: {
    titulo: string
    subtitulo: string
    bullets: string[]
  }
  seo: {
    title: string
    description: string
  }
  diferenciais: string[]
  paraQuemE: string[]
  paraQuemNaoE: string[]
  depoimentos: Testimonial[]
  pessoasQueBaixaram: { nome: string; iniciais: string; foto: string }[]
  faq: FAQItem[]
  interesseOpcoes: string[]
}
