import impact from "../assets/img/impact.png";
import { Button, SectionHeading } from "../components/ui";

export default function Impact() {
  return (
    <section className="section split split--impact" id="impact">
      <div className="split__text impact__text">
        <div className="stack-24">
          <SectionHeading eyebrow="our impact" title="Stories of Transformation" className="impact__heading" />
          <div className="paras">
            <p>
              Discover how Cladyo has empowered businesses across industries to achieve their
              financial goals. Our case studies showcase real-world examples of how our expertise and
              tailored solutions have driven tangible results for our clients. From startups to
              established enterprises, we're committed to helping organizations thrive in today's
              competitive landscape.
            </p>
            <p>
              Explore our success stories and learn how we've partnered with businesses to overcome
              challenges, seize opportunities, and unlock their full potential. These narratives
              highlight our dedication to client success and our ability to deliver innovative
              solutions that make a meaningful impact. Join us as we celebrate the achievements of
              our clients and inspire others to reach new heights.
            </p>
          </div>
        </div>
        <Button href="#stories">explore case studies</Button>
      </div>

      <div className="split__media rounded-18 impact__media">
        <img src={impact} alt="Cladyo consultant reviewing results on a laptop with clients" />
      </div>
    </section>
  );
}
