import { PortfolioFilter } from "@/components/portfolio-filter";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { projects } from "@/content/site";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "portfolio",
    title: locale === "en" ? "Portfolio" : "Төслүүд",
    description: "Filter ALPHA RIF BTA projects by industry, year, and project size."
  });
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Portfolio" : "Төслүүд"}
        title={locale === "en" ? "Evidence-led project experience." : "Баримт, хэрэгжилтэд суурилсан ажлын туршлага."}
        body={locale === "en" ? "Filter representative projects by sector, year, and scale. Case study downloads are structured for procurement and evaluator review." : "Төлөөлөх ажлуудыг салбар, он, цар хүрээгээр шүүнэ. Төслийн танилцуулга нь худалдан авалт, үнэлгээний хяналтад ойлгомжтой бүтэцтэй."}
      />
      <Section>
        <PortfolioFilter projects={projects} locale={locale} />
      </Section>
    </main>
  );
}
