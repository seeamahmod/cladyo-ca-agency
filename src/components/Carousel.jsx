import { useRef } from "react";

/**
 * Horizontal track that bleeds past the right page gutter (as in the design)
 * and scrolls with touch, trackpad, wheel or mouse drag.
 */
export default function Carousel({ children, className = "", label }) {
  const ref = useRef(null);
  const drag = useRef(null);

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    drag.current = { x: e.clientX, left: ref.current.scrollLeft, moved: false };
    ref.current.classList.add("is-dragging");
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    ref.current.scrollLeft = drag.current.left - dx;
  };
  const end = () => {
    if (!drag.current) return;
    ref.current.classList.remove("is-dragging");
    drag.current = null;
  };
  const onClickCapture = (e) => {
    if (drag.current?.moved) e.preventDefault();
  };

  return (
    <div
      ref={ref}
      className={`carousel ${className}`}
      role="region"
      aria-label={label}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerLeave={end}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
