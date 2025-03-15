

import ChasingAButterfly from './assets/chasing-a-butterfly.svg';
// import MeOnTheRide from './assets/me-on-the-ride.webp';

function AboutMe (){
    return (
        <section id="about-me" className="page-width section-margin-padding flex-layout-container">

        <div>
          <h2>About me</h2>
          <p>Born and raised in Tokyo, Japan. After studying Science Engineering at Hosei University in Tokyo, went to Den
            Internationale Højskole in Helsingør for a half year to learn about cultural differences and
            intersectionality.</p>
          <p>Currently studying Multimedia Design at Erhvervsakademi Aarhus, with a focus on inclusivity and
            accessibility.</p>
          <p>Steelpan player and a former member of <a className="link-text" href="https://waiwaisteelband.com">Waiwai Steel
              Band</a>
            Participating in various volunteer activities while working as a substitute teacher at a kindergarten.</p>
          <p>Student member of <a className="link-text" href="https://www.accessibilityassociation.org/s/">International
              Association of Accessibility Professionals (IAAP)</a></p>
          <p>Very very good at drawing (very very good).</p>
        </div>
        <div>
          {/* <!-- Switch --> */}
          {/* <div role="switch" aria-checked="false" tabIndex="0">
            <span className="label">Switch images</span>
            <div>
            <span className="switch">
              <span></span>
            </span>
            <span className="on" aria-hidden="true">Picture</span>
            <span className="off" aria-hidden="true">Drawing</span>
          </div>
          </div> */}
  
          {/* <!-- Image placeholders to toggle --> */}
          {/* <div className="image-container"> */}
            <img src={ChasingAButterfly} alt="a drawing of myself, chasing a white butterfly in the meadow"
              className="toggle-image img1 side-image"/>
            {/* <img src={MeOnTheRide} alt="Smiling selfie of myself riding an orange bike while wearing a helmet" className="toggle-image img2 side-image" />    */}
          {/* </div> */}
  
        </div>
      </section>
    )

}

export default AboutMe;