import './Footer.css';
function Footer() {
  return (
    <>
      <div className="back-to-top-container">
        <a
          href="#"
          className="plain-link"
          onClick={e => {
            e.preventDefault();
            const h1 = document.querySelector('h1');
            if (h1) {
              h1.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
              // Set focus after scroll completes
              setTimeout(() => {
                h1.setAttribute('tabindex', '-1');
                h1.focus();
              }, 300);
            }
          }}
        >
          <span aria-hidden="true">↑ </span>Back to Top
        </a>
      </div>

      <footer>
        <div className="footer-content">

          <h2 className="sr-only">Site footer</h2>
          <p>© Kosei Oki 2025 - All rights reserved</p>
          <ul className="footer-links">
            <li>
              <a href="https://www.linkedin.com/in/kosei-oki-340129234/">LinkeIn</a>
              </li>
            <li>
              <a href="https://github.com/Koseioki?tab=repositories">GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com/koseioki1225/">Instagram</a>
            </li>
            <li>
              <a href="tel:+45 9196 4325">+45 9196 4325</a>
            </li>
            <li>
              <a href="mailto:koseioki1225@gmail.com">
                koseioki1225@gmail.com
              </a>
            </li>
          </ul>
    </div>
          </footer>

    </>
    
  );
}
export default Footer;