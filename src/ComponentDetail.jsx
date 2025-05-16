// this page is dynamic
import { components } from "./data/components";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import WarningSection from "./components/WarningSection";
import './DetailPages.css';
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from "react";
import Icon from './components/Icon.jsx';

function ComponentDetail() {
  const { slug } = useParams();
  const component = components.find(p => p.slug === slug);

    const headingRef = useRef(null);
  
    useEffect(() => {
      if (headingRef.current) {
        headingRef.current.focus();
      }
    }, []);

  return (
    
    <>
      <Helmet>
        <title>{component.title} - Kosei Oki</title>
      </Helmet>

      <Header />
      <BreadCrumbs />
      <main id="main-content">
      <h1 ref={headingRef} tabIndex="-1" className="headings">{component.title}</h1>

      {/* <WarningSection>
          <li>Images without text alternatives</li>
        </WarningSection> */}
        <div className="detail-header">
          <div>
            <h2>Description</h2>
  
            <p className="paragraph">{component.description}</p>
            <div className="button-container">
              <a href={component.demo} className="primary-button">View Demo</a>
              <a href={component.github} className="secondary-button">
                <Icon icon="Github"/>View GitHub
                </a>
            </div>
          </div>
          <div className="detail-thumbnail-container">
            <img src={component.image} className="detail-thumbnail" alt="" aria-hidden="true" />
          </div>
        </div>

        <hr aria-hidden="true" />

        <h2 className="headings">Specifications</h2>
        <p className="paragraph">Coming soon</p>
      </main>
      <Footer />
    </>
  );
}
export default ComponentDetail;