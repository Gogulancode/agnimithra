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
import { company, backgrounds } from "../data/site";

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
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-soft min-h-[400px]">
            <img
              src={backgrounds.aboutFurnace}
              alt="Industrial furnace"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              Building Strength With <span className="text-brand-red">Quality &amp; Trust</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              {company.name} is a trusted supplier and dealer of all kinds of refractory
              materials and industrial solutions. We serve steel, cement, foundry, glass
              and thermal industries across India.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Backed by years of experience and strong partnerships with leading
              manufacturers, we deliver products that perform reliably in the most
              demanding conditions.
            </p>

            <ul className="mt-6 space-y-3">
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
