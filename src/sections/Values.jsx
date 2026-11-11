import bg from "../assets/img/values-bg.png";
import a1 from "../assets/img/values-avatar-1.png";
import a2 from "../assets/img/values-avatar-2.png";
import a3 from "../assets/img/values-avatar-3.png";
import a4 from "../assets/img/values-avatar-4.png";
import { AvatarStack, Button, SectionHeading } from "../components/ui";

export default function Values() {
  return (
    <section className="values" id="values">
      <img className="values__bg" src={bg} alt="" aria-hidden="true" />
      <div className="values__card">
        <div className="stack-40">
          <SectionHeading
            eyebrow="Our Values"
            title="Empowering You to Achieve Financial Success"
            lead="At Cladyo, we believe that every organization deserves access to expert accounting solutions and personalized guidance. That's why we've built our firm around the principles of integrity, transparency, and client-centricity."
          />
          <Button href="#about">Our Firm</Button>
        </div>
        <AvatarStack
          className="values__proof"
          avatars={[a1, a2, a3, a4]}
          size={52}
          caption="Trusted by 90,000+ Happy Clients"
        />
      </div>
    </section>
  );
}
