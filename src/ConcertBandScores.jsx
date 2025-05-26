
import { scores } from './data/scores'
import ScoreCard from "./components/ScoreCard";
import './ConcertBandScores.css';
import BreadCrumbs from "./components/BreadCrumbs";
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from "react";

function ConcertBandScores() {

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <div>

      <Helmet>
        <title>Concert Band Scores - Kosei Oki</title>
      </Helmet>

      <BreadCrumbs />
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1" className="headings">Concert Band Scores</h1>
        <p className="paragraph">I created concert band arrangements of various musical pieces, with full scores and individual sheet music available for each part.</p>
        <ul className="score-list">
          {scores.map((score) => (


            // <li key={score.slug}>
            <ScoreCard
              key={score.slug}
              title={score.title}
              image={score.image}
              slug={score.slug}
              year={score.year}
              composer={score.composer}
              grade={score.grade}
            />
            // </li>
          ))}


        </ul>
      </main>

    </div>
  );
}
export default ConcertBandScores;