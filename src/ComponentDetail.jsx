// this page is dynamic
import { components } from "./data/components";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
// import WarningSection from "./components/WarningSection";
import './DetailPages.css';
import { Helmet } from 'react-helmet-async';
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
      <BreadCrumbs />
      <main id="main-content">
        <h1 ref={headingRef} tabIndex="-1" className="headings">{component.title}</h1>

        {/* <WarningSection>
          <li>Images of specification documents without text alternatives</li>
        </WarningSection> */}
        <div className="detail-header">
          <div>
            <h2 className="headings">Description</h2>

            <p className="paragraph">{component.description}</p>
            <div className="button-container">
              <a href={component.demo} className="primary-button">View Demo</a>
              <a href={component.github} className="secondary-button">
                <Icon icon="Github"/>View GitHub
              </a>
            </div>
          </div>
          <div
            className="detail-thumbnail-container"
            onClick={() => window.open(component.demo, "_self")}
            aria-hidden="true"
          >
            <img
              src={component.image}
              className="detail-thumbnail"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <hr aria-hidden="true" />


        <h2 className="headings">Specifications</h2>

        {component.specifications && component.specifications.length > 0 ? (
          <div className="specification-images">
            <ul>
      
            {component.specifications.map((spec, index) => (
              <li key={index}>
                <img src={spec.src} alt={spec.alt} />
              </li>
            ))}
          </ul>
          </div>
        ) : (
          <p className="paragraph">More details to follow.</p>
        )}

      </main>
    </>
  );
}
export default ComponentDetail;