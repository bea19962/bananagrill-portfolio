# Codebeispiel mit React, Vite, Scss, Gsap 
## Intro

**Hallo,** 
In diesem Beispiel zeige ich **App.jsx** und **TeamSection.jsx**. Die Snippets stammen aus dem Redesign der Webseite für Neptun Interactive, ein Indie-Studio.

Für das Projekt habe ich **React mit Vite** ausgewählt, da React eine große Auswahl an Animationsbibliotheken bietet. **Vite** wurde gewählt, weil es Projekte effizienter bündelt als Webpack. Die Styles wurden mit **SCSS** umgesetzt, um Klassen sauber zu kapseln und die Stylesheets wartbar zu halten.
Für Animationen wird **GSAP** (z. B. `ScrollTrigger`) für scrollbasierte Effekte und **Framer Motion** benutzt. Die Team-Daten (z. B. `name`, `role`, `socials`, `image`) werden aus einer JSON-Datei geladen, wodurch Redundanzen im Code vermieden und Änderungen schnell vorgenommen werden können.



## App.jsx - App Component
Dieses Snippet zeigt die Verwendung von React-Hooks (`useState`, `useRef`, `useEffect`), um den Zustand aktiver `sections` zu verwalten und ein smooth scrolling zwischen ihnen zu ermöglichen. Es verwendet außerdem die `IntersectionObserver`-API, um zu erkennen, welche Section im Viewport angezeigt ist, und sorgt so für eine nahtlose und interaktive Benutzererfahrung.

```javascript
import { useEffect, useRef, useState } from "react";
import "../src/styles/main.scss";
import Navbar from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutTeam from "./components/TeamSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
 //initizializierung und auflistung der Sections die angezeigt werden und festlegung von der erste section 
 als actuelle section initialliziren
  const sections = ["home", "projects", "team", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);
  
  // Jede Section aus dem Array wird in eine Ref umgewandelt und mit null initialisiert
  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

// Initialisierung und Erstellung des IntersectionObservers 
// root: null überwacht den gesamten Viewport, threshold: 0.25 triggert, wenn 25% des Elements sichtbar sind 
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#a_simple_example
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

// IntersectionObserver-Callback, das aufgerufen wird, wenn eine Section im Viewport sichtbar wird
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);//aktuelle Section
        }
      });
    }, observerOptions);

// Beobachtet alle Sections, um zu überprüfen, welche im Viewport sichtbar sind
    sections.forEach((section) => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current);
      }
    });

// Cleanup: Entfernt den Observer, wenn die Komponente unmontiert wird
    return () => {
      sections.forEach((section) => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, [sectionRefs, sections]);

  // Scrolls smoothly zur ausgewaelther section
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onLinkClick={scrollToSection} />
      <section id="home" ref={sectionRefs.home}>
        <LandingPage />
      </section>
      <section id="projects" ref={sectionRefs.projects}>
        <ProjectShowcase />
      </section>
      <section id="team" ref={sectionRefs.team}>
        <AboutTeam />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
```


## TeamSection Component
In diesem Snippet werden die Team-Mitglied-Daten aus der `team.json` importiert und durch Data Binding in die `TeamMemberCard`-Komponente eingefügt. Für die animierte Darstellung der Team-Mitglied-Karten von links nach rechts wurde **GSAP** verwendet. Die Animation sorgt dafür, dass die Karten beim Scrollen in den Viewport kommen, wobei sie von einer Startposition links außerhalb des Bildschirms in ihre endgültige Position übergehen.

```javascript
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "../team.json";
import "../styles/_teamsection.scss";

const TeamSection = () => {
  useEffect(() => {
  //https://gsap.com/docs/v3/Plugins/ScrollTrigger/
  //initializierung des ScrollTriggers und einstellung der animations properties
  // Der erste object definiert den start der animation und der zweite object die engultige position plus de animation effecte
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".team-member-card",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 50%",
          end: "top 0%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="team-section">
      <h2>The Team</h2>
      <p>
        After 6 years of successful collaboration in our studies, we founded
        our studio in January 2023. Aside from producing our own products, we
        also offer fast and effective supervision or practical solutions for
        media-creation projects.
      </p>
      <div className="team-member-cards">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={member.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;



```