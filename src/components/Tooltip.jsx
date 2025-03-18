import { useState } from "react";
import { usePopper } from "react-popper";
import "../styles/_tooltip.scss";

const Tooltip = ({ project, isVisible }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 8] } },
    ],
  });

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={setPopperElement}
        className="tooltip"
        style={styles.popper}
        {...attributes.popper}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkLabel}
        </a>
        <div ref={setArrowElement} className="arrow" style={styles.arrow} />
      </div>
    </>
  );
};

export default Tooltip;
