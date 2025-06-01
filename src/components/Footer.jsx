import './Footer.css';
function Footer() {
  return (
    <>
      <div className="back-to-top-container">
        <a
          href="#main-content"
          className="plain-link"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('main-content');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span aria-hidden="true">↑ </span>Back to Top
        </a>
      </div>

      <footer>
        {/* <hr aria-hidden="true"/> */}
        <h2 className="sr-only">Site footer</h2>
        <p>© Kosei Oki 2025 - All rights reserved</p>
      </footer>
    </>
  );
}
export default Footer;