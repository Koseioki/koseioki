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
        <img className="profile-picture" src={Kosei} alt="" />
      <div>
        {/* <h1 ref={headingRef} tabIndex="-1" className="headings">Kosei Oki</h1> */}
        <h1 className="headings">Kosei Oki</h1>
        <p>I’m an inclusive digital product designer, intersectionalist, percussionist.</p>
          <p>I also like fruits.</p>
          <h2 className="sr-only">Social Media</h2>
        <ul className="paragraph">
          <li>
            <a className="plain-link" href="https://www.instagram.com/koseioki1225/">
            <Icon icon="Instagram"/>Instagram
            </a>
            </li>
          <li>
            <a className="plain-link" href="https://www.linkedin.com/in/kosei-oki-340129234/">
            <Icon icon="LinkedIn"/>LinkedIn
            </a>
            </li>
        </ul>
      </div>
    </section>
  );
}
export default Profile;