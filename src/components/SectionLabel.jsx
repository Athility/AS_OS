export default function SectionLabel({ index, label, kicker }) {
  return (
    <div className="mb-10 grid gap-3 border-t border-divider pt-5 text-xs uppercase leading-none text-muted md:grid-cols-[1fr_auto]">
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <span>© AS_OS</span>
        <span>// {index}</span>
        <span>{label}</span>
      </div>
      {kicker ? <span className="text-right">{kicker}</span> : null}
    </div>
  );
}
