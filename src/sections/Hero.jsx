import heroBg from "../assets/img/hero-bg.jpg";
import a1 from "../assets/img/hero-avatar-1.png";
import a2 from "../assets/img/hero-avatar-2.png";
import a3 from "../assets/img/hero-avatar-3.png";
import a4 from "../assets/img/hero-avatar-4.png";
import { AvatarStack, Button, Eyebrow } from "../components/ui";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <div className="hero__title">
            <Eyebrow light>Unleash Your Brand Potential</Eyebrow>
            <h1 className="h1">Forge Genuine Strategy in the Digital Realm</h1>
          </div>
          <p className="hero__lead">
            We transform digital interactions into genuine relationships, ensuring every connection
            resonates with your audience.
          </p>
        </div>
        <div className="btn-row">
          <Button href="#contact">Start Your Free Trial</Button>
          <Button href="#services" variant="outline">
            View Our Solutions
          </Button>
        </div>
      </div>

      <AvatarStack
        className="hero__proof"
        avatars={[a1, a2, a3, a4]}
        size={40}
        caption="Loved by 90k+ Happy Customers"
      />
    </section>
  );
}
