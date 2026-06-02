import { useEffect, useRef } from 'react';
import { uxCases } from './data/uxCases.js';
import { useParams } from 'react-router-dom';
import BreadCrumbs from './components/BreadCrumbs.jsx';
import './DetailPages.css';
import { Helmet } from 'react-helmet-async';
import SectionRenderer from './components/SectionRenderer.jsx';
// import WarningSection from './components/WarningSection.jsx';
// import AccordionSection from './components/AccordionSection.jsx';
import './components/AccordionSection.css';

import CasePrehabPlus from './components/CasePrehabPlus.jsx'; 
import CaseCoopManagement from './components/CaseCoopManagement.jsx';


function CaseDetail() {
  const { slug } = useParams();
  const uxCase = uxCases.find(p => p.slug === slug);

  const headingRef = useRef(null);

    useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // const [openSections, setOpenSections] = useState([]);

  // load the case data
  const componentMap = {
    CasePrehabPlus,
    CaseCoopManagement

  };
  const CustomComponent = componentMap[uxCase.customSection];



  return (
    <>
      <Helmet>
        <title>{uxCase.title} - Kosei&#39;s digital work</title>
      </Helmet>
      <BreadCrumbs />

      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1">{uxCase.title}</h1>


        <section className="detail-header">
          <div>
            <h2>Project Summary</h2>
            {uxCase.summary.map((block, i) => (
              <SectionRenderer key={`summary-${i}`} section={block} />
            ))}
            <p className="paragraph">Client:</p>
            <img
              src={uxCase.clientLogo}
              className="client-logo"
              alt={uxCase.client}
            />

          </div>
          <div>
            <img src={uxCase.image} className="detail-thumbnail case-thumbnail" alt={uxCase.imageAlt} />
          </div>
        </section>
        <hr aria-hidden="true" />

        {CustomComponent && <CustomComponent />}


      </main>
    </>
  );
}

export default CaseDetail;