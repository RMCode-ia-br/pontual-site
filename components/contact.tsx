import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { ADDRESS, MAP_EMBED_URL, MAP_LINK, PHONE_DISPLAY, PHONE_LINK, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const HOURS = [
  { day: "Segunda a Sexta", time: "08:00 – 18:00" },
  { day: "Sábado", time: "08:00 – 12:00" },
  { day: "Domingo", time: "Fechado" },
]

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">04 — Contato</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Vamos tirar seu projeto do papel
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-card-foreground">Endereço</h3>
                  <address className="mt-1 not-italic leading-relaxed text-muted-foreground">{ADDRESS}</address>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Como chegar
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-card-foreground">Telefone e WhatsApp</h3>
                  <a
                    href={PHONE_LINK}
                    className="mt-1 inline-block font-mono text-lg text-foreground hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-card-foreground">Horário de atendimento</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Aberto até às 18:00
                </span>
              </div>
              <dl className="mt-6 divide-y divide-border">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between py-3 text-sm">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-mono text-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "h-12 gap-2 text-base")}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Solicitar Orçamento pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120} className="min-h-80 overflow-hidden rounded-xl border border-border bg-muted lg:min-h-full">
            <iframe
              title="Mapa com a localização da Pontual em Macaé - RJ"
              src={MAP_EMBED_URL}
              className="size-full min-h-80 grayscale-[0.6] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
