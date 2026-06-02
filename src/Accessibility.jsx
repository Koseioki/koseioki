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
        <title>Accessibility - Kosei&#39;s digital work</title>
      </Helmet>
      <BreadCrumbs />
      <main id="main-content">
        <h1 tabIndex="-1" ref={headingRef}>Accessibility</h1>

        <Note id="accessibilitySummary">


          <h2 id="accessibilitySummary">
            <Icon icon="LightBulb" fontSize="h2" />
            Summary of This Page
          </h2>
          <ul>
            <li>I built and manage this website with accessibility in mind.</li>
            <li>This website is compliant with various regulations, like the <a href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng">Web Accessibility Directive</a> or the <a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines</a>.
            </li>
            <li>Some documents in <NavLink to='/ux-design-cases'>
          UX Design Cases</NavLink> might not work well with text-to-speech functions since they’re images now, and I’m trying to fix them.
</li>
            <li>This website has links to other websites, that might not be accessible.
            </li>
            <li>If you find any accessibility problems on this website, please contact me through <a href="mailto:koseioki1225@gmail.com">koseioki1225@gmail.com</a> or <a  href="tel:+4591964325">+45 9196 4325</a>.
            </li>
          </ul>

        </Note>

        <h2 >Accessibility Statement</h2>
        <p>I am committed to making digital products accessible in accordance with <a  href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng">Directive (EU) 2016/2102</a>, since I believe that no one should be excluded depending on their abilities.</p>
        <p>This accessibility statement applies to all pages under the domain <a  href="https://koseioki.github.io/koseioki/">koseioki.github.io/koseioki/.</a></p>

        <h2 >Compliance Status</h2>
        <p>While this website is compliant with the <a  href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</a>,
          I built and manage this website with universal design in mind from the beginning, more than just for compliance.</p>

        <h2 >Non-Accessible Content</h2>
        <h3 >On this website</h3>
        <p>Some documents on this website are directly taken from my earlier work materials and presented as images.
        </p>
        <p>Although I have done my best to describe them using alternative text, they may not be fully compatible with text-to-speech functions, and some information might be lost as a result.
        </p>
        <p>You can find these documents <NavLink to='/ux-design-cases' >
          UX Design Cases</NavLink>.
        </p>
        <p>As of June 2026, I am working on converting them into a combination of text and images.  
        </p>

        <h3 >On linked websites</h3>



        <p>There may be some non-accessible content on pages linked from this website, including:</p>
        <ul>
          <li><a  href="https://credly.com">credly.com</a></li>
          <li><a  href="https://github.com">github.com</a></li>
          <li><a  href="https://djurslandsbank.dk">djurslandsbank.dk</a></li>
          <li><a  href="https://sjfbank.dk">sjfbank.dk</a></li>
          <li><a  href="https://drive.google.com">drive.google.com</a></li>
          <li><a  href="https://soundcloud.com">soundcloud.com</a></li>
          <li><a  href="https://linkedin.com">linkedin.com</a></li>
          <li><a  href="https://instagram.com">instagram.com</a></li>
        </ul>

        <h2 >Preparation of this Accessibility Statement</h2>
        <p>This statement was prepared on the 29th of August, 2025, and last reviewed on the 3rd of December, 2025.</p>
        <h2 >Feedback and Contact Information</h2>
        <p>Please contact me directly if you encounter any accessibility barriers:</p>
        <ul>
          <li>Email: <a  href="mailto:koseioki1225@gmail.com">koseioki1225@gmail.com</a></li>
          <li>Phone: <a  href="tel:+4591964325">+45 9196 4325</a></li>
        </ul>
        <p>I try to respond to feedback as quickly as possible.</p>
      </main>
    </>
  )
}

export default Accessibility