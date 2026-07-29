import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { wa, INSTAGRAM_URL } from "@/lib/site";
import { Check, ArrowRight, Layers, Compass, Sparkle, Target } from "@/components/icons";
import styles from "../proposta.module.css";

export const metadata: Metadata = {
  title: "Proposta · NaPelle Estética Avançada · Criae",
  description:
    "Diagnóstico de presença digital e plano recomendado para a NaPelle Estética Avançada.",
  robots: { index: false, follow: false },
};

/* ============================================================
   Dados da proposta. Editar só este bloco para clonar p/ outro lead.
   Base: reunião de 29/07/2026 com Vanessa Queiroz + auditoria técnica
   do site atual medida em 27/07/2026 (Chrome DevTools).
   ============================================================ */
const CLIENT = {
  name: "Vanessa",
  brand: "NaPelle Estética Avançada",
  date: "Julho de 2026",
  sitePreview: "https://sites-vinicius.vercel.app/clientes/napelle/",
};

const SCORES = [
  { label: "Medição de resultado", value: 1.0 },
  { label: "Estrutura para busca no Google", value: 2.5 },
  { label: "Rota até o WhatsApp", value: 3.0 },
  { label: "Autoridade da profissional", value: 3.5 },
  { label: "Velocidade no celular", value: 4.0 },
];

const STATS = [
  { n: "R$ 2 mil", l: "investidos por mês no Google" },
  { n: "4", l: "páginas no site inteiro" },
  { n: "0", l: "páginas por procedimento" },
  { n: "3", l: "links para o WhatsApp" },
];

const RECO_ITEMS = [
  "Site novo, pronto e já no ar",
  "Uma página para cada procedimento",
  "CO2, fios de PDO e PEIM em destaque",
  "Google Business com endereço correto",
  "E-mail da clínica funcionando",
  "Gestão das campanhas de Google Ads",
  "Medição de visitas e de contatos",
  "Relatório mensal do que entrou",
];

const PLANS = [
  {
    name: "Só o site",
    badge: null as string | null,
    forWho:
      "Resolve a vitrine. O investimento de R$ 2 mil no Google continua rodando sem ninguém pilotando.",
    priceOld: null as string | null,
    priceNow: "R$ 4.500",
    unit: "pagamento único",
    monthly: "Mais R$ 350 por mês de manutenção, já a partir de agosto.",
    featured: false,
    cta: "Quero só o site",
    waMsg:
      "Oi! Vi a proposta da NaPelle e queria entender melhor a opção de fazer só o site.",
    items: [
      { t: "Site novo publicado no seu domínio", muted: false },
      { t: "Página para cada procedimento", muted: false },
      { t: "E-mail da clínica configurado", muted: false },
      { t: "Medição de visitas instalada", muted: false },
      { t: "Sem gestão das campanhas", muted: true },
      { t: "Sem Google Business", muted: true },
      { t: "Manutenção cobrada desde o primeiro mês", muted: true },
    ],
  },
  {
    name: "Site e Google",
    badge: "Recomendado para você",
    forWho:
      "O mesmo site, mais a gestão do que você já paga. Custa menos para começar do que fazer só o site.",
    priceOld: "R$ 1.150 por mês",
    priceNow: "R$ 800",
    unit: "por mês até outubro",
    monthly:
      "Depois de outubro fica R$ 1.000 por mês, com a manutenção do site inclusa. A verba de anúncios continua sendo paga direto ao Google.",
    featured: true,
    cta: "Quero começar por aqui",
    waMsg:
      "Oi! Vi a proposta da NaPelle e quero começar pelo plano Site e Google. Pode me passar os próximos passos?",
    items: [
      { t: "Tudo do plano Só o site", muted: false },
      { t: "Site pago só em outubro, parcelado", muted: false },
      { t: "Manutenção bonificada até outubro", muted: false },
      { t: "Gestão das campanhas de Google Ads", muted: false },
      { t: "Google Business corrigido e otimizado", muted: false },
      { t: "Relatório mensal de contatos", muted: false },
    ],
  },
  {
    name: "Google e Meta juntos",
    badge: null,
    forWho:
      "Para quando o Google estiver dando retorno e você quiser tirar o Meta das suas costas.",
    priceOld: null,
    priceNow: "R$ 1.500",
    unit: "por mês mais verba",
    monthly:
      "Faz sentido depois de validar o Google. Hoje o seu Meta vai bem e não precisa de socorro.",
    featured: false,
    cta: "Falar sobre escalar",
    waMsg:
      "Oi! Vi a proposta da NaPelle e quero entender o plano de Google e Meta juntos.",
    items: [
      { t: "Tudo do plano Site e Google", muted: false },
      { t: "Gestão também do Meta Ads", muted: false },
      { t: "Criativos por procedimento", muted: false },
      { t: "Remarketing entre os dois canais", muted: false },
      { t: "Relatório único dos dois canais", muted: false },
    ],
  },
];

/* Fluxo de caixa mês a mês. É a peça que o sócio vai olhar. */
const CASH = [
  {
    m: "Agosto",
    v: "R$ 800",
    d: "Gestão do Google. Site em produção, sem custo.",
    hl: false,
  },
  {
    m: "Setembro",
    v: "R$ 800",
    d: "Site novo no ar, no domínio da clínica. Manutenção bonificada.",
    hl: false,
  },
  {
    m: "Outubro",
    v: "R$ 800 + parcela",
    d: "Aqui entra a criação do site, à vista ou parcelada no cartão.",
    hl: true,
  },
  {
    m: "Novembro em diante",
    v: "R$ 1.000",
    d: "Gestão do Google mais manutenção do site, tudo incluso.",
    hl: false,
  },
];

const STEPS = [
  {
    n: "Semana 1",
    name: "Parar a sangria",
    desc: "Google Business com endereço certo, e-mail da clínica criado e medição instalada.",
  },
  {
    n: "Semana 2",
    name: "Assumir o Google",
    desc: "Auditoria das campanhas que a agência antiga deixou rodando e reestruturação.",
  },
  {
    n: "Semana 3",
    name: "Publicar o site",
    desc: "Site novo no seu domínio, com a sua trajetória e a sua formação no lugar certo.",
  },
  {
    n: "Semana 4",
    name: "Abrir as páginas",
    desc: "CO2, fios de PDO e PEIM com página própria, cada uma ligada ao anúncio certo.",
  },
];

export default function PropostaNapelle() {
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
                {CLIENT.name}, você já investe R$ 2 mil por mês no Google.{" "}
                <span className={styles.hl}>
                  O site que recebe esse dinheiro não fala do que você mais vende.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.heroSub}>
                Na nossa conversa você contou que o CO2 e os fios de PDO são o que
                mais dá retorno, e que o PEIM é a porta de entrada da clínica.
                Nenhum dos três tem uma linha escrita no site atual. A pergunta
                desta proposta não é se vale investir no Google. Você já investe.
                A pergunta é quem está pilotando.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SCORECARD */}
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">O que a auditoria mostrou</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title" style={{ marginBottom: "2.5rem" }}>
                Não é questão de gosto.{" "}
                <span className="hl">Foi tudo medido.</span>
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
                    A nota mais baixa é <b>medição</b>. Hoje é impossível responder
                    quantas pessoas entraram no site no mês e quantas chamaram no
                    WhatsApp. Sem isso, os R$ 2 mil do Google são uma aposta, não um
                    investimento.
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
                O anúncio paga.{" "}
                <span className="hl">A página não entrega.</span>
              </h2>
            </Reveal>

            <div className={styles.insightGrid}>
              <Reveal delay={0.05}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Layers width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>Hoje: o dinheiro cai numa página muda</h3>
                  <p>
                    As campanhas que a agência antiga montou continuam rodando
                    sozinhas. Quem clica cai num site de quatro páginas que não
                    explica CO2, não explica fios de PDO e não explica PEIM. O
                    clique foi pago. A conversa não acontece.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Compass width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>O caminho: uma página por procedimento</h3>
                  <p>
                    Quem procura laser CO2 em Sorocaba cai numa página sobre laser
                    CO2, com o seu nome, a sua formação e o botão do WhatsApp já
                    com a mensagem escrita. O mesmo anúncio passa a valer mais sem
                    aumentar um real de verba.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className={styles.insight}>
                  <span className={styles.insightIcon}>
                    <Target width={22} height={22} aria-hidden="true" />
                  </span>
                  <h3>E o que ninguém está olhando</h3>
                  <p>
                    O e-mail da clínica nunca foi criado, então nenhuma mensagem
                    chega. Há endereço desatualizado aparecendo no Google. E não
                    existe acesso à hospedagem para corrigir nada disso. São três
                    coisas que se resolvem na primeira semana.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SITE PRONTO */}
        <section className="section section--alt">
          <div className="container">
            <Reveal className={styles.recoWrap}>
              <div>
                <span className={styles.recoTag}>
                  <Sparkle width={16} height={16} aria-hidden="true" /> O site já
                  existe
                </span>
                <h2 className={styles.recoTitle}>
                  Você já viu funcionando.{" "}
                  <span className="hl">Não é maquete.</span>
                </h2>
                <p className={styles.recoDesc}>
                  O site novo está construído e no ar desde a nossa conversa, com
                  as suas fotos, a sua formação pela Universidade de Miami e os
                  seus procedimentos organizados por área. Falta o que combinamos
                  na reunião: incluir a bioquímica e os seus 20 anos de carreira, e
                  abrir a página individual de cada procedimento. Abra no celular e
                  role até o fim.
                </p>
                <p className={styles.recoDesc}>
                  <a
                    href={CLIENT.sitePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>Ver o site novo</b>
                  </a>
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
                Repare numa coisa antes de comparar: o plano recomendado custa
                menos para começar do que fazer só o site. A verba de anúncios
                continua sendo paga direto ao Google e nunca passa pela Criae.
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

        {/* FLUXO DE CAIXA */}
        <section className="section section--alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Como fica no caixa</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="s-title">
                Você contou que até outubro{" "}
                <span className="hl">o caixa está comprometido.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="s-sub">
                A reforma deixou parcelamentos correndo até outubro. Então o plano
                foi desenhado para caber nisso: os R$ 4.500 do site só entram em
                outubro, parcelados no cartão, e até lá a manutenção não é cobrada.
              </p>
            </Reveal>

            <div className={styles.cash}>
              {CASH.map((c, i) => (
                <Reveal
                  key={c.m}
                  delay={i * 0.07}
                  className={`${styles.cashRow} ${c.hl ? styles.cashRowHl : ""}`}
                >
                  <span className={styles.cashMonth}>{c.m}</span>
                  <span className={styles.cashValue}>{c.v}</span>
                  <span className={styles.cashDesc}>{c.d}</span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className={styles.cashNote}>
                Os R$ 4.500 da criação do site cobrem a página completa, a
                configuração do e-mail da clínica, a publicação no domínio de vocês
                e a medição de acessos instalada. Podem ser pagos à vista em outubro
                ou parcelados no cartão.
              </p>
            </Reveal>
          </div>
        </section>

        {/* STEPS */}
        <section className="section">
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

        {/* FINAL */}
        <section className="section">
          <div className="container">
            <Reveal className={styles.final}>
              <h2 className={styles.finalTitle}>
                {CLIENT.name}, o gasto no Google{" "}
                <span className="hl">já está acontecendo.</span>
              </h2>
              <p className={styles.finalSub}>
                R$ 800 por mês é o custo de ter alguém pilotando esses R$ 2 mil, com
                o site novo no ar e a manutenção por nossa conta até outubro. É
                menos do que a clínica já gasta hoje deixando as campanhas rodarem
                sozinhas. É só me responder por aqui que a gente começa.
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
