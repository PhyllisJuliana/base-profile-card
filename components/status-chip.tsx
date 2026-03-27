import type { ReactNode } from "react";

type Tone = "ok" | "info" | "warn" | "muted";

export function StatusChip({ children, tone = "muted" }: { children: ReactNode; tone?: Tone }) {
  return <div className={`status-chip status-chip--${tone}`}>{children}</div>;
}
