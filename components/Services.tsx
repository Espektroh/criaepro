import Reveal from "@/components/Reveal";
import { wa } from "@/lib/site";
import {
  Layers,
  Media,
  Target,
  Browser,
  Check,
  ArrowRight,
} from "@/components/icons";
import styles from "./Services.module.css";
import type { ComponentType, SVGProps } from "react";

type Service = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  tagline: string;
  desc: string;
  items: string[];
  outcome: string;
  note?: string;
  waMsg: string;
};

const SERVICES: Service[] = [
  {
    Icon: Layers,
    name: "Setup de presença",
    tagline: "A base da sua marca no digital",
    desc: "Pra você ser encontrado e levado a sério desde o primeiro contato.",
    items: [
      "Redes sociais — bio, foto, destaques e organização do Instagram e Facebook",
      "Google Meu Negócio — ficha criada e otimizada pra aparecer na sua região",
      "Identidade visual — logotipo, paleta e tipografia que dão cara à marca",
    ],
    outcome: "Sua presença pronta e profissional.",
    waMsg: "Quero saber sobre o Setup de presença digital da Criae.",
  },
  {
    Icon: Media,
    name: "Conteúdo",
    tagline: "Presença constante, sem você travar",
    desc: "Conteúdo com estratégia pra manter sua audiência aquecida e perto de comprar.",
    items: [
      "Posts no feed — arte e legenda com copy comercial",
      "Gravação e edição de vídeo — reels e vídeos curtos com roteiro",
      "Edição de vídeo — você grava, a gente entrega com cortes, legendas e trilha",
      "Gestão de stories — roteiro semanal e artes",
    ],
    outcome: "Conteúdo que constrói autoridade.",
    waMsg: "Quero saber sobre a produção de conteúdo da Criae.",
  },
  {
    Icon: Target,
    name: "Tráfego pago",
    tagline: "Anúncios que trazem cliente",
    desc: "Campanhas pra atrair quem já está pronto pra comprar — com segmentação, testes e relatório.",
    items: [
      "Meta Ads — campanhas no Instagram e Facebook",
      "Google Ads — captura quem já procura pelo seu serviço",
      "Meta + Google integrados — presença total com estratégia unificada",
    ],
    outcome: "Cliente novo de forma previsível.",
    note: "A verba dos anúncios é paga direto ao Meta ou Google — nunca passa pela Criae.",
    waMsg: "Quero saber sobre gestão de tráfego pago com a Criae.",
  },
  {
    Icon: Browser,
    name: "Sites",
    tagline: "Sua presença na web",
    desc: "Do site institucional à landing page focada em conversão — rápido, responsivo e seu.",
    items: [
      "Site básico — institucional, rápido e responsivo",
      "Site completo — design sob medida, com blog ou e-commerce",
      "Landing page — página única focada em converter",
    ],
    outcome: "Uma base que trabalha por você 24/7.",
    waMsg: "Quero saber sobre criação de site ou landing page com a Criae.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">O que oferecemos</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="s-title">
            Quatro frentes. <span className="hl">Uma estratégia.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="s-sub">
            Contrate só o que faz sentido agora ou combine tudo num funil
            completo. Sem pacote obrigatório — você cresce no seu ritmo.
          </p>
        </Reveal>

        <div className={styles.list}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={0.04}>
              <article className={styles.row}>
                <div className={styles.main}>
                  <div className={styles.head}>
                    <span className={styles.num}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.icon}>
                      <s.Icon width={24} height={24} />
                    </span>
                  </div>
                  <h3 className={styles.name}>{s.name}</h3>
                  <p className={styles.tagline}>{s.tagline}</p>
                  <p className={styles.desc}>{s.desc}</p>
                  <div className={styles.outcome}>
                    <Check width={18} height={18} />
                    {s.outcome}
                  </div>
                  <a
                    className={styles.cta}
                    href={wa(s.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero essa frente <ArrowRight width={16} height={16} />
                  </a>
                </div>

                <div className={styles.side}>
                  <ul className={styles.items}>
                    {s.items.map((it) => (
                      <li key={it} className={styles.item}>
                        <ArrowRight width={15} height={15} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  {s.note && <p className={styles.note}>{s.note}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
