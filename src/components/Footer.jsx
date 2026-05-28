import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiHeart } from "react-icons/fi";
import Logo from "./Logo";
import IndiaMap from "./IndiaMap";
import { company, navLinks, products } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid gap-10 lg:grid-cols-[1.3fr_1fr_1.1fr_1.4fr_1fr]">
        {/* Logo + about */}
        <div>
          <Logo height={104} invert />
          <p className="mt-1 text-sm leading-relaxed text-slate-300">
            {company.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={company.socials.linkedin}
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red transition-colors flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={company.socials.facebook}
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red transition-colors flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href={company.socials.instagram}
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red transition-colors flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href={company.socials.whatsapp}
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red transition-colors flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold tracking-wide mb-4 uppercase text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {navLinks
              .filter((l) => l.label !== "Products")
              .concat({ label: "Products", to: "/products" })
              .map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white text-slate-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            <li>
              <a
                href={company.brochureUrl}
                download={company.brochureFilename}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white text-slate-300"
              >
                Download Catalogue
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold tracking-wide mb-4 uppercase text-sm">
            Our Products
          </h4>
          <ul className="space-y-2 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/products/${p.slug}`}
                  className="hover:text-white text-slate-300"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold tracking-wide mb-4 uppercase text-sm">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 mt-0.5 rounded-md bg-brand-red flex items-center justify-center text-white">
                <FiPhone />
              </span>
              <div>
                {company.phones.map((p) => (
                  <div key={p}>
                    <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-white">
                      {p}
                    </a>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 mt-0.5 rounded-md bg-brand-red flex items-center justify-center text-white">
                <FiMail />
              </span>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 mt-0.5 rounded-md bg-brand-red flex items-center justify-center text-white">
                <FiMapPin />
              </span>
              <div className="space-y-2">
                {company.addresses.map((a, i) => (
                  <div key={i}>{a}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="hidden lg:block">
          <IndiaMap />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} {company.name}. All Rights Reserved.</div>
          <div className="flex items-center gap-1">
            Designed with <FiHeart className="text-brand-red" /> for a Stronger Tomorrow
          </div>
        </div>
      </div>
    </footer>
  );
}
