import ufocat from '../assets/ufocat.svg';
import laptop from '../assets/laptop.png';
// import skills from '../assets/skills.png'; // Ensure you have an icon for skills

const navItems = [
  { href: '#about', label: 'About', icon: ufocat },
  { href: '#projects', label: 'Projects', icon: laptop },
  // { href: '#skills', label: 'Skills', icon: skills },
];

function Navigation() {
  return (
    <nav className="vertical-nav">
      {navItems.map((item, index) => (
        <a key={index} href={item.href} className="nav-item">
          {item.icon && <img src={item.icon} alt={item.label} />}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
