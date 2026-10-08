"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile, routes } from "@/lib/data";
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const overflow = document.body.style.overflow;
    if (open) {
      el.showModal();
      el.querySelector<HTMLButtonElement>(".menu-close")?.focus({
        preventScroll: true,
      });
      document.body.style.overflow = "hidden";
    } else if (el.open) el.close();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Nahin Intesher home">
            <span className="brand-mark">
              N<span>i</span>
            </span>
            <span>Nahin Intesher</span>
          </Link>
          <nav className="main-nav" aria-label="Primary">
            {routes
              .filter((r) =>
                ["/about", "/research", "/projects", "/contact"].includes(
                  r.href,
                ),
              )
              .map((r) => (
                <Link
                  href={r.href}
                  key={r.href}
                  aria-current={
                    path === r.href || path.startsWith(r.href + "/")
                      ? "page"
                      : undefined
                  }
                >
                  {r.short}
                </Link>
              ))}
          </nav>
          <div className="header-tools">
            <a
              className="nav-cv"
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <ArrowUpRight size={14} />
            </a>
            <ThemeToggle />
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="all-navigation"
              aria-label="Open all sections"
            >
              <span>INDEX</span>
              <Plus size={18} />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="all-navigation"
        className="navigation-dialog"
        aria-labelledby="navigation-title"
        onCancel={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key !== "Tab") return;
          const elements = Array.from(
            e.currentTarget.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled])",
            ),
          );
          const first = elements[0];
          const last = elements[elements.length - 1];
          if (!first || !last) return;
          const active = document.activeElement;
          if (e.shiftKey && (active === first || active === e.currentTarget)) {
            e.preventDefault();
            last.focus();
          } else if (
            !e.shiftKey &&
            (active === last || active === e.currentTarget)
          ) {
            e.preventDefault();
            first.focus();
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="navigation-sheet">
          <div className="navigation-top">
            <span className="eyebrow" id="navigation-title">
              THE PORTFOLIO INDEX
            </span>
            <button
              className="menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              CLOSE <X size={20} />
            </button>
          </div>
          <nav className="nav-grid" aria-label="All sections">
            {routes.map((r) => (
              <Link
                href={r.href}
                key={r.href}
                aria-current={
                  path === r.href || path.startsWith(r.href + "/")
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                <span className="menu-number">{r.no}</span>
                <span>{r.short}</span>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </nav>
          <a className="navigation-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </dialog>
    </>
  );
}
