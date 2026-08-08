import { ArrowUpRight, FileText } from "lucide-react";
import { PageHeader } from "../../components/PageHeader";
import { dissertation, journalPapers, msThesis, preprints, type Publication } from "../../lib/data";

export const metadata = { title: "Publications" };

function PublicationList({ publications, start = 1 }: { publications: Publication[]; start?: number }) {
  return (
    <div className="border-t border-line">
      {publications.map((publication, index) => (
        <article key={publication.title} className="group grid gap-4 border-b border-line py-7 md:grid-cols-[4rem_1fr_auto] md:gap-7 md:py-9">
          <span className="font-mono text-xs text-muted">{String(start + index).padStart(2, "0")}</span>
          <div>
            <h3 className="font-display text-2xl leading-tight text-paper transition-colors group-hover:text-signal sm:text-3xl">{publication.title}</h3>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-[#c0c3bd]">{publication.authors}</p>
            <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-muted">{publication.venue}</p>
          </div>
          {publication.url && (
            <a href={publication.url} target="_blank" rel="noreferrer" className="flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-signal hover:text-signal" aria-label={`Open ${publication.title}`}>
              <ArrowUpRight size={16} />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  const longFormWorks = [
    { label: "Doctoral dissertation", work: dissertation },
    { label: "M.S. thesis", work: msThesis },
  ];

  return (
    <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <PageHeader index="01" title="Publications" description="Peer-reviewed research spanning statistical machine learning, robust multivariate methods, scientific AI, healthcare analytics, and operations research." />

      <section className="mt-20 md:mt-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Journal & conference papers</h2>
          <span className="font-mono text-xs text-muted">{journalPapers.length} works</span>
        </div>
        <PublicationList publications={journalPapers} />
      </section>

      <section className="mt-20 md:mt-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-signal">Preprints</h2>
          <span className="font-mono text-xs text-muted">{preprints.length} works</span>
        </div>
        <PublicationList publications={preprints} start={journalPapers.length + 1} />
      </section>

      <section className="mt-20 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {longFormWorks.map(({ label, work }) => (
          <article key={label} className="flex min-h-72 flex-col bg-panel p-7 sm:p-9">
            <div className="flex items-center justify-between text-signal">
              <FileText size={21} strokeWidth={1.5} />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em]">{label}</span>
            </div>
            <h3 className="font-display mt-auto pt-12 text-3xl leading-tight text-paper">{work.title}</h3>
            <a href={work.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted hover:text-signal">
              View record <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
