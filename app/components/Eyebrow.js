export default function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-widest text-brand ${className}`}
    >
      {children}
    </p>
  );
}
