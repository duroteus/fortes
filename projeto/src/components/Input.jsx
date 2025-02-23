export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
        {label}
      </label>
      <input
        {...props}
        className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-md px-4 py-2 
                 focus:outline-none focus:ring-1 focus:ring-[var(--color-input-focus)] focus:border-[var(--color-input-focus)]
                 transition-colors duration-200"
      />
    </div>
  );
}
