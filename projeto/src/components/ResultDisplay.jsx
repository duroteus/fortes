export default function ResultDisplay({ label, value }) {
  return (
    <div className="bg-[var(--color-background-alt)] rounded-md p-4 border border-[var(--color-border)]">
      <p className="text-sm text-[var(--color-text-secondary)] mb-1">
        {label}:
      </p>
      <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
        {value}
      </p>
    </div>
  );
}
