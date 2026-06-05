"use client";

import { useEffect, useRef } from "react";
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
  const headerRef = useRef<HTMLElement>(null);

  // Publish the live nav height so the fixed study panel (verbal/quant on mobile)
  // can offset itself to sit directly below the nav: top: var(--nav-h).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const apply = () => {
      document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative border-b border-[var(--color-rule)]">
      <div className="page-shell pt-5 pb-2 flex justify-center items-baseline gap-3">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-2xl tracking-tight">GRE Master</span>
          <span className="eyebrow hidden sm:inline">a study workbench</span>
        </Link>
      </div>
      <nav aria-label="Primary" className="page-shell pb-3 flex justify-center">
        <ul className="flex flex-wrap gap-2 items-center justify-center">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 text-sm leading-5 transition-colors ${
                    active
                      ? "font-bold text-[var(--color-accent)]"
                      : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/mock"
              className={`px-3 py-1.5 text-sm leading-5 rounded-md inline-flex items-center gap-1 text-white transition-[background-color,filter] ${
                mockActive
                  ? "bg-[var(--color-ink)] font-medium"
                  : "bg-[var(--color-accent)] hover:brightness-110"
              }`}
              aria-current={mockActive ? "page" : undefined}
            >
              Mock Test <span aria-hidden>→</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute right-4 top-3 sm:top-1/2 sm:-translate-y-1/2 sm:right-6 lg:right-8">
        <AuthButton />
      </div>
    </header>
  );
}
