import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Layers, Compass, Sparkle } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · Mônica Otacílio Cabeleireiros · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para o Mônica Otacílio Cabeleireiros.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   Base: Microsite_Monica_Otacilio_Criae_2026-07-28.json (Codex).
   ============================================================ */
const CLIENT = {
  name: "Mônica",
  brand: "Mônica Otacílio Cabeleireiros",
  instagram: "@cabeleireiros_monicaotacilio",
  date: "Julho de 2026",
};

const SCORES = [
  { label: "Clareza de posicionamento", value: 5.8 },
  { label: "Autoridade por serviços e equipe", value: 5.4 },
  { label: "Conteúdo e engajamento", value: 5.1 },
  { label: "Conversão para agendamento", value: 4.2 },
  { label: "Presença local e Google", value: 4.0 },
];

const STATS = [
  { n: "1.484", l: "posts" },
  { n: "3.341", l: "seguidores" },
  { n: "6", l: "destaques visíveis" },
  { n: "25/07", l: "último post observado" },
];

const RECO_ITEMS = [
  "Diagnóstico de posicionamento por serviço",
  "Otimização do Instagram",
  "Link hub de agendamento",
  "WhatsApp comercial e triagem",
  "Destaques por serviço e profissional",
  "Google Business e SEO local",
  "Criativos e campanha local controlada",
  "Relatório de contatos e agendamentos",
];

const PLANS = [
  {
    name: "Vitrine e agenda",
    badge: null as string | null,
    forWho: "Para corrigir bio, links, WhatsApp e destaques antes de anunciar.",
    priceOld: null as string | null,
    priceNow: "R$ 1.890",
    unit: "pagamento único",
    monthly: null as string | null,
    featured: false,
    cta: "Quero organizar",
    waMsg:
      "Oi! Vi a proposta do Mônica Otacílio Cabeleireiros e quero começar pela Vitrine e agenda.",
    items: [
      { t: "Bio comercial", muted: false },
      { t: "Link hub de agendamento", muted: false },
      { t: "WhatsApp comercial", muted: false },
      { t: "Destaques por serviço e profissional", muted: false },
      { t: "Pauta inicial e mapa de agenda", muted: false },
      { t: "Sem campanha local", muted: true },
      { t: "Sem Google Business", muted: true },
    ],
  },
  {
    name: "Agenda local",
    badge: "Recomendado para você",
    forWho:
      "Para atrair clientes para os profissionais novos com campanha local e controle.",
    priceOld: null,
    priceNow: "R$ 2.900",
    unit: "por mês, setup incluído",
    monthly: "+ verba de anúncios, paga direto ao Meta.",
    featured: true,
    cta: "Começar pela Agenda",
    waMsg:
      "Oi! Vi minha proposta no link e quero começar pela Agenda local. Pode me explicar os próximos passos?",
    items: [
      { t: "Tudo da Vitrine e agenda", muted: false },
      { t: "Estratégia e conteúdo comercial", muted: false },
      { t: "Criativos por serviço", muted: false },
      { t: "Google Business e SEO local", muted: false },
      { t: "Meta Ads local controlada", muted: false },
      { t: "Relatório de contatos e agendamentos", muted: false },
    ],
  },
  {
    name: "Crescimento de equipe",
    badge: null,
    forWho:
      "Para virar marca local com agenda recorrente por profissional.",
    priceOld: null,
    priceNow: "R$ 4.500",
    unit: "por mês + verba de anúncios",
    monthly: "Para escalar depois de validar contatos e agenda.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta do Mônica Otacílio Cabeleireiros e quero entender o plano Crescimento de equipe.",
    items: [
      { t: "Tudo da Agenda local", muted: false },
      { t: "Landing page e SEO local", muted: false },
      { t: "Remarketing", muted: false },
      { t: "CRM leve para relacionamento", muted: false },
      { t: "Prova social estruturada", muted: false },
      { t: "Campanhas por serviço", muted: false },
    ],
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Vitrine",
    desc: "Bio, link hub, WhatsApp e destaques por serviço e profissional.",
  },
  {
    n: "Semana 2",
    name: "Agenda",
    desc: "Rota de agendamento e triagem no WhatsApp.",
  },
  {
    n: "Semana 3",
    name: "Local",
    desc: "Google Business e SEO local ativados.",
  },
  {
    n: "Semana 4",
    name: "Campanha",
    desc: "Criativos e Meta Ads local controlada por serviço.",
  },
];

export default function PropostaMonicaOtacilio() {
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
                {CLIENT.name}, a indicação enche a sua cadeira.{" "}
                <span className={styles.hl}>Não a dos profissionais novos.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Olhamos o {CLIENT.instagram}. São 15 anos de história, resultado e
                indicação, com Instagram ativo. Mas essa presença ainda não vira
                agenda clara para os profissionais novos, e a concorrência mais
                visível já disputa as buscas locais. Esta página mostra como
                proteger e preencher essa agenda.
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
                Reputação, vocês têm. <span className="hl">Rota até a agenda, ainda não.</span>
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
                    <b>Conversão para agendamento</b> e{" "}
                    <b>presença local no Google</b> são as notas mais baixas, e é
                    aí que a concorrência ganha as buscas novas.
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
                Os profissionais novos{" "}
                <span className="hl">não têm vitrine própria.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Layers width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: tudo depende da Mônica</h3>
                  <p>
                    A agenda gira pela sua reputação e pela indicação. Os
                    profissionais novos ficam sem caminho próprio para atrair
                    cliente, e a cadeira deles fica ociosa.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Compass width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: vitrine por serviço e profissional</h3>
                  <p>
                    Cada serviço e profissional com destaque, WhatsApp com
                    triagem, Google Business no ar e campanha local. Demanda
                    controlada antes de escalar anúncio.
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
                  Defender a agenda{" "}
                  <span className="hl">antes da concorrência</span>.
                </h2>
                <p className={styles.recoDesc}>
                  A janela de defesa é agora: a concorrência nova ainda está
                  formando hábito local. A Criae organiza a vitrine, o WhatsApp e
                  a agenda dos profissionais novos, ativa o Google Business e roda
                  uma campanha local pequena para validar contatos antes de
                  escalar.
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
                Comece organizando e validando a demanda, e evolua conforme a
                agenda enche. A verba de anúncios é paga direto ao Meta, nunca
                passa pela Criae.
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
                {CLIENT.name}, bora encher a agenda dos{" "}
                <span className="hl">profissionais novos?</span>
              </h2>
              <p className={styles.finalSub}>
                É só me responder por aqui que a gente começa pela vitrine e pela
                validação de demanda. Sem anunciar no escuro.
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
