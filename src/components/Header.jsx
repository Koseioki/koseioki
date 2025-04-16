import './Header.css';
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
    <div className="skip-to-content"><a href="#main-content" >Skip to content</a></div>

    <header>
      <div>
        <NavLink to="/" className="site-title">Kosei Oki</NavLink>
      </div>
      <nav>
        <ul>
          <li className="nav-item">
            <a href="/#works">Works</a>
          </li>
          <li className="nav-item">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

    </header>
    </>
  );
}
export default Header;