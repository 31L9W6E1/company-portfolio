import type { Metadata } from "next";
import { Locale, locales, localizedPath } from "@/lib/i18n";

const siteUrl = "https://alpharifbta.mn";

export function pageMetadata({
  locale,
  title,
  description,
  path = ""
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const pathname = localizedPath(locale, path);
  const languages = Object.fromEntries(locales.map((item) => [item, `${siteUrl}${localizedPath(item, path)}`]));

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${pathname}`,
      languages
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${pathname}`,
      siteName: "ALPHA RIF BTA",
      locale: locale === "en" ? "en_US" : "mn_MN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/assets/og-enterprise.png`,
          width: 1200,
          height: 630,
          alt: "ALPHA RIF BTA enterprise procurement and project delivery"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/assets/og-enterprise.png`]
    }
  };
}

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALPHA RIF BTA",
    url: "https://alpharifbta.mn",
    logo: "https://alpharifbta.mn/assets/og-enterprise.png",
    areaServed: locale === "en" ? "Mongolia" : "Монгол Улс",
    knowsAbout: [
      "Government procurement",
      "Tender participation",
      "Mining procurement",
      "Infrastructure delivery",
      "Contracting"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "procurement inquiries",
      email: "contact@alpharifbta.mn",
      telephone: "+976 7711 2040"
    }
  };
}
