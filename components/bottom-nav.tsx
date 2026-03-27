"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "入口", icon: "◌" },
  { href: "/profile/edit", label: "编辑", icon: "✎" },
  { href: "/search", label: "查询", icon: "⌕" },
  { href: "/about", label: "说明", icon: "i" }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="主导航">
      {items.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            className={`bottom-nav__item${active ? " bottom-nav__item--active" : ""}`}
            href={item.href}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
