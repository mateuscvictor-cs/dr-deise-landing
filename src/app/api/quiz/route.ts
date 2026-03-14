import { NextRequest, NextResponse } from "next/server"
import { calculateScores } from "@/lib/quiz-scoring"
import { supabaseAdmin } from "@/lib/supabase-server"
import type { QuizSubmitPayload, QuizAnswer } from "@/types"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Q_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"] as const

function isValidAnswer(v: unknown): v is QuizAnswer {
  return v === "A" || v === "B" || v === "C"
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== "object" || !("email" in body) || !("answers" in body)) {
      return NextResponse.json(
        { error: "email e answers são obrigatórios" },
        { status: 400 }
      )
    }

    const { email, answers: rawAnswers } = body as QuizSubmitPayload
    const emailStr = typeof email === "string" ? email.trim() : ""
    if (!emailStr || !EMAIL_REGEX.test(emailStr)) {
      return NextResponse.json(
        { error: "E-mail inválido" },
        { status: 400 }
      )
    }

    const answers: Record<string, QuizAnswer> = {}
    for (const key of Q_KEYS) {
      const v = rawAnswers?.[key]
      if (!isValidAnswer(v)) {
        return NextResponse.json(
          { error: `Resposta inválida para ${key}. Use A, B ou C.` },
          { status: 400 }
        )
      }
      answers[key] = v
    }

    const { score_g, score_i, score_a, score_total, nivel } = calculateScores(answers)

    const row = {
      email: emailStr,
      q1: answers.q1,
      q2: answers.q2,
      q3: answers.q3,
      q4: answers.q4,
      q5: answers.q5,
      q6: answers.q6,
      q7: answers.q7,
      q8: answers.q8,
      q9: answers.q9,
      score_g,
      score_i,
      score_a,
      score_total,
      nivel,
    }

    const { error } = await supabaseAdmin.from("gia_quiz_results").insert(row)

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "Erro ao salvar resultado do quiz" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      score_total,
      score_g,
      score_i,
      score_a,
      nivel,
    })
  } catch (err) {
    console.error("API quiz error:", err)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
