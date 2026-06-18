import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Layers, Browser, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Lumineon · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para a Lumineon.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   ============================================================ */
const CLIENT = {
  name: "Jéssica",
  brand: "Lumineon",
  instagram: "@lumi_neon_",
  date: "Junho de 2026",
};

const SCORES = [
  { label: "Qualidade percebida do produto", value: 8.2 },
  { label: "Produção de conteúdo e presença", value: 7.6 },
  { label: "Reconhecimento pós-troca de marca", value: 5.1 },
  { label: "Conversão e qualificação antes do WhatsApp", value: 4.2 },
  { label: "Estrutura para tráfego pago", value: 3.9 },
];

const STATS = [
  { n: "207", l: "posts" },
  { n: "2.682", l: "seguidores" },
  { n: "4", l: "anos de marca" },
  { n: "7→1", l: "redução da equipe" },
];

const RECO_ITEMS = [
  "Reposicionamento: Casa do Neon agora é Lumineon, com continuidade",
  "Hierarquia de produtos: logomarca LED como carro-chefe",
  "Landing page comercial: portfólio, projetos, processo e qualificação",
  "Triagem antes do WhatsApp: tipo de projeto, tamanho, prazo e cidade",
  "Instagram comercial: bio, destaques e posts fixados por prioridade",
  "Base pronta para as campanhas de tráfego da fase 2",
];

const PLANS = [
  {
    name: "Organização do Instagram",
    badge: null as string | null,
    forWho:
      "Arruma o perfil, mas o cliente ainda chega cru no WhatsApp, sem saber o que pedir.",
    priceOld: null as string | null,
    priceNow: "R$ 600",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero só organizar",
    waMsg:
      "Oi! Vi a proposta da Lumineon e quero começar pela Organização do Instagram.",
    items: [
      { t: "Ajuste de posicionamento e bio", muted: false },
      { t: "Organização dos destaques", muted: false },
      { t: "Hierarquia de produtos na comunicação", muted: false },
      { t: "Posts fixados por prioridade", muted: false },
      { t: "Sem página comercial", muted: true },
      { t: "Sem triagem antes do WhatsApp", muted: true },
    ],
  },
  {
    name: "Estrutura Comercial",
    badge: "Recomendado para você",
    forWho:
      "A página que você mesma pediu: o cliente escolhe antes do WhatsApp. Enxuta e rápida.",
    priceOld: "R$ 1.550",
    priceNow: "R$ 1.290",
    unit: "setup único (estrutura comercial)",
    monthly: "+ R$ 200/mês de manutenção da página. Opcional.",
    featured: true,
    cta: "Começar pela Estrutura",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pela Estrutura Comercial. Pode me explicar os próximos passos?",
    items: [
      { t: "Tudo da Organização do Instagram", muted: false },
      { t: "Landing page comercial com portfólio e projetos", muted: false },
      { t: "Reposicionamento Casa do Neon para Lumineon", muted: false },
      { t: "Triagem do pedido antes do WhatsApp", muted: false },
      { t: "Foco no produto de maior valor: logomarca LED", muted: false },
      { t: "Base pronta para o tráfego da fase 2", muted: false },
    ],
  },
  {
    name: "Máquina de Orçamentos",
    badge: null,
    forWho:
      "A fase 2: campanhas separadas de caixa e de logomarca premium, com tráfego gerido.",
    priceOld: null,
    priceNow: "R$ 997",
    unit: "por mês + verba de anúncios",
    monthly: "Entra quando o caixa estabilizar e a estrutura estiver no ar.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta da Lumineon e quero entender o plano Máquina de Orçamentos.",
    items: [
      { t: "Tudo da Estrutura Comercial", muted: false },
      { t: "Gestão de Meta Ads com objetivo e mensuração", muted: false },
      { t: "Campanha de caixa separada da campanha premium", muted: false },
      { t: "Criativos para logomarcas LED e remarketing", muted: false },
      { t: "Google Meu Negócio para busca local", muted: false },
      { t: "Relatório mensal de conversas e orçamentos", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Posicionamento",
    desc: "Bio, destaques, posts fixados e hierarquia de produtos.",
  },
  {
    n: "Semana 2",
    name: "Página",
    desc: "Landing page comercial com portfólio e triagem no ar.",
  },
  {
    n: "Semana 3",
    name: "Separação",
    desc: "Comunicação de caixa separada da comunicação premium.",
  },
  {
    n: "Semana 4",
    name: "Base de campanha",
    desc: "Públicos e criativos prontos para o tráfego da fase 2.",
  },
];

export default function PropostaLumineon() {
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
                {CLIENT.name}, a Lumineon não precisa{" "}
                <span className={styles.hl}>brilhar sozinha.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos seu Instagram {CLIENT.instagram} e o seu momento. Você tem
                produto forte e já produz muito conteúdo. O que falta é a
                estrutura que transforma isso em orçamento qualificado, sem
                depender de você responder tudo na mão. Esta página mostra o
                caminho.
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
                Produto forte. <span className="hl">Estrutura comercial, ainda não.</span>
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
                    <b>Estrutura para tráfego</b> e{" "}
                    <b>conversão antes do WhatsApp</b> são as notas mais baixas, e
                    é aí que o conteúdo que você já produz está vazando sem virar
                    orçamento.
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
                O cliente não entende{" "}
                <span className="hl">qual é o produto principal.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Layers width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: tudo no mesmo balaio</h3>
                  <p>
                    A logomarca LED premium divide espaço com liquidação, festas e
                    locação. Quem chega não sabe o que é a Lumineon de verdade,
                    nem por onde pedir um orçamento.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Browser width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: o cliente escolhe antes do WhatsApp</h3>
                  <p>
                    Uma página comercial com portfólio e triagem organiza o
                    pedido: tipo de projeto, tamanho, prazo e cidade. Menos
                    atendimento manual, leads mais qualificados.
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
                  Estrutura enxuta, de{" "}
                  <span className="hl">implementação rápida</span>.
                </h2>
                <p className={styles.recoDesc}>
                  Pensado pro momento da empresa: começar pequeno, sem pesar no
                  caixa. Primeiro a estrutura que organiza marca, produto e pedido.
                  As campanhas de tráfego entram na fase 2, quando o caixa
                  estabilizar.
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
                A entrada é enxuta de propósito. A verba de anúncios da fase 2,
                quando entrar, é paga direto ao Meta, nunca passa pela Criae.
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
                {CLIENT.name}, bora reconstruir a Lumineon{" "}
                <span className="hl">com estrutura, sem pesar na operação?</span>
              </h2>
              <p className={styles.finalSub}>
                É uma estrutura enxuta e de implementação rápida, pensada pro
                momento da empresa. É só me responder por aqui que a gente começa
                pela base.
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
