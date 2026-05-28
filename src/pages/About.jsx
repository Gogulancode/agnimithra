import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiTarget,
  FiEye,
} from "react-icons/fi";
import PageHero from "../components/PageHero";
import SectionEyebrow from "../components/SectionEyebrow";
import AboutImageSlider from "../components/AboutImageSlider";
import ClientsStrip from "../components/ClientsStrip";
import TestimonialsSection from "../components/TestimonialsSection";

export default function About() {
  const points = [
    "Trusted dealer of refractory materials across India",
    "Pan-India delivery with strong logistics network",
    "Wide product range — castables, bricks, masses, insulation",
    "Customer-first approach with dedicated technical support",
  ];

  return (
    <>
      <PageHero title="About Us" breadcrumb={[{ label: "About Us" }]} />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <AboutImageSlider className="aspect-square lg:sticky lg:top-24" />
          <div>
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Building Strength With <span className="text-brand-red">Quality &amp; Trust</span>
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                At Agnimitra Refractories, we bring extensive industry experience and
                deep technical knowledge in the field of refractory materials and
                industrial consumables. We are committed to delivering reliable,
                high-quality refractory solutions that meet the demanding requirements
                of steel plants, foundries, rolling mills, and various high-temperature
                industries.
              </p>
              <p>
                We deal in a complete range of refractory materials including castables,
                ramming mass, gunning mass, fire bricks, insulation products, ceramic
                fiber products, and other allied refractory consumables. In addition to
                refractories, we also supply industrial mechanical items and related
                consumables to support smooth plant operations.
              </p>
              <p>
                Our focus is on quality, consistency, and timely delivery. With a strong
                understanding of customer requirements and industrial applications, we
                strive to provide products that ensure durability, thermal efficiency,
                and operational performance.
              </p>
              <p>
                At Agnimitra Refractories, customer satisfaction is at the core of
                everything we do. We believe in building long-term relationships through
                dependable service, competitive pricing, and a commitment to excellence.
              </p>
              <p>
                Whether it is a small requirement or bulk industrial supply, we ensure
                prompt response, reliable sourcing, and professional support for every
                customer.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-700">
                  <FiCheckCircle className="text-brand-red mt-1 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="mt-8 inline-flex btn-primary">
              CONTACT US <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: FiTarget,
              title: "Our Mission",
              body: "To deliver dependable refractory and industrial products that empower Indian industries to operate efficiently and safely.",
            },
            {
              icon: FiEye,
              title: "Our Vision",
              body: "To be the most trusted partner for refractory solutions across India through quality, integrity and on-time service.",
            },
            {
              icon: FiAward,
              title: "Our Values",
              body: "Quality, trust, transparency and long-term relationships — these guide everything we do for our customers.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl p-7 shadow-card hover:shadow-soft transition-shadow"
            >
              <span className="inline-flex w-12 h-12 rounded-lg bg-brand-navy text-brand-red text-2xl items-center justify-center">
                <c.icon />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-brand-navy">
                {c.title}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ClientsStrip />

      <TestimonialsSection />

      <section className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Need refractory materials for your plant?
            </h3>
            <p className="text-slate-300 mt-2">
              Talk to our team and get a quick quote today.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            GET A QUOTE <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
