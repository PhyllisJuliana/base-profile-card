"use client";

import type { ReactNode } from "react";

import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { Providers } from "@/components/providers";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="app-shell">
        <div className="app-shell__inner">
          <AppHeader />
          {children}
        </div>
        <BottomNav />
      </div>
    </Providers>
  );
}
