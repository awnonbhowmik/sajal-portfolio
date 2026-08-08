import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { educationData, jobData } from "../../lib/data";

export const metadata = { title: "Education & Experience" };

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <PageHeader index="03" title="Experience" description="An academic path through mathematics, statistics, teaching, and interdisciplinary research across the United States and Bangladesh." />

      <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-2 lg:gap-20">
        <section>
          <div className="mb-10 flex items-center justify-between border-b border-line pb-5">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-signal"><GraduationCap size={19} /> Education</h2>
            <span className="font-mono text-xs text-muted">04 entries</span>
          </div>
          <div>
            {educationData.map((entry, index) => (
              <article key={entry.degree} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0">
                <div className="relative flex justify-center">
                  <span className="relative z-10 mt-1 grid size-7 place-items-center rounded-full border border-signal bg-ink font-mono text-[0.58rem] text-signal">0{index + 1}</span>
                  {index < educationData.length - 1 && <span className="absolute bottom-0 top-8 w-px bg-line" />}
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-signal">{entry.year}</p>
                  <h3 className="font-display mt-2 text-2xl text-paper">{entry.degree}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{entry.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-10 flex items-center justify-between border-b border-line pb-5">
            <h2 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-signal"><BriefcaseBusiness size={19} /> Appointments</h2>
            <span className="font-mono text-xs text-muted">04 entries</span>
          </div>
          <div>
            {jobData.map((entry, index) => (
              <article key={`${entry.title}-${entry.institution}`} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0">
                <div className="relative flex justify-center">
                  <span className="relative z-10 mt-1 grid size-7 place-items-center rounded-full border border-signal bg-ink font-mono text-[0.58rem] text-signal">0{index + 1}</span>
                  {index < jobData.length - 1 && <span className="absolute bottom-0 top-8 w-px bg-line" />}
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-signal">{entry.period}</p>
                  <h3 className="font-display mt-2 text-2xl text-paper">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{entry.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
