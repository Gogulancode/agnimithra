import PageHero from "../components/PageHero";
import { industries } from "../data/site";

export default function Industries() {
  return (
    <>
      <PageHero title="Industries We Serve" breadcrumb={[{ label: "Industries" }]} />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <p className="max-w-3xl text-slate-600 mb-10">
            Agni Mithra supplies refractory materials and industrial products to a wide
            range of industries across India. Our solutions are engineered to withstand
            high-temperature environments and demanding operational conditions.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((i) => (
              <div
                key={i.name}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow border border-slate-100"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white">
                    {i.name}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{i.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
