"use client";

import { useEffect, useRef, useState } from "react";

export default function KeyholeLoader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // The animation starts with the SSR paint, so its animationend can fire
    // before hydration attaches listeners — fall back to a timer keyed off --kh-dur.
    const raw = ref.current ? getComputedStyle(ref.current).getPropertyValue("--kh-dur").trim() : "";
    const parsed = parseFloat(raw);
    const durationMs = Number.isFinite(parsed) && parsed > 0 ? (raw.endsWith("ms") ? parsed : parsed * 1000) : 3000;
    const id = window.setTimeout(() => setDone(true), durationMs + 250);
    return () => window.clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="kh-loader kh-run"
      ref={ref}
      onAnimationEnd={(event) => {
        if (event.animationName === "kh-plate") setDone(true);
      }}
    >
      <svg className="kh-plate" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="kh-mask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <g className="kh-hole" fill="black">
              <circle cx="50" cy="45" r="8.4" />
              <path d="M45.6 51 L54.4 51 L57.4 69 L42.6 69 Z" />
            </g>
          </mask>
        </defs>
        <rect className="kh-plate-rect" x="0" y="0" width="100" height="100" mask="url(#kh-mask)" />
      </svg>

      <div className="kh-glow" />

      <div className="kh-key-fade">
        <div className="kh-key-slide">
          <svg className="kh-key" width="210" height="90" viewBox="0 0 70 30">
            <circle cx="9" cy="15" r="8.5" fill="none" stroke="var(--kh-key)" strokeWidth="2.4" />
            <circle cx="9" cy="15" r="3" fill="var(--kh-key)" />
            <line x1="17" y1="15" x2="64" y2="15" stroke="var(--kh-key)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="58" y1="15" x2="58" y2="23" stroke="var(--kh-key)" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="51" y1="15" x2="51" y2="22" stroke="var(--kh-key)" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
