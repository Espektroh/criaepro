import Reveal from "@/components/Reveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos seu momento, seus objetivos e onde estão os gargalos.",
  },
  {
    n: "02",
    title: "Estratégia",
    desc: "Montamos um plano com prioridades claras pro seu contexto.",
  },
  {
    n: "03",
    title: "Execução",
    desc: "Colocamos pra rodar — ou te orientamos pra fazer com segurança.",
  },
  {
    n: "04",
    title: "Ajuste & crescimento",
    desc: "Acompanhamos os resultados e ajustamos conforme você cresce.",
  },
];

export default function HowItWorks() {
  return (
    <section id="metodo" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Como funciona</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="s-title">
            Da primeira conversa <span className="hl">ao resultado.</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className={styles.cell}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
