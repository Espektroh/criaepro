import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Target, Media, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Gaby Depil · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para a Gaby Depil.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   ============================================================ */
const CLIENT = {
  name: "Gabriela",
  brand: "Gaby Depil",
  instagram: "@_gaby.depil",
  date: "Junho de 2026",
};

const SCORES = [
  { label: "Validação do serviço e procura local", value: 7.4 },
  { label: "Clareza da bio e caminho para WhatsApp", value: 6.8 },
  { label: "Conteúdo com foco em conversão", value: 5.1 },
  { label: "Estrutura para tráfego pago", value: 4.2 },
  { label: "Previsibilidade da agenda", value: 3.8 },
];

const STATS = [
  { n: "110", l: "posts" },
  { n: "1.218", l: "seguidores" },
  { n: "5/dia", l: "meta de clientes" },
  { n: "3", l: "dias fracos (seg, ter, qua)" },
];

const RECO_ITEMS = [
  "Ajuste do Instagram: bio, destaques e CTA com foco em depilação",
  "WhatsApp comercial: mensagens prontas, qualificação e processo",
  "Gestão de Meta Ads com campanhas locais para o WhatsApp",
  "Campanhas de preenchimento para segunda, terça e quarta",
  "Remarketing e reativação de clientes que já passaram por aqui",
  "Rastreamento e relatório mensal de conversas e agendamentos",
];

const PLANS = [
  {
    name: "Base Comercial",
    badge: null as string | null,
    forWho:
      "Organiza o perfil e o WhatsApp, mas a agenda continua dependendo de indicação.",
    priceOld: null as string | null,
    priceNow: "R$ 600",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero só organizar",
    waMsg:
      "Oi! Vi a proposta da Gaby Depil e quero começar pelo plano Base Comercial.",
    items: [
      { t: "Ajuste estratégico do Instagram e da bio", muted: false },
      { t: "Organização dos destaques com foco em depilação", muted: false },
      { t: "WhatsApp comercial com mensagens prontas", muted: false },
      { t: "Configuração de rastreamento", muted: false },
      { t: "Sem gestão de anúncios", muted: true },
      { t: "Sem campanhas para os dias fracos", muted: true },
    ],
  },
  {
    name: "Acelerador Local",
    badge: "Recomendado para você",
    forWho:
      "Transforma horários ociosos em agendamentos. O caminho certo pro seu momento.",
    priceOld: null,
    priceNow: "R$ 697",
    unit: "por mês, com setup incluído",
    monthly: "+ verba de R$ 10 a R$ 20/dia, paga direto ao Meta",
    featured: true,
    cta: "Começar pelo Acelerador",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pelo Acelerador Local. Pode me explicar os próximos passos?",
    items: [
      { t: "Setup comercial incluído (Instagram + WhatsApp)", muted: false },
      { t: "Gestão de Meta Ads com estratégia de campanhas", muted: false },
      { t: "Campanhas locais para preencher segunda a quarta", muted: false },
      { t: "Segmentação em Sorocaba e direcionamento ao WhatsApp", muted: false },
      { t: "Otimizações semanais", muted: false },
      { t: "Relatório mensal de conversas e agendamentos", muted: false },
    ],
  },
  {
    name: "Agenda Cheia",
    badge: null,
    forWho:
      "Para ocupar a semana inteira com conteúdo, anúncios e presença local forte.",
    priceOld: null,
    priceNow: "R$ 1.197",
    unit: "por mês + verba de anúncios",
    monthly: "Para quando a agenda de baixa já estiver girando.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta da Gaby Depil e quero entender o plano Agenda Cheia.",
    items: [
      { t: "Tudo do Acelerador Local", muted: false },
      { t: "Conteúdo no feed e gestão de stories", muted: false },
      { t: "Criativos de vídeo para os serviços", muted: false },
      { t: "Google Meu Negócio otimizado para busca local", muted: false },
      { t: "Remarketing e reativação avançados", muted: false },
      { t: "Campanhas por data e por ocasião", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Base",
    desc: "Bio, CTA, link do WhatsApp e destaques com foco em depilação.",
  },
  {
    n: "Semana 2",
    name: "Criativos",
    desc: "Peças para depilação a cera e para os horários de segunda a quarta.",
  },
  {
    n: "Semana 3",
    name: "Campanha",
    desc: "Meta Ads local com conversão direta para o WhatsApp.",
  },
  {
    n: "Semana 4",
    name: "Leitura",
    desc: "Análise de conversas, horários preenchidos e custo por conversa.",
  },
];

export default function PropostaGabyDepil() {
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
                {CLIENT.name}, tráfego não é só anúncio.{" "}
                <span className={styles.hl}>É agenda cheia.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos seu Instagram {CLIENT.instagram} e o seu momento. A
                demanda existe nas quintas e sextas. O que falta é estrutura para
                encher a agenda de segunda a quarta. Esta página mostra o que
                vimos e qual o melhor caminho pra virar essa chave.
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
                O serviço não é o problema.{" "}
                <span className="hl">A estrutura comercial, sim.</span>
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
                    <b>Previsibilidade da agenda</b> e{" "}
                    <b>estrutura para tráfego</b> são as notas mais baixas, e é
                    aí que o dinheiro de segunda a quarta está parado.
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
                Impulsionar não é estratégia.{" "}
                <span className="hl">É só alcance.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Media width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: impulsionar sem funil</h3>
                  <p>
                    O botão de impulsionar entrega curtida e visualização, mas a
                    agenda de segunda a quarta continua vazia. Atrai curioso, não
                    cliente que marca horário.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Target width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: campanha por dia da semana</h3>
                  <p>
                    Oferta certa para o dia certo, levando direto para um WhatsApp
                    preparado para agendar. Anúncio que nasce da agenda, não do
                    post bonito.
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
                  Uma estrutura que vende{" "}
                  <span className="hl">horário</span>, não serviço.
                </h2>
                <p className={styles.recoDesc}>
                  A proposta não é vender anúncio. É montar uma rotina comercial
                  que transforma horário ocioso em agendamento recorrente,
                  reduzindo a dependência de indicação e de impulsionamento solto.
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
                A verba de anúncios é paga direto ao Meta, nunca passa pela
                Criae. Você começa com o investimento que faz sentido pro seu
                momento.
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
                {CLIENT.name}, bora encher a agenda de{" "}
                <span className="hl">segunda a quarta?</span>
              </h2>
              <p className={styles.finalSub}>
                É só me responder por aqui que a gente já estrutura a primeira
                campanha. Sem fórmula mágica, sem enrolação.
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
