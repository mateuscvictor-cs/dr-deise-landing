import { siteConfig } from "@/lib/config"
import Link from "next/link"

export const metadata = {
  title: `Termos de Uso | ${siteConfig.clinica.nome}`,
  description: "Termos e condições de uso do site.",
  robots: "noindex, nofollow",
}

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="container-narrow mx-auto">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Voltar
        </Link>

        <h1 className="text-4xl font-bold text-text mb-8">Termos de Uso</h1>

        <div className="prose prose-lg max-w-none text-text-light">
          <p>
            Ao acessar e usar este site, você concorda com os seguintes termos e condições.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">1. Uso do Site</h2>
          <p>
            Este site é destinado a fornecer informações sobre os serviços odontológicos 
            oferecidos pela <strong>{siteConfig.clinica.nome}</strong> e disponibilizar 
            conteúdo educativo sobre saúde bucal.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">2. E-book Gratuito</h2>
          <p>
            O e-book disponibilizado neste site é gratuito e tem finalidade exclusivamente 
            informativa e educativa. O conteúdo não substitui a consulta presencial com 
            um profissional de odontologia.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens, e-books e materiais, 
            são de propriedade da {siteConfig.clinica.nome} e estão protegidos por leis 
            de direitos autorais.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">4. Informações de Saúde</h2>
          <p>
            As informações contidas neste site e no e-book são de caráter geral e educativo. 
            Não devem ser utilizadas para autodiagnóstico ou automedicação. Sempre consulte 
            um dentista para avaliação e tratamento adequados.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">5. Limitação de Responsabilidade</h2>
          <p>
            A {siteConfig.clinica.nome} não se responsabiliza por danos decorrentes do uso 
            indevido das informações contidas neste site ou no e-book.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">6. Comunicações</h2>
          <p>
            Ao fornecer seus dados de contato, você concorda em receber comunicações por 
            e-mail e WhatsApp. Você pode cancelar o recebimento a qualquer momento.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">7. Alterações</h2>
          <p>
            Reservamos o direito de modificar estes termos a qualquer momento. As alterações 
            entram em vigor imediatamente após sua publicação nesta página.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8 mb-4">8. Contato</h2>
          <p>
            Para dúvidas sobre estes termos, entre em contato pelo 
            WhatsApp: {siteConfig.clinica.whatsapp}
          </p>

          <p className="mt-8 text-sm">
            <strong>Última atualização:</strong> [INSERIR DATA]
          </p>
        </div>
      </div>
    </main>
  )
}
