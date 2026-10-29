import { Camera, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { INSTAGRAM_URL, NAV_LINKS, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Soluções em Esquadrias de Alumínio e Vidro Temperado em Macaé e Região dos Lagos.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Navegação</p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-foreground hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Redes sociais</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
              >
                <Camera className="size-4" aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground md:px-6">
          {`© ${year} Pontual - Soluções em Esquadrias de Alumínio e Vidro Temperado. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
