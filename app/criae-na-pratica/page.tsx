import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, WhatsApp, Sparkle } from "@/components/icons";
import styles from "./curso.module.css";

export const metadata: Metadata = {
  title: "Criae na Prática · Mentoria e curso de marketing",
  description:
    "Aprenda tráfego pago, gestão de redes e criação de sites com IA em módulos curtos e diretos. Compre só o que precisa e evolua no seu ritmo.",
  alternates: { canonical: "/criae-na-pratica" },
};

const FUNDAMENTO = {
  code: "M0",
  name: "Presença Digital do Zero",
  desc: "Posicionamento, perfil comercial, bio, destaques e o que postar.",
  price: "R$ 97",
  wa: "Oi! Quero começar pelo módulo Presença Digital do Zero (Criae na Prática).",
};

const TRILHAS = [
  {
    name: "Redes que Vendem",
    desc: "Conteúdo, design e stories que viram cliente.",
    featured: false,
    tag: null as string | null,
    modules: [
      { code: "A1", name: "Conteúdo que converte", price: "R$ 147" },
      { code: "A2", name: "Design com Canva + IA", price: "R$ 147" },
      { code: "A3", name: "Stories & Reels na prática", price: "R$ 127" },
    ],
    old: "R$ 421",
    price: "R$ 347",
    wa: "Oi! Quero a Trilha Redes que Vendem do Criae na Prática.",
  },
  {
    name: "Tráfego Pago na Prática",
    desc: "Do Gerenciador à campanha que enche a agenda.",
    featured: true,
    tag: "Mais procurada",
    modules: [
      { code: "B1", name: "Meta Ads do zero", price: "R$ 197" },
      { code: "B2", name: "Campanhas que convertem", price: "R$ 247" },
      { code: "B3", name: "WhatsApp comercial + funil", price: "R$ 147" },
    ],
    old: "R$ 591",
    price: "R$ 477",
    wa: "Oi! Quero a Trilha de Tráfego Pago do Criae na Prática.",
  },
  {
    name: "Sites & IA",
    desc: "Seu site no ar e a IA trabalhando por você.",
    featured: false,
    tag: null,
    modules: [
      { code: "C1", name: "Seu site/landing com IA", price: "R$ 247" },
      { code: "C2", name: "SEO local + Google Meu Negócio", price: "R$ 147" },
      { code: "C3", name: "IA no dia a dia", price: "R$ 197" },
    ],
    old: "R$ 591",
    price: "R$ 477",
    wa: "Oi! Quero a Trilha Sites & IA do Criae na Prática.",
  },
];

const MENTORIA = [
  {
    name: "Mentoria avulsa",
    desc: "1 sessão de 1h ao vivo, no ponto que você precisar.",
    price: "R$ 197",
    unit: "por sessão",
    featured: false,
    wa: "Oi! Quero uma Mentoria avulsa com a Criae.",
  },
  {
    name: "Faça comigo",
    desc: "A Criae monta junto com você, ao vivo: a primeira campanha ou o primeiro site.",
    price: "a partir de R$ 397",
    unit: "por projeto",
    featured: true,
    wa: "Oi! Quero o Faça comigo da Criae.",
  },
  {
    name: "Acompanhamento mensal",
    desc: "4 encontros por mês mais suporte no WhatsApp.",
    price: "R$ 597",
    unit: "por mês",
    featured: false,
    wa: "Oi! Quero o acompanhamento mensal da Criae.",
  },
];

const FULL_WA = "Oi! Quero o Curso Completo do Criae na Prática.";
const HERO_WA =
  "Oi! Vi o Criae na Prática e quero saber por onde começar.";

export default function CriaeNaPratica() {
  return (
    <>
      <header className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <a href="/" className={styles.brand}>
            Criae<span>.</span>
          </a>
          <a
            className="btn btn--primary"
            href={wa(HERO_WA)}
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
              <span className="eyebrow">Criae na Prática</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={styles.heroTitle}>
                O marketing do seu negócio, agora{" "}
                <span className={styles.hl}>nas suas mãos.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Aprenda tráfego pago, gestão de redes e criação de sites com IA
                em módulos curtos e diretos. Compre só o que precisa, evolua no
                seu ritmo. E quando quiser, a Criae assume pra você.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className={styles.heroActions}>
                <a
                  className="btn btn--primary btn--lg"
                  href={wa(HERO_WA)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero começar{" "}
                  <ArrowRight width={18} height={18} aria-hidden="true" />
                </a>
                <a className="btn btn--ghost btn--lg" href="#modulos">
                  Ver os módulos
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Para quem é</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Feito para quem quer{" "}
                <span className="hl">aprender e fazer.</span>
              </h2>
            </Reveal>

            <div className={styles.audience}>
              <Reveal delay={0.05}>
                <div className={styles.audCard}>
                  <h3>É pra você se...</h3>
                  <ul className={styles.audList}>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Você está começando ou a verba ainda é curta
                    </li>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Tem um tempo e quer botar a mão na massa
                    </li>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Cansou de postar no improviso e quer método
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.audCard}>
                  <h3>Como funciona</h3>
                  <ul className={styles.audList}>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Módulos curtos, com templates e checklists prontos
                    </li>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Compre avulso ou junte numa trilha com desconto
                    </li>
                    <li>
                      <Check width={18} height={18} aria-hidden="true" />
                      Precisou de ajuda ao vivo? Tem mentoria
                    </li>
                  </ul>
                  <p className={styles.audNote}>
                    Sem tempo para fazer? A Criae faz por você.{" "}
                    <a href="/">Conheça os serviços.</a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MODULES / TRILHAS */}
        <section className="section" id="modulos">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Os módulos</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Comece por onde <span className="hl">fizer sentido.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="s-sub">
                Cada módulo é avulso e vem com templates prontos. Junte numa
                trilha e economize.
              </p>
            </Reveal>

            {/* fundamento */}
            <Reveal delay={0.1}>
              <div className={styles.startHere}>
                <div className="info">
                  <b>
                    Ponto de partida · {FUNDAMENTO.code} · {FUNDAMENTO.name}
                  </b>
                  <p>{FUNDAMENTO.desc}</p>
                </div>
                <span className={styles.startPrice}>{FUNDAMENTO.price}</span>
                <a
                  className="btn btn--ghost"
                  href={wa(FUNDAMENTO.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero este{" "}
                  <ArrowRight width={16} height={16} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            {/* trilhas */}
            <div className={styles.trilhas}>
              {TRILHAS.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={i * 0.08}
                  className={`${styles.trilha} ${
                    t.featured ? styles.trilhaFeatured : ""
                  }`}
                >
                  {t.tag && <span className={styles.trilhaTag}>{t.tag}</span>}
                  <h3 className={styles.trilhaName}>{t.name}</h3>
                  <p className={styles.trilhaDesc}>{t.desc}</p>

                  <ul className={styles.modList}>
                    {t.modules.map((m) => (
                      <li key={m.code} className={styles.modRow}>
                        <span className={styles.modName}>
                          <small>{m.code}</small>
                          {m.name}
                        </span>
                        <span className={styles.modPrice}>{m.price}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.trilhaFoot}>
                    <div className={styles.trilhaPrice}>
                      <span className={styles.trilhaOld}>{t.old}</span>
                      <span className={styles.trilhaNow}>{t.price}</span>
                    </div>
                    <p className={styles.trilhaCaption}>
                      Trilha completa, os 3 módulos.
                    </p>
                    <a
                      className={`btn ${
                        t.featured ? "btn--primary" : "btn--ghost"
                      } ${styles.trilhaCta}`}
                      href={wa(t.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero esta trilha{" "}
                      <ArrowRight width={18} height={18} aria-hidden="true" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FULL COURSE */}
        <section className="section section--alt">
          <div className="container">
            <Reveal className={styles.full}>
              <div>
                <span className={styles.fullTag}>Melhor custo-benefício</span>
                <h2 className={styles.fullTitle}>
                  Quer tudo? <span className="hl">Curso completo.</span>
                </h2>
                <p className={styles.fullDesc}>
                  Os 10 módulos, do zero ao avançado: redes, tráfego pago e
                  sites com IA. Acesso a todos os templates e atualizações.
                </p>
              </div>
              <div className={styles.fullPriceBox}>
                <div className={styles.fullOld}>de R$ 1.700</div>
                <div className={styles.fullNow}>R$ 997</div>
                <a
                  className="btn btn--accent btn--lg"
                  href={wa(FULL_WA)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero o completo{" "}
                  <ArrowRight width={18} height={18} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MENTORIA */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Mentoria ao vivo</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Prefere ao vivo? <span className="hl">A Criae te guia.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="s-sub">
                Quando você quer mão na roda de quem faz isso todo dia, a
                mentoria é o caminho mais rápido.
              </p>
            </Reveal>

            <div className={styles.mentoria}>
              {MENTORIA.map((m, i) => (
                <Reveal
                  key={m.name}
                  delay={i * 0.08}
                  className={`${styles.mCard} ${
                    m.featured ? styles.mCardFeatured : ""
                  }`}
                >
                  <h3 className={styles.mName}>{m.name}</h3>
                  <p className={styles.mDesc}>{m.desc}</p>
                  <div className={styles.mPriceBox}>
                    <div className={styles.mNow}>{m.price}</div>
                    <div className={styles.mUnit}>{m.unit}</div>
                  </div>
                  <a
                    className={`btn ${
                      m.featured ? "btn--primary" : "btn--ghost"
                    } ${styles.mCta}`}
                    href={wa(m.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero{" "}
                    <ArrowRight width={18} height={18} aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CREDIT */}
        <section className="section section--alt">
          <div className="container">
            <Reveal className={styles.credit}>
              <h3>
                <Sparkle
                  width={20}
                  height={20}
                  aria-hidden="true"
                  style={{ verticalAlign: "-3px", marginRight: "6px", color: "var(--criae)" }}
                />
                O que você investe aqui volta como desconto
              </h3>
              <p>
                Decidiu que prefere a Criae fazendo por você? O valor que você
                pagou nos módulos ou no curso <b>vira desconto</b> no serviço
                feito-pra-você. Você aprende sem risco, e evolui pro completo
                quando estiver pronto.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.cta}>
          <div className="container">
            <Reveal className={styles.ctaInner}>
              <h2 className={styles.ctaTitle}>
                Bora tirar seu marketing{" "}
                <span className="hl">do improviso?</span>
              </h2>
              <p className={styles.ctaSub}>
                Me chama no WhatsApp que eu te ajudo a escolher por onde começar,
                do jeito certo pro seu momento.
              </p>
              <a
                className="btn btn--accent btn--lg"
                href={wa(HERO_WA)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp{" "}
                <WhatsApp width={20} height={20} aria-hidden="true" />
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
