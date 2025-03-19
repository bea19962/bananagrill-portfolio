import { useFloating, offset, flip, shift } from "@floating-ui/react-dom";

const Tooltip = ({ targetRef, project }) => {
  const { x, y, reference, floating, strategy } = useFloating({
    reference: targetRef, // Attach to the card
    placement: 'right', // This places the tooltip to the right of the card
    middleware: [offset(100), flip(), shift()],
  });

  return (
    <div
      ref={floating}
      style={{
        position: strategy,
        top: y ?? "",
        left: x ?? "",
        backgroundColor: "pink",
        padding: "10px",
        borderRadius: "8px",
        zIndex: 100,
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.linkLabel}
        </a>
      )}
    </div>
  );
};

export default Tooltip;
