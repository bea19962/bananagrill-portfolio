import "../styles/_popover.scss";

const Popover = ({ project, onMouseEnter, onMouseLeave }) => {
  const { title, description, link, linkLabel } = project;

  return (
    <div
      className="popover"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="popover-content">
        <p>{title}</p>
        <p>{description}</p>

        <div className="popover-details">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popover;
