import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { WhatsApp, ArrowRight } from "@/components/icons";
import items from "./items.json";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfólio — Criae",
  description:
    "Artes, campanhas e conteúdo que a Criae já criou para negócios de Sorocaba e região.",
  alternates: { canonical: "/portfolio" },
};

const CLIENTS = [
  "Grupo Berbel",
  "Berbel Cursos",
  "Maria Lunna",
  "Clube de Tiro Bunker",
  "Escola Ateliê dos Barbeiros",
  "Academia Explosão",
];

const WA_MSG =
  "Olá! Vi o portfólio da Criae e quero saber como vocês podem ajudar minha marca.";

export default function Portfolio() {
  return (
    <>
      <header className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <a href="/" className={styles.brand}>
            Criae<span>.</span>
          </a>
          <a
            className="btn btn--primary"
            href={wa(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp width={17} height={17} aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <Reveal>
              <span className="eyebrow">Portfólio</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={styles.heroTitle}>
                Um pouco do que a Criae já{" "}
                <span className={styles.hl}>colocou no ar.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Artes, campanhas e conteúdo para negócios reais de Sorocaba e
                região. Cada peça pensada para o momento e o público de cada
                cliente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="section section--alt" style={{ paddingTop: "clamp(3rem, 7vh, 5rem)", paddingBottom: "clamp(3rem, 7vh, 5rem)" }}>
          <div className="container">
            <Reveal>
              <span className="eyebrow">Marcas que já confiaram</span>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={styles.clientsGrid}>
                {CLIENTS.map((c) => (
                  <div key={c} className={styles.clientChip}>
                    {c}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.clientsNote}>
                Todas de Sorocaba e região.
              </p>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Trabalhos</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Conteúdo que vende, <span className="hl">não só enfeita.</span>
              </h2>
            </Reveal>

            <div className={styles.gallery}>
              {items.map((it) => (
                <figure key={it.n} className={styles.shot}>
                  <img
                    src={it.src}
                    width={it.w}
                    height={it.h}
                    loading="lazy"
                    decoding="async"
                    alt={`Arte de marketing criada pela Criae, exemplo ${it.n}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.cta}>
          <div className="container">
            <Reveal className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>
                Quer a sua marca <span className="hl">nessa parede?</span>
              </h2>
              <p className={styles.ctaSub}>
                A gente cria a presença digital do seu negócio do jeito certo
                para o seu momento. Bora conversar.
              </p>
              <a
                className="btn btn--accent btn--lg"
                href={wa(WA_MSG)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp{" "}
                <ArrowRight width={20} height={20} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={`container ${styles.footInner}`}>
          <span>CRIAE. Do digital para o negócio, de verdade.</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @criaepro
          </a>
        </div>
      </footer>
    </>
  );
}
