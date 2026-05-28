import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import PageHero from "../components/PageHero";
import { company } from "../data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired — open mail client as a friendly fallback.
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Enquiry from website");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Contact Us" breadcrumb={[{ label: "Contact Us" }]} />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy">
              Get in touch with us
            </h2>
            <p className="mt-3 text-slate-600">
              Send us your requirement and our team will reach out shortly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-gray">
                <span className="w-11 h-11 rounded-md bg-brand-red text-white flex items-center justify-center text-xl">
                  <FiPhone />
                </span>
                <div>
                  <div className="font-semibold text-brand-navy">Call Us</div>
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s+/g, "")}`}
                      className="block text-slate-600 hover:text-brand-red"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-gray">
                <span className="w-11 h-11 rounded-md bg-brand-red text-white flex items-center justify-center text-xl">
                  <FiMail />
                </span>
                <div>
                  <div className="font-semibold text-brand-navy">Email Us</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-slate-600 hover:text-brand-red"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-gray">
                <span className="w-11 h-11 rounded-md bg-brand-red text-white flex items-center justify-center text-xl">
                  <FiMapPin />
                </span>
                <div>
                  <div className="font-semibold text-brand-navy">Visit Us</div>
                  {company.addresses.map((a, i) => (
                    <div key={i} className="text-slate-600 mt-1">
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-slate-100 shadow-card rounded-2xl p-6 md:p-8">
            {submitted && (
              <div className="mb-5 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
                Thank you — your mail client should open with your enquiry. We'll respond shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Name *</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Email *</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Phone</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Subject</span>
                <input
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </label>
              <label className="sm:col-span-2 flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Message *</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red"
                />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  SEND MESSAGE <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
