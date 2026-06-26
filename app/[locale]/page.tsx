import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedStat, Reveal } from "@/components/motion";
import { CapabilityGrid, ProjectCard } from "@/components/cards";
import { Section } from "@/components/section";
import { certifications, clients, hero, industries, process, projects, stats, testimonials } from "@/content/site";
import { Locale, localizedPath } from "@/lib/i18n";
import { organizationSchema, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    title: locale === "en" ? "ALPHA RIF BTA | Procurement & Project Delivery Mongolia" : "ALPHA RIF BTA | Худалдан авалт ба төслийн хэрэгжилт",
    description: hero.body[locale]
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(locale)) }} />
      <section className="relative overflow-hidden bg-white text-navy-950 dark:bg-navy-950 dark:text-white">
        <div className="absolute inset-0">
          <Image src="/assets/hero-enterprise.png" alt="" fill priority className="object-cover opacity-10 dark:opacity-55" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/58 dark:from-navy-950 dark:via-navy-950/86 dark:to-navy-950/35" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl content-center gap-12 px-5 py-24 lg:grid-cols-[1.08fr_0.72fr] lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-signal dark:text-blue-200">{hero.eyebrow[locale]}</p>
            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {hero.title[locale]}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-steel md:text-xl dark:text-slate-200">{hero.body[locale]}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={localizedPath(locale, "contact")} className="focus-ring inline-flex h-12 items-center justify-center gap-2 bg-signal px-5 font-semibold text-white transition hover:bg-blue-700">
                {locale === "en" ? "Start a procurement discussion" : "Худалдан авалтын зөвлөгөө авах"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={localizedPath(locale, "portfolio")} className="focus-ring inline-flex h-12 items-center justify-center border border-[color:var(--line)] px-5 font-semibold text-navy-950 transition hover:border-signal hover:text-signal dark:border-white/30 dark:text-white dark:hover:border-white">
                {locale === "en" ? "Review portfolio" : "Дэлгэрэнгүй үзэх"}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="self-end border border-[color:var(--line)] bg-white/80 p-6 backdrop-blur-md dark:border-white/15 dark:bg-white/10">
            <p className="text-sm uppercase tracking-[0.18em] text-signal dark:text-blue-100">{locale === "en" ? "Evaluator confidence" : "Үнэлгээнд бэлэн байдал"}</p>
            <div className="mt-6 space-y-4">
              {["Compliance-first tender packs", "Auditable procurement controls", "Delivery evidence and closeout"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-steel dark:text-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-signal dark:text-blue-200" />
                  <span>{locale === "en" ? item : item === "Compliance-first tender packs" ? "Шаардлагад нийцсэн тендерийн материал" : item === "Auditable procurement controls" ? "Баримтжуулалттай худалдан авалтын хяналт" : "Хэрэгжилтийн нотолгоо, хаалтын баримт"}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-white dark:bg-navy-900">
        <div className="mx-auto grid max-w-7xl items-stretch gap-px bg-[color:var(--line)] px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label.en} className="min-h-44 bg-white px-0 py-9 pr-5 dark:bg-navy-900 sm:min-h-48 lg:px-7">
              <div className="flex h-20 items-end text-5xl font-semibold leading-none tracking-tight text-navy-950 dark:text-white md:text-6xl">
                <span className="tabular-nums">
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="mt-5 max-w-[15rem] text-sm leading-6 text-steel dark:text-slate-300">{stat.label[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        eyebrow={locale === "en" ? "Core Capabilities" : "Үйл ажиллагааны чиглэл"}
        title={locale === "en" ? "Disciplined support from tender screening to project closeout." : "Тендерийн судалгаанаас төслийн хаалт хүртэлх цэгцтэй зохион байгуулалт."}
        body={locale === "en" ? "Built for procurement officers, evaluation committees, and enterprise sponsors who need reliable partners and clean documentation." : "Худалдан авах ажиллагааны нэгж, үнэлгээний хороо, захиалагч байгууллагад найдвартай түнш, бүрэн баримт бичиг, хяналттай хэрэгжилт хэрэгтэй."}
      >
        <CapabilityGrid locale={locale} />
      </Section>

      <Section
        dark
        eyebrow={locale === "en" ? "Featured Projects" : "Онцлох ажлууд"}
        title={locale === "en" ? "Portfolio evidence across mining, infrastructure, and industrial supply." : "Уул уурхай, дэд бүтэц, үйлдвэрийн ханган нийлүүлэлтийн ажлын туршлага."}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </Section>

      <Section eyebrow={locale === "en" ? "Industries Served" : "Хамтран ажилладаг салбар"} title={locale === "en" ? "Credibility where procurement risk is high." : "Худалдан авалтын эрсдэл өндөр салбарт итгэлцэл, хариуцлага хамгийн чухал."}>
        <div className="grid gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title.en} className="bg-white p-6 dark:bg-navy-900">
                <Icon className="h-7 w-7 text-signal" />
                <h3 className="mt-8 text-lg font-semibold">{industry.title[locale]}</h3>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section dark eyebrow={locale === "en" ? "Trusted Signals" : "Итгэлцлийн үзүүлэлт"} title={locale === "en" ? "Client, certification, and process visibility." : "Харилцагчийн итгэл, чанарын хяналт, ил тод ажиллагаа."}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid grid-cols-2 gap-px overflow-hidden bg-white/10">
              {clients.map((client) => (
                  <div key={client} className="grid h-24 place-items-center bg-platinum px-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-navy-950 dark:bg-white/5 dark:text-slate-200">
                  {client}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {certifications.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title.en} className="flex gap-5 border border-[color:var(--line)] p-5 dark:border-white/10">
                  <Icon className="h-6 w-6 shrink-0 text-signal dark:text-blue-200" />
                  <div>
                    <h3 className="font-semibold">{item.title[locale]}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel dark:text-slate-300">{item.body[locale]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section eyebrow={locale === "en" ? "Tender Participation Process" : "Тендерт оролцох дараалал"} title={locale === "en" ? "A transparent operating model for high-stakes bids." : "Шаардлага өндөртэй тендерийн ажлыг тодорхой дараалал, хяналттайгаар зохион байгуулна."}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <Reveal key={step.en} className="border border-[color:var(--line)] p-6 dark:bg-navy-900">
              <span className="text-sm font-semibold text-signal">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{step[locale]}</h3>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{locale === "en" ? "Client View" : "Харилцагчийн байр суурь"}</p>
            <blockquote className="mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">“{testimonials[0].quote[locale]}”</blockquote>
            <p className="mt-6 text-slate-300">{testimonials[0].author[locale]}</p>
          </Reveal>
              <Reveal delay={0.1} className="border border-[color:var(--line)] bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold">{locale === "en" ? "Ready for an evaluator-grade partner profile?" : "Худалдан авалтын шаардлагад нийцсэн түнш хайж байна уу?"}</h2>
            <p className="mt-5 text-steel dark:text-slate-300">{locale === "en" ? "Request credentials, capability statements, and project references for your next procurement or delivery program." : "Дараагийн тендер, худалдан авалт, төслийн ажилд шаардлагатай компанийн танилцуулга, чадавхын мэдээлэл, ажлын лавлагааг авах боломжтой."}</p>
            <Link href={localizedPath(locale, "contact")} className="focus-ring mt-8 inline-flex h-12 items-center gap-2 bg-signal px-5 font-semibold text-white dark:bg-white dark:text-navy-950">
              {locale === "en" ? "Contact ALPHA RIF BTA" : "ALPHA RIF BTA-тай холбогдох"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
