import { news } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "news",
    title: locale === "en" ? "News & Insights" : "Мэдээ, нийтлэл",
    description: "Procurement, tender, contracting, and project delivery insights."
  });
}

export default async function NewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "News" : "Мэдээ"}
        title={locale === "en" ? "Procurement insights for decision-makers." : "Худалдан авалт, тендерийн ажилд хэрэгтэй мэдээлэл."}
        body={locale === "en" ? "A CMS-ready newsroom for tender participation, supplier risk, contracting, and project closeout guidance." : "Тендерт оролцох бэлтгэл, бэлтгэн нийлүүлэгчийн эрсдэл, гэрээлэлт, төслийн хаалтын талаарх мэдээлэл, зөвлөмжийг эндээс хүргэнэ."}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title.en} className="border border-[color:var(--line)] p-7 dark:bg-navy-900">
              <time className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">{item.date}</time>
              <h2 className="mt-8 text-2xl font-semibold leading-tight">{item.title[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-steel dark:text-slate-300">{item.excerpt[locale]}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
