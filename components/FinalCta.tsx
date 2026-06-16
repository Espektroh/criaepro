import { wa } from "@/lib/site";
import { WhatsApp } from "@/components/icons";
import Reveal from "@/components/Reveal";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.inner}>
          <span className={styles.tag}>Próximo passo</span>
          <h2 className={styles.title}>
            Bora fazer seu digital <span className={styles.hl}>crescer?</span>
          </h2>
          <p className={styles.sub}>
            Uma conversa pode mudar a direção do seu negócio. Sem compromisso,
            sem enrolação.
          </p>
          <a
            className={`btn btn--accent btn--lg ${styles.cta}`}
            href={wa(
              "Olá! Quero conversar sobre o digital do meu negócio com a Criae."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp <WhatsApp width={20} height={20} />
          </a>
          <div className={styles.pills}>
            <span>Sorocaba e região</span>
            <span>Atende todo o Brasil</span>
            <span>Sem fórmula mágica</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
