import mission from "../assets/img/mission.png";
import { Button, SectionHeading } from "../components/ui";
import CountUp from "../components/CountUp";

const STATS = [
  { value: "25+", label: "Years of Expertise" },
  { value: "90K+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "400+", label: "Audits Completed" },
];

export default function Mission() {
  return (
    <section className="section split split--mission" id="about">
      <div className="split__media rounded-18">
        <img src={mission} alt="Cladyo advisors presenting to a client team in a meeting room" />
      </div>

      <div className="split__text mission__text">
        <div className="stack-40">
          <div className="stack-24">
            <SectionHeading eyebrow="Our Mission" title="Guiding You Towards Financial Success" className="mission__heading" />
            <div className="paras">
              <p>
                At Cladyo, we're more than just a chartered accountancy—we're your dedicated partners
                in navigating the financial landscape. Our specialists are committed to understanding
                your unique challenges and crafting innovative solutions to help you thrive. With a
                blend of expert insights and cutting-edge technology, we empower you to make informed
                decisions and achieve your business goals with confidence.
              </p>
              <p>
                As your trusted financial advisors, we take the time to understand your aspirations
                and tailor our expertise to your specific needs. Our client-centric approach goes
                beyond mere transactions; we strive to build lasting relationships based on trust,
                transparency, and mutual success. With Cladyo, you can expect personalized service,
                proactive communication, and a steadfast commitment to helping you realize your
                financial vision.
              </p>
            </div>
          </div>
          <Button href="#impact">learn more</Button>
        </div>

        <dl className="stats">
          {STATS.map((s, i) => (
            <div key={s.label} className="stats__group">
              {i > 0 && <span className="stats__divider" aria-hidden="true" />}
              <div className="stats__item">
                <dt className="stats__value">
                  <CountUp value={s.value} />
                </dt>
                <dd className="stats__label">{s.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
