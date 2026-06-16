import styles from "./Marquee.module.css";

const ITEMS = [
  "Redes sociais",
  "Google Meu Negócio",
  "Identidade visual",
  "Posts no feed",
  "Reels & vídeos",
  "Stories",
  "Meta Ads",
  "Google Ads",
  "Sites",
  "Landing pages",
  "Estratégia digital",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.track}>
        {loop.map((it, i) => (
          <span className={styles.item} key={i}>
            {it}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
