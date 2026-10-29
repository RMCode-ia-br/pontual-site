import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { TrustStats } from "@/components/trust-stats"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <TrustStats />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
