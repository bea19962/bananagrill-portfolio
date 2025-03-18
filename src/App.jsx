import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import PortfolioSection from "./components/PortfolioSection";
import LandingSection from "./components/LandingSection";
import VideoBackground from "./components/VideoBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const sections = ["home", "projects", "contacts"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleSplineLoad = () => {
    setLoading(false); // Set loading to false when Spline is fully loaded
  };

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, [sectionRefs, sections]);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <VideoBackground/>
      <Navbar activeSection={activeSection} onLinkClick={scrollToSection} />
        <section id="home" ref={sectionRefs.home}>
          <LandingSection/>

        </section>
        <section id="projects" ref={sectionRefs.projects}>
          <h2>Projects</h2>
          <PortfolioSection/>
        </section>
        <section id="contact" ref={sectionRefs.contact}>
          <h2>Contact</h2>
        </section>
    </div>
  );
}

export default App;
