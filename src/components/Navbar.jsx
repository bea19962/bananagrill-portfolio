import { useState } from "react";
import NavLink from "./NavLink";
import "../styles/_navbar.scss";

const Navbar = ({ activeSection, onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
       <p> \ B a n a n a g r i l l_</p> 
       <p>3D artist, frontend developer</p>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <NavLink
          section="projects"
          label="Projects, "
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
        <NavLink
          section="contact"
          label="Contact, "
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;