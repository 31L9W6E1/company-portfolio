import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { capabilities, Project } from "@/content/site";
import { Locale, localizedPath } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export function CapabilityGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] md:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title.en} delay={index * 0.04} className="bg-white p-7 dark:bg-navy-900">
            <Icon className="h-7 w-7 text-signal" />
            <h3 className="mt-8 text-xl font-semibold">{item.title[locale]}</h3>
            <p className="mt-4 text-sm leading-7 text-steel dark:text-slate-300">{item.body[locale]}</p>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className="group border border-[color:var(--line)] bg-white transition hover:shadow-enterprise dark:bg-navy-900">
      <Link href={localizedPath(locale, `portfolio/${project.slug}`)} className="focus-ring block">
        <div className="relative aspect-[16/10] overflow-hidden bg-platinum dark:bg-navy-800">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="p-7">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-signal">
            <span>{project.industry}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.size}</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight">{project.title[locale]}</h3>
          <p className="mt-4 text-sm leading-7 text-steel dark:text-slate-300">{project.summary[locale]}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 group-hover:text-signal dark:text-white">
            {locale === "en" ? "View project" : "Дэлгэрэнгүй үзэх"}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function CaseStudyLink({ href, locale }: { href: string; locale: Locale }) {
  return (
    <a
      href={href}
      className="focus-ring inline-flex items-center gap-2 border border-[color:var(--line)] px-4 py-3 text-sm font-semibold transition hover:border-signal hover:text-signal"
    >
      <Download className="h-4 w-4" />
      {locale === "en" ? "Download case study" : "Төслийн танилцуулга татах"}
    </a>
  );
}
