"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { Plus } from "@/components/icons";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "Preciso contratar tudo de uma vez?",
    a: "Não. Você monta só o que faz sentido pro seu momento e vai ajustando conforme cresce. As frentes são modulares.",
  },
  {
    q: "Vocês atendem fora de Sorocaba?",
    a: "Sim. Somos de Sorocaba e região, mas atendemos negócios em todo o Brasil de forma remota.",
  },
  {
    q: "A verba dos anúncios está inclusa?",
    a: "Não. A verba é paga diretamente ao Meta ou Google e nunca passa pela Criae — você tem controle e transparência total sobre cada real investido.",
  },
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Depende da frente. Tráfego pago costuma trazer contato mais rápido; conteúdo e presença constroem ao longo das semanas. Na primeira conversa a gente alinha expectativas reais.",
  },
  {
    q: "Vocês cuidam de quê, exatamente?",
    a: "Setup de presença, conteúdo, tráfego pago e sites. Você pode delegar tudo ou só a parte que precisar.",
  },
  {
    q: "Como começa?",
    a: "Com uma conversa no WhatsApp, sem compromisso. A gente entende seu momento e sugere o melhor caminho pra você.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Dúvidas</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="s-title">
            Perguntas <span className="hl">frequentes.</span>
          </h2>
        </Reveal>

        <div className={styles.wrap}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={styles.item}>
                <button
                  className={styles.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span
                    className={`${styles.ico} ${isOpen ? styles.icoOpen : ""}`}
                  >
                    <Plus width={18} height={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.a}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
