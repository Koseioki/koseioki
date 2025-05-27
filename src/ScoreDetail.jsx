import { scores } from './data/scores.js';
import { useParams } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import WarningSection from './components/WarningSection.jsx';
import './DetailPages.css'
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from "react";
import Icon from './components/Icon.jsx';


function ScoreDetail() {
  const { slug } = useParams();
  const score = scores.find(p => p.slug === slug);

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>{score.title} - Kosei Oki</title>
      </Helmet>
      <BreadCrumbs />

      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1" className="headings">{score.title}</h1>
        <WarningSection>
              <li>Audio content without text alternatives</li>
              <li>PDF documents without text alternatives</li>
            </WarningSection>

        <div className="detail-header">
          <div>
          <h2 className="headings">Details</h2>
            <dl className="paragraph">
              <dt>Composer</dt>
              <dd>{score.composer}</dd>
              <dt>Year of Publication</dt>
              <dd>{score.year}</dd>
              <dt>Duration</dt>
              <dd>{score.duration}</dd>
              <dt>Grade</dt>
              <dd>{score.grade}</dd>
            </dl>
            <div className="button-container">
              <a href={score.pdf} className="primary-button">
                <Icon icon="File"/>View Score & Parts
                </a>
              <a href={score.audio} className="secondary-button">
                <Icon icon="Headphones"/>Listen to Demo</a>
            </div>
          </div>
          <div>
            <img src={score.image} alt="" className="detail-score-thumbnail" aria-hidden="true" />
          </div>
        </div>
        {/* <hr aria-hidden="true" />

        <h2 className="headings">Description</h2>
        <p className="paragraph">Coming soon</p> */}
      </main>

    </>
  );
}

export default ScoreDetail;