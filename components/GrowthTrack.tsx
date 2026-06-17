import Reveal from "@/components/Reveal";
import { wa } from "@/lib/site";
import { ArrowRight } from "@/components/icons";
import styles from "./GrowthTrack.module.css";

const STAGES = [
  {
    n: "01",
    name: "Presença",
    desc: "Pra quem quer existir no digital e dar o primeiro passo com consistência.",
    items: ["Redes sociais configuradas", "Google Meu Negócio", "Primeiros posts no feed"],
  },
  {
    n: "02",
    name: "Crescimento",
    desc: "Conteúdo com volume e anúncios pra atrair clientes novos de forma ativa.",
    items: ["Mais conteúdo no feed", "Vídeos e stories", "Meta Ads"],
  },
  {
    n: "03",
    name: "Autoridade",
    desc: "Operação completa. Você foca no negócio, a Criae cuida do digital.",
    items: ["Conteúdo completo", "Gravações + edições", "Meta Ads + Google Ads"],
  },
];

export default function GrowthTrack() {
  return (
    <section id="crescimento" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Trilha de crescimento</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="s-title">
            Cada negócio tem um momento.
            <br />
            <span className="hl">A Criae acompanha o seu.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="s-sub">
            As combinações abaixo são sugestões, não pacotes fechados. Comece
            onde faz sentido e evolua conforme cresce.
          </p>
        </Reveal>

        <div className={styles.track}>
          <div className={styles.line} aria-hidden>
            <span className={styles.lineFill} />
          </div>
          <div className={styles.stages}>
            {STAGES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1} className={styles.stageWrap}>
                <div className={styles.stage}>
                  <span className={styles.node}>{s.n}</span>
                  <h3 className={styles.name}>{s.name}</h3>
                  <p className={styles.desc}>{s.desc}</p>
                  <ul className={styles.items}>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className={styles.ctaWrap}>
          <p className={styles.ctaText}>Não sabe em qual momento você está?</p>
          <a
            className="btn btn--primary"
            href={wa(
              "Não sei em qual momento meu negócio está. Pode me ajudar a entender o caminho?"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            A gente te diz <ArrowRight width={18} height={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
