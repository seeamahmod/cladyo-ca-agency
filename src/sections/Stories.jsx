import s1 from "../assets/img/story-1.png";
import s2 from "../assets/img/story-2.png";
import { SectionHeading, TextLink } from "../components/ui";

const STORIES = [
  {
    img: s1,
    pos: "64% center",
    alt: "InnovaTech finance team reviewing processes",
    text: "Reduced administrative costs by 25% through accounting process optimization.",
  },
  {
    img: s2,
    pos: "center",
    alt: "GlobalCom leadership in a tax planning meeting",
    text: "Thanks to Cladyo's strategic tax planning solutions, GlobalCom reduced its tax liabilities by 15%.",
  },
];

export default function Stories() {
  return (
    <section className="section section--alt" id="stories">
      <div className="stack-48 stack--center">
        <SectionHeading
          align="center"
          className="w-572 lead-506 heading-wide"
          eyebrow="Client Stories"
          title="Inspiring Success Stories from Our Valued Clients"
          lead="With Cladyo's expert guidance, InnovaTech streamlined its accounting processes, resulting in a 25% reduction in administrative costs."
        />
        <div className="stories-grid">
          {STORIES.map((s) => (
            <article key={s.text} className="story-card">
              <div className="story-card__media">
                <img src={s.img} alt={s.alt} style={{ objectPosition: s.pos }} loading="lazy" />
              </div>
              <div className="story-card__body">
                <p className="story-card__text">{s.text}</p>
                <TextLink href="#contact">Read Case Study</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
