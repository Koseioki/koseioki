import WorkCard from './WorkCard';
import AccessibleComponents from '../assets/accessible-components.webp'
import ConcertBandScores from '../assets/concert-band-scores.webp'


function Works() {


  return (
    <section>
      <h2 id="works" tabIndex={-1} className="headings" >Works</h2>
      <ul className="work-card-list">
     
          <WorkCard
            link="/accessible-web-components"
            title="Accessible Web Components"
            image={AccessibleComponents}
            description="At Bankdata, I developed accessible web components for local banks to use on their websites." />
      
          <WorkCard 
          link="/concert-band-scores"
          title="Concert Band Scores"
          image={ConcertBandScores}
          description="I arranged music for concert band." />
        
      </ul>

    </section>
  );
}
export default Works;