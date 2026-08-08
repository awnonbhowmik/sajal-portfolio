import { ArrowUpRight, CircleCheck, Users } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { reviewerJournals } from "../../lib/data";

export const metadata = { title: "Academic Service" };

export default function ServicePage() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <PageHeader index="05" title="Service" description="Contributing to the research community through peer review, conference service, and departmental leadership." />

      <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <section>
          <span className="eyebrow">Peer review</span>
          <h2 className="display-title mt-7 text-4xl sm:text-5xl">Journal & conference reviewer.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">Supporting rigorous scholarship across machine learning, healthcare analytics, dynamical systems, and applied mathematics.</p>
        </section>

        <section className="border-t border-line">
          {reviewerJournals.map((journal, index) => (
            <a
              key={journal.name}
              href={journal.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-line py-6"
            >
              <CircleCheck size={17} className="text-signal" />
              <span className="text-sm leading-6 text-[#c8cbc5] transition-colors group-hover:text-paper sm:text-base">{journal.name}</span>
              <span className="flex items-center gap-3">
                <span className="hidden font-mono text-[0.65rem] text-muted sm:block">0{index + 1}</span>
                <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-signal" />
              </span>
            </a>
          ))}
        </section>
      </div>

      <section className="panel mt-20 grid gap-8 p-7 sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
        <div className="grid size-16 place-items-center rounded-full bg-signal text-ink"><Users size={25} /></div>
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-signal">Departmental leadership</p>
          <p className="font-display mt-3 max-w-4xl text-2xl leading-snug text-paper sm:text-3xl">Organizer, Departmental Colloquium, Department of Mathematical and Physical Sciences, East West University, Dhaka, Bangladesh.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.13em] text-muted">Academic year 2017–18</p>
        </div>
      </section>
    </div>
  );
}
