import { certifications } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "certifications",
    title: locale === "en" ? "Certifications & Compliance" : "Чанарын хяналт ба нийцэл",
    description: "Compliance, quality, and HSE documentation readiness."
  });
}

export default async function CertificationsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Certifications" : "Нийцэл"}
        title={locale === "en" ? "Controls and documentation built for procurement review." : "Худалдан авалтын хяналтад нийцсэн баримт бичиг, ажиллагааны тогтолцоо."}
        body={locale === "en" ? "Certification readiness is treated as an operating discipline: documented, reviewable, and available for evaluators." : "Чанарын хяналт, нийцлийн бэлэн байдлыг өдөр тутмын ажиллагааны нэг хэсэг болгон баримтжуулж, шалгаж нягтлах боломжтой хэлбэрээр бүрдүүлдэг."}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title.en} className="border border-[color:var(--line)] p-7 dark:bg-navy-900">
                <Icon className="h-8 w-8 text-signal" />
                <h2 className="mt-8 text-2xl font-semibold">{item.title[locale]}</h2>
                <p className="mt-4 text-sm leading-7 text-steel dark:text-slate-300">{item.body[locale]}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
