import './AccessibleWebComponents.css';
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import ComponentCard from "./components/ComponentCard";
import {components} from "./data/components";

function AccessibleWebComponents() {
  return (
    <>
    <Header/>
    <main id="main-content">
    <BreadCrumbs/>
    
      <h1>Accessible Web Components</h1>
      <p>description.</p>
      <ul className="component-list">
        {components.map((component) => (
          <li key={component.slug}>
            <ComponentCard name={component.title} slug={component.slug} />
          </li>
        ))}
      

      </ul>
    
    </main>
    <Footer/>
    </>
  );
}

export default AccessibleWebComponents;