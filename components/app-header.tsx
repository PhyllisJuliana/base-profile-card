"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppHeader() {
  const pathname = usePathname();
  const pageLabel =
    pathname === "/"
      ? "入口"
      : pathname.startsWith("/profile/edit")
        ? "编辑"
        : pathname.startsWith("/profile/")
          ? "资料"
          : pathname.startsWith("/search")
            ? "查询"
            : "说明";

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand__eyebrow">base-profile-card</span>
        <span className="brand__title">链上身份卡 · {pageLabel}</span>
      </div>
      <Link className="button-ghost" href="/about">
        关于
      </Link>
    </header>
  );
}
