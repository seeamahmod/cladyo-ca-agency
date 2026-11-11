import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import { ChevronDownOutline24, MenuOutline24, XmarkOutline24 } from "../components/icons";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Development", href: "#impact", dropdown: true },
  { label: "Design", href: "#team" },
  { label: "Contact us", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""} ${open ? "header--open" : ""}`}>
      <div className="header__inner">
        <a href="#top" className="brand" aria-label="Cladyo home">
          <img src={logo} width={34} height={34} alt="" />
          <span>Cladyo</span>
        </a>

        <nav className="header__nav" aria-label="Main">
          <ul className="nav">
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav__link" onClick={() => setOpen(false)}>
                  {item.label}
                  {item.dropdown && (
                    <ChevronDownOutline24
                      width={18}
                      height={18}
                      strokeWidth={1.75}
                      corners="round"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--outline btn--sm" onClick={() => setOpen(false)}>
            Free quote
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XmarkOutline24 strokeWidth={1.75} corners="round" />
          ) : (
            <MenuOutline24 strokeWidth={1.75} corners="round" />
          )}
        </button>
      </div>
    </header>
  );
}
