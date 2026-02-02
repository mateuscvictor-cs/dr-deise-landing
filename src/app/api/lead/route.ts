import { NextRequest, NextResponse } from "next/server"
import { hashData, sendFacebookEvent } from "@/lib/facebook"

interface LeadData {
    nome: string
    email: string
    whatsapp: string
    instagram: string
    eventId?: string
}

export async function POST(request: NextRequest) {
    try {
        const data: LeadData = await request.json()
        const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"
        const userAgent = request.headers.get("user-agent") || ""
        const fbp = request.cookies.get("_fbp")?.value
        const fbc = request.cookies.get("_fbc")?.value

        // Validate required fields
        if (!data.email || !data.nome) {
            return NextResponse.json(
                { error: "Nome e email são obrigatórios" },
                { status: 400 }
            )
        }

        // Format WhatsApp number: remove formatting, keep only digits
        const whatsappDigits = data.whatsapp?.replace(/\D/g, "") || ""

        // Format SMS: add +55 prefix for Brevo SMS
        const smsNumber = whatsappDigits ? `+55${whatsappDigits}` : ""

        // Prepare Brevo contact payload
        const brevoPayload = {
            email: data.email,
            listIds: [2], // Add to List ID 2
            attributes: {
                NOME_COMPLETO: data.nome,
                WHATS: whatsappDigits,
                SMS: smsNumber,
                INSTAGRAM: data.instagram || "",
            },
            updateEnabled: true, // Update existing contact if exists
        }

        // Send to Brevo API
        const brevoPromise = fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY || "",
            },
            body: JSON.stringify(brevoPayload),
        })

        // Prepare Facebook CAPI Event
        const facebookPromise = (async () => {
            if (data.eventId) {
                await sendFacebookEvent({
                    event_name: "Lead",
                    event_time: Math.floor(Date.now() / 1000),
                    event_id: data.eventId,
                    action_source: "website",
                    event_source_url: request.url,
                    user_data: {
                        em: hashData(data.email),
                        ph: hashData(whatsappDigits ? `55${whatsappDigits}` : ""),
                        fn: hashData(data.nome.split(" ")[0]),
                        ln: hashData(data.nome.split(" ").slice(1).join(" ")),
                        client_ip_address: ip,
                        client_user_agent: userAgent,
                        fbp: fbp,
                        fbc: fbc,
                    },
                    custom_data: {
                        currency: "BRL",
                        value: 0,
                        content_name: "Ebook Lead",
                    }
                })
            }
        })()

        const [brevoResult] = await Promise.allSettled([brevoPromise, facebookPromise])

        if (brevoResult.status === "rejected" || (brevoResult.status === "fulfilled" && !brevoResult.value.ok)) {
            const errorData = brevoResult.status === "fulfilled"
                ? await brevoResult.value.json().catch(() => ({}))
                : { error: "Network error" }

            console.error("Brevo API Error:", errorData)

            // If contact already exists but was updated, that's still a success
            if (brevoResult.status === "fulfilled" && brevoResult.value.status === 400 && errorData.code === "duplicate_parameter") {
                return NextResponse.json({ success: true, message: "Contato atualizado" })
            }

            return NextResponse.json(
                { error: "Erro ao cadastrar contato", details: errorData },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, message: "Contato cadastrado com sucesso" })

    } catch (error) {
        console.error("API Route Error:", error)
        return NextResponse.json(
            { error: "Erro interno do servidor" },
            { status: 500 }
        )
    }
}
