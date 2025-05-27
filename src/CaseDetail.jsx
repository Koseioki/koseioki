import { useEffect, useRef } from 'react';
import { uxCases } from './data/uxCases.js';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './components/BreadCrumbs.jsx';
import './DetailPages.css';
import { Helmet } from 'react-helmet';
import SectionRenderer from './components/SectionRenderer.jsx';

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

        <div className="detail-header">
          <div>
            <h2 className="headings">Description</h2>
            <p className="paragraph">{uxCase.description}</p>

          </div>
          <div>
            <img src={uxCase.image} className="detail-thumbnail" alt="" aria-hidden="true" />
          </div>
        </div>
        <hr aria-hidden="true" />

<h2 className="headings">Process</h2>
        {uxCase.sections && uxCase.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}

        <p className="paragraph">More details to follow.</p>
      </main>
    </>
  );
}

export default CaseDetail;