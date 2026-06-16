import Reveal from "@/components/Reveal";
import { Heart, Sparkle, Paw, Store } from "@/components/icons";
import styles from "./ForWhom.module.css";
import type { ComponentType, SVGProps } from "react";

type Niche = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const NICHES: Niche[] = [
  {
    Icon: Heart,
    title: "Terapeutas & saúde",
    desc: "Psicólogos, terapeutas, nutricionistas e clínicas que querem a agenda cheia.",
  },
  {
    Icon: Sparkle,
    title: "Estética & beleza",
    desc: "Salões, barbearias, estúdios e profissionais que vivem de presença.",
  },
  {
    Icon: Paw,
    title: "Pet",
    desc: "Pet shops, banho e tosa e clínicas veterinárias do bairro.",
  },
  {
    Icon: Store,
    title: "Serviços & comércio local",
    desc: "Autônomos, lojas e prestadores que dependem da região pra vender.",
  },
];

export default function ForWhom() {
  return (
    <section id="para-quem" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Para quem é</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="s-title">
            Feito pra negócios <span className="hl">de verdade.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {NICHES.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.07} className={styles.card}>
              <span className={styles.icon}>
                <n.Icon width={24} height={24} />
              </span>
              <h3 className={styles.cardTitle}>{n.title}</h3>
              <p className={styles.cardDesc}>{n.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className={styles.foot}>
            Se você tem um negócio real e quer parar de improvisar no digital,
            <span className={styles.mark}> a Criae é pra você.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
