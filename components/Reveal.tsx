import type { CSSProperties, ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style = delay ? ({ "--rd": `${delay}s` } as CSSProperties) : undefined;
  return (
    <div className={className} data-reveal style={style}>
      {children}
    </div>
  );
}
