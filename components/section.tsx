import { Reveal } from "@/components/motion";

export function Section({
  eyebrow,
  title,
  body,
  children,
  dark = false
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-white text-navy-950 dark:bg-navy-950 dark:text-white" : "bg-[color:var(--background)]"}>
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        {(eyebrow || title || body) && (
          <Reveal className="mb-12 max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>}
            {body && <p className={`mt-5 text-lg leading-8 ${dark ? "text-steel dark:text-slate-300" : "text-steel dark:text-slate-300"}`}>{body}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
