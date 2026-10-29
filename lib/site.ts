export const WHATSAPP_NUMBER = "5522999583288"

export const PHONE_DISPLAY = "(22) 99958-3288"

export const PHONE_LINK = "tel:+5522999583288"

export const whatsappLink = (message = "Olá! Gostaria de solicitar um orçamento com a Pontual.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const INSTAGRAM_URL = "https://instagram.com/pontualmacae"

export const ADDRESS = "Rua Eleosina Pereira de Queirós Mattoso, 195 - Sol e Mar, Macaé - RJ"

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Galeria" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Contato" },
]
