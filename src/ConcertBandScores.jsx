import Header from "./components/Header";
import Footer from "./components/Footer";
import {scores} from './data/scores'
import ScoreCard from "./components/ScoreCard";
import './ConcertBandScores.css';
function ConcertBandScores() {
  return (
    <div>

<Header/>
<main id="main-content">
    <h1>Concert Band Scores</h1>
    <p>description.</p>  
    <ul className="score-list">
        {scores.map((score) => (

          
          // <li key={score.slug}>
            <ScoreCard 
            key={score.slug}
            title={score.title} 
            image={score.composer} 
            slug={score.slug} 
            year={score.year}
            composer={score.composer}
            pdf={score.pdf}/>
          // </li>
        ))}
      

      </ul>  
    </main>
    
<Footer/>
    </div>
  );
}
export default ConcertBandScores;