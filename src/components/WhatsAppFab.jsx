import { FaWhatsapp } from "react-icons/fa";
import { company } from "../data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={company.socials.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white flex items-center justify-center shadow-soft transition-colors"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
