"use client";

import { motion, useReducedMotion } from "framer-motion";
import { wa, LOCATION } from "@/lib/site";
import { WhatsApp, ArrowDown } from "@/components/icons";
import styles from "./Hero.module.css";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.content}
        >
          <motion.span variants={item} className={`eyebrow ${styles.eyebrow}`}>
            Marketing digital para negócios reais
          </motion.span>

          <motion.h1 variants={item} className={styles.title}>
            Marketing digital que <span className={styles.hl}>cresce</span> com o
            seu negócio.
          </motion.h1>

          <motion.div
            className={styles.grow}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: reduce ? 0 : 0.85, ease: EASE }}
          />

          <motion.p variants={item} className={styles.sub}>
            Setup de presença, conteúdo, tráfego pago e sites. Você monta o que
            faz sentido pro seu momento — e ajusta conforme cresce.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a
              className="btn btn--primary btn--lg"
              href={wa(
                "Olá! Quero saber como a Criae pode ajudar meu negócio a crescer no digital."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp <WhatsApp width={19} height={19} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#servicos">
              Ver o que fazemos
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className={styles.footerRow}
        >
          <a href="#servicos" className={styles.scroll}>
            <ArrowDown width={16} height={16} />
            Role para descobrir
          </a>
          <span className={styles.loc}>{LOCATION}</span>
        </motion.div>
      </div>
    </section>
  );
}
