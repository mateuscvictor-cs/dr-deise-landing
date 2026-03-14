import Link from "next/link"
import { QuizCircuitBackground } from "@/components/animations"
import { QuizFlow } from "@/components/Quiz"

export const metadata = {
  title: "Score GIA — Quiz | Dra. Deise Kersten",
  description: "Descubra seu Score GIA em 9 perguntas. Avalie Gestão, Influência e Automação da sua clínica e receba o Relatório Estratégico completo.",
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      <QuizCircuitBackground />
      <header className="relative z-10 pt-6 pb-4 px-4">
        <div className="container-wide mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            ← Voltar
          </Link>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Gestão Kersten"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <span className="w-14" />
        </div>
      </header>
      <main className="relative z-10 section-padding">
        <div className="container-wide mx-auto px-4 flex flex-col items-center">
          <QuizFlow />
        </div>
      </main>
    </div>
  )
}
