import type { ReactNode } from "react";

import { AppShell } from "@/components/app-shell";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>base-profile-card</title>
        <meta name="description" content="Public onchain profile cards on Base." />
        <meta name="application-name" content="base-profile-card" />
        <meta name="base:app_id" content="69c61ec2638fc70642e549b0" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
