import {
  NotebookOutline24,
  FileCheckOutline24,
  PresentationOutline24,
  GreekTempleOutline24,
} from "../components/icons";
import { SectionHeading } from "../components/ui";

const AREAS = [
  {
    Icon: NotebookOutline24,
    title: "Tax Planning",
    text: "Minimize your tax liabilities and maximize your savings with our strategic tax planning services.",
  },
  {
    Icon: FileCheckOutline24,
    title: "Audit & Assurance",
    text: "Ensure accuracy and compliance with our comprehensive audit and assurance services.",
  },
  {
    Icon: PresentationOutline24,
    title: "Financial Consulting",
    text: "Gain insights and clarity with our expert financial consulting and advisory services.",
  },
  {
    Icon: GreekTempleOutline24,
    title: "Business Advisory",
    text: "Navigate challenges with our tailored business advisory and support solutions.",
  },
];

export default function Areas() {
  return (
    <section className="section section--alt" id="areas">
      <div className="stack-48 stack--center">
        <SectionHeading
          align="center"
          className="w-734 areas-heading"
          eyebrow="Our Services"
          title="Areas We Serve"
          lead="Whether you're seeking assistance with tax planning, audit preparation, or financial forecasting, we're here to provide the guidance and support you need. Our comprehensive suite of services is designed to address your unique business challenges and help you achieve your goals with clarity and confidence."
        />
        <div className="areas-grid">
          {AREAS.map(({ Icon, title, text }) => (
            <article key={title} className="area-card">
              <span className="icon-bubble icon-bubble--52">
                <Icon width={22} height={22} strokeWidth={1.5} corners="round" aria-hidden="true" />
              </span>
              <div className="area-card__body">
                <h3 className="card-title-20">{title}</h3>
                <p className="body-16">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
