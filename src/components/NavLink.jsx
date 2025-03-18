import "../styles/_navlink.scss";
import FlipLink from "./FlipLink";

function NavLink({ section, label, activeSection, onLinkClick }) {
  return (
    <button
      className={`navlink-button ${activeSection === section ? "active" : ""}`}
      onClick={() => onLinkClick(section)}
    >
      <FlipLink className="flip-link">{label}</FlipLink>
    </button>
  );
}

export default NavLink;