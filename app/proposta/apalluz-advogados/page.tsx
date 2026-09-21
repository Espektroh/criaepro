import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check } from "@/components/icons";
import { INSTAGRAM_URL, wa } from "@/lib/site";
import shared from "../proposta.module.css";
import styles from "./proposta.module.css";

const PAGE_URL = "https://www.criaepro.com.br/proposta/apalluz-advogados";
const TITLE = "Patrícia, sua próxima etapa digital | Apalluz + CRIAE";
const DESCRIPTION =
  "Uma proposta para a Apalluz Advogados: você grava, a CRIAE cuida da estratégia, da edição e da presença digital.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "CRIAE",
    locale: "pt_BR",
    type: "website",
    images: [],
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION, images: [] },
};

const SCORES = [
  { label: "Clareza de posicionamento", value: 7.6 },
  { label: "Autoridade e confiança", value: 5.9 },
  { label: "Conversão e contato", value: 2.7 },
  { label: "Conteúdo e consistência", value: 6.8 },
  { label: "Presença local e busca", value: 3.6 },
];

const STATS = [
  { n: "38", label: "publicações no perfil" },
  { n: "84", label: "seguidores no recorte" },
  { n: "0", label: "links externos de contato visíveis na bio" },
  { n: "2 dias", label: "intervalo indicado no reel mais recente observado" },
];

const PLANS = [
  {
    id: "essencial",
    name: "Conteúdo essencial",
    badge: "Uma rotina mais simples",
    forWho: "Para manter o Instagram ativo com edição profissional e um escopo enxuto.",
    price: "R$ 1.250",
    volume: "8 publicações no feed por mês",
    recommended: false,
    items: [
      "4 reels editados a partir dos vídeos que você enviar",
      "4 artes ou carrosséis, além dos reels",
      "Pautas, roteiros e orientação remota de gravação",
      "Legendas, capas, agendamento e publicação no Instagram",
      "Ajuste inicial da bio e do link para seu contato profissional",
      "Relatório Mensal",
    ],
    limit: "Sem landing page, gestão do Google ou anúncios.",
    cta: "Escolher o essencial",
  },
  {
    id: "autoridade",
    name: "Autoridade e contato",
    badge: "Nossa recomendação",
    forWho: "Para conectar o conteúdo que você já faz a uma presença profissional e a um caminho claro de contato.",
    price: "R$ 1.600",
    volume: "12 publicações no feed por mês",
    recommended: true,
    items: [

      "6 reels editados a partir dos vídeos que você enviar",

      "6 artes ou carrosséis, além dos reels",

      "Toda a operação de roteiro, edição, legendas e publicação do Essencial",

      "Organização de bio, link de contato e até 4 destaques institucionais",

      "Reunião Mensal",

      "<strong>BÔNUS: Landing page institucional de uma página, com implantação incluída</strong>",

      "<strong>BÔNUS: Gestão de anúncios na Meta (Instagram e Facebook)</strong>",

    ],
    limit: "Sem gestão de anúncios. Primeiro, organizar e medir a base.",
    cta: "Quero este plano",
  },
  {
    id: "presenca",
    name: "Presença e busca",
    badge: "Uma etapa de expansão",
    forWho: "Para ampliar a presença e testar a busca paga depois de validar conteúdo, contato e capacidade de atendimento.",
    price: "R$ 2.190",
    volume: "16 publicações no feed por mês",
    recommended: false,
    items: [

      "8 reels editados a partir dos vídeos que você enviar",

      "8 artes ou carrosséis, além dos reels",

      "Toda a estrutura institucional e a mensuração do Autoridade e contato",

      "Implantação ou revisão do Perfil da Empresa no Google, se elegível e validado",

      "Revisão de criativos e ajustes semanais de campanha",

      "Reunião Mensal",

      "<strong>BÔNUS: Gestão de anúncios na Meta (Instagram e Facebook) e campanhas de pesquisa no Google (Google Ads)</strong>",

    ],
    limit: "Verba de mídia recomendada de pelo menos R$ 10/dia (Meta) + verba inicial Google, pagas às plataformas.",
    cta: "Conversar sobre expansão",
  },
];

const STEPS = [
  {
    n: "01 · Direção",
    name: "Nós preparamos",
    desc: "Você recebe os temas, os roteiros e as orientações de enquadramento, áudio e luz. As pautas partem da sua atuação criminal.",
  },
  {
    n: "02 · Gravação",
    name: "Você grava e envia",
    desc: "Com seu equipamento, no local de sua preferência. A captação é sua responsabilidade e não exige encontro presencial com a CRIAE.",
  },
  {
    n: "03 · Produção",
    name: "Nós editamos",
    desc: "Cortes, legendas, tratamento básico de áudio, capa e identidade visual. Você valida o conteúdo jurídico antes da publicação.",
  },
  {
    n: "04 · Continuidade",
    name: "Nós publicamos e lemos os dados",
    desc: "Organizamos o calendário e acompanhamos os sinais disponíveis. Os contatos recebidos ficam com você e sua equipe.",
  },
];

const FAQS = [
  {
    q: "A CRIAE faz as gravações?",
    a: "Não. Em todos os planos, você grava e envia os arquivos. A CRIAE fornece roteiros e orientação remota, edita os vídeos e publica o conteúdo aprovado. Não estão incluídos cinegrafista, estúdio, equipamentos, deslocamento ou captação presencial, em Sorocaba, São Paulo ou outra cidade.",
  },
  {
    q: "Quanto material preciso enviar?",
    a: "O lote mensal acompanha o plano: 4, 6 ou 8 vídeos. Cada reel final terá até 90 segundos, a partir de até 5 minutos de material bruto por vídeo. Você recebe a pauta antes de gravar. Áudio compreensível e imagem utilizável são necessários; a edição não recupera toda falha de captação. Se necessário, orientamos uma nova gravação.",
  },
  {
    q: "O que conta como uma entrega?",
    a: "Cada reel, arte estática ou carrossel de até 6 páginas conta como uma publicação no feed. Stories são contados por tela, não por sequência, e adaptados do conteúdo aprovado. Incluímos uma rodada consolidada de ajustes por peça. Os volumes dos planos maiores substituem, e não somam, os dos anteriores. Atendimento de mensagens, plantão jurídico e gestão de comentários não estão incluídos.",
  },
  {
    q: "O que está incluído na página e no Google?",
    a: "Nos planos Autoridade e contato e Presença e busca, criamos uma landing page institucional com apresentação, áreas de atuação validadas, credenciais e acesso ao contato profissional. Implantação, hospedagem e manutenção básica ficam incluídas durante o contrato. Registro ou renovação do domínio é pago à parte por você. O trabalho no Google depende da elegibilidade, da comprovação da operação e da verificação da plataforma. Não prometemos aprovação nem posição nas buscas.",
  },
  {
    q: "Como vamos medir sem expor informações de clientes?",
    a: "Vamos acompanhar alcance e interação do conteúdo, visitas e cliques para contato quando houver dados disponíveis. Clique não equivale a conversa ou contratação. Para essa leitura, você pode informar apenas os totais de contatos recebidos e atendimentos, sem compartilhar nomes, documentos ou detalhes dos casos. Ferramentas de mensuração serão definidas com revisão de privacidade.",
  },
  {
    q: "Como funciona a revisão do conteúdo jurídico?",
    a: "Você aprova o conteúdo técnico, as credenciais e as peças antes de publicarmos. A direção será informativa e sóbria, sem promessa de resultado, exposição de casos ou estímulo ao litígio. Qualquer campanha depende também da revisão das normas profissionais e das políticas da plataforma. Não propomos remarketing baseado em situações criminais pessoais.",
  },
  {
    q: "Quais são as condições da proposta?",
    a: "Propomos contrato inicial de 6 meses, com pagamento mensal e implantação incluída no plano escolhido. O início depende da contratação, dos acessos e dos materiais. O calendário é combinado após o primeiro envio e a aprovação das peças. Atrasos no material exigem replanejamento. Demandas extras, produção presencial, site com múltiplas páginas e verba de anúncios não fazem parte da mensalidade. O escopo e as condições finais serão formalizados em contrato.",
  },
];

function planContact(name: string) {
  return wa(`Olá! Sou a Patrícia, da Apalluz Advogados. Vi a proposta e quero conversar sobre o plano ${name}. Entendi que a gravação fica por minha conta e a CRIAE cuida da edição e das entregas do plano.`);
}

export default function PropostaApalluz() {
  return (
    <div className={styles.page}>
      <a href="#conteudo" className={styles.skipLink}>Ir para o conteúdo</a>
      <header className={styles.topbar}>
        <div className={`container ${shared.barInner}`}>
          <a href="#conteudo" className={shared.brand} aria-label="CRIAE, início da proposta">CRIAE<span>.</span></a>
          <span className={styles.headerClient}>Uma proposta para a Apalluz</span>
          <a href="#planos" className={styles.headerLink}>Ver planos <ArrowRight width={16} height={16} aria-hidden="true" /></a>
        </div>
      </header>

      <main id="conteudo">
        <section className={`${shared.hero} ${styles.hero}`} aria-labelledby="titulo">
          <div className={`container ${styles.heroGrid}`}>
            <Reveal>
              <span className={styles.label}>Apalluz Advogados · Proposta de 21/09/2026</span>
              <h1 id="titulo" className={styles.heroTitle}>Patrícia, você grava.<br /><span className={shared.hl}>Nós cuidamos do conteúdo.</span></h1>
              <p className={styles.heroText}>Sua presença não precisa depender de uma viagem para produzir. Você mantém sua voz e seu conhecimento jurídico. A CRIAE entra com estratégia, roteiro, edição e gestão do Instagram.</p>
              <div className={styles.actions}>
                <a href="#recomendacao" className="btn btn--primary">Ver nossa recomendação <ArrowRight aria-hidden="true" /></a>
                <a href="#como-funciona" className={styles.textLink}>Entender a divisão do trabalho</a>
              </div>
              <p className={styles.heroNote}>Gravação feita por você. Operação da CRIAE remota. Sem captação presencial em nenhum plano.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <aside className={styles.priority}>
                <span className={styles.label}>O ponto que vem primeiro</span>
                <h2>Seu conteúdo orienta.<br />O próximo passo precisa estar claro.</h2>
                <p>Na análise de 21/09, o reel sobre intimação direcionava ao link da bio. Mas não vimos um link externo de contato no perfil.</p>
                <div className={styles.path}><span>Conteúdo</span><ArrowRight aria-hidden="true" /><span>Perfil</span><ArrowRight aria-hidden="true" /><strong>Contato</strong></div>
                <p className={styles.priorityFoot}>A prioridade é conectar esse caminho e sustentar a produção com uma rotina que caiba na sua agenda.</p>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className={`section section--alt ${styles.section}`} aria-labelledby="prioridades">
          <div className="container">
            <Reveal><span className="eyebrow">O que muda para você</span><h2 className="s-title" id="prioridades">Aproveitar o que já existe.<br /><span className="hl">Resolver o que falta conectar.</span></h2></Reveal>
            <div className={styles.priorities}>
              <Reveal className={styles.priorityItem}>
                <span className={styles.sourceTag}>01 · Conversa com a CRIAE</span>
                <h3>Produzir sem exigir deslocamento</h3>
                <p>Você relatou o investimento de R$ 1.200 por mês e a ida a São Paulo para gravar. Aqui, você faz a captação onde preferir, com pauta e orientação. Nós assumimos a edição e a operação do conteúdo.</p>
              </Reveal>
              <Reveal className={styles.priorityItem} delay={0.05}>
                <span className={styles.sourceTag}>02 · Observação pública em 21/09</span>
                <h3>Dar continuidade ao interesse</h3>
                <p>O convite ao link da bio não encontrava um destino visível no perfil observado. Vamos organizar o acesso ao contato e, no plano recomendado, uma página institucional com apresentação e credenciais verificadas.</p>
              </Reveal>
              <Reveal className={styles.priorityItem} delay={0.1}>
                <span className={styles.sourceTag}>03 · Direção estratégica proposta</span>
                <h3>Transformar temas em uma linha editorial</h3>
                <p>Você já fala de intimação, flagrante e defesa criminal. A proposta é organizar esses temas em séries educativas, reaproveitando cada gravação em vídeo, carrossel e stories, com sua aprovação técnica.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="recomendacao" className={`section ${styles.section}`} aria-labelledby="reco-titulo">
          <div className="container">
            <Reveal>
              <div className={shared.recoWrap}>
                <div>
                  <span className={shared.recoTag}>Nossa recomendação</span>
                  <h2 id="reco-titulo" className={shared.recoTitle}>Autoridade e contato.<br /><span className={shared.hl}>Mais que editar. Conectar.</span></h2>
                  <p className={shared.recoDesc}>Você já aparece em vídeo e explica assuntos relevantes. Por isso, nossa recomendação reúne produção contínua, uma apresentação profissional e um caminho claro para quem precisa falar com o escritório.</p>
                  <div className={styles.recoPrice}><strong>R$ 1.600</strong><span>por mês</span></div>
                  <p className={styles.delta}>R$ 400 a mais que o investimento mensal informado.</p>
                  <a href={planContact("Autoridade e contato")} target="_blank" rel="noopener noreferrer" className="btn btn--accent">Conversar sobre este plano <ArrowRight aria-hidden="true" /></a>
                </div>
                <div className={styles.recoRight}>
                  <ul className={shared.recoItems}>
                    {[
  "6 reels editados + 6 artes ou carrosséis por mês",
  "Roteiros para você gravar, com orientação remota",
  "Bio, organização de destaques e acesso ao contato",
  "Publicação, leitura de dados e Reunião Mensal",
  "<strong>BÔNUS: Landing page institucional com acesso ao contato</strong>",
  "<strong>BÔNUS: Gestão de anúncios na Meta</strong>",
].map((item) => <li key={item}><Check width={20} height={20} aria-hidden="true" /><span dangerouslySetInnerHTML={{ __html: item }} /></li>)}
                  </ul>
                  <p className={styles.darkNote}>Não sugerimos começar aumentando a verba de anúncios. Primeiro, organizamos o conteúdo, o destino do visitante e a mensuração.</p>
                  <p className={styles.darkNote}>A comparação usa apenas a mensalidade que você informou. Não pressupõe escopos equivalentes ao fornecedor atual nem inclui custos de viagem.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="planos" className={`section section--alt ${styles.section}`} aria-labelledby="planos-titulo">
          <div className="container">
            <Reveal><span className="eyebrow">Três caminhos, uma responsabilidade bem definida</span><h2 id="planos-titulo" className="s-title">Escolha a estrutura.<br /><span className="hl">A gravação continua com você.</span></h2><p className="s-sub">Todos os planos incluem direção de conteúdo, edição e publicação no Instagram. O que muda é o volume e a estrutura que acompanha essa produção.</p></Reveal>
            <div className={shared.plans}>
              {PLANS.map((plan) => (
                <article id={`plano-${plan.id}`} key={plan.id} className={`${shared.plan} ${styles.plan} ${plan.recommended ? shared.planFeatured : ""}`} data-recommended={plan.recommended}>
                  <span className={`${shared.planBadge} ${styles.badge}`} data-featured={plan.recommended}>{plan.badge}</span>
                  <h3 className={shared.planName}>{plan.name}</h3>
                  <p className={shared.planFor}>{plan.forWho}</p>
                  <div className={shared.priceBlock}><p className={shared.priceNow}>{plan.price}</p><p className={shared.priceUnit}>por mês · implantação incluída</p></div>
                  <p className={styles.volume}>{plan.volume}</p>
                  <ul className={shared.planItems}>{plan.items.map((item) => <li key={item}><Check width={17} height={17} aria-hidden="true" /><span dangerouslySetInnerHTML={{ __html: item }} /></li>)}</ul>
                  <p className={styles.planLimit}>{plan.limit}</p>
                  <p className={styles.captureNote}>Você grava. A CRIAE edita.</p>
                  <a href={planContact(plan.name)} target="_blank" rel="noopener noreferrer" className={`btn ${plan.recommended ? "btn--accent" : "btn--primary"} ${shared.planCta}`}>{plan.cta}<ArrowRight aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <p className={styles.conditions}><strong>Condições propostas:</strong> contrato inicial de 6 meses. Os volumes são mensais e não cumulativos entre planos. Vídeos finais de até 90 segundos, carrosséis de até 6 páginas e uma rodada de ajustes por peça. Domínio e verba de mídia não estão incluídos. Veja o escopo detalhado abaixo.</p>
          </div>
        </section>

        <section id="como-funciona" className={`section ${styles.section}`} aria-labelledby="rotina-titulo">
          <div className="container">
            <Reveal><span className="eyebrow">Uma rotina combinada, sem estúdio obrigatório</span><h2 id="rotina-titulo" className="s-title">Sua participação é essencial.<br /><span className="hl">A execução não fica toda com você.</span></h2></Reveal>
            <div className={shared.steps}>{STEPS.map((step) => <Reveal key={step.n} className={shared.step}><span className={shared.stepN}>{step.n}</span><h3 className={shared.stepName}>{step.name}</h3><p className={shared.stepDesc}>{step.desc}</p></Reveal>)}</div>
            <div className={styles.example}>
              <span className={styles.sourceTag}>Exemplo a partir de um tema já presente no seu perfil</span>
              <h3>“Recebi uma intimação. O que devo observar?”</h3>
              <p>Você grava uma explicação conforme o roteiro aprovado. Nós editamos o reel, adaptamos os pontos para um carrossel e criamos stories que indiquem onde encontrar as informações institucionais e o contato do escritório.</p>
              <p className={styles.smallNote}>Exemplo de planejamento, não promessa de desempenho. Cada formato utiliza uma entrega do volume contratado. Todo conteúdo jurídico depende da sua revisão.</p>
            </div>
          </div>
        </section>

        <section className={`section section--alt ${styles.section}`} aria-labelledby="diagnostico-titulo">
          <div className="container">
            <Reveal><span className="eyebrow">A base da recomendação</span><h2 id="diagnostico-titulo" className="s-title">Um retrato do perfil.<br /><span className="hl">Não uma previsão de resultado.</span></h2></Reveal>
            <div className={`${shared.scoreGrid} ${styles.scoreGrid}`}>
              <div className={shared.scoreList}>
                {SCORES.map((score) => <div key={score.label} className={shared.scoreRow}><span className={shared.scoreLabel}>{score.label}</span><span className={shared.scoreVal}>{score.value.toFixed(1).replace(".", ",")}<small> / 10</small></span><span className={styles.scoreTrack} aria-hidden="true"><span className={styles.scoreFill} data-low={score.value < 4.5} style={{ "--w": `${score.value * 10}%` } as CSSProperties} /></span></div>)}
                <p className={styles.smallNote}>Notas editoriais da auditoria de 21/09/2026. Expressam nossa leitura do recorte público, não métricas do Instagram, faturamento ou qualidade do serviço jurídico.</p>
              </div>
              <div className={shared.statCard}><div className={shared.statRow}>{STATS.map((stat) => <div className={shared.stat} key={stat.label}><strong className={shared.statN}>{stat.n}</strong><span className={shared.statL}>{stat.label}</span></div>)}</div><p className={styles.smallNote}>Observação pública em 21/09/2026, no navegador desktop. O perfil pode ter mudado desde então.</p></div>
            </div>
            <details className={styles.evidence}>
              <summary>Fontes, observações e limites da análise</summary>
              <div>
                <p><strong>Conversa com a CRIAE, informada em 21/09/2026:</strong> mensalidade atual de R$ 1.200 e deslocamento a São Paulo para gravações. Não tivemos acesso ao contrato, ao escopo completo nem aos resultados do fornecedor atual.</p>
                <p><strong>Observação pública, 21/09/2026:</strong> o <a href="https://www.instagram.com/apalluz.advogados/" target="_blank" rel="noopener noreferrer">perfil @apalluz.advogados</a> exibia 38 publicações e 84 seguidores. No recorte desktop, não vimos link externo de contato na bio. O <a href="https://www.instagram.com/apalluz.advogados/reel/DdcRt8Ty5yx/" target="_blank" rel="noopener noreferrer">reel sobre intimação</a> direcionava à bio. Um <a href="https://linktr.ee/apalluz.advogados" target="_blank" rel="noopener noreferrer">Linktree com o nome do escritório</a> foi localizado na busca, mas não aparecia conectado ao perfil observado. A operação do contato não foi testada.</p>
                <p><strong>Inferência:</strong> essa desconexão pode dificultar o contato. Sem acesso aos dados internos, não é possível quantificar perda de oportunidades, conversão ou retorno financeiro. Também não confirmamos um Perfil da Empresa no Google para a Apalluz; isso não prova que ele inexista.</p>
                <p><strong>Direção profissional:</strong> o planejamento considera o caráter informativo da publicidade jurídica e o <a href="https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021" target="_blank" rel="noopener noreferrer">Provimento 205/2021 da OAB</a>. A validação técnica e ética de cada peça permanece com você.</p>
                <p><strong>Ninguém foi contatado durante a observação pública.</strong> Não enviamos mensagens nem simulamos atendimento. A conversa comercial informada pela CRIAE é uma fonte separada.</p>
              </div>
            </details>
          </div>
        </section>

        <section className={`section ${styles.section}`} aria-labelledby="escopo-titulo">
          <div className={`container ${styles.faqWrap}`}>
            <Reveal><span className="eyebrow">Antes de começar</span><h2 id="escopo-titulo" className="s-title">Escopo claro.<br /><span className="hl">Sem surpresa depois.</span></h2></Reveal>
            <div className={styles.faqs}>{FAQS.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section className={`section section--alt ${styles.section}`} aria-labelledby="proximo-passo">
          <div className={`container ${shared.final}`}>
            <h2 id="proximo-passo" className={shared.finalTitle}>Você traz o conhecimento.<br /><span className={shared.hl}>Nós organizamos a presença.</span></h2>
            <p className={shared.finalSub}>Patrícia, nossa indicação é começar pelo Autoridade e contato. Uma rotina de conteúdo com produção remota e uma estrutura que ajude o visitante a entender sua atuação e encontrar o escritório.</p>
            <a href={planContact("Autoridade e contato")} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">Vamos alinhar o início? <ArrowRight aria-hidden="true" /></a>
            <p className={shared.finalNote}>O botão abre uma conversa com a CRIAE. Não gera cobrança nem contratação automática.</p>
          </div>
        </section>
      </main>

      <footer className={shared.foot}><div className={`container ${shared.footInner}`}><span className={shared.brand}>CRIAE<span>.</span></span><span>Proposta personalizada para Patrícia Assunção · 21/09/2026</span><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Conheça a CRIAE</a></div></footer>
    </div>
  );
}
