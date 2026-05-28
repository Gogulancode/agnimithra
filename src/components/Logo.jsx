import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOGO_SRC = encodeURI("/Agni Mitrha logo.svg");

let svgCache = null;
let svgPromise = null;

function loadSvg() {
  if (svgCache !== null) return Promise.resolve(svgCache);
  if (svgPromise) return svgPromise;
  svgPromise = fetch(LOGO_SRC)
    .then((r) => r.text())
    .then((text) => {
      svgCache = text;
      return text;
    });
  return svgPromise;
}

// Swap navy (#223947) for white, leave red flame untouched.
// Also force the inline <svg> to scale to its container height.
function recolorSvgForDark(svgText) {
  // Navy → white (keeps red flame untouched).
  let out = svgText.replace(/#223947/gi, "#FFFFFF");
  // Crop the viewBox to the actual artwork (removes internal whitespace padding
  // so the logo's left edge sits flush with the text below it in the footer).
  out = out.replace(/viewBox="[^"]*"/i, 'viewBox="80 95 220 185"');
  // Force the inline SVG to fill its container height with left-flush alignment.
  out = out.replace(
    /<svg([^>]*)>/i,
    '<svg$1 preserveAspectRatio="xMinYMid meet" style="height:100%;width:auto;display:block;">'
  );
  return out;
}

export default function Logo({
  className = "",
  height = 96,
  overflow = false,
  invert = false,
}) {
  const [svgHtml, setSvgHtml] = useState(null);

  useEffect(() => {
    if (!invert) return;
    let mounted = true;
    loadSvg().then((text) => {
      if (mounted) setSvgHtml(recolorSvgForDark(text));
    });
    return () => {
      mounted = false;
    };
  }, [invert]);

  const wrapClasses = `flex items-center ${overflow ? "-my-6" : ""} ${className}`;

  if (invert) {
    return (
      <Link to="/" aria-label="Agni Mithra home" className={wrapClasses}>
        <span
          style={{ height: `${height}px`, display: "inline-block" }}
          dangerouslySetInnerHTML={svgHtml ? { __html: svgHtml } : undefined}
        />
      </Link>
    );
  }

  return (
    <Link to="/" aria-label="Agni Mithra home" className={wrapClasses}>
      <img
        src={LOGO_SRC}
        alt="Agni Mithra"
        style={{ height: `${height}px`, width: "auto" }}
        className="block"
      />
    </Link>
  );
}
