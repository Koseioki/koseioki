import './AccessibleWebComponents.css';
import BreadCrumbs from "./components/BreadCrumbs";
import ComponentCard from "./components/ComponentCard";
import {components} from "./data/components";
import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from "react";

function AccessibleWebComponents() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <>


    <Helmet>
      <title>Accessible Web Components - Kosei Oki</title>
      </Helmet>

    <BreadCrumbs/>

    <main id="main-content">
      <h1 ref={headingRef} tabIndex="-1" className="headings">Accessible Web Components</h1>
      <p className="paragraph">These components were created for developers at <a href="https://www.bankdata.dk" className="plain-link">Bankdata</a> to help remediate the components used on the websites or netbanks of its customer local banks, such as <a href="https://www.jyskebank.dk" className="plain-link">Jyske Bank</a>, <a href="https://www.sydbank.dk" className="plain-link">Sydbank</a>, <a href="https://www.landbobanken.dk" className="plain-link">Landbobank</a>, <a href="https://www.spks.dk" className="plain-link">Sparekassen Sjælland-Fyn</a>, <a href="https://www.skjernbank.dk" className="plain-link">Skjern Bank</a>, and <a href="https://www.djurslandsbank.dk" className="plain-link">Djurslands Bank</a>.</p>
      <p className="paragraph">Each component includes a working demo and comprehensive specification documents for developers.</p>
      
      <ul className="component-list">
        {components.map((component) => (
          // <li >
            <ComponentCard
            key={component.slug}
            title={component.title}
            image={component.image}
            slug={component.slug}
            description={component.description}/>
          // </li>
        ))}
      

      </ul>
    
    </main>
    </>
  );
}

export default AccessibleWebComponents;