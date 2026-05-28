import SectionEyebrow from "./SectionEyebrow";
import { clients } from "../data/site";

export default function ClientsStrip() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-8">
          <SectionEyebrow align="center">Trusted By</SectionEyebrow>
          <h3 className="mt-3 font-display text-xl md:text-2xl font-bold text-brand-navy">
            Industry Leaders Across India
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {clients.map((c) => (
            <div
              key={c}
              className="flex items-center justify-center h-16 px-4 rounded-lg bg-brand-gray border border-slate-100 text-brand-navy font-display font-bold text-center text-sm hover:bg-brand-navy hover:text-white transition-colors"
              title={c}
            >
              {c}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          * Client names shown for reference. We work with steel, cement,
          foundry and thermal industries across India.
        </p>
      </div>
    </section>
  );
}
