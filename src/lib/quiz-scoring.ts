import type { QuizAnswer, QuizNivel } from "@/types"

export type { QuizAnswer, QuizNivel }

export interface QuizScores {
  score_g: number
  score_i: number
  score_a: number
  score_total: number
  nivel: QuizNivel
}

const POINTS: Record<QuizAnswer, number> = { A: 0, B: 5, C: 10 }

function pointsFor(q: number, answer: QuizAnswer): number {
  if (q === 9 && answer === "C") return 20
  return POINTS[answer]
}

export function calculateScores(answers: Record<string, QuizAnswer>): QuizScores {
  const q1 = pointsFor(1, answers.q1)
  const q2 = pointsFor(2, answers.q2)
  const q3 = pointsFor(3, answers.q3)
  const q4 = pointsFor(4, answers.q4)
  const q5 = pointsFor(5, answers.q5)
  const q6 = pointsFor(6, answers.q6)
  const q7 = pointsFor(7, answers.q7)
  const q8 = pointsFor(8, answers.q8)
  const q9 = pointsFor(9, answers.q9)

  const score_g = q1 + q2 + q3 + q4
  const score_i = q5 + q6
  const score_a = q7 + q8 + q9
  const score_total = score_g + score_i + score_a

  let nivel: QuizNivel
  if (score_total <= 30) nivel = "risco"
  else if (score_total <= 59) nivel = "transicao"
  else if (score_total <= 79) nivel = "crescimento"
  else nivel = "estruturado"

  return { score_g, score_i, score_a, score_total, nivel }
}
