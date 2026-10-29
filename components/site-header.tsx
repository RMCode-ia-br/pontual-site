"use client"

import { useEffect, useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
import { NAV_LINKS, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#inicio" aria-label="Pontual - página inicial">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "hidden h-10 gap-2 px-4 sm:inline-flex")}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Solicitar Orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegação móvel" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "h-11 w-full gap-2")}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
