import Header from "./components/Header";
import Footer from "./components/Footer";
import {scores} from './data/scores'
function ConcertBandScores() {
  return (
    <div>

<Header/>
<main id="main-content">
    <h1>Concert Band Scores</h1>
    <p>description.</p>  
    <ul className="score-list">
        {scores.map((score) => (
          <li key={score.slug}>
            <p>{score.title}</p>
            <p>{score.composer}</p>
            <p>{score.year}</p>
            <a href={score.pdf}>Score</a>
          </li>
        ))}
      

      </ul>  
    </main>
    
<Footer/>
    </div>
  );
}
export default ConcertBandScores;