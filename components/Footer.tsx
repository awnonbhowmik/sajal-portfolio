import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-[#070807]">
      <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <span className="eyebrow">Professional contact</span>
            <h2 className="display-title mt-6 max-w-4xl text-5xl sm:text-7xl">
              Let&apos;s advance an <span className="italic text-signal">idea</span> together.
            </h2>
            <a
              href="mailto:schakroborty@wpi.edu"
              className="mt-8 inline-flex items-center gap-3 border-b border-paper pb-1 text-base font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
            >
              <Mail size={17} /> schakroborty@wpi.edu <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="space-y-5 text-sm text-muted lg:justify-self-end">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-signal" size={16} />
              <span>Salisbury Labs 405E<br />Worcester, Massachusetts</span>
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="https://orcid.org/0000-0003-1784-2741" target="_blank" rel="noreferrer" className="hover:text-paper">ORCID</a>
              <a href="https://scholar.google.co.uk/citations?user=TH5CuuUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="hover:text-paper">Scholar</a>
              <a href="https://www.linkedin.com/in/sajal-chakroborty-7752a6179/" target="_blank" rel="noreferrer" className="hover:text-paper">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sajal Chakroborty</p>
          <p>Mathematics · Statistics · Machine Learning</p>
        </div>
      </div>
    </footer>
  );
}
