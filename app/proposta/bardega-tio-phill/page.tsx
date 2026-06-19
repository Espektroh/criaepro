import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Browser, Store, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Bardega Tio Phill · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para a Bardega Tio Phill.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   ============================================================ */
const CLIENT = {
  name: "Allan",
  brand: "Bardega Tio Phill",
  instagram: "@bardega_tiuphill",
  date: "Junho de 2026",
};

const SCORES = [
  { label: "Potencial do modelo híbrido", value: 8.4 },
  { label: "Clareza pública da proposta", value: 5.2 },
  { label: "Integração Arena + Bardega", value: 4.8 },
  { label: "Conversão para reservas e público", value: 4.4 },
  { label: "Calendário recorrente de eventos", value: 3.9 },
];

const STATS = [
  { n: "1.536", l: "seguidores" },
  { n: "175", l: "posts" },
  { n: "0", l: "bio preenchida" },
  { n: "60/40", l: "peso no inverno" },
];

const RECO_ITEMS = [
  "Ajuste do perfil da Bardega: bio com proposta clara",
  "Conexão visível com a Arena",
  "Calendário de happy hour, música e noites temáticas",
  "Artes e roteiros curtos para stories e Reels",
  "Post de agenda toda semana, sem depender de gravação longa",
  "Combos, pós-jogo e datas sazonais",
];

const PLANS = [
  {
    name: "Só a Arena",
    badge: null as string | null,
    forWho: "Gestão do perfil da Arena: esporte, reservas e agenda esportiva.",
    priceOld: null as string | null,
    priceNow: "R$ 280",
    unit: "por mês, setup incluído",
    monthly: null as string | null,
    featured: false,
    cta: "Quero a Arena",
    waMsg:
      "Oi! Vi a proposta e quero gerenciar o perfil da Arena FAL Beach.",
    items: [
      { t: "Perfil da Arena reestruturado: bio e destaques", muted: false },
      { t: "Link de reserva e agenda esportiva", muted: false },
      { t: "Calendário de torneios, treino aberto e day use", muted: false },
      { t: "Artes e conteúdo de agenda semanal", muted: false },
      { t: "WhatsApp organizado por intenção", muted: false },
      { t: "Foco no público esportivo da região", muted: false },
    ],
  },
  {
    name: "Só a Bardega",
    badge: "Recomendado para você",
    forWho: "Gestão do perfil da Bardega: bar, música e eventos temáticos.",
    priceOld: null,
    priceNow: "R$ 280",
    unit: "por mês, setup incluído",
    monthly: null,
    featured: true,
    cta: "Quero a Bardega",
    waMsg:
      "Oi! Vi a proposta e quero gerenciar o perfil da Bardega Tio Phill.",
    items: [
      { t: "Perfil da Bardega ajustado: bio e proposta clara", muted: false },
      { t: "Conexão visível com a Arena", muted: false },
      { t: "Calendário de happy hour, música e temáticas", muted: false },
      { t: "Artes e conteúdo de agenda do bar", muted: false },
      { t: "Combos, pós-jogo e datas sazonais", muted: false },
      { t: "Foco no público de entretenimento", muted: false },
    ],
  },
  {
    name: "Arena + Bardega",
    badge: null,
    forWho: "Os dois perfis como um destino só, com agenda integrada.",
    priceOld: "R$ 560",
    priceNow: "R$ 504",
    unit: "por mês (10% off), setup incluído",
    monthly: "Economia de R$ 56/mês levando as duas juntas.",
    featured: false,
    cta: "Quero as duas (10% off)",
    waMsg:
      "Oi! Vi a proposta e quero o pacote integrado da Arena + Bardega com 10% de desconto.",
    items: [
      { t: "Tudo dos planos da Arena e da Bardega", muted: false },
      { t: "Posicionamento único de destino local", muted: false },
      { t: "Calendário mensal integrado: esporte, bar e eventos", muted: false },
      { t: "Link comercial com botões por intenção", muted: false },
      { t: "Identidade visual padronizada para campanhas", muted: false },
      { t: "Base pronta para o tráfego local da fase 2", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Base",
    desc: "Padronizar nome, bio, destaques e link único do perfil.",
  },
  {
    n: "Semana 2",
    name: "Calendário",
    desc: "Happy hour, música, noites temáticas e posts de agenda do mês.",
  },
  {
    n: "Semana 3",
    name: "Conteúdo",
    desc: "Pacote de artes e roteiros curtos para stories e Reels.",
  },
  {
    n: "Semana 4",
    name: "Movimento",
    desc: "Campanhas locais leves para eventos do bar, com prova social.",
  },
];

export default function PropostaBardegaTioPhill() {
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
                {CLIENT.name}, no inverno quem joga{" "}
                <span className={styles.hl}>é a Bardega.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos o perfil {CLIENT.instagram} e o momento de vocês. Quando a
                quadra esfria, é o bar, a música e os eventos que seguram o
                movimento. A Bardega tem base, mas hoje o perfil está restrito e
                sem uma proposta clara para quem chega de fora. Esta página mostra
                como virar essa chave.
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
                Movimento tem. <span className="hl">Programação, ainda não.</span>
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
                    <b>Calendário de eventos</b> e{" "}
                    <b>conversão para público</b> são as notas mais baixas, e é
                    aí que o movimento de inverno está parado.
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
                Quem chega de fora{" "}
                <span className="hl">não entende a Bardega.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Browser width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: perfil restrito e sem bio</h3>
                  <p>
                    Sem login, o perfil aparece restrito e sem proposta. Quem
                    chega por busca, link ou anúncio não entende o que é, onde
                    fica nem quando abre, e desiste.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Store width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: a Bardega como motor de agenda</h3>
                  <p>
                    Happy hour, música ao vivo, combos, pós-treino e transmissão
                    de jogos. Eventos que dão motivo para ir e aumentam o consumo
                    no bar mesmo fora do verão.
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
                  O bar que sustenta{" "}
                  <span className="hl">o ano todo</span>.
                </h2>
                <p className={styles.recoDesc}>
                  Pro momento de vocês, com pouco tempo e verba enxuta, o foco é
                  claro: abrir e organizar o perfil da Bardega, conectar com a
                  Arena e montar uma agenda de eventos que traga gente mesmo no
                  inverno.
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
                Vocês têm os dois perfis, então o pacote integrado é o que mais
                rende: as duas marcas como um destino só, com 10% de desconto. A
                verba de anúncios da fase 2 é paga direto ao Meta, quando
                quiserem acelerar.
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
                {CLIENT.name}, bora fazer a Bardega{" "}
                <span className="hl">lotar no inverno?</span>
              </h2>
              <p className={styles.finalSub}>
                É só me responder por aqui que a gente já monta o primeiro
                calendário de eventos. Estrutura enxuta, do tamanho da sua rotina.
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
