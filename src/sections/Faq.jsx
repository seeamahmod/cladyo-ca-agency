import { useState } from "react";
import { CircleQuestionOutline24, PlusOutline24, MinusOutline24 } from "../components/icons";
import { Eyebrow } from "../components/ui";

const FAQS = [
  {
    q: "What accounting software do you support?",
    a: "We support a wide range of accounting software, including QuickBooks, Xero, Sage, and NetSuite. Our team can also work with other platforms to meet your specific needs.",
  },
  {
    q: "How do I get started with Cladyo's services?",
    a: "Book a free consultation using the form below. We'll learn about your business, recommend the right services, and send a clear proposal with next steps.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work with startups, professional services, retail, manufacturing, real estate, and non-profits — tailoring our approach to the regulations and reporting needs of each sector.",
  },
  {
    q: "How do you ensure the confidentiality of my financial data?",
    a: "All data is stored in encrypted, access-controlled systems. Our team follows strict professional confidentiality standards and only authorized staff work on your account.",
  },
  {
    q: "Do you offer customized accounting solutions for my business?",
    a: "Yes. Every engagement is scoped to your goals, size, and industry, so you only pay for the services that matter to your business.",
  },
  {
    q: "What is the typical turnaround time for financial reports?",
    a: "Monthly reports are typically delivered within 5–7 business days of period close. Urgent requests can be prioritized on request.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="faq__aside">
        <div className="faq__intro">
          <Eyebrow>FAQ</Eyebrow>
          <div className="faq__intro-text">
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="faq__lead">
              Find answers to common questions about our charging network, pricing, and services.
            </p>
          </div>
        </div>

        <div className="support-card">
          <CircleQuestionOutline24
            className="support-card__icon"
            width={56}
            height={56}
            strokeWidth={1.25}
            corners="round"
            aria-hidden="true"
          />
          <div className="support-card__text">
            <p className="support-card__title">Still have a questions?</p>
            <p className="support-card__body">Our friendly support team is here to help you 24/7.</p>
          </div>
          <a href="#contact" className="btn btn--primary btn--block btn--xs">
            Contact Support
          </a>
        </div>
      </div>

      <div className="faq__list">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={`faq-item ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                className="faq-item__q"
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <MinusOutline24 width={24} height={24} strokeWidth={1.5} corners="round" aria-hidden="true" />
                ) : (
                  <PlusOutline24 width={24} height={24} strokeWidth={1.5} corners="round" aria-hidden="true" />
                )}
              </button>
              <div className="faq-item__a" id={`faq-a-${i}`} role="region">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
