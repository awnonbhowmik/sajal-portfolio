import { Award, Sparkles } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { grantsAwards } from "../../lib/data";

export const metadata = { title: "Grants & Awards" };

export default function GrantsAwardsPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <PageHeader index="04" title="Recognition" description="Teaching fellowships, research distinctions, travel support, and institutional awards across an international academic career." />

      <section className="mt-20 md:mt-28">
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {grantsAwards.map((award, index) => (
            <article key={award} className="group flex min-h-72 flex-col bg-panel p-6 transition-colors hover:bg-panel-soft sm:p-8">
              <div className="flex items-center justify-between">
                {index === 0 ? <Sparkles size={20} className="text-signal" strokeWidth={1.5} /> : <Award size={20} className="text-signal" strokeWidth={1.5} />}
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-auto pt-12 text-base leading-7 text-[#d0d2cd] transition-colors group-hover:text-paper">{award}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
