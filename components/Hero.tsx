import { wa, LOCATION } from "@/lib/site";
import { WhatsApp, ArrowDown } from "@/components/icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.eyebrow} ${styles.a1}`}>
            Marketing digital para negócios reais
          </span>

          <h1 className={styles.title}>
            Marketing digital que <span className={styles.hl}>cresce</span> com
            você.
          </h1>

          <div className={styles.grow} aria-hidden />

          <p className={`${styles.sub} ${styles.a3}`}>
            Setup de presença, conteúdo, tráfego pago e sites. Você monta o que
            faz sentido pro seu momento — e ajusta conforme cresce.
          </p>

          <div className={`${styles.actions} ${styles.a4}`}>
            <a
              className="btn btn--primary btn--lg"
              href={wa(
                "Olá! Quero saber como a Criae pode ajudar meu negócio a crescer no digital."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp <WhatsApp width={19} height={19} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost btn--lg" href="#servicos">
              Ver o que fazemos
            </a>
          </div>
        </div>

        <div className={`${styles.footerRow} ${styles.a4}`}>
          <a href="#servicos" className={styles.scroll}>
            <ArrowDown width={16} height={16} aria-hidden="true" />
            Role para descobrir
          </a>
          <span className={styles.loc}>{LOCATION}</span>
        </div>
      </div>
    </section>
  );
}
