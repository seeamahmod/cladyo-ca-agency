import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Areas from "./sections/Areas";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Values from "./sections/Values";
import Impact from "./sections/Impact";
import Team from "./sections/Team";
import Commitment from "./sections/Commitment";
import Reviews from "./sections/Reviews";
import Faq from "./sections/Faq";
import Stories from "./sections/Stories";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <Mission />
        <Services />
        <Values />
        <Impact />
        <Team />
        <Commitment />
        <Reviews />
        <Faq />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
