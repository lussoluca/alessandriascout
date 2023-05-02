import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pt-6 text-center lg:pt-12">
      <h1 className="mx-auto max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        AlessandriaScout
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-md tracking-tight text-slate-700">
        Cari scout, la felicità non dipende dalle ricchezze né dal successo. Guardate al lato bello delle cose e non al lato brutto. Il vero modo di essere felici è quello di procurare la felicità agli altri.<br/>Preoccupatevi di lasciare questo mondo un po&apos; migliore di come lo avete trovato. Mantenete la vostra promessa di esploratori anche quando non sarete più ragazzi e Dio vi aiuti in questo.
      </p>
    </Container>
  )
}
