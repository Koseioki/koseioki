import './Header.css';
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
    <div className="skip-to-content">
      <a href="#main-content" >Skip to content</a>
      </div>

    <header>
      <div>
        <NavLink to="/" className="site-title">Kosei Oki</NavLink>
      </div>
      <nav aria-label="Main navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/#works">Works</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

    </header>
    </>
  );
}
export default Header;