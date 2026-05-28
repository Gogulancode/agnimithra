export default function SectionEyebrow({ children, align = "left" }) {
  return (
    <div
      className={`flex items-center gap-3 text-brand-red font-semibold tracking-[0.2em] uppercase text-xs ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span>{children}</span>
      <span className="block w-12 h-[2px] bg-brand-red" />
    </div>
  );
}
