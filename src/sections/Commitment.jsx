import photo from "../assets/img/commitment.png";
import {
  BadgeCheckOutline24,
  AwardMedalOutline24,
  StarOutline24,
  FaceSmileOutline24,
} from "../components/icons";
import { SectionHeading } from "../components/ui";

const POINTS = [
  {
    Icon: BadgeCheckOutline24,
    title: "Certified Public Accountants",
    text: "Expertise you can trust from certified professionals committed to accuracy and compliance.",
  },
  {
    Icon: AwardMedalOutline24,
    title: "Award-Winning Service",
    text: "Recognized for excellence in client satisfaction and service delivery.",
  },
  {
    Icon: StarOutline24,
    title: "Leaders in Innovation",
    text: "Pioneering new approaches to accounting and financial management for enhanced efficiency and results.",
  },
  {
    Icon: FaceSmileOutline24,
    title: "Global Reach, Local Expertise",
    text: "Serving clients worldwide with personalized solutions tailored to their unique needs.",
  },
];

export default function Commitment() {
  return (
    <section className="section commitment">
      <div className="commitment__left">
        <SectionHeading
          className="w-572 lead-506"
          eyebrow="Our Commitment"
          title="Driven by Excellence, Dedicated to Your Success"
          lead="At Cladyo, we are dedicated to providing innovative solutions and unparalleled support to help our clients thrive in today's dynamic business environment."
        />
        <div className="commitment__media">
          <img src={photo} alt="Cladyo analyst presenting financial charts to a boardroom" loading="lazy" />
        </div>
      </div>

      <ul className="commitment__list">
        {POINTS.map(({ Icon, title, text }) => (
          <li key={title} className="commit-card">
            <span className="commit-card__icon">
              <Icon width={46} height={46} strokeWidth={1.5} corners="round" aria-hidden="true" />
            </span>
            <div className="commit-card__body">
              <h3 className="commit-card__title">{title}</h3>
              <p className="commit-card__text">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
