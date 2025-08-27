import './Header.css';
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();


  const handleClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/' && location.hash === hash) {
      // Manually scroll/focus
      const el = document.querySelector(hash);
      if (el) {
        el.focus();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${hash}`);
    }
  };


  return (



    <>
      <div className="skip-to-content">
        <a 
          href="#" 
          onClick={e => {
            e.preventDefault();
            const h1 = document.querySelector('h1');
            if (h1) {
              h1.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
              setTimeout(() => {
                h1.setAttribute('tabindex', '-1');
                h1.focus();
              }, 300);
            }
          }}
        >
          Skip to content
        </a>
      </div>

      <header>
        <div className="header-content">
          <div className="site-title">
            <NavLink to="/">Kosei Oki</NavLink>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              <li className="nav-item">
                <NavLink to="/#works" onClick={(e) => handleClick(e, '#works')}>Works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</NavLink>
              </li>

            </ul>



          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;