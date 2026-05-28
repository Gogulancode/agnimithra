import { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import SectionEyebrow from "./SectionEyebrow";
import { testimonials } from "../data/site";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  const t = testimonials[active];

  return (
    <section className="bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <SectionEyebrow>Testimonials</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-10 relative">
          <FiMessageCircle className="absolute -top-5 left-8 w-10 h-10 p-2 bg-brand-red text-white rounded-full" />
          <p className="font-display text-lg md:text-xl text-brand-navy leading-relaxed italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-navy text-brand-red flex items-center justify-center font-bold">
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-brand-navy">{t.name}</div>
              <div className="text-xs text-slate-500">{t.company}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-brand-red" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
