export default function Card({ title, children }) {
  return (
    <div className="bg-[var(--color-card-background)] rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden">
      <div className="bg-[var(--color-card-header)] px-6 py-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-white)]">
          {title}
        </h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
