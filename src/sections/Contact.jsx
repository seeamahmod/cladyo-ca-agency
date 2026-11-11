import { useState } from "react";
import {
  PhoneOutline24,
  EnvelopeOutline24,
  OfficeOutline24,
  ClockOutline24,
  CalendarOutline24,
} from "../components/icons";
import { SectionHeading } from "../components/ui";

const INFO = [
  { Icon: PhoneOutline24, title: "Call Us", lines: ["(415) 555-0100"], href: "tel:+14155550100" },
  { Icon: EnvelopeOutline24, title: "Send Email", lines: ["support@cladyo.com"], href: "mailto:support@cladyo.com" },
  { Icon: OfficeOutline24, title: "HQ", lines: ["San Francisco, CA", "Serving the Bay Area and beyond"] },
  { Icon: ClockOutline24, title: "Hours", lines: ["Monday-Friday, 9AM-5PM PST"] },
];

function Field({ label, name, type = "text", placeholder, required, hint, textarea }) {
  return (
    <label className="field">
      <span className="field__label">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea className="field__input field__input--area" name={name} placeholder={placeholder} required={required} />
      ) : (
        <input className="field__input" type={type} name={name} placeholder={placeholder} required={required} />
      )}
      {hint && <span className="field__hint">{hint}</span>}
    </label>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="stack-48 stack--center">
        <SectionHeading
          align="center"
          className="w-572 lead-506 heading-wide"
          eyebrow="Contact us"
          title="How to Get Started"
          lead="With Cladyo's expert guidance, InnovaTech streamlined its accounting processes, resulting in a 25% reduction in administrative costs."
        />

        <div className="contact-panel">
          <div className="contact-info">
            {INFO.map(({ Icon, title, lines, href }) => (
              <div key={title} className="info-card">
                <span className="icon-bubble icon-bubble--56">
                  <Icon width={27} height={27} strokeWidth={1.5} corners="round" aria-hidden="true" />
                </span>
                <div className="info-card__body">
                  <p className="card-title-24">{title}</p>
                  {lines.map((l) =>
                    href ? (
                      <a key={l} href={href} className="info-card__line">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="info-card__line">
                        {l}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="consult" onSubmit={onSubmit}>
            <h3 className="consult__title">
              <CalendarOutline24 width={30} height={30} strokeWidth={1.5} corners="round" aria-hidden="true" />
              Get Your Free Consultation
            </h3>
            <div className="consult__fields">
              <div className="field-row">
                <Field label="First Name" name="firstName" placeholder="Enter your first name" required />
                <Field label="Last Name" name="lastName" placeholder="Enter your last name" required />
              </div>
              <div className="field-row">
                <Field label="Email" name="email" type="email" placeholder="Enter a valid email" required />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  hint="We'll reach out to schedule a call"
                />
              </div>
              <Field label="How can we help?" name="message" placeholder="Tell us about your business needs..." required textarea />
              <button type="submit" className="btn btn--primary btn--block btn--square">
                Schedule a call
              </button>
              {sent && (
                <p className="consult__ok" role="status">
                  Thanks! We'll be in touch within one business day.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
