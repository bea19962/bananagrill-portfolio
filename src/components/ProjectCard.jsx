import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/_projectCard.scss";
import Tooltip from "./Tooltip";

const ProjectCard = ({ project, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className={`project-card ${size}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
      >
        {/* Static Image */}
        <motion.img
          src={project.image}
          alt="Project Preview"
          className="project-image"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* GIF */}
        <motion.img
          src={project.gif}
          alt="Project GIF"
          className="project-gif"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div>{isHovered && <Tooltip project={project.info} />}</div>
    </>
  );
};

export default ProjectCard;
