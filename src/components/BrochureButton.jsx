import { FiDownload } from "react-icons/fi";
import { company } from "../data/site";

export default function BrochureButton({
  variant = "primary",
  label = "DOWNLOAD CATALOGUE",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-md transition-colors";
  const styles =
    variant === "outline"
      ? "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
      : variant === "ghost"
        ? "text-brand-red hover:text-brand-redDark"
        : "bg-brand-red hover:bg-brand-redDark text-white shadow-soft";

  return (
    <a
      href={company.brochureUrl}
      download={company.brochureFilename}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} ${styles} ${className}`}
    >
      <FiDownload /> {label}
    </a>
  );
}
