import { useEffect, useState } from "react";
import { backgrounds } from "../data/site";

const slides = [
  {
    src: backgrounds.aboutGunning,
    alt: "Gunning Mass — refractory material",
    caption: "Gunning Mass",
  },
  {
    src: backgrounds.aboutRamming,
    alt: "Ramming Mass — refractory material",
    caption: "Ramming Mass",
  },
];

export default function AboutImageSlider({ className = "" }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  // Map of slide index -> natural width / natural height
  const [ratios, setRatios] = useState({});

  // Preload each slide once to read its real aspect ratio,
  // so the container can shrink/grow to match the image and avoid letterboxing.
  useEffect(() => {
    let cancelled = false;
    slides.forEach((s, i) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled || !img.naturalHeight) return;
        setRatios((prev) => ({
          ...prev,
          [i]: img.naturalWidth / img.naturalHeight,
        }));
      };
      img.src = s.src;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const currentRatio = ratios[idx];

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-soft bg-brand-navy ${className}`}
      style={currentRatio ? { aspectRatio: currentRatio } : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[800ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-navy shadow z-10">
        {slides[idx].caption}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show ${slides[i].caption}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
