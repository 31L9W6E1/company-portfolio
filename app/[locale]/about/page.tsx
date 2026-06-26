import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "about",
    title: locale === "en" ? "About ALPHA RIF BTA" : "АЛЬФА РИФ БТА ХХК-ийн тухай",
    description:
      locale === "en"
        ? "A 2025-founded Mongolian national company in procurement, tender participation, supply, contract services, and project delivery."
        : "2025 онд байгуулагдсан, худалдан авах ажиллагаа, тендер, ханган нийлүүлэлт, гэрээт ажил үйлчилгээ, төслийн хэрэгжилтийн чиглэлээр ажилладаг үндэсний компани."
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const principles = locale === "en"
    ? ["Compliance before speed", "Document control at every gate", "Supplier accountability", "Transparent risk reporting"]
    : ["Шаардлагад нийцсэн ажиллагаа", "Үе шат бүрийн баримтын хяналт", "Бэлтгэн нийлүүлэгчийн хариуцлага", "Эрсдэлийн ил тод мэдээлэл"];

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "About" : "Бидний тухай"}
        title={locale === "en" ? "A 2025-founded national company for procurement, supply, and project delivery." : "2025 онд байгуулагдсан худалдан авалт, ханган нийлүүлэлт, төслийн хэрэгжилтийн үндэсний компани."}
        body={locale === "en" ? "ALPHA RIF BTA LLC works with public and private-sector organizations across mining, construction, infrastructure, energy, and industry, combining tender documentation, supply coordination, contract control, and project implementation." : "АЛЬФА РИФ БТА ХХК нь төрийн болон хувийн хэвшлийн байгууллагуудтай хамтран тендерийн баримт бичиг, ханган нийлүүлэлт, гэрээний хяналт, төслийн хэрэгжилтийг нэгтгэсэн шийдлээр ажилладаг."}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{locale === "en" ? "Operating philosophy" : "Үнэт зүйлс"}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">{locale === "en" ? "Professional ethics, transparent operations, and long-term cooperation." : "Мэргэжлийн ёс зүй, ил тод ажиллагаа, урт хугацааны хамтын ажиллагаа."}</h2>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <div key={item} className="flex gap-4 border border-[color:var(--line)] p-5 dark:bg-navy-900">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-signal" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
