export function StarOutline24({
  strokeWidth = 2,
  corners = "square",
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><polygon points="12 3 14.234 10 21 10 15.615 14.125 17.849 21 12 16.751 6.151 21 8.385 14.125 3 10 9.766 10 12 3" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></polygon></svg>
  );
}
