"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards";
import { Project } from "@/content/site";
import { Locale } from "@/lib/i18n";

export function PortfolioFilter({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [industry, setIndustry] = useState("All");
  const [year, setYear] = useState("All");
  const [size, setSize] = useState("All");

  const industries = ["All", ...Array.from(new Set(projects.map((project) => project.industry)))];
  const years = ["All", ...Array.from(new Set(projects.map((project) => String(project.year))))];
  const sizes = ["All", ...Array.from(new Set(projects.map((project) => project.size)))];

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        return (
          (industry === "All" || project.industry === industry) &&
          (year === "All" || String(project.year) === year) &&
          (size === "All" || project.size === size)
        );
      }),
    [industry, projects, size, year]
  );

  const labels = {
    industry: locale === "en" ? "Industry" : "Салбар",
    year: locale === "en" ? "Year" : "Он",
    size: locale === "en" ? "Project size" : "Ажлын цар хүрээ"
  };

  return (
    <div>
      <div className="mb-10 grid gap-4 border border-[color:var(--line)] p-4 sm:grid-cols-3">
        <Filter label={labels.industry} value={industry} values={industries} onChange={setIndustry} />
        <Filter label={labels.year} value={year} values={years} onChange={setYear} />
        <Filter label={labels.size} value={size} values={sizes} onChange={setSize} />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  values,
  onChange
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-steel dark:text-slate-300">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring h-12 border border-[color:var(--line)] bg-white px-3 text-sm font-medium normal-case tracking-normal text-navy-950 dark:bg-navy-900 dark:text-white"
      >
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
