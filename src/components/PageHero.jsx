import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { backgrounds } from "../data/site";

export default function PageHero({ title, breadcrumb }) {
  return (
    <section
      className="relative py-20 lg:py-28 text-white bg-brand-navy"
      style={{
        background: `linear-gradient(rgba(14,36,64,0.82), rgba(14,36,64,0.82)), url('${backgrounds.pageHero}') center/cover`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold">{title}</h1>
        <nav className="mt-4 flex items-center justify-center text-sm gap-2 text-slate-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <FiChevronRight className="text-brand-red" />
          {breadcrumb?.map((b, i) =>
            b.to ? (
              <span key={i} className="flex items-center gap-2">
                <Link to={b.to} className="hover:text-white">
                  {b.label}
                </Link>
                <FiChevronRight className="text-brand-red" />
              </span>
            ) : (
              <span key={i} className="text-brand-red font-semibold">
                {b.label}
              </span>
            )
          )}
        </nav>
      </div>
    </section>
  );
}
