import { siteConfig } from "@/lib/config"
import Link from "next/link"

export const metadata = {
  title: `Política de Privacidade | ${siteConfig.clinica.nome}`,
  description: "Política de Privacidade e proteção de dados pessoais.",
  robots: "noindex, nofollow",
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="container-narrow mx-auto">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Voltar
        </Link>

        <h1 className="text-4xl font-bold text-text mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none text-text-light">
          <p>
            <strong>{siteConfig.clinica.nome}</strong> está comprometida em proteger sua privacidade. 
            Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">1. Informações Coletadas</h2>
          <p>Coletamos as seguintes informações quando você preenche nosso formulário:</p>
          <ul>
            <li>Nome completo</li>
            <li>Número de WhatsApp</li>
            <li>Endereço de e-mail</li>
            <li>Área de interesse (opcional)</li>
          </ul>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">2. Uso das Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Enviar o e-book gratuito solicitado</li>
            <li>Entrar em contato sobre nossos serviços odontológicos</li>
            <li>Enviar conteúdos relevantes sobre saúde bucal</li>
            <li>Responder suas dúvidas e solicitações</li>
          </ul>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">3. Proteção de Dados</h2>
          <p>
            Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
            contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">4. Compartilhamento</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
            exceto quando necessário para prestação de nossos serviços ou quando exigido por lei.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">5. Seus Direitos</h2>
          <p>Você tem direito a:</p>
          <ul>
            <li>Solicitar acesso aos seus dados pessoais</li>
            <li>Solicitar correção de dados incorretos</li>
            <li>Solicitar exclusão dos seus dados</li>
            <li>Cancelar o recebimento de comunicações a qualquer momento</li>
          </ul>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">6. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em 
            contato conosco pelo WhatsApp: {siteConfig.clinica.whatsapp}
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">7. Atualizações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que você revise 
            esta página regularmente para estar ciente de quaisquer alterações.
          </p>

          <p className="mt-8 text-sm">
            <strong>Última atualização:</strong> [INSERIR DATA]
          </p>
        </div>
      </div>
    </main>
  )
}
