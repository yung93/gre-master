"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/learn", label: "Learn" },
  { href: "/mock", label: "Mock Test" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative border-b border-[var(--color-rule)]">
      <div className="page-shell pt-5 pb-2 flex justify-center items-baseline gap-3">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-2xl tracking-tight">GRE Master</span>
          <span className="eyebrow hidden sm:inline">a study workbench</span>
        </Link>
      </div>
      <nav aria-label="Primary" className="page-shell pb-3 flex justify-center">
        <ul className="flex gap-1 items-center">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                      ? "text-[var(--color-ink)] bg-[var(--color-accent-soft)]"
                      : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8">
        <AuthButton />
      </div>
    </header>
  );
}
