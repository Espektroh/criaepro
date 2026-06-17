import Reveal from "@/components/Reveal";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.inner}>
          <span className={`eyebrow ${styles.eyebrow}`}>Nossa crença</span>
          <p className={styles.text}>
            Marketing digital para{" "}
            <span className={styles.mark}>negócios reais.</span>{" "}
            <span className={styles.dim}>
              Sem fórmula mágica, sem promessa vazia —
            </span>{" "}
            só estratégia, execução e ajuste,{" "}
            <span className={styles.mark}>no seu ritmo.</span>
          </p>
          <p className={styles.attr}>— Criae · Sorocaba, SP</p>
        </Reveal>
      </div>
    </section>
  );
}
