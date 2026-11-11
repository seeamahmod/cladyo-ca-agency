import r1 from "../assets/img/review-1.png";
import r2 from "../assets/img/review-2.png";
import r3 from "../assets/img/review-3.png";
import stars from "../assets/img/trustpilot-stars.svg";
import tpLogo from "../assets/img/trustpilot-logo.svg";
import { BadgeCheckGlyph24 } from "../components/icons";
import { SectionHeading } from "../components/ui";
import Carousel from "../components/Carousel";

const REVIEWS = [
  {
    name: "Eddie Lake",
    avatar: r1,
    text: `"Cladyo has been a game-changer for our business. Their expert guidance and proactive support have helped us navigate complex financial challenges with ease. We highly recommend their services!"`,
  },
  {
    name: "Alex Buckmaster",
    avatar: r2,
    text: `"We've been working with Cladyo for several years, and they've consistently exceeded our expectations. Their attention to detail and commitment to client satisfaction are unparalleled. Thank you, Cladyo!"`,
  },
  {
    name: "Joshua Jones",
    avatar: r3,
    text: `"Choosing Cladyo was one of the best decisions we've made for our company. Their team is knowledgeable, responsive, and truly invested in our success. We couldn't be happier with their services!"`,
  },
];

export default function Reviews() {
  return (
    <section className="section section--alt section--clip reviews" id="reviews">
      <SectionHeading
        className="reviews__heading"
        eyebrow="Reviews"
        title="Our Happy clients"
        lead="Our happy clients over the years depending on our service that make their business more efficient and optimized"
      />
      <Carousel className="reviews__track" label="Client reviews">
        {REVIEWS.map((r) => (
          <article key={r.name} className="review-card">
            <div className="trustpilot">
              <span>Excellent</span>
              <img src={stars} width={107} height={20} alt="5 out of 5 stars" />
              <span className="trustpilot__brand">
                <img src={tpLogo} width={14} height={13} alt="" />
                Trustpilot
              </span>
            </div>
            <div className="review-card__body">
              <p className="review-card__text">{r.text}</p>
              <div className="review-card__author">
                <img src={r.avatar} width={46} height={46} alt="" />
                <div>
                  <p className="review-card__name">
                    {r.name}
                    <BadgeCheckGlyph24 className="verified" width={16} height={16} aria-label="Verified" />
                  </p>
                  <p className="review-card__date">3 days ago</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
