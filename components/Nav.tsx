"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/verbal", label: "Verbal" },
  { href: "/quant", label: "Quantitative" },
  { href: "/writing", label: "Analytical" },
];

export default function Nav() {
  const pathname = usePathname();
  const mockActive = pathname === "/mock" || pathname.startsWith("/mock/");

  return (
    <header className="relative border-b border-[var(--color-rule)]">
      <div className="page-shell pt-5 pb-2 flex justify-center items-baseline gap-3">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-2xl tracking-tight">GRE Master</span>
          <span className="eyebrow hidden sm:inline">a study workbench</span>
        </Link>
      </div>
      <nav aria-label="Primary" className="page-shell pb-3 flex justify-center">
        <ul className="flex flex-wrap gap-1 items-center justify-center">
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
          <li className="ml-1">
            <Link
              href="/mock"
              className={`btn text-sm ${mockActive ? "btn-primary" : "btn-accent"}`}
              aria-current={mockActive ? "page" : undefined}
            >
              Mock Test
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8">
        <AuthButton />
      </div>
    </header>
  );
}
