import { useEffect, useRef, useState } from 'react';
import { uxCases } from './data/uxCases.js';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './components/BreadCrumbs.jsx';
import './DetailPages.css';
import { Helmet } from 'react-helmet-async';
import SectionRenderer from './components/SectionRenderer.jsx';
import WarningSection from './components/WarningSection.jsx';
import AccordionSection from './components/AccordionSection.jsx';
import './components/AccordionSection.css';

import CasePrehabPlus from './components/CasePrehabPlus.jsx'; 


function CaseDetail() {
  const { slug } = useParams();
  const uxCase = uxCases.find(p => p.slug === slug);

  const headingRef = useRef(null);
  const [openSections, setOpenSections] = useState([]);

  // load the case data
  const componentMap = {
    CasePrehabPlus
  };
  const CustomComponent = componentMap[uxCase.customSection];

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const handleAccordionToggle = (idx) => {
    setOpenSections(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <>
      <Helmet>
        <title>{uxCase.title} - Kosei Oki</title>
      </Helmet>
      <BreadCrumbs />

      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1" className="headings">{uxCase.title}</h1>

        {/* <WarningSection>
          <li>Images without text alternatives</li>
        </WarningSection> */}

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

        {CustomComponent && <CustomComponent />}

{/* 
        <h2 className="headings">Challenges</h2>
        {uxCase.problem.map((block, i) => (
          <SectionRenderer key={`problem-${i}`} section={block} />
        ))}

        <h2 className="headings">Design Process</h2>

        <ul className="accordion-container">
          {uxCase.sections.map((sec, i) => (
            <AccordionSection
              key={`section-${i}`}
              section={sec}
              index={i}
              open={openSections.includes(i)}
              onToggle={handleAccordionToggle}
            />
          ))}
        </ul> */}


      </main>
    </>
  );
}

export default CaseDetail;