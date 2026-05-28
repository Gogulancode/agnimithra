import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import PageHero from "../components/PageHero";
import BrochureButton from "../components/BrochureButton";
import { products } from "../data/site";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <PageHero
          title="Product Not Found"
          breadcrumb={[{ label: "Products", to: "/products" }, { label: "Not Found" }]}
        />
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-slate-600">
            We couldn't find that product. Browse all our products instead.
          </p>
          <Link to="/products" className="mt-6 inline-flex btn-primary">
            All Products <FiArrowRight />
          </Link>
        </section>
      </>
    );
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={product.name}
        breadcrumb={[
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl overflow-hidden shadow-soft min-h-[360px] relative bg-brand-gray">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              {product.name}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>

            <h3 className="mt-8 font-semibold text-brand-navy uppercase tracking-wide text-sm">
              Key Features
            </h3>
            <ul className="mt-3 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-slate-700">
                  <FiCheckCircle className="text-brand-red mt-1 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-semibold text-brand-navy uppercase tracking-wide text-sm">
              Applications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1 rounded-full bg-brand-gray text-brand-navy text-sm border border-slate-200"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/contact?product=${product.slug}`}
                className="btn-primary"
              >
                ENQUIRE NOW <FiArrowRight />
              </Link>
              <BrochureButton variant="outline" label="DOWNLOAD CATALOGUE" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">
          <h3 className="font-display text-2xl font-bold text-brand-navy mb-6">
            Related Products
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-soft transition-shadow overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-brand-navy text-sm">
                    {p.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
