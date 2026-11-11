import { Sparkle4Glyph18, ArrowUpRightOutline24 } from "./icons";

/** Small label with a four-point star on each side ("✦ Our Services ✦"). */
export function Eyebrow({ children, light = false, align = "start" }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow--light" : ""} eyebrow--${align}`}>
      <Sparkle4Glyph18 className="eyebrow__star" width={16} height={16} aria-hidden="true" />
      <span>{children}</span>
      <Sparkle4Glyph18 className="eyebrow__star" width={16} height={16} aria-hidden="true" />
    </div>
  );
}

/** Eyebrow + H2 + optional lead paragraph, used at the top of most sections. */
export function SectionHeading({ eyebrow, title, lead, align = "start", className = "" }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      <div className="section-heading__top">
        <Eyebrow align={align}>{eyebrow}</Eyebrow>
        <h2 className="h2">{title}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Button({ children, variant = "primary", href = "#contact", className = "", ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function TextLink({ children, href = "#" }) {
  return (
    <a href={href} className="text-link">
      <span>{children}</span>
      <ArrowUpRightOutline24 width={16} height={16} strokeWidth={1.75} corners="round" aria-hidden="true" />
    </a>
  );
}

/** Overlapping circular avatars + caption. */
export function AvatarStack({ avatars, size, caption, className = "" }) {
  return (
    <div className={`avatar-stack ${className}`}>
      <div className="avatar-stack__faces">
        {avatars.map((src, i) => (
          <img key={src} src={src} width={size} height={size} alt="" style={{ zIndex: i }} />
        ))}
      </div>
      <p className="avatar-stack__caption">{caption}</p>
    </div>
  );
}
