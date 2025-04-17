// this page is dynamic
import { components } from "./data/components";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import WarningSection from "./components/WarningSection";
import './DetailPages.css';

function ComponentDetail() {
  const { slug } = useParams();
  const component = components.find(p => p.slug === slug);

  return (
    <>
      <Header />
      <BreadCrumbs />
      <main id="main-content">
        <WarningSection>
          <li>Images without text alternatives</li>
        </WarningSection>
        <div className="detail-header">
          <div>
            <h1>{component.title}</h1>
            <p>{component.description}</p>
            <a href={component.demo} className="primary-button">See the Demo</a>
          </div>
          <div className="detail-thumbnail-container">
            <img src={component.image} className="detail-thumbnail" alt="" />
          </div>
        </div>

        <hr aria-hidden="true" />

        <h2>Details</h2>
        <p>Coming soon</p>
      </main>
      <Footer />
    </>
  );
}
export default ComponentDetail;