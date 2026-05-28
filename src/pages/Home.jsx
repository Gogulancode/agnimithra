import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiShield,
  FiTruck,
  FiUsers,
  FiHeadphones,
  FiAward,
  FiBriefcase,
  FiTag,
  FiLifeBuoy,
  FiGlobe,
  FiTool,
  FiSettings,
  FiPackage,
  FiMessageCircle,
  FiPlus,
  FiMinus,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";
import SectionEyebrow from "../components/SectionEyebrow";
import BrochureButton from "../components/BrochureButton";
import {
  company,
  heroSlides,
  heroFeatures,
  products,
  whyChooseUs,
  stats,
  services,
  processSteps,
  testimonials,
  clients,
  commitments,
  faqs,
  industries,
  backgrounds,
} from "../data/site";

const featureIcons = {
  shield: FiShield,
  truck: FiTruck,
  users: FiUsers,
  headset: FiHeadphones,
};

const whyIcons = {
  medal: FiAward,
  truck: FiTruck,
  industry: FiBriefcase,
  tag: FiTag,
  support: FiLifeBuoy,
  globe: FiGlobe,
};

function Hero() {
  const [active, setActive] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const slide = heroSlides[active];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-12 pb-12 grid lg:grid-cols-[1fr_1.15fr] gap-8 items-center">
        {/* Left */}
        <div>
          <SectionEyebrow>{slide.eyebrow}</SectionEyebrow>
          <h1 className="mt-5 font-display font-bold text-brand-navy text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {slide.titleStart}{" "}
            <span className="text-brand-red">{slide.titleHighlight}</span>{" "}
            {slide.titleEnd}
          </h1>
          <p className="mt-6 text-slate-600 max-w-xl leading-relaxed">
            {slide.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              GET A QUOTE <FiArrowRight />
            </Link>
            <Link to="/products" className="btn-outline">
              OUR PRODUCTS
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-brand-red" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right image + features */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft min-h-[360px] lg:min-h-[480px] bg-brand-navy">
            <img
              src={slide.image}
              alt="Industrial refractory operations"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          </div>

          {/* Features card overlay */}
          <div className="lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 bg-brand-navy text-white rounded-xl shadow-soft p-5 lg:p-6 lg:w-[300px]">
            <ul className="divide-y divide-white/10">
              {heroFeatures.map((f) => {
                const Icon = featureIcons[f.icon] || FiShield;
                return (
                  <li key={f.title} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-brand-red text-xl">
                      <Icon />
                    </span>
                    <div>
                      <div className="font-semibold uppercase text-sm tracking-wide">
                        {f.title}
                      </div>
                      <div className="text-xs text-slate-300 leading-snug mt-0.5">
                        {f.body}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionEyebrow>About Agni Mithra</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
            Building Strength <br />
            With <span className="text-brand-red">Quality &amp; Trust</span>
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Agni Mithra is a trusted supplier and dealer of all kinds of refractory
            materials and industrial solutions.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We focus on delivering quality products, timely supply and dependable service
            to industrial clients across India.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <span className="w-11 h-11 rounded-md bg-white shadow-card flex items-center justify-center text-brand-red text-xl">
                <FiUsers />
              </span>
              <div>
                <div className="uppercase text-xs tracking-widest text-brand-red font-semibold">
                  Proprietor
                </div>
                <div className="font-semibold text-brand-navy mt-1">
                  {company.proprietor}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-11 h-11 rounded-md bg-white shadow-card flex items-center justify-center text-brand-red text-xl">
                <FiAward />
              </span>
              <div>
                <div className="uppercase text-xs tracking-widest text-brand-red font-semibold">
                  Our Commitment
                </div>
                <div className="font-semibold text-brand-navy mt-1">
                  Quality products with excellent service.
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className="mt-8 inline-flex btn-primary">
            READ MORE ABOUT US <FiArrowRight />
          </Link>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-soft min-h-[360px]">
          <img
            src={backgrounds.aboutPlant}
            alt="Industrial plant at dusk"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ProductsCarousel() {
  const scrollerRef = useRef(null);
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.clientWidth + 16 : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <SectionEyebrow>Our Products</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-4xl font-bold text-brand-navy">
              We Deal In All Kind Of Refractory Materials
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-red font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            View All Products <FiArrowRight />
          </Link>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((p) => (
              <Link
                to={`/products/${p.slug}`}
                key={p.slug}
                data-card
                className="snap-start shrink-0 w-[200px] sm:w-[220px] bg-white rounded-xl border border-slate-100 shadow-card hover:shadow-soft transition-shadow group overflow-hidden"
              >
                <div className="aspect-square bg-brand-gray overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="inline-flex w-10 h-10 -mt-9 mb-2 rounded-full bg-brand-navy text-brand-red items-center justify-center text-lg shadow-soft">
                    <FiBriefcase />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy leading-tight">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-slate-100 items-center justify-center text-brand-navy hover:text-brand-red"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-slate-100 items-center justify-center text-brand-navy hover:text-brand-red"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="uppercase font-semibold tracking-[0.2em] text-sm">
            Why Choose Agni Mithra
          </span>
          <span className="w-12 h-[2px] bg-brand-red" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {whyChooseUs.map((w) => {
            const Icon = whyIcons[w.icon] || FiAward;
            return (
              <div key={w.title} className="text-center md:text-left">
                <span className="inline-flex w-12 h-12 rounded-lg bg-white/10 items-center justify-center text-brand-red text-2xl mb-3">
                  <Icon />
                </span>
                <div className="font-semibold mb-1">{w.title}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const serviceIcons = {
  engineering: FiSettings,
  installation: FiTool,
  support: FiHeadphones,
  logistics: FiPackage,
};

function StatsStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-10 lg:-mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-brand-navy text-white rounded-2xl shadow-soft overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 text-center ${
                i !== stats.length - 1 ? "md:border-r border-white/10" : ""
              }`}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-brand-red">
                {s.value}
              </div>
              <div className="mt-1 text-sm uppercase tracking-wider text-slate-200">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SectionEyebrow>What We Offer</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy">
            More Than Materials — A Complete Solution
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600">
            Beyond supplying premium refractories, we partner with you across
            selection, installation and after-sales support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon] || FiSettings;
            return (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 shadow-card border border-slate-100 hover:shadow-soft transition-shadow"
              >
                <span className="inline-flex w-12 h-12 rounded-lg bg-brand-red/10 text-brand-red text-2xl items-center justify-center">
                  <Icon />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <SectionEyebrow>Industries We Serve</SectionEyebrow>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-brand-navy">
              Trusted Across Heavy Industry
            </h2>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-brand-red font-semibold uppercase text-sm tracking-wider hover:gap-3 transition-all"
          >
            View All Industries <FiArrowRight />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, 6).map((i) => (
            <Link
              to="/industries"
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
                <p className="text-slate-600 text-sm leading-relaxed">
                  {i.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <SectionEyebrow>How We Work</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy">
            A Simple, Reliable Buying Journey
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="bg-brand-gray rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-3xl font-bold text-brand-red">
                    {step.step}
                  </span>
                  <span className="flex-1 h-[2px] bg-brand-red/30" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
              {i !== processSteps.length - 1 && (
                <FiArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-brand-red text-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section
      className="relative text-white"
      style={{
        background:
          `linear-gradient(rgba(14,36,64,0.92), rgba(14,36,64,0.92)), url('${backgrounds.commitment}') center/cover`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="flex">
            <SectionEyebrow>Our Commitment</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
            Built on Quality, <span className="text-brand-red">Backed by Service</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Long-term reliability matters in refractories — and our processes
            are built around it.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {commitments.map((c) => (
            <div key={c.title} className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-md bg-brand-red flex items-center justify-center shrink-0">
                <FiCheckCircle className="text-white text-xl" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
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

function ClientsStrip() {
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

function BrochureCTA() {
  return (
    <section
      className="relative text-white"
      style={{
        background:
          `linear-gradient(rgba(225,29,42,0.92), rgba(183,20,31,0.95)), url('${backgrounds.brochureCta}') center/cover`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid md:grid-cols-[1.5fr_auto] items-center gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Download Our Complete Product Catalogue
          </h2>
          <p className="mt-3 text-white/90 max-w-2xl">
            Detailed specifications, grades and applications for our full range
            of refractory and industrial products — all in one PDF.
          </p>
        </div>
        <BrochureButton
          variant="primary"
          label="DOWNLOAD BROCHURE"
          className="!bg-white !text-brand-red hover:!bg-slate-100"
        />
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-10">
          <div className="flex justify-center">
            <SectionEyebrow>FAQs</SectionEyebrow>
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-brand-navy">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-brand-navy hover:bg-brand-gray transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="text-brand-red text-xl shrink-0">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Ready to Discuss Your Requirement?
          </h3>
          <p className="text-slate-300 mt-2">
            Talk to our team for a quick quote or technical advice.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            GET A QUOTE <FiArrowRight />
          </Link>
          <a
            href={`tel:${company.phones[0].replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            <FiPhone /> {company.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <ServicesStrip />
      <ProductsCarousel />
      <IndustriesPreview />
      <ProcessSection />
      <WhyChooseUs />
      <CommitmentSection />
      <TestimonialsSection />
      <ClientsStrip />
      <BrochureCTA />
      <FaqSection />
      <ContactCTA />
    </>
  );
}
