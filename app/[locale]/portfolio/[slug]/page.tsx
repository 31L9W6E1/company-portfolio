import Image from "next/image";
import { notFound } from "next/navigation";
import { CaseStudyLink } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { projects } from "@/content/site";
import { Locale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return pageMetadata({
    locale,
    path: `portfolio/${project.slug}`,
    title: project.title[locale],
    description: project.summary[locale]
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <PageHero eyebrow={project.industry} title={project.title[locale]} body={project.summary[locale]} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[color:var(--line)]">
              <Image src={project.image} alt={project.title[locale]} fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {[project.image, "/assets/gallery-contract.png", "/assets/gallery-site.png"].map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden border border-[color:var(--line)]">
                  <Image src={image} alt="" fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
          <aside className="border border-[color:var(--line)] p-7 dark:bg-navy-900">
            <dl className="grid gap-5 text-sm">
              <div><dt className="font-semibold text-steel dark:text-slate-300">Industry</dt><dd className="mt-1 text-lg font-semibold">{project.industry}</dd></div>
              <div><dt className="font-semibold text-steel dark:text-slate-300">Year</dt><dd className="mt-1 text-lg font-semibold">{project.year}</dd></div>
              <div><dt className="font-semibold text-steel dark:text-slate-300">Size</dt><dd className="mt-1 text-lg font-semibold">{project.size}</dd></div>
            </dl>
            <div className="mt-8">
              <CaseStudyLink href={project.caseStudy} locale={locale} />
            </div>
          </aside>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">{locale === "en" ? "Scope" : "Хамрах хүрээ"}</h2>
            <ul className="mt-5 space-y-3 text-steel dark:text-slate-300">
              {project.scope.map((item) => <li key={item.en}>{item[locale]}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{locale === "en" ? "Outcomes" : "Үр дүн"}</h2>
            <ul className="mt-5 space-y-3 text-steel dark:text-slate-300">
              {project.outcomes.map((item) => <li key={item.en}>{item[locale]}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
