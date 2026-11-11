import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Animates a stat like "25+", "90K+", "98%" from 0 up to its value.
 * Replays every time the element scrolls into view.
 * The final value is rendered invisibly underneath so the width never jumps.
 */
export default function CountUp({ value, duration = 1200 }) {
  const match = String(value).match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";
  const valid = Boolean(match);

  const ref = useRef(null);
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !valid) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(easeOutCubic(t) * target));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
        else {
          // reset while off-screen so it counts up again next time
          cancelAnimationFrame(frame);
          setCurrent(0);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, valid]);

  return (
    <span ref={ref} className="count-up" aria-label={value}>
      <span className="count-up__sizer" aria-hidden="true">
        {value}
      </span>
      <span className="count-up__value" aria-hidden="true">
        {prefix}
        {current}
        {suffix}
      </span>
    </span>
  );
}
