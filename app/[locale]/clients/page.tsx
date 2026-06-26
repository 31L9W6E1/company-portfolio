import { clients, industries, testimonials } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "clients",
    title: locale === "en" ? "Clients" : "Харилцагчид",
    description: "Representative client and sector credibility for procurement and delivery work."
  });
}

export default async function ClientsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Clients" : "Харилцагчид"}
        title={locale === "en" ? "Trusted across public, industrial, and enterprise procurement." : "Төр, аж үйлдвэр, хувийн хэвшлийн худалдан авалтад итгэлцэл чухал."}
        body={locale === "en" ? "The client model is designed around confidentiality, evaluator confidence, and repeatable delivery evidence." : "Харилцагчтай ажиллах зарчим нь нууцлал, шаардлагад нийцсэн баримт бичиг, дараагийн ажилд ашиглах боломжтой хэрэгжилтийн нотолгоонд тулгуурладаг."}
      />
      <Section>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-3">
          {clients.map((client) => (
            <div key={client} className="grid h-32 place-items-center bg-white px-5 text-center text-sm font-semibold uppercase tracking-[0.16em] dark:bg-navy-900">
              {client}
            </div>
          ))}
        </div>
      </Section>
      <Section dark title={locale === "en" ? "Sector familiarity reduces procurement risk." : "Салбарын онцлогийг ойлгосноор худалдан авалтын эрсдэл буурна."}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.title.en} className="border border-white/10 p-6">
              <h2 className="text-lg font-semibold">{industry.title[locale]}</h2>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <blockquote className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          “{testimonials[0].quote[locale]}”
        </blockquote>
        <p className="mt-6 text-center text-steel dark:text-slate-300">{testimonials[0].author[locale]}</p>
      </Section>
    </main>
  );
}
