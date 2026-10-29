import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 md:px-6 md:pt-20 md:pb-24 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:col-span-6">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Macaé · Região dos Lagos
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Soluções Modernas em <span className="text-primary">Vidro Temperado</span> e Esquadrias de Alumínio
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Transforme seus ambientes com a qualidade e precisão que seu projeto merece em Macaé e Região dos Lagos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "h-12 gap-2 px-6 text-base")}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Fale no WhatsApp
            </a>
            <a href="#portfolio" className={cn(buttonVariants({ variant: "outline" }), "h-12 gap-2 px-6 text-base")}>
              Ver Projetos
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 lg:col-span-6">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero.png"
                alt="Residência moderna com painéis de vidro temperado e esquadrias de alumínio"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-lg border border-border bg-background/95 px-5 py-4 shadow-lg backdrop-blur sm:left-6">
              <div>
                <p className="font-mono text-2xl font-semibold text-foreground">10mm</p>
                <p className="text-xs text-muted-foreground">Vidro temperado</p>
              </div>
              <div className="h-10 w-px bg-border" aria-hidden="true" />
              <div>
                <p className="font-mono text-2xl font-semibold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Sob medida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
