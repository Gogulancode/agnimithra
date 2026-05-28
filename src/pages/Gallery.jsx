import { useState } from "react";
import { FiX } from "react-icons/fi";
import PageHero from "../components/PageHero";
import { gallery } from "../data/site";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero title="Gallery" breadcrumb={[{ label: "Gallery" }]} />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(src)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-brand-gray"
              >
                <img
                  src={src}
                  alt={`Gallery item ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setActive(null)}
          >
            <FiX />
          </button>
          <img
            src={active}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-soft"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
