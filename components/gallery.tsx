"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

type Category = "residencial" | "comercial"

const PROJECTS: { src: string; title: string; category: Category; alt: string }[] = [
  {
    src: "/images/gallery-sacada.png",
    title: "Fechamento de Sacada",
    category: "residencial",
    alt: "Sacada de apartamento fechada com vidro temperado e vista para o mar",
  },
  {
    src: "/images/gallery-fachada.png",
    title: "Fachada de Vidro",
    category: "comercial",
    alt: "Fachada comercial em vidro temperado com esquadrias de alumínio",
  },
  {
    src: "/images/gallery-box.png",
    title: "Box para Banheiro",
    category: "residencial",
    alt: "Banheiro moderno com box de vidro temperado",
  },
  {
    src: "/images/gallery-escritorio.png",
    title: "Divisórias Corporativas",
    category: "comercial",
    alt: "Escritório com divisórias e portas de vidro temperado",
  },
  {
    src: "/images/gallery-sala.png",
    title: "Portas de Correr",
    category: "residencial",
    alt: "Sala de estar com portas de correr de alumínio e vidro abertas para o jardim",
  },
  {
    src: "/images/gallery-espelho.png",
    title: "Espelho sob Medida",
    category: "residencial",
    alt: "Hall de entrada com grande espelho sob medida",
  },
]

const FILTERS: { value: "todos" | Category; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "residencial", label: "Residencial" },
  { value: "comercial", label: "Comercial" },
]

export function Gallery() {
  const [filter, setFilter] = useState<"todos" | Category>("todos")
  const visible = PROJECTS.filter((p) => filter === "todos" || p.category === filter)

  return (
    <section id="portfolio" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">02 — Portfólio</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Projetos entregues
            </h2>
          </div>
          <div role="group" aria-label="Filtrar projetos" className="inline-flex w-fit rounded-lg border border-border bg-secondary p-1">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  filter === f.value
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.src} className="animate-in fade-in zoom-in-95 duration-500">
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted">
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span className="text-base font-semibold text-white">{project.title}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur">
                    {project.category}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
