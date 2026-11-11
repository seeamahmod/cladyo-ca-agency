import { PresentationOutline24, TagOutline24, SuitcaseOutline24 } from "../components/icons";
import { SectionHeading, TextLink } from "../components/ui";

const SERVICES = [
  {
    Icon: PresentationOutline24,
    title: "Tax Compliance",
    text: "Whether you're filing individual income taxes, corporate taxes, or payroll taxes, we're here to provide the guidance and support you need to ensure accuracy and compliance.",
  },
  {
    Icon: TagOutline24,
    title: "Financial Planning",
    text: "We'll work closely with you to assess your current financial situation, identify opportunities for growth, and develop a customized plan to help you achieve your long-term goals. With our ongoing support and guidance, you can navigate the complexities of financial planning with confidence.",
  },
  {
    Icon: SuitcaseOutline24,
    title: "Business Valuations",
    text: "Whether you're buying, selling, or restructuring a business, we'll provide you with an accurate and reliable valuation to help you make informed decisions and drive meaningful results.",
  },
];

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="stack-48 stack--center">
        <SectionHeading
          align="center"
          className="w-734"
          eyebrow="our services"
          title="Achieve Financial Success with Cladyo's Expert Solutions"
          lead="We offer a comprehensive suite of accounting solutions designed to help you achieve your goals with confidence. With Cladyo, you can expect expert guidance, proactive support, and a steadfast commitment to your success."
        />
        <div className="services-grid">
          {SERVICES.map(({ Icon, title, text }) => (
            <article key={title} className="service-card">
              <div className="service-card__top">
                <span className="icon-bubble icon-bubble--72">
                  <Icon width={34} height={34} strokeWidth={1.5} corners="round" aria-hidden="true" />
                </span>
                <div className="service-card__body">
                  <h3 className="card-title-24">{title}</h3>
                  <p className="body-16">{text}</p>
                </div>
              </div>
              <TextLink href="#contact">learn more</TextLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
