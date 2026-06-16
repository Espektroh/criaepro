export const WHATSAPP = "5515992779988";
export const WHATSAPP_DISPLAY = "(15) 99277-9988";
export const INSTAGRAM_HANDLE = "@criaepro";
export const INSTAGRAM_URL = "https://instagram.com/criaepro";
export const LOCATION = "Sorocaba e região · atende todo o Brasil";

export function wa(message: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Crescimento", href: "#crescimento" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Dúvidas", href: "#faq" },
];
