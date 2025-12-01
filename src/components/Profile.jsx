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
      <div>
        <div className="name-container">
          <h1 className="headings">Hello! I&apos;m Kosei.</h1>
          <div className="pronunciation">/ˈkoʊ.seɪ/</div>
        </div>

        <p className="paragraph">I create inclusive and accessible designs within Information and Communication Technologies (ICT). I&apos;m an <a className="plain-link" href="https://www.credly.com/badges/d96c149c-63c1-4764-ba03-c04703e8abbd/linked_in_profile">IAAP Certified Professional in Accessibility Core Competencies (CPACC).</a></p>
        <p className="paragraph">I study intersectionality and advocate for awareness of people from various backgrounds such as race, gender, sexual orientation, social class, disability, and more.
        </p>
        <p className="paragraph">I play percussion and steel pan (Low Tenor and Double Guitar).</p>

      </div>
            <img className="profile-picture" src={Kosei} alt="Kosei smiling in an outdoorsy black jacket, with styled black short hair, photo" />

    </section>
  );
}
export default Profile;