import logo from "../assets/img/footer-logo.svg";
import watermark from "../assets/img/footer-watermark.svg";
import { PhoneOutline24, EnvelopeOutline24 } from "../components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="newsletter">
          <div className="newsletter__intro">
            <p className="newsletter__title">Join the Cladyo Community</p>
            <p className="newsletter__text">
              Subscribe to our newsletter for the latest insights, news, and expert advice on achieving
              financial success.
            </p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <label className="newsletter__label" htmlFor="nl-email">
              Stay Updated
            </label>
            <div className="newsletter__row">
              <input id="nl-email" type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </div>
            <p className="newsletter__legal">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>

        <div className="footer__body">
          <div className="footer__top">
            <a href="#top" className="footer__brand" aria-label="Cladyo home">
              <img src={logo} width={49} height={49} alt="" />
              <span>Cladyo</span>
            </a>
            <div className="footer__cols">
              <div className="footer__col">
                <p className="footer__heading">Company</p>
                <ul>
                  <li><a href="#faq">FAQs</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
              </div>
              <div className="footer__col">
                <p className="footer__heading">Reach Us</p>
                <ul>
                  <li>
                    <a href="tel:+15551234567" className="footer__contact">
                      <PhoneOutline24 width={18} height={18} strokeWidth={1.5} corners="round" aria-hidden="true" />
                      (555) 123-4567
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@cladyo.com" className="footer__contact">
                      <EnvelopeOutline24 width={18} height={18} strokeWidth={1.5} corners="round" aria-hidden="true" />
                      info@cladyo.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="footer__rule" />
          <div className="footer__bottom">
            <p>© 2025 Cladyo. All rights reserved.</p>
            <p>Your Partner in Financial Success</p>
          </div>
        </div>
      </div>

      <div className="footer__watermark" aria-hidden="true">
        <img src={watermark} alt="" />
        <span>Cladyo</span>
      </div>
    </footer>
  );
}
