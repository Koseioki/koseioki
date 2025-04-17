import { scores } from './data/scores.js';
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import WarningSection from './components/WarningSection.jsx';
import './DetailPages.css'

function ScoreDetail() {
  const { slug } = useParams();
  const score = scores.find(p => p.slug === slug);
  return (
    <>
      <Header />
      <BreadCrumbs />
      <WarningSection>
        <li>Audio without text alternatives</li>
        <li>PDF without text alternatives</li>
      </WarningSection>
      <main id="main-content">
        <div className="detail-header">
          <div>
            <h1>{score.title}</h1>
            <dl>
              <dt>Composer</dt>
              <dd>{score.composer}</dd>
              <dt>Year of Publication</dt>
              <dd>{score.year}</dd>
              <dt>Duration</dt>
              <dd>{score.duration}</dd>
              <dt>Grade</dt>
              <dd>{score.grade}</dd>
            </dl>
            <a href={score.pdf} className="primary-button">Download PDF (Full score and parts)</a>
          </div>
          <div>
            <img src={score.image} alt="" className="detail-score-thumbnail" />
          </div>
        </div>
        <hr aria-hidden="true" />

        <h2>Demo</h2>
        <p>Coming soon</p>
      </main>

      <Footer />
    </>
  );
}

export default ScoreDetail;