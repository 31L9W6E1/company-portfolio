import { CapabilityGrid } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    path: "services",
    title: locale === "en" ? "Procurement & Contracting Services" : "Худалдан авалт, гэрээлэлтийн үйлчилгээ",
    description:
      locale === "en"
        ? "Tender participation, procurement documentation, supply, construction and infrastructure support, project management, and consulting services."
        : "Тендер, худалдан авах ажиллагаа, ханган нийлүүлэлт, барилга, дэд бүтэц, төслийн удирдлага, зөвлөх үйлчилгээ."
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <PageHero
        eyebrow={locale === "en" ? "Services" : "Үйлчилгээ"}
        title={locale === "en" ? "Tender, supply, construction, project management, and advisory services." : "Тендер, ханган нийлүүлэлт, барилга, төслийн удирдлага, зөвлөх үйлчилгээ."}
        body={locale === "en" ? "The service model follows the company profile: procurement documents, tender package management, contract implementation controls, material and equipment supply, logistics coordination, risk assessment, and quality control." : "Манай үйлчилгээ нь худалдан авах ажиллагааны баримт бичиг, тендерийн материал бүрдүүлэлт, гэрээний хэрэгжилт, бараа материал, тоног төхөөрөмжийн нийлүүлэлт, логистик, эрсдэлийн үнэлгээ, чанарын хяналтыг нэгтгэн хэрэгжүүлдэг."}
      />
      <Section>
        <CapabilityGrid locale={locale} />
      </Section>
    </main>
  );
}
