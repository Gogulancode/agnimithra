import { useEffect, useState } from "react";

const SRC = "/india-map.svg";
let cache = null;
let promise = null;

function load() {
  if (cache !== null) return Promise.resolve(cache);
  if (promise) return promise;
  promise = fetch(SRC)
    .then((r) => r.text())
    .then((text) => {
      // Inject a class on every state path so CSS in the footer can style
      // them uniformly. The source SVG formats <path with newlines/tabs after
      // the tag name, so match any whitespace — not just a space.
      let out = text.replace(/<path(\s)/g, '<path class="state"$1');
      // Force svg to fill container.
      out = out.replace(
        /<svg([^>]*)>/i,
        '<svg$1 style="width:100%;height:100%;display:block;">'
      );
      cache = out;
      return out;
    });
  return promise;
}

// The package's india.svg uses viewBox 0 0 612 696.
// Approximate pixel positions for our office city on that viewBox:
const PINS = [{ name: "Mumbai", x: 105, y: 405 }];

export default function IndiaMap() {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    let mounted = true;
    load().then((text) => {
      if (mounted) setSvg(text);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-[300px] mx-auto"
      style={{ aspectRatio: "612 / 696" }}
      aria-label="India — Mumbai and Hyderabad office locations"
    >
      {/* Map paths: faded white watermark */}
      <style>{`
        .india-map-watermark .state {
          fill: #ffffff;
          stroke: #0E2440;
          stroke-width: 0.6;
        }
      `}</style>
      <div
        className="absolute inset-0 india-map-watermark"
        dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
      />

      {/* Pin overlay using the same viewBox so coordinates line up */}
      <svg
        viewBox="0 0 612 696"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {PINS.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r="14" fill="#E11D2A" opacity="0.3" />
            <circle cx={p.x} cy={p.y} r="7" fill="#E11D2A" />
            <circle cx={p.x} cy={p.y} r="2.5" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );
}
