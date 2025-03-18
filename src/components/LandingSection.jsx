import "../styles/_landingSection.scss";
import SplineComponent from "./SplineComponent";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="spline-wrapper">
        <SplineComponent />
      </div>
      <div className="content">
        <h1 className="headline">
          <TypewriterText text="> ../ Hello There" delay={200} />
        </h1>
        <h2 className="subheadline">
          <TypewriterText
            text={`> i am 3d artist and full-stack developer based in Germany.`}
            delay={200}
          />
          <TypewriterText
            text={`i love to experiment with art, tech and brain rot.`}
            delay={600}
          />
        </h2>
      </div>
      <motion.button
        className="cta-button"
        onClick={() => scrollToSection("projects")}
        initial={{ opacity: 0, y: 50 }} // Start hidden and below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{
          duration: 0.6, // Animation duration
          ease: "easeOut", // Smooth transition
          delay: 1.5, // Delay in seconds
        }}
      >
        Explore My Work
      </motion.button>
    </section>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default LandingSection;
