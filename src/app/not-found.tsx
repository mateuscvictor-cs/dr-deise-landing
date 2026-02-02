import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="font-heading text-4xl font-bold text-primary md:text-5xl">
        404
      </h1>
      <p className="mt-2 text-center text-text">
        Página não encontrada.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-primary px-6 py-3 font-medium text-text-on-dark transition-opacity hover:opacity-90"
      >
        Voltar ao início
      </Link>
    </div>
  )
}
