import WorkCard from './WorkCard';
import AccessibleComponents from '../assets/accessible-components.webp'
import ConcertBandScores from '../assets/concert-band-scores.webp'

function Works() {
  return (
    <section id="works">
      <h2>Works</h2>
      <ul className="work-card-list">
     
          <WorkCard
            link="/accessible-web-components"
            title="Accessible Web Components"
            image={AccessibleComponents}
            description="I made accessible web components for local banks, at Bankdata" />
      
          <WorkCard 
          link="/concert-band-scores"
          title="Concert Band Scores"
          image={ConcertBandScores}
          description="I arranged some music" />
        
      </ul>

    </section>
  );
}
export default Works;