import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json";
import "../styles/_portfolioSection.scss";

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [positions, setPositions] = useState([]);

  console.log("width:",window.innerWidth )
  console.log("height:",window.innerHeight )

  const calculatePositions = () => {
    return projectsData.map(() => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * 1100,
    }));
  };

  useEffect(() => {
    setProjects(projectsData);
    setPositions(calculatePositions());

    const handleResize = () => {
      setPositions(calculatePositions());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="portfolio-section">
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            position: "absolute",
            top: `${positions[index]?.top}px`,
            left: `${positions[index]?.left}px`,
          }}
        >
          <ProjectCard project={project} size={project.size} />

        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;
