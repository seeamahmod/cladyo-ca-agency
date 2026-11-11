export function BadgeCheckOutline24({
  strokeWidth = 2,
  corners = "square",
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path d="m22,12c0-1.476-.931-2.725-2.233-3.217.572-1.269.348-2.811-.695-3.854s-2.585-1.269-3.854-.695c-.492-1.304-1.742-2.233-3.217-2.233s-2.725.931-3.217,2.233c-1.269-.574-2.811-.348-3.854.695-1.043,1.043-1.268,2.585-.695,3.854-1.304.492-2.233,1.742-2.233,3.217s.931,2.725,2.233,3.217c-.572,1.269-.348,2.811.695,3.854,1.043,1.043,2.585,1.269,3.854.695.492,1.304,1.742,2.233,3.217,2.233s2.725-.931,3.217-2.233c1.269.572,2.811.348,3.854-.695s1.269-2.585.695-3.854c1.304-.492,2.233-1.742,2.233-3.217Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></path><polyline points="8 12.5 10.5 15 16 9" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth={strokeWidth} data-color="color-2" strokeLinejoin={corners === "round" ? "round" : "miter"} strokeLinecap={corners === "round" ? "round" : "square"}></polyline></svg>
  );
}
