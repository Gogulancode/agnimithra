import { FiArrowRight } from "react-icons/fi";
import SectionEyebrow from "./SectionEyebrow";
import { processSteps } from "../data/site";

export default function ProcessSection() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative h-full">
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
                <FiArrowRight
                  aria-hidden="true"
                  className="hidden lg:block absolute top-1/2 -translate-y-1/2 text-brand-red text-2xl pointer-events-none"
                  style={{ right: "calc(-1.5rem / 2 - 0.5em)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
