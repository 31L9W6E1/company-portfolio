import { notFound } from "next/navigation";
import { PageChrome } from "@/components/site-shell";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale as Locale} className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <PageChrome locale={locale as Locale}>{children}</PageChrome>
    </div>
  );
}
