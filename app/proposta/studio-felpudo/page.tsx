import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "@/lib/site";
import {
  Check,
  ArrowRight,
  WhatsApp,
  Store,
  Heart,
  Sparkle,
} from "@/components/icons";
import styles from "./proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Studio Felpudo — Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para o Studio Felpudo.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta — editar só este bloco para clonar p/ outro lead.
   ============================================================ */
const CLIENT = {
  name: "Taciana",
  brand: "Studio Felpudo",
  instagram: "@felpudostudio",
  date: "Junho de 2026",
};

const SCORES = [
  { label: "Clareza inicial da marca", value: 6.5 },
  { label: "Conteúdo de bastidores", value: 5.8 },
  { label: "Vitrine de produtos", value: 5.0 },
  { label: "Conversão para encomendas", value: 3.5 },
  { label: "Estrutura para loja digital", value: 2.8 },
];

const STATS = [
  { n: "30", l: "dias de negócio" },
  { n: "12", l: "posts visíveis" },
  { n: "0", l: "loja ou site" },
  { n: "1", l: "caminho de compra (direct)" },
];

const RECO_ITEMS = [
  "Posicionamento de presentes afetivos personalizados",
  "Identidade visual: logo, paleta e tipografia",
  "Landing page comprável: catálogo, linhas e botão de WhatsApp",
  "Destaques organizados: Catálogo, Pronta entrega, Como pedir",
  "Calendário de conteúdo de 30 dias + roteiro de stories",
  "Fluxo de pedido guiado: modelo, cor, data, retirada/envio",
];

const PLANS = [
  {
    name: "Presença Organizada",
    badge: null as string | null,
    forWho: "Arruma o perfil — mas a venda continua dependendo do direct.",
    priceOld: null as string | null,
    priceNow: "R$ 350",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero só organizar",
    waMsg:
      "Oi! Vi a proposta do Studio Felpudo e quero começar pelo plano Presença Organizada.",
    items: [
      { t: "Bio reescrita com proposta de valor e CTA", muted: false },
      { t: "Destaques e capas organizados", muted: false },
      { t: "Link-hub com WhatsApp e informações de encomenda", muted: false },
      { t: "Roteiro de respostas rápidas + checklist de eventos", muted: false },
      { t: "Sem landing page comprável", muted: true },
      { t: "Sem identidade visual", muted: true },
    ],
  },
  {
    name: "Vitrine Digital",
    badge: "Recomendado para você",
    forWho:
      "Transforma o “que lindo!” em “quero encomendar”. O caminho certo pro seu momento.",
    priceOld: "R$ 1.550",
    priceNow: "R$ 1.290",
    unit: "setup único (construção da vitrine)",
    monthly: "+ R$ 500/mês para manter viva (4 posts + stories) — opcional",
    featured: true,
    cta: "Começar pela Vitrine",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pela Vitrine Digital. Pode me explicar os próximos passos?",
    items: [
      { t: "Tudo da Presença Organizada", muted: false },
      { t: "Identidade visual (logo, paleta, tipografia)", muted: false },
      { t: "Landing page comprável com catálogo por linha", muted: false },
      { t: "Posicionamento de presentes afetivos", muted: false },
      { t: "Calendário de 30 dias + roteiro de stories", muted: false },
      { t: "Fluxo de pedido guiado pelo WhatsApp", muted: false },
    ],
  },
  {
    name: "Crescimento",
    badge: null,
    forWho: "Quando a vitrine já vende, é hora de escalar com anúncios e loja.",
    priceOld: null,
    priceNow: "R$ 2.000",
    unit: "por mês + verba de anúncios",
    monthly: "Setup da vitrine à parte · evolui para loja completa",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta do Studio Felpudo e quero entender o plano Crescimento (anúncios e loja).",
    items: [
      { t: "Tudo da Vitrine Digital", muted: false },
      { t: "Meta Ads: campanhas locais por ocasião e data", muted: false },
      { t: "Reels de processo (pacote de 4 vídeos/mês)", muted: false },
      { t: "Evolução para loja digital completa", muted: false },
      { t: "Calendário de datas comerciais", muted: false },
      { t: "Automação simples de pedidos", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Base",
    desc: "Bio, destaques, WhatsApp, identidade e linha visual.",
  },
  {
    n: "Semana 2",
    name: "Produto",
    desc: "Fotos padronizadas de 8 a 12 peças e nomes das linhas.",
  },
  {
    n: "Semana 3",
    name: "Vitrine",
    desc: "Landing page comprável no ar + bastidores e ocasiões.",
  },
  {
    n: "Semana 4",
    name: "Conversão",
    desc: "Pronta entrega, pedido guiado e leitura do que mais vende.",
  },
];

export default function PropostaStudioFelpudo() {
  return (
    <>
      <header className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <span className={styles.brand}>
            CRIAE<span>.</span>
          </span>
          <span className={styles.barFor}>
            Proposta para {CLIENT.brand}
          </span>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={`${styles.hero}`}>
          <div className="container">
            <Reveal>
              <span className={styles.tag}>
                Diagnóstico estratégico · <b>{CLIENT.brand}</b> · {CLIENT.date}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={styles.heroTitle}>
                {CLIENT.name}, seu produto já chama atenção.{" "}
                <span className={styles.hl}>Agora ele precisa vender.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos seu Instagram {CLIENT.instagram} e sua presença pública.
                As peças são lindas, afetivas e presenteáveis — mas hoje quem
                entra no perfil admira e não entende como comprar. Esta página
                mostra o que vimos e qual o melhor caminho pra virar essa chave.
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
                Charme não falta. <span className="hl">Caminho de compra, sim.</span>
              </h2>
            </Reveal>

            <div className={styles.scoreGrid}>
              <Reveal delay={0.05}>
                <div className={styles.scoreList}>
                  {SCORES.map((s) => {
                    const low = s.value < 4;
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
                    <b>Conversão</b> e <b>loja digital</b> são as notas mais
                    baixas — e é exatamente aí que mora o crescimento.
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
                O problema não é o produto.{" "}
                <span className="hl">É a falta de uma vitrine.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Heart width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: “encomendas pelo direct”</h3>
                  <p>
                    O visitante precisa pensar sozinho o que pedir, quanto custa,
                    o prazo e como paga. Cada dúvida derruba a venda — e o
                    indeciso some.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Store width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: ver → desejar → pedir</h3>
                  <p>
                    Uma vitrine comprável com catálogo, linhas, prazos e botão de
                    WhatsApp organiza a decisão. A pessoa deixa de só admirar e
                    entende que pode comprar agora.
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
                  Comece pequeno, bonito e{" "}
                  <span className="hl">vendável</span>.
                </h2>
                <p className={styles.recoDesc}>
                  Pro seu momento, o ideal não é contratar tudo de uma vez. É
                  montar a vitrine, organizar as redes e criar conteúdo
                  recorrente. Anúncios e loja completa entram depois — quando os
                  produtos campeões já estiverem claros.
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
                Você monta o que faz sentido pro seu momento. A verba de
                anúncios, quando entrar, é paga direto ao Meta — nunca passa pela
                Criae.
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
                      {p.name === "Crescimento" && <small> /mês</small>}
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
                {CLIENT.name}, bora deixar o Studio Felpudo{" "}
                <span className="hl">pronto pra receber encomendas?</span>
              </h2>
              <p className={styles.finalSub}>
                Uma conversa rápida e a gente já define por onde começar. Sem
                compromisso, sem enrolação.
              </p>
              <a
                className="btn btn--accent btn--lg"
                href={wa(
                  "Oi! Acabei de ver a proposta do Studio Felpudo e quero conversar sobre os próximos passos."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp <WhatsApp width={20} height={20} aria-hidden="true" />
              </a>
              <p className={styles.finalNote}>
                Resposta no mesmo dia · {WHATSAPP_DISPLAY}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={`container ${styles.footInner}`}>
          <span>
            CRIAE. · Do digital para o negócio, de verdade.
          </span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            @criaepro
          </a>
        </div>
      </footer>
    </>
  );
}
