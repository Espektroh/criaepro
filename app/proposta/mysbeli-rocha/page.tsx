import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Layers, Compass, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Pessoas e Negócios · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para a Mysbeli Rocha (Pessoas e Negócios).",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   ============================================================ */
const CLIENT = {
  name: "Mysbeli",
  brand: "Pessoas e Negócios",
  instagram: "@mysbeli",
  date: "Junho de 2026",
};

const SCORES = [
  { label: "Clareza inicial de posicionamento", value: 6.7 },
  { label: "Autoridade percebida nas redes", value: 5.5 },
  { label: "Conversão do perfil em contato", value: 4.2 },
  { label: "Adequação à rotina de 5h por semana", value: 4.0 },
  { label: "Consistência de conteúdo", value: 3.8 },
];

const STATS = [
  { n: "405", l: "seguidores no Instagram" },
  { n: "203", l: "seguidores no Facebook" },
  { n: "5h", l: "por semana pra tudo" },
  { n: "2", l: "públicos a separar" },
];

const RECO_ITEMS = [
  "Perfis configurados e padronizados: Instagram, Facebook e LinkedIn",
  "Posicionamento com duas portas: empresas e profissionais",
  "Página de conversão no lugar do link solto para o LinkedIn",
  "Calendário e conteúdo prontos, sem você gravar todo dia",
  "LinkedIn fortalecido como autoridade B2B",
  "Google Meu Negócio e provas sociais estruturadas",
];

const PLANS = [
  {
    name: "Presença Organizada",
    badge: null as string | null,
    forWho:
      "Deixa seus canais claros e prontos para receber contato. Mas a autoridade não se mantém sozinha.",
    priceOld: null as string | null,
    priceNow: "R$ 790",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero organizar a base",
    waMsg:
      "Oi! Vi a proposta da Pessoas e Negócios e quero começar pela Presença Organizada.",
    items: [
      { t: "Bio reescrita com duas portas (empresas e profissionais)", muted: false },
      { t: "Link hub com os dois caminhos de contato", muted: false },
      { t: "Destaques organizados por público", muted: false },
      { t: "Padronização visual dos 3 canais", muted: false },
      { t: "Sem produção recorrente de conteúdo", muted: true },
      { t: "Sem landing page de conversão", muted: true },
    ],
  },
  {
    name: "Autoridade Digital",
    badge: "Recomendado para você",
    forWho:
      "A Criae assume sua presença e constrói sua autoridade. Você só aprova.",
    priceOld: null,
    priceNow: "R$ 890",
    unit: "por mês, setup incluído",
    monthly: "Suas 5 horas por semana passam a render.",
    featured: true,
    cta: "Começar pela Autoridade",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pelo plano Autoridade Digital. Pode me explicar os próximos passos?",
    items: [
      { t: "Tudo da Presença Organizada", muted: false },
      { t: "Posicionamento da marca Pessoas e Negócios", muted: false },
      { t: "Landing page de conversão (empresas e profissionais)", muted: false },
      { t: "Calendário e criação de conteúdo mensal", muted: false },
      { t: "LinkedIn otimizado como autoridade B2B", muted: false },
      { t: "Templates editáveis e provas sociais", muted: false },
    ],
  },
  {
    name: "Crescimento Sustentável",
    badge: null,
    forWho:
      "Quando a autoridade já gira, é hora de gerar oportunidade em rotina.",
    priceOld: null,
    priceNow: "R$ 1.490",
    unit: "por mês + verba de anúncios",
    monthly: "Para escalar a captação depois da base pronta.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta da Pessoas e Negócios e quero entender o plano Crescimento Sustentável.",
    items: [
      { t: "Tudo da Autoridade Digital", muted: false },
      { t: "Gestão de stories e rotina de relacionamento", muted: false },
      { t: "Campanhas e tráfego pago para RH e carreira", muted: false },
      { t: "Lead magnet: checklist de currículo ou guia de entrevista", muted: false },
      { t: "LinkedIn B2B ativo com conexões estratégicas", muted: false },
      { t: "Mensuração mensal de leads e oportunidades", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Dias 1-15",
    name: "Base",
    desc: "Bio, link, destaques, prova social e CTAs por público.",
  },
  {
    n: "Dias 16-30",
    name: "Autoridade",
    desc: "Landing page, LinkedIn e calendário de conteúdo.",
  },
  {
    n: "Dias 31-60",
    name: "Rotina",
    desc: "Publicações, stories, respostas rápidas e mensuração.",
  },
  {
    n: "Dias 61-90",
    name: "Crescimento",
    desc: "Campanhas, parcerias e otimização de conversão.",
  },
];

export default function PropostaMysbeli() {
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
                {CLIENT.name}, seu digital não precisa{" "}
                <span className={styles.hl}>te dar mais trabalho.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos seu Instagram {CLIENT.instagram}, seu Facebook e seu
                LinkedIn. Você tem o conhecimento de RH, a experiência e serviços
                com demanda. O que falta não é o que dizer, é tempo e a parte
                técnica para dizer com constância. Entre o bebê, a consultoria e
                a oficina, postar todo dia seria pesado demais. Esta página
                mostra outro caminho.
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
                Não falta o que dizer.{" "}
                <span className="hl">Falta tempo de dizer.</span>
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
                    <b>Consistência de conteúdo</b> e{" "}
                    <b>conversão</b> são as notas mais baixas. E a sua
                    autoridade, seu maior ativo, ainda está subaproveitada nas
                    redes.
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
                O link da sua bio leva ao LinkedIn.{" "}
                <span className="hl">Currículo não é venda.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Layers width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: dois públicos misturados</h3>
                  <p>
                    Empresas que querem contratar e profissionais que querem se
                    recolocar chegam no mesmo perfil, sem saber qual caminho
                    seguir. A mensagem fica diluída e ninguém se sente atendido.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Compass width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: duas portas claras</h3>
                  <p>
                    Quero contratar talentos e Quero melhorar minha carreira.
                    Cada público com sua dor, seu argumento e seu CTA, levando a
                    uma página que conduz à conversa, não a um perfil solto.
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
                  Você não precisa virar produtora de{" "}
                  <span className="hl">conteúdo</span>.
                </h2>
                <p className={styles.recoDesc}>
                  Seu trabalho é ajudar pessoas e empresas através do RH. O da
                  Criae é assumir o digital: posicionamento, Instagram, LinkedIn,
                  página de conversão e a rotina de conteúdo. Você foca no que
                  faz melhor, a gente cuida do resto.
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
                A ideia não é contratar tudo de uma vez. É montar uma base clara
                e manter uma autoridade que trabalha sem disputar espaço com a
                sua rotina.
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

            {/* MENTORIA (alternativa) */}
            <Reveal className={styles.altOffer}>
              <div className={styles.altOfferText}>
                <h3>Prefere aprender a fazer você mesma?</h3>
                <p>
                  Se quiser executar no seu tempo, o Criae na Prática tem módulos
                  de tráfego, redes e sites com IA. Para o seu momento, com a
                  agenda apertada, o feito-pra-você acima rende mais, mas a opção
                  fica aqui.
                </p>
              </div>
              <div className={styles.altOfferAside}>
                <span className={styles.altOfferPrice}>
                  Módulos a partir de <b>R$ 97</b> · Curso completo{" "}
                  <b>R$ 997</b>
                </span>
                <a className="btn btn--ghost" href="/criae-na-pratica">
                  Conhecer o Criae na Prática{" "}
                  <ArrowRight width={16} height={16} aria-hidden="true" />
                </a>
              </div>
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
                Os primeiros 90 dias, <span className="hl">por etapa.</span>
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
                {CLIENT.name}, bora tirar o digital{" "}
                <span className="hl">das suas costas?</span>
              </h2>
              <p className={styles.finalSub}>
                É só me responder por aqui que a gente começa pela base. Você
                foca no RH e na sua família, o digital é com a Criae.
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
