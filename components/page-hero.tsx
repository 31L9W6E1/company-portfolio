import { Reveal } from "@/components/motion";

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="border-b border-[color:var(--line)] bg-platinum dark:bg-navy-900">
      <div className="enterprise-grid">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{eyebrow}</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight md:text-7xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-steel dark:text-slate-300">{body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
