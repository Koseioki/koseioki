// this page is dynamic
import { components } from "./data/components";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import WarningSection from "./components/WarningSection";
import './ComponentDetail.css';

function ComponentDetail() {
  const { slug } = useParams();
  const component = components.find(p => p.slug === slug);

  return (
    <div>
      <Header />
      <BreadCrumbs />
      <main id="main-content">
        <WarningSection />
        <div className="component-detail-header">
          <div>
          <h1>{component.title}</h1>
          <p>{component.description}</p>
          <a href={component.demo} className="primary-button">See the Demo</a>
          </div>
          <div>
          <img src={component.image} className="component-detail-thumbnail" alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default ComponentDetail;