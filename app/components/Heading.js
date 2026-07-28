export default function Heading({ thin, thick, as: Tag = "h1", className = "" }) {
  return (
    <Tag className={`leading-[1.05] tracking-tight ${className}`}>
      <span className="font-light">{thin}</span> <span className="font-bold">{thick}</span>
    </Tag>
  );
}
