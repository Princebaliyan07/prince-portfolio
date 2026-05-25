export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-balance">{description}</p>
      )}
    </div>
  );
}
