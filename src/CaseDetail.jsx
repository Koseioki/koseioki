import { useEffect, useRef } from 'react';
import { uxCases } from './data/uxCases.js';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './components/BreadCrumbs.jsx';
import './DetailPages.css';
import { Helmet } from 'react-helmet';
import SectionRenderer from './components/SectionRenderer.jsx';
import WarningSection from './components/WarningSection.jsx';

function CaseDetail() {
  const { slug } = useParams();
  const uxCase = uxCases.find(p => p.slug === slug);

  const headingRef = useRef(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{uxCase.title} - Kosei Oki</title>
      </Helmet>
      <BreadCrumbs />

      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1" className="headings">{uxCase.title}</h1>

        <WarningSection>
          <li>Images without text alternatives</li>
        </WarningSection>

        <div className="detail-header">
          <div>
            <h2>Project Summary</h2>
            {uxCase.summary.map((block, i) => (
              <SectionRenderer key={`summary-${i}`} section={block} />
            ))}
            <img
              src={uxCase.clientLogo}
              className="client-logo"
              alt={`Client: ${uxCase.client}`}
            />

          </div>
          <div>
            <img src={uxCase.image} className="detail-thumbnail" alt="" aria-hidden="true" />
          </div>
        </div>
        <hr aria-hidden="true" />


        <h2 className="headings">Design Process</h2>


        <h3 className="sr-only">Challenges</h3>
        {uxCase.problem.map((block, i) => (
          <SectionRenderer key={`problem-${i}`} section={block} />
        ))}


        <div>
          {uxCase.sections.map((sec, i) => (
            <details className="design-process-details" key={`section-${i}`}>
              <summary>
                <h3 id={`section-${i}`}>{sec.title}</h3>
                <span aria-hidden="true"></span>
              </summary>
              <section aria-labelledby={`section-${i}`}>
                {sec.content.map((block, j) => (
                  <SectionRenderer key={`block-${i}-${j}`} section={block} />
                ))}
              </section>
            </details>
          ))}
        </div>


      </main>
    </>
  );
}

export default CaseDetail;