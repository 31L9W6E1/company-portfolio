import { industries, process } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/motion";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "capabilities",
    title: locale === "en" ? "Capabilities" : "Үйл ажиллагааны чадавх",
    description: "Sector and process capabilities for procurement, tendering, and delivery."
  });
}

export default async function CapabilitiesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Capabilities" : "Чадавх"}
        title={locale === "en" ? "A practical capability base for complex procurement." : "Нарийн шалгууртай худалдан авалтад шаардлагатай бодит чадавх."}
        body={locale === "en" ? "ALPHA RIF BTA aligns commercial, technical, logistics, and compliance workstreams into one controlled delivery model." : "ALPHA RIF BTA нь арилжааны нөхцөл, техникийн шаардлага, логистик, нийцлийн ажлыг нэгтгэн хяналттай зохион байгуулдаг."}
      />
      <Section eyebrow={locale === "en" ? "Sector Coverage" : "Салбарын хамрах хүрээ"} title={locale === "en" ? "Built for Mongolia's priority sectors." : "Монголын голлох салбаруудтай уялдсан туршлага."}>
        <div className="grid gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title.en} className="bg-white p-6 dark:bg-navy-900">
                <Icon className="h-7 w-7 text-signal" />
                <h2 className="mt-8 text-lg font-semibold">{industry.title[locale]}</h2>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section dark eyebrow={locale === "en" ? "Delivery Model" : "Хэрэгжилтийн загвар"} title={locale === "en" ? "Controlled from first review to final acceptance." : "Эхний судалгаанаас эцсийн хүлээлгэн өгөлт хүртэл хяналттай."}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <div key={step.en} className="border border-white/10 p-6">
              <span className="text-sm font-semibold text-blue-200">0{index + 1}</span>
              <h2 className="mt-8 text-xl font-semibold">{step[locale]}</h2>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
