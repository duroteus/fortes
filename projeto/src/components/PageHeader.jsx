export default function PageHeader({ title, description }) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
