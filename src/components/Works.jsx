import WorkCard from './WorkCard';
import AccessibleComponents from '../assets/accessible-components.webp'
import ConcertBandScores from '../assets/concert-band-scores.webp'
import UXCases from '../assets/ux-cases.webp'


function Works() {


  return (
    <>
      <section>
        <hr aria-hidden="true" />
        <h2 id="works" tabIndex={-1} className="headings" >Works</h2>
        {/* <h3 className="headings">Digital Products</h3> */}
        <ul className="work-card-list">

          <WorkCard
            link="/accessible-web-components"
            title="Accessible Web Components"
            image={AccessibleComponents}
            description="At Bankdata, I developed accessible web components for local banks to use on their websites."
          />
          <WorkCard
            link="/ux-design-cases"
            title="UX Design Cases"
            image={UXCases}
            description="I have worked on UX cases, focusing on contextual understanding and inclusive design."
          />
          <WorkCard
            link="/concert-band-scores"
            title="Concert Band Scores"
            image={ConcertBandScores}
            description="I arranged music for concert band." />

        </ul>
      </section>

      {/* <section>
        <h3 className="headings">Music</h3>
        <ul className="work-card-list"> */}


      {/* </ul>
      </section> */}
    </>

  );
}
export default Works;