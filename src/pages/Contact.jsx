import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import PageHero from "../components/PageHero";
import { company, products, web3forms } from "../data/site";

const GENERAL_ENQUIRY = "";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  product: GENERAL_ENQUIRY,
  message: "",
  botcheck: "", // honeypot — must stay empty for humans
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // Preselect the product when arriving from a product detail page
  // (e.g. /contact?product=gunning-mass).
  useEffect(() => {
    const slug = searchParams.get("product");
    if (slug && products.some((p) => p.slug === slug)) {
      setForm((f) => ({ ...f, product: slug }));
    }
  }, [searchParams]);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    const productName =
      products.find((p) => p.slug === form.product)?.name || "";
    const subjectText = productName
      ? `Enquiry: ${productName}`
      : "General Enquiry from website";

    const payload = {
      access_key: web3forms.accessKey,
      from_name: `${form.name} (Agni Mithra website)`,
      subject: subjectText,
      name: form.name,
      email: form.email,
      phone: form.phone,
      product: productName || "General enquiry",
      message: form.message,
      botcheck: form.botcheck,
    };
    if (web3forms.cc) {
      payload.cc = web3forms.cc;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          state: "success",
          message: "Thank you — your enquiry has been sent. Our team will reach out shortly.",
        });
        setForm(emptyForm);
      } else {
        setStatus({
          state: "error",
          message: data.message || "Something went wrong. Please try again or email us directly.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const submitting = status.state === "loading";

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
            {status.state === "success" && (
              <div className="mb-5 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm flex items-start gap-2">
                <FiCheckCircle className="mt-0.5 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}
            {status.state === "error" && (
              <div className="mb-5 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm flex items-start gap-2">
                <FiAlertCircle className="mt-0.5 shrink-0" />
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              {/* Honeypot — hidden from real users, bots will fill it */}
              <input
                type="checkbox"
                name="botcheck"
                value={form.botcheck}
                onChange={update("botcheck")}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Name *</span>
                <input
                  type="text"
                  required
                  disabled={submitting}
                  value={form.name}
                  onChange={update("name")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red disabled:bg-slate-50"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Email *</span>
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={form.email}
                  onChange={update("email")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red disabled:bg-slate-50"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Phone</span>
                <input
                  type="tel"
                  disabled={submitting}
                  value={form.phone}
                  onChange={update("phone")}
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red disabled:bg-slate-50"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Product</span>
                <select
                  disabled={submitting}
                  value={form.product}
                  onChange={update("product")}
                  className="rounded-md border border-slate-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red disabled:bg-slate-50"
                >
                  <option value={GENERAL_ENQUIRY}>General Enquiry</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2 flex flex-col gap-1">
                <span className="text-sm font-semibold text-brand-navy">Message *</span>
                <textarea
                  required
                  rows={5}
                  disabled={submitting}
                  value={form.message}
                  onChange={update("message")}
                  placeholder={
                    form.product
                      ? `Please share quantity, grade and any other specifications you need for ${
                          products.find((p) => p.slug === form.product)?.name
                        }.`
                      : "Tell us about your requirement..."
                  }
                  className="rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red disabled:bg-slate-50"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "SENDING..." : "SEND MESSAGE"} <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
