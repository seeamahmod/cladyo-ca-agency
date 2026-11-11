export function GreekTempleOutline24({
  strokeWidth = 2,
  corners = "square",
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path d="M19.5 9L19.5 18" stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path> <path d="M4.5 9L4.5 18" stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path> <path d="M9.5 9L9.5 18" stroke="currentColor" strokeWidth={strokeWidth} data-color="color-2" fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path> <path d="M14.5 9L14.5 18" stroke="currentColor" strokeWidth={strokeWidth} data-color="color-2" fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path> <path d="M12 1.5L2 6.09091V9H22V6.09091L12 1.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeMiterlimit="10" fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path> <path d="M22 22H2V20C2 18.8954 2.89543 18 4 18H20C21.1046 18 22 18.8954 22 20V22Z" stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path></svg>
  );
}
