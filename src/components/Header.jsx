import './Header.css';
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isManuallySet, setIsManuallySet] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('darkMode');
    const savedIsManual = localStorage.getItem('darkModeManual') === 'true';
    
    if (savedTheme !== null) {
      const isDark = savedTheme === 'true';
      setIsDarkMode(isDark);
      setIsManuallySet(savedIsManual);
      document.body.classList.toggle('dark-mode', isDark);
      return;
    }

    // No saved preference, use system preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateTheme(e) {
      if (!isManuallySet) {
        const isDark = e.matches;
        setIsDarkMode(isDark);
        document.body.classList.toggle('dark-mode', isDark);
      }
    }
    
    // Apply initial theme
    updateTheme(darkModeQuery);
    
    // Listen for changes only if not manually set
    if (!savedIsManual) {
      darkModeQuery.addEventListener('change', updateTheme);
      return () => darkModeQuery.removeEventListener('change', updateTheme);
    }
  }, [isManuallySet]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setIsManuallySet(true);
    document.body.classList.toggle('dark-mode', newMode);
    
    // Save to localStorage
    localStorage.setItem('darkMode', newMode.toString());
    localStorage.setItem('darkModeManual', 'true');
  };

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
            <button onClick={toggleDarkMode}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;