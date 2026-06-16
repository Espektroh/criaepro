import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

export function Check(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12.5l5 5L20 6" />
    </svg>
  );
}

export function Plus(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function WhatsApp(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.1-4.1A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M9 9.3c.4-.6 1-.6 1.4.1l.5 1c.2.4.1.7-.2 1-.4.4-.4.6-.1 1 .8 1.1 1.6 1.9 2.7 2.7.4.3.6.3 1-.1.3-.3.5-.4.9-.2l1 .5c.7.4.7 1 .1 1.4-1 .8-2.2.8-3.4.2a11 11 0 0 1-5-5c-.6-1.2-.6-2.4.6-3.3z" />
    </svg>
  );
}

export function Instagram(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Layers(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" opacity="0.45" />
    </svg>
  );
}

export function Media(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M10 9.4l5 2.6-5 2.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Target(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Browser(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18" />
      <circle cx="6.3" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="8.7" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Heart(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.4-9.3-9A5 5 0 0 1 12 6.8 5 5 0 0 1 21.3 11c-2.3 4.6-9.3 9-9.3 9z" />
    </svg>
  );
}

export function Sparkle(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4z" />
    </svg>
  );
}

export function Paw(p: P) {
  return (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <circle cx="8.5" cy="8" r="1.7" />
      <circle cx="15.5" cy="8" r="1.7" />
      <circle cx="5.3" cy="12.4" r="1.5" />
      <circle cx="18.7" cy="12.4" r="1.5" />
      <ellipse cx="12" cy="15.3" rx="4.3" ry="3.4" />
    </svg>
  );
}

export function Store(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9.5L5.2 5h13.6L20 9.5" />
      <path d="M4.5 9.5a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0" />
      <path d="M5 11.5V20h14v-8.5" />
      <path d="M10 20v-4.5h4V20" />
    </svg>
  );
}

export function Compass(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Spark(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4v6M12 14v6M4 12h6M14 12h6" />
    </svg>
  );
}
