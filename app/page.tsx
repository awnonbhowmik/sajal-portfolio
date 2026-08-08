import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, ChartNoAxesCombined } from "lucide-react";
import { bioText, recentNews, socialLinks } from "../lib/data";
import { NewsItem } from "../components/NewsItem";

const researchAreas = [
  { icon: BrainCircuit, title: "Statistical Machine Learning", text: "Robust methods, neural tangent kernels, and learning from complex data." },
  { icon: ChartNoAxesCombined, title: "Data Science", text: "Applied statistical modeling across health, materials, and multidimensional data." },
  { icon: BookOpen, title: "Mathematical Modeling", text: "Optimization, operations research, and biological systems." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[90rem] items-stretch px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12">
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-14">
            <div className="animate-rise">
              <span className="eyebrow">Postdoctoral Scholar · WPI</span>
              <h1 className="display-title text-balance mt-7 text-[clamp(3.55rem,18vw,9.8rem)]">
                Sajal<br /><span className="italic text-signal">Chakroborty.</span>
              </h1>
            </div>
            <div className="animate-rise-late mt-10 grid gap-8 border-t border-line pt-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-7 text-[#b9bdb7] sm:text-lg sm:leading-8">
                Working where <strong className="font-semibold text-paper">mathematical rigor</strong> meets machine intelligence—building statistical methods for complex, real-world data.
              </p>
              <a
                href="#about"
                className="group flex size-14 items-center justify-center rounded-full bg-signal text-ink transition-transform hover:rotate-6"
                aria-label="Read about Sajal"
              >
                <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden border-x border-t border-line lg:border-y-0 lg:border-r-0">
            <Image
              src="/images/sajal-chakroborty.jpg"
              alt="Sajal Chakroborty"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[52%_40%] grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-signal">Currently at</p>
                <p className="mt-2 max-w-xs text-xl font-semibold leading-tight text-paper">Department of Mathematical Sciences, WPI</p>
              </div>
              <span className="hidden font-mono text-xs text-paper/60 sm:block">WORCESTER, MA<br />UNITED STATES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel/60">
        <div className="mx-auto grid max-w-[90rem] grid-cols-2 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
          {[
            ["05+", "Years teaching"],
            ["04", "Academic degrees"],
            ["03", "Research domains"],
            ["USA", "Based in Worcester"],
          ].map(([value, label], index) => (
            <div key={label} className={`py-7 ${index % 2 === 0 ? "pr-5" : "border-l border-line pl-5"} md:border-l md:border-line md:px-6 md:first:border-l-0 md:first:pl-0`}>
              <p className="font-display text-3xl text-paper">{value}</p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow">About & focus</span>
            <p className="mt-5 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-muted">Researcher. Educator.<br />Mathematical thinker.</p>
          </div>
          <div>
            <h2 className="display-title text-balance text-4xl leading-[1.04] sm:text-6xl">
              Data can be noisy. The thinking behind it should be <span className="italic text-signal">precise.</span>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted">{bioText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-signal hover:text-signal">
                  {link.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-line md:grid-cols-3">
          {researchAreas.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={`group py-8 md:px-7 md:py-10 ${index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}>
              <div className="mb-10 flex items-center justify-between">
                <Icon className="text-signal" size={24} strokeWidth={1.5} />
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
              </div>
              <h3 className="font-display text-2xl text-paper">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[#0d0f0e]">
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Recent news</span>
              <h2 className="display-title mt-5 text-5xl sm:text-7xl">The latest.</h2>
            </div>
            <Link href="/publications" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-paper hover:text-signal">
              View publication record <ArrowRight size={15} />
            </Link>
          </div>
          <div className="border-t border-line">
            {recentNews.map((item, index) => <NewsItem key={`${item.type}-${index}`} item={item} index={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}
