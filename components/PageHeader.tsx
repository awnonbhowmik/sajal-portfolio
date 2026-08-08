interface PageHeaderProps {
  index: string;
  title: string;
  description: string;
}

export function PageHeader({ index, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-10 md:pb-14">
      <div className="mb-8 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
        <span>Selected academic record</span>
        <span className="text-signal">/{index}</span>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_28rem] lg:items-end">
        <h1 className="display-title text-balance text-6xl sm:text-7xl md:text-8xl">{title}</h1>
        <p className="max-w-xl text-base leading-7 text-muted lg:pb-2">{description}</p>
      </div>
    </header>
  );
}
