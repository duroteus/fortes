export default function Button({
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "px-4 py-2 rounded-md transition-all duration-200 font-medium";
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-text-white)] hover:bg-[var(--color-primary-hover)] w-full shadow-sm",
    secondary:
      "bg-[var(--color-background-alt)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-gradient-from)] border border-[var(--color-border)]",
    accent:
      "bg-[var(--color-accent)] text-[var(--color-text-white)] hover:bg-[var(--color-accent-light)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
