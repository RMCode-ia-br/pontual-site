import { AppWindow, Bath, DoorOpen, Frame, PanelsTopLeft, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { whatsappLink } from "@/lib/site"

const SERVICES = [
  {
    icon: Frame,
    title: "Esquadrias de Alumínio Customizadas",
    description: "Perfis de alta durabilidade, projetados sob medida com acabamento impecável e vedação eficiente.",
  },
  {
    icon: PanelsTopLeft,
    title: "Fechamento de Sacadas e Varandas",
    description: "Sistemas de vidro retrátil que protegem do vento e da maresia sem perder a vista.",
  },
  {
    icon: Bath,
    title: "Box para Banheiro Elegantes",
    description: "Box em vidro temperado com ferragens premium, nos modelos de correr, abrir ou fixo.",
  },
  {
    icon: AppWindow,
    title: "Espelhos sob Medida",
    description: "Espelhos com lapidação e bisotê para valorizar salas, banheiros, academias e lojas.",
  },
  {
    icon: DoorOpen,
    title: "Portas e Janelas de Vidro",
    description: "Portas pivotantes, de correr e janelas em vidro temperado para projetos residenciais e comerciais.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-border bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">01 — Serviços</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Precisão em cada detalhe
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Do projeto à instalação, entregamos soluções em alumínio e vidro com acabamento de alto padrão.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={index * 80} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-card-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={SERVICES.length * 80} className="h-full">
              <a
                href={whatsappLink("Olá! Gostaria de saber mais sobre os serviços da Pontual.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-48 flex-col justify-between rounded-xl bg-primary p-6 text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              >
                <ArrowUpRight
                  className="size-6 self-end transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">Tem um projeto especial?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                    Fale com nossa equipe e receba um orçamento personalizado.
                  </p>
                </div>
              </a>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  )
}
