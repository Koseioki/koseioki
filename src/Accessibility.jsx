import { Helmet } from 'react-helmet-async';
import BreadCrumbs from "./components/BreadCrumbs";
import { useRef, useEffect } from "react";
function Accessibility() {

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);
  return (
    <>

      <Helmet>
        <title>Accessibility - Kosei Oki</title>
      </Helmet>
      <BreadCrumbs />
      <main id="main-content">
        <h1 className="headings" tabIndex="-1" ref={headingRef}>Accessibility</h1>
        <h2 className="headings">Accessibility Statement</h2>
        <p className="paragraph">I am committed to making digital products accessible in accordance with <a className="plain-link" href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng">Directive (EU) 2016/2102</a>, since I believe that no one should be excluded depending on their abilities.</p>
        <p className="paragraph">This accessibility statement applies to all pages under the domain <a className="plain-link" href="https://koseioki.github.io/koseioki/">koseioki.github.io/koseioki/.</a></p>

        <h2 className="headings">Compliance Status</h2>
        <p className="paragraph">This website is fully compliant with the <a className="plain-link" href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.</a></p>
        <p className="paragraph">I built and manage this website with universal design in mind from the beginning, more than just for compliance.</p>

        <h2 className="headings">Non-Accessible Content</h2>
        <p className="paragraph">There may be some non-accessible content on pages linked from this website, including:</p>
        <ul className="link-list">
          <li><a className="plain-link" href="https://credly.com">credly.com</a></li>
          <li><a className="plain-link" href="https://github.com">github.com</a></li>
          <li><a className="plain-link" href="https://djurslandsbank.dk">djurslandsbank.dk</a></li>
          <li><a className="plain-link" href="https://sjfbank.dk">sjfbank.dk</a></li>
          <li><a className="plain-link" href="https://drive.google.com">drive.google.com</a></li>
          <li><a className="plain-link" href="https://soundcloud.com">soundcloud.com</a></li>
          <li><a className="plain-link" href="https://linkedin.com">linkedin.com</a></li>
          <li><a className="plain-link" href="https://instagram.com">instagram.com</a></li>
        </ul>
        <h2 className="headings">Preparation of this Accessibility Statement</h2>
        <p className="paragraph">This statement was prepared and last reviewed on August 29, 2025.</p>
        <h2 className="headings">Feedback and Contact Information</h2>
        <p className="paragraph">Please contact me directly if you encounter any accessibility barriers:</p>
        <ul>
          <li>Email: <a className="plain-link" href="mailto:kosei1225@gmail.com">kosei1225@gmail.com</a></li>
          <li>Phone: <a className="plain-link" href="tel:+4591964325">+45 91 96 43 25</a></li>
        </ul>
        <p className="paragraph">I try to respond to feedback as quickly as possible.</p>
      </main>
    </>
  )
}

export default Accessibility