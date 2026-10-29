import { MapPinned, Ruler, ClipboardCheck, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const ITEMS = [
  { icon: MapPinned, title: "Atendimento em Toda Região dos Lagos", text: "Macaé, Rio das Ostras, Cabo Frio e arredores." },
  { icon: ClipboardCheck, title: "Visita Técnica In Loco", text: "Medição precisa feita por nossa equipe no local." },
  { icon: Ruler, title: "Projetos Sob Medida", text: "Cada peça fabricada para o seu espaço." },
]

export function TrustStats() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-foreground py-20 text-background md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/60">03 — Sobre Nós</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Compromisso com prazo, qualidade e acabamento
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-background/70">
            A Pontual nasceu para entregar exatamente o que o nome promete: obras no prazo, com materiais de primeira
            linha e instalação feita por profissionais especializados.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-background/10 bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-foreground p-6">
                <item.icon className="size-6 text-[oklch(0.72_0.12_245)]" aria-hidden="true" />
                <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-background/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={ITEMS.length * 80} className="h-full">
            <div className="flex h-full flex-col gap-3 bg-foreground p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-background/60">Avaliações Google</p>
              <p className="flex items-baseline gap-2">
                <span className="font-mono text-4xl font-semibold">4,5</span>
                <span className="text-sm text-background/60">/ 5</span>
              </p>
              <div className="flex gap-1" role="img" aria-label="Avaliação de 4,5 de 5 estrelas">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="size-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
                <span className="relative inline-block size-5" aria-hidden="true">
                  <Star className="absolute inset-0 size-5 text-amber-400/40" />
                  <span className="absolute inset-0 w-1/2 overflow-hidden">
                    <Star className="size-5 fill-amber-400 text-amber-400" />
                  </span>
                </span>
              </div>
              <p className="text-sm text-background/60">Clientes satisfeitos em toda a região.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
