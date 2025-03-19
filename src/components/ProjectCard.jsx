import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/_projectCard.scss";
import Popover from "./Popover";

const ProjectCard = ({ project, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowPopover(true);
    //clearTimeout(hoverTimeout.current);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(false);
      setShowPopover(false);
    }, 300);
  };

  return (
    <>
      <motion.div
        className={`project-card ${size}`}
        style={{ zIndex: project["z-index"] }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={project.image}
          alt="Project Preview"
          className="project-image"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.img
          src={project.gif}
          alt="Project GIF"
          className="project-gif"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: "30" }}
        />
      </motion.div>

      {showPopover && project.tooltip !== "false" && (
        <Popover
          project={project.info}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
};

export default ProjectCard;
