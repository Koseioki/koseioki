import Icon from './Icon.jsx';
import Kosei from '../assets/kosei.webp';
import './Profile.css';
// import { useEffect, useRef } from 'react';

function Profile() {

  // const headingRef = useRef(null);

  // useEffect(() => {
  //   if (headingRef.current) {
  //     headingRef.current.focus();
  //   }
  // }, []);

  return (
    <section id="profile">
      <img className="profile-picture" src={Kosei} alt="" aria-hidden="true" />
      <div>
        {/* <h1 ref={headingRef} tabIndex="-1" className="headings">Kosei Oki</h1> */}
        <div className="name-container">
          <h1 className="headings">Hello! I'm Kosei.</h1>
          <div className="pronunciation">/ˈkoʊ.seɪ/</div>
        </div>
        {/* <p>I’m an inclusive digital product designer, intersectionalist, percussionist.</p> */}

        <p className="paragraph">I aim to create inclusive and accessible designs within Information and Communication Technologies (ICT). I'm an <a className="plain-link" href="https://www.credly.com/badges/d96c149c-63c1-4764-ba03-c04703e8abbd/linked_in_profile">IAAP Certified Professional in Accessibility Core Competencies (CPACC).</a></p>
        <p className="paragraph">I study intersectionality and advocate for awareness of people from various backgrounds such as race, gender, sexual orientation, social class, disability, and more.
        </p>
        <p className="paragraph">I play percussion and steel pan (Low Tenor and Double Guitar).</p>
        {/* <p>I also like fruits (strawberries and bananas).</p> */}
        <h2 className="sr-only">Social Media</h2>
        <ul className="link-list paragraph">

          <li>
            <a className="plain-link" href="https://www.linkedin.com/in/kosei-oki-340129234/">
              <Icon icon="LinkedIn" />LinkedIn
            </a>
          </li>
          <li>
            <a className="plain-link" href="https://github.com/Koseioki">
              <Icon icon="Github" />GitHub</a>
          </li>
          <li>
            <a className="plain-link" href="https://www.instagram.com/koseioki1225/">
              <Icon icon="Instagram" />Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Profile;