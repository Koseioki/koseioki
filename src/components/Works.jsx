import WorkCard from './WorkCard';
import AccessibleComponents from '../assets/accessible-components.webp'
import ConcertBandScores from '../assets/concert-band-scores.webp'


function Works() {


  return (
    <>
      <section>
        <h2 id="works" tabIndex={-1} className="headings" >Works</h2>
        <h3 className="headings">Digital Products</h3>
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
          description="description"
          />

        </ul>
      </section>

      <section>
        <h3 className="headings">Music</h3>
        <ul className="work-card-list">

          <WorkCard
            link="/concert-band-scores"
            title="Concert Band Scores"
            image={ConcertBandScores}
            description="I arranged music for concert band." />
        </ul>
      </section>
    </>

  );
}
export default Works;