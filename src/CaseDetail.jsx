import React, { useEffect, useRef } from 'react';
import { uxCases } from './data/uxCases.js';
import { useParams } from 'react-router-dom';
import Header from './components/Header.jsx';
import BreadCrumbs from './components/BreadCrumbs.jsx';

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
    <Header/>
    <BreadCrumbs />
      <h1 ref={headingRef} tabIndex="-1" className="headings">{uxCase.title}</h1>
      <p className="paragraph">{uxCase.description}</p>

    </>
  );
}

export default CaseDetail;