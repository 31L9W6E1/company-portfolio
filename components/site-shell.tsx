import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import { company, nav } from "@/content/site";
import { Locale, localizedPath, otherLocale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-white/88 backdrop-blur-xl dark:bg-navy-950/88">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary">
        <Link href={localizedPath(locale)} className="focus-ring flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center border border-[color:var(--line)] bg-white p-1">
            <Image
              src="/assets/alpha-rif-bta-mark.png"
              alt="ALPHA RIF BTA logo"
              width={96}
              height={105}
              priority
              className="h-9 w-auto object-contain"
            />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-[0.22em]">{company.name}</span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-steel dark:text-slate-300">
              Procurement & Delivery
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="focus-ring text-sm font-medium text-steel transition hover:text-signal dark:text-slate-300 dark:hover:text-white"
            >
              {item.label[locale]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={localizedPath(other)}
            className="focus-ring hidden h-10 items-center border border-[color:var(--line)] px-3 text-xs font-semibold uppercase tracking-[0.16em] text-steel transition hover:border-signal hover:text-signal sm:inline-flex dark:text-slate-300"
          >
            {other}
          </Link>
          <ThemeToggle label={locale === "en" ? "Toggle theme" : "Өнгөний горим солих"} />
          <Link
            href={localizedPath(locale, "contact")}
            className="focus-ring hidden h-10 items-center gap-2 bg-signal px-4 text-sm font-semibold text-white transition hover:bg-navy-700 md:inline-flex"
          >
            {locale === "en" ? "Request credentials" : "Компанийн танилцуулга"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            aria-label="Open menu"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center border border-[color:var(--line)] xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[color:var(--line)] bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="text-lg font-semibold tracking-[0.18em]">{company.name}</div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {locale === "en"
              ? "Procurement, contracting, tender participation, and project delivery support for serious public and enterprise work in Mongolia."
              : "Төрийн байгууллага, уул уурхай, дэд бүтэц, барилга бүтээн байгуулалт болон хувийн хэвшлийн төслүүдэд зориулсан худалдан авалт, гэрээлэлт, тендерийн оролцоо, төслийн хэрэгжилтийн зохион байгуулалт."}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{locale === "en" ? "Company" : "Компани"}</h2>
          <div className="mt-5 grid gap-3">
            {nav.slice(1, 6).map((item) => (
              <Link key={item.href} href={localizedPath(locale, item.href)} className="text-sm text-slate-300 hover:text-white">
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{locale === "en" ? "Contact" : "Холбоо"}</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>{company.address[locale]}</p>
            <p>{company.email}</p>
            <p>{company.phone}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>{locale === "en" ? "Built for secure enterprise evaluation." : "Байгууллагын үнэлгээ, худалдан авалтын хэрэгцээнд зориулсан."}</p>
      </div>
    </footer>
  );
}

export function PageChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
