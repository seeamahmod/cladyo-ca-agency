import t1 from "../assets/img/team-1.png";
import t2 from "../assets/img/team-2.png";
import t3 from "../assets/img/team-3.png";
import t4 from "../assets/img/team-4.jpg";
import t5 from "../assets/img/team-5.png";
import quote from "../assets/img/quote.svg";
import { SectionHeading } from "../components/ui";
import Carousel from "../components/Carousel";

const QUOTE =
  "“A parent who regained shared custody through targeted negotiation. The team understood exactly what mattered most and fought for it strategically.”";

// imgStyle reproduces the crop each photo has in the Figma frame.
const TEAM = [
  { name: "Jerry Helfer", role: "Chief Innovation Officer", img: t1 },
  { name: "Kimberly Mastrangelo", role: "Principal Systems Engineer", img: t2 },
  {
    name: "Autumn Phillips",
    role: "Director of Client Success",
    img: t3,
    imgStyle: { left: 0, top: "-0.02%", width: "100%", height: "106.78%", objectFit: "fill" },
  },
  { name: "Lorri Warf", role: "VP, Software Engineering", img: t4 },
  {
    name: "Stephanie Sharkey",
    role: "Local Seller",
    img: t5,
    imgStyle: { left: "-12.4%", top: "-3.34%", width: "124.79%", height: "141.65%", objectFit: "fill" },
  },
];

function TeamCard({ member }) {
  return (
    <article className="team-card" tabIndex={0}>
      <div className="team-card__inner">
        <div className="team-card__front">
          <img src={member.img} alt={member.name} style={member.imgStyle} loading="lazy" />
          <div className="team-card__shade" aria-hidden="true" />
          <div className="team-card__id">
            <p className="team-card__name">{member.name}</p>
            <p className="team-card__role">{member.role}</p>
          </div>
        </div>
        <div className="team-card__back" aria-hidden="true">
          <img className="team-card__quote-mark" src={quote} width={72} height={51} alt="" />
          <div className="team-card__back-body">
            <p className="team-card__quote">{QUOTE}</p>
            <div className="team-card__back-id">
              <p className="team-card__name">Stephanie Sharkey</p>
              <p className="team-card__role">Local Seller</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="section section--alt section--clip" id="team">
      <div className="stack-48 stack--center">
        <SectionHeading
          align="center"
          className="w-572 lead-506"
          eyebrow="Our Team"
          title="Meet the Experts Driving Your Financial Success"
          lead="Our team of seasoned professionals brings a wealth of knowledge and experience to every client engagement."
        />
        <Carousel className="team-track" label="Team members">
          {TEAM.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
