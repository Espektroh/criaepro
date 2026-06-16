"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, wa } from "@/lib/site";
import { WhatsApp, ArrowRight } from "@/components/icons";
import styles from "./Nav.module.css";

const WA_MSG = "Olá! Vim pelo site e quero saber como a Criae pode ajudar meu negócio.";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          Criae<span>.</span>
        </a>

        <nav className={styles.links} aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className={styles.cta}
          href={wa(WA_MSG)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp width={17} height={17} />
          WhatsApp
        </a>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
        <nav className={styles.overlayLinks} aria-label="Navegação mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className={`btn btn--accent ${styles.overlayCta}`}
            href={wa(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Falar no WhatsApp <ArrowRight width={18} height={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
