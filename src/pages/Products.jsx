import { Link } from "react-router-dom";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import PageHero from "../components/PageHero";
import BrochureButton from "../components/BrochureButton";
import { products } from "../data/site";

export default function Products() {
  return (
    <>
      <PageHero title="Our Products" breadcrumb={[{ label: "Products" }]} />

      {/* Catalogue strip */}
      <section className="bg-brand-gray border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="w-11 h-11 rounded-md bg-brand-red text-white flex items-center justify-center text-xl shrink-0">
              <FiFileText />
            </span>
            <div>
              <div className="font-display font-bold text-brand-navy">
                Full Product Catalogue
              </div>
              <p className="text-sm text-slate-600">
                Download our complete brochure with detailed product specifications.
              </p>
            </div>
          </div>
          <BrochureButton />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-soft transition-shadow overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-brand-gray overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-brand-navy text-lg">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{p.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-brand-red font-semibold text-sm group-hover:gap-2 transition-all">
                    View Details <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
