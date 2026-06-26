import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/content/site";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "contact",
    title: locale === "en" ? "Contact" : "Холбоо барих",
    description: "Request ALPHA RIF BTA credentials, project references, or a procurement discussion."
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Contact" : "Холбоо барих"}
        title={locale === "en" ? "Request credentials for your next tender or delivery program." : "Дараагийн тендер, худалдан авалт, төслийн ажилд хамтран ажиллах."}
        body={locale === "en" ? "Share the opportunity, sector, and expected timing. ALPHA RIF BTA will respond with the relevant profile, references, and next-step discussion." : "Ажлын чиглэл, салбар, шаардлагатай хугацаагаа илгээнэ үү. ALPHA RIF BTA компанийн танилцуулга, ажлын лавлагаа, дараагийн алхмын мэдээллээр хариу өгнө."}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-4">
            <Info icon={<MapPin className="h-5 w-5" />} title={locale === "en" ? "Office" : "Оффис"} body={company.address[locale]} />
            <Info icon={<Mail className="h-5 w-5" />} title="Email" body={company.email} />
            <Info icon={<Phone className="h-5 w-5" />} title={locale === "en" ? "Phone" : "Утас"} body={company.phone} />
          </aside>
          <form action="/api/contact" method="post" className="grid gap-5 border border-[color:var(--line)] p-6 dark:bg-navy-900">
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label={locale === "en" ? "Name" : "Нэр"} />
              <Field name="organization" label={locale === "en" ? "Organization" : "Байгууллага"} />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="email" type="email" label={locale === "en" ? "Email" : "Имэйл"} />
              <Field name="sector" label={locale === "en" ? "Sector" : "Үйл ажиллагааны салбар"} />
            </div>
            <label className="grid gap-2 text-sm font-semibold">
              {locale === "en" ? "Procurement need" : "Худалдан авалт, тендерийн хэрэгцээ"}
              <textarea name="message" rows={6} required className="focus-ring border border-[color:var(--line)] bg-white p-3 font-normal text-navy-950 dark:bg-navy-950 dark:text-white" />
            </label>
            <button className="focus-ring inline-flex h-12 w-fit items-center gap-2 bg-signal px-5 font-semibold text-white transition hover:bg-navy-700">
              {locale === "en" ? "Submit inquiry" : "Хүсэлт илгээх"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>
    </main>
  );
}

function Info({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-4 border border-[color:var(--line)] p-5 dark:bg-navy-900">
      <span className="text-signal">{icon}</span>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-steel dark:text-slate-300">{body}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input name={name} type={type} required className="focus-ring h-12 border border-[color:var(--line)] bg-white px-3 font-normal text-navy-950 dark:bg-navy-950 dark:text-white" />
    </label>
  );
}
