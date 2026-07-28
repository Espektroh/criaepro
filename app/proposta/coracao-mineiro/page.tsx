import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Layers, Compass, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Coração Mineiro · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para o Coração Mineiro.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   Base: Microsite_Coracao_Mineiro_Criae_2026-07-28.json (Codex).
   ============================================================ */
const CLIENT = {
  brand: "Coração Mineiro",
  instagram: "@ocoracaomineiro",
  date: "Julho de 2026",
};

const SCORES = [
  { label: "Clareza de posicionamento", value: 7.2 },
  { label: "Conteúdo e prova de produto", value: 6.8 },
  { label: "Prova social e recorrência", value: 4.6 },
  { label: "Conversão do link e cardápio", value: 4.1 },
  { label: "SEO local e Google", value: 3.8 },
];

const STATS = [
  { n: "25", l: "posts" },
  { n: "619", l: "seguidores" },
  { n: "1", l: "destaque visível" },
  { n: "35", l: "curtidas no melhor recorte" },
];

const RECO_ITEMS = [
  "Diagnóstico de posicionamento",
  "Otimização do Instagram",
  "Revisão de link hub e cardápio",
  "Google Business e SEO local",
  "Criativos para campanha local",
  "WhatsApp comercial",
  "Prova social e recompra",
];

const PLANS = [
  {
    name: "Vitrine organizada",
    badge: null as string | null,
    forWho: "Para corrigir atrito rápido antes de anunciar.",
    priceOld: null as string | null,
    priceNow: "R$ 1.290",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero organizar",
    waMsg:
      "Oi! Vi a proposta do Coração Mineiro e quero começar pela Vitrine organizada.",
    items: [
      { t: "Bio comercial", muted: false },
      { t: "Link de bio organizado", muted: false },
      { t: "Cardápio revisado", muted: false },
      { t: "WhatsApp comercial", muted: false },
      { t: "Destaques por categoria", muted: false },
      { t: "Sem campanha local", muted: true },
      { t: "Sem Google Business", muted: true },
    ],
  },
  {
    name: "Funil local",
    badge: "Recomendado para você",
    forWho: "Para transformar Instagram em pedido e visita.",
    priceOld: null,
    priceNow: "R$ 1.490",
    unit: "por mês, setup incluído",
    monthly: "+ verba de anúncios, paga direto ao Meta.",
    featured: true,
    cta: "Começar pelo Funil",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pelo Funil local. Pode me explicar os próximos passos?",
    items: [
      { t: "Tudo da Vitrine organizada", muted: false },
      { t: "Estratégia e calendário", muted: false },
      { t: "Criativos comerciais", muted: false },
      { t: "Google Business e SEO local", muted: false },
      { t: "Meta Ads local", muted: false },
      { t: "WhatsApp com rota de pedido", muted: false },
    ],
  },
  {
    name: "Crescimento recorrente",
    badge: null,
    forWho: "Para escalar recompra e datas sazonais.",
    priceOld: null,
    priceNow: "R$ 2.490",
    unit: "por mês + verba de anúncios",
    monthly: "Para depois que a loja validar o fluxo de pedidos.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta do Coração Mineiro e quero entender o plano Crescimento recorrente.",
    items: [
      { t: "Tudo do Funil local", muted: false },
      { t: "Fidelização e recompra", muted: false },
      { t: "Parcerias e influenciadores locais", muted: false },
      { t: "Remarketing", muted: false },
      { t: "Campanhas de presentes e datas sazonais", muted: false },
      { t: "Mensuração mensal", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Vitrine",
    desc: "Bio, link, cardápio e destaques organizados.",
  },
  {
    n: "Semana 2",
    name: "Conversão",
    desc: "WhatsApp comercial e rota clara de pedido.",
  },
  {
    n: "Semana 3",
    name: "Local",
    desc: "Google Business e SEO local ativados.",
  },
  {
    n: "Semana 4",
    name: "Campanha",
    desc: "Criativos e Meta Ads local para a região.",
  },
];

export default function PropostaCoracaoMineiro() {
  return (
    <>
      <header className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <span className={styles.brand}>
            CRIAE<span>.</span>
          </span>
          <span className={styles.barFor}>Proposta para {CLIENT.brand}</span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <Reveal>
              <span className={styles.tag}>
                Diagnóstico estratégico · <b>{CLIENT.brand}</b> · {CLIENT.date}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={styles.heroTitle}>
                O seu produto já tem cara de presente.{" "}
                <span className={styles.hl}>Falta a rota até o pedido.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos o {CLIENT.instagram}. O apelo está lá: experiência
                mineira e produto que dá vontade de presentear. Mas Instagram,
                Linktree, cardápio e WhatsApp ainda não formam um caminho simples
                para escolher, pedir e voltar. Esta página mostra como organizar
                isso.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SCORECARD */}
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">O que o diagnóstico mostrou</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title" style={{ marginBottom: "2.5rem" }}>
                O produto vende. <span className="hl">A vitrine digital, ainda não.</span>
              </h2>
            </Reveal>

            <div className={styles.scoreGrid}>
              <Reveal delay={0.05}>
                <div className={styles.scoreList}>
                  {SCORES.map((s) => {
                    const low = s.value < 4.5;
                    return (
                      <div key={s.label} className={styles.scoreRow}>
                        <span className={styles.scoreLabel}>{s.label}</span>
                        <span className={styles.scoreVal}>
                          {s.value.toFixed(1)}
                          <small> / 10</small>
                        </span>
                        <span className={styles.bar}>
                          <span
                            className={styles.barFill}
                            data-low={low}
                            style={
                              { "--w": `${s.value * 10}%` } as React.CSSProperties
                            }
                          />
                        </span>
                      </div>
                    );
                  })}
                  <p className={styles.lowNote}>
                    <b>Conversão do link e cardápio</b> e <b>SEO local</b> são as
                    notas mais baixas, e é aí que o interesse vira ou não vira
                    pedido.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className={styles.statCard}>
                  <div className={styles.statRow}>
                    {STATS.map((st) => (
                      <div key={st.l} className={styles.stat}>
                        <span className={styles.statN}>{st.n}</span>
                        <span className={styles.statL}>{st.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* INSIGHT */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">O ponto-chave</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                O cliente se interessa,{" "}
                <span className="hl">mas se perde antes de pedir.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Layers width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: cada canal por si</h3>
                  <p>
                    Instagram, Linktree, cardápio e WhatsApp não conversam entre
                    si. Quem quer comprar precisa adivinhar o caminho, e boa parte
                    desiste no meio.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Compass width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: uma vitrine que conduz</h3>
                  <p>
                    Cardápio certo, WhatsApp padronizado, endereço e Google
                    Business no lugar, e campanhas locais. Uma rota simples de
                    escolher, pedir e voltar.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RECOMMENDED */}
        <section className="section section--alt">
          <div className="container">
            <Reveal className={styles.recoWrap}>
              <div>
                <span className={styles.recoTag}>
                  <Sparkle width={16} height={16} aria-hidden="true" /> Nossa
                  recomendação
                </span>
                <h2 className={styles.recoTitle}>
                  Antes de anunciar,{" "}
                  <span className="hl">arrumar a vitrine</span>.
                </h2>
                <p className={styles.recoDesc}>
                  Rodar campanha com a vitrine desorganizada é desperdiçar
                  dinheiro. Primeiro a Criae corrige o cardápio, o link e o
                  WhatsApp, fortalece o Google Business e só então ativa as
                  campanhas locais. Assim cada real de anúncio rende mais.
                </p>
              </div>
              <ul className={styles.recoItems}>
                {RECO_ITEMS.map((it) => (
                  <li key={it}>
                    <Check width={20} height={20} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Investimento</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Três caminhos. <span className="hl">Um recomendado.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="s-sub">
                Comece pela base e evolua conforme a loja valida o fluxo de
                pedidos. A verba de anúncios é paga direto ao Meta, nunca passa
                pela Criae.
              </p>
            </Reveal>

            <div className={styles.plans}>
              {PLANS.map((p, i) => (
                <Reveal
                  key={p.name}
                  delay={i * 0.08}
                  className={`${styles.plan} ${
                    p.featured ? styles.planFeatured : ""
                  }`}
                >
                  {p.badge && <span className={styles.planBadge}>{p.badge}</span>}
                  <h3 className={styles.planName}>{p.name}</h3>
                  <p className={styles.planFor}>{p.forWho}</p>

                  <div className={styles.priceBlock}>
                    {p.priceOld && (
                      <div className={styles.priceOld}>{p.priceOld}</div>
                    )}
                    <div className={styles.priceNow}>
                      {p.priceNow}
                      {p.unit.startsWith("por mês") && <small> /mês</small>}
                    </div>
                    <div className={styles.priceUnit}>{p.unit}</div>
                    {p.monthly && (
                      <div className={styles.priceMonthly}>{p.monthly}</div>
                    )}
                  </div>

                  <ul className={styles.planItems}>
                    {p.items.map((it) => (
                      <li key={it.t} data-muted={it.muted}>
                        <Check width={18} height={18} aria-hidden="true" />
                        {it.t}
                      </li>
                    ))}
                  </ul>

                  <a
                    className={`btn ${
                      p.featured ? "btn--primary" : "btn--ghost"
                    } ${styles.planCta}`}
                    href={wa(p.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.cta}
                    <ArrowRight width={18} height={18} aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className={styles.contractNote}>
                Observação: nossos contratos têm duração de 6 meses.
              </p>
            </Reveal>
          </div>
        </section>

        {/* STEPS */}
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Como começamos</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Os primeiros 30 dias, <span className="hl">passo a passo.</span>
              </h2>
            </Reveal>

            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.08} className={styles.step}>
                  <span className={styles.stepN}>{s.n}</span>
                  <h3 className={styles.stepName}>{s.name}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="container">
            <Reveal className={styles.final}>
              <h2 className={styles.finalTitle}>
                Bora transformar interesse{" "}
                <span className="hl">em pedido?</span>
              </h2>
              <p className={styles.finalSub}>
                É só me responder por aqui que a gente começa pela vitrine. Sem
                anunciar no escuro, sem desperdício.
              </p>
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
