import './Footer.css';
import { NavLink } from "react-router-dom";
import ThemeSwitcher from './ThemeSwitcher';
function Footer() {
  return (
    <>
      <div className="back-to-top-container">
        <a
          href="#main-content"
          className="plain-link"
          // onClick={e => {
          //   e.preventDefault();
          //   const h1 = document.querySelector('h1');
          //   if (h1) {
          //     h1.scrollIntoView({
          //       behavior: 'smooth',
          //       block: 'start',
          //       inline: 'nearest'
          //     });
          //     // Set focus after scroll completes
          //     setTimeout(() => {
          //       h1.setAttribute('tabindex', '-1');
          //       h1.focus();
          //     }, 300);
          //   }
          // }}
        >
          <span aria-hidden="true">↑ </span>Back to Top
        </a>
        {/* <ThemeSwitcher /> */}

      </div>

      <footer>
        <div className="footer-content">
          <hr aria-hidden="true" />


          <h2 className="sr-only">Site footer</h2>

          <div className="footer-links-container">

            <ul>
              <NavLink className="plain-link" to="/accessibility">Accessibility</NavLink>
              <NavLink className="plain-link" to="/privacy">Privacy</NavLink>
            </ul>

            <ul>

              <li>
                <a className="plain-link" href="tel:+45 9196 4325">+45 9196 4325</a>
              </li>
              <li>
                <a className="plain-link" href="mailto:koseioki1225@gmail.com">
                  koseioki1225@gmail.com
                </a>
              </li>
              <li>
                <a className="plain-link" href="https://www.linkedin.com/in/kosei-oki-340129234/">LinkedIn</a>
              </li>
              <li>
                <a className="plain-link" href="https://github.com/Koseioki?tab=repositories">GitHub</a>
              </li>
              <li>
                <a className="plain-link" href="https://www.instagram.com/koseioki1225/">Instagram</a>
              </li>

            </ul>
          </div>
          <p>© Kosei Oki 2025 - All rights reserved</p>

        </div>
      </footer>

    </>

  );
}
export default Footer;