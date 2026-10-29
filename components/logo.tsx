import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo-pontual-round.png"
        alt="Pontual - Soluções em Esquadrias de Alumínio e Vidro Temperado"
        width={52}
        height={52}
        priority
        className="size-12 shrink-0 rounded-full shadow-sm ring-1 ring-black/5 md:size-[52px]"
      />
      <span className="flex flex-col leading-none" aria-hidden="true">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            inverted ? "text-white" : "text-[oklch(0.32_0.1_255)]",
          )}
        >
          PONTUAL
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[10px] uppercase tracking-[0.18em]",
            inverted ? "text-white/60" : "text-muted-foreground",
          )}
        >
          Alumínio & Vidro
        </span>
      </span>
    </span>
  )
}
