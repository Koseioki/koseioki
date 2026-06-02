import WorkCard from './WorkCard';
import AccessibleComponents from '../assets/accessible-components.webp'
// import ConcertBandScores from '../assets/concert-band-scores.webp'
import UXCases from '../assets/ux-cases.webp'
import IDL from '../assets/idl.webp'


function Works() {


  return (
    <>
      <section>


        <ul className="card-list">
          <WorkCard
            link="https://intersectionaldesignlab.org"
            linkType="external"
            title="Intersectional Design Lab"
            image={IDL}
            description="I run a non-profit initiative focused on researching and advocating for intersectionality in the digital society."
          />
          <WorkCard
            link="https://koseioki.github.io/accessible-web-components/"
            linkType="external"
            title="Accessible Web Components"
            image={AccessibleComponents}
            description="I developed guides for accessible components during my time at Bankdata."
          />
          <WorkCard
            link="/ux-design-cases"
            linkType="internal"
            title="User Experience (UX) Design Cases"
            image={UXCases}
            description="I work across the full UX design process, including research, prototyping, testing, and implementation."
          />


   

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