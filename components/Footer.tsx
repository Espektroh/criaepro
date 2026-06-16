import {
  wa,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_DISPLAY,
  NAV_LINKS,
} from "@/lib/site";
import { Instagram, WhatsApp, ArrowUpRight } from "@/components/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.logo}>
              Criae<span>.</span>
            </a>
            <p className={styles.tagline}>
              Marketing digital que cresce com você.
            </p>
          </div>

          <nav className={styles.linksCol} aria-label="Navegação do rodapé">
            <span className={styles.colTitle}>Navegar</span>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Contato</span>
            <a
              href={wa("Olá! Vim pelo site da Criae e quero conversar.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp width={17} height={17} /> {WHATSAPP_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram width={17} height={17} /> {INSTAGRAM_HANDLE}
            </a>
            <span className={styles.loc}>Sorocaba, SP · atende todo o Brasil</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Criae · Marketing digital</p>
          <a
            href={wa("Olá! Quero começar com a Criae.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomCta}
          >
            Começar agora <ArrowUpRight width={15} height={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
