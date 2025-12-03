import { Helmet } from 'react-helmet-async';
import BreadCrumbs from "./components/BreadCrumbs";
import { useRef, useEffect } from "react";
import Note from "./components/Note";
import Icon from './components/Icon.jsx';
import { NavLink } from 'react-router-dom';


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

        <Note id="accessibilitySummary">


          <h2 className="headings" id="accessibilitySummary">
            <Icon icon="LightBulb" fontSize="h2" />
            Summary of This Page
          </h2>
          <ul className="bulleted-list">
            <li>I built and manage this website with accessibility in mind.</li>
            <li>This website is compliant with various regulations, like the <a className="plain-link" href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng">Web Accessibility Directive</a> or the <a className="plain-link" href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines</a>.
            </li>
            <li>Some documents in <NavLink to='/accessible-web-components' className="plain-link">
          Accessible Web Components</NavLink> and <NavLink to='/ux-design-cases' className="plain-link">
          UX Design Cases</NavLink> might not work well with text-to-speech functions since they’re images now, and I’m trying to fix them.
</li>
            <li>This website has links to other websites, that might not be accessible.
            </li>
            <li>If you find any accessibility problems on this website, please contact me through <a className="plain-link" href="mailto:koseioki1225@gmail.com">koseioki1225@gmail.com</a> or <a className="plain-link" href="tel:+4591964325">+45 9196 4325</a>.
            </li>
          </ul>

        </Note>

        <h2 className="headings">Accessibility Statement</h2>
        <p className="paragraph">I am committed to making digital products accessible in accordance with <a className="plain-link" href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng">Directive (EU) 2016/2102</a>, since I believe that no one should be excluded depending on their abilities.</p>
        <p className="paragraph">This accessibility statement applies to all pages under the domain <a className="plain-link" href="https://koseioki.github.io/koseioki/">koseioki.github.io/koseioki/.</a></p>

        <h2 className="headings">Compliance Status</h2>
        <p className="paragraph">While this website is compliant with the <a className="plain-link" href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</a>,
          I built and manage this website with universal design in mind from the beginning, more than just for compliance.</p>

        <h2 className="headings">Non-Accessible Content</h2>
        <h3 className="headings">On this website</h3>
        <p className="paragraph">Some documents on this website are directly taken from my earlier work materials and presented as images.
        </p>
        <p className="paragraph">Although I have done my best to describe them using alternative text, they may not be fully compatible with text-to-speech functions, and some information might be lost as a result.
        </p>
        <p className="paragraph">You can find these documents in <NavLink to='/accessible-web-components' className="plain-link">
          Accessible Web Components</NavLink> and <NavLink to='/ux-design-cases' className="plain-link">
          UX Design Cases</NavLink>.
        </p>
        <p className="paragraph">As of December 2025, I am working on converting them into a combination of text and images.  
        </p>

        <h3 className="headings">On linked websites</h3>



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
        <p className="paragraph">This statement was prepared on the 29th of August, 2025, and last reviewed on the 3rd of December, 2025.</p>
        <h2 className="headings">Feedback and Contact Information</h2>
        <p className="paragraph">Please contact me directly if you encounter any accessibility barriers:</p>
        <ul>
          <li>Email: <a className="plain-link" href="mailto:koseioki1225@gmail.com">koseioki1225@gmail.com</a></li>
          <li>Phone: <a className="plain-link" href="tel:+4591964325">+45 9196 4325</a></li>
        </ul>
        <p className="paragraph">I try to respond to feedback as quickly as possible.</p>
      </main>
    </>
  )
}

export default Accessibility