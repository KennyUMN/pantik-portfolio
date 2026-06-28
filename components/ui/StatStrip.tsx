interface StatCellProps {
  value: string;
  label: string;
}

function StatCell({ value, label }: StatCellProps) {
  const isPlaceholder = value.includes("[");
  if (isPlaceholder) return null;
  return (
    <div className="flex flex-col gap-1 px-6 py-4 first:pl-0">
      <span className="font-heading text-2xl font-bold text-ink lg:text-3xl">
        {value}
      </span>
      <span className="text-[13px] text-muted-dark">{label}</span>
    </div>
  );
}

interface StatStripProps {
  stats: { value: string; label: string }[];
}

export function StatStrip({ stats }: StatStripProps) {
  const visible = stats.filter((s) => !s.value.includes("["));
  if (visible.length === 0) return null;
  return (
    <div className="mt-10 flex flex-wrap divide-x divide-line border-t border-line pt-2">
      {visible.map((s) => (
        <StatCell key={s.label} {...s} />
      ))}
    </div>
  );
}
