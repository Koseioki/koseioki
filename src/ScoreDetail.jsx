import { scores } from './data/scores.js';
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer";
import WarningSection from './components/WarningSection.jsx';

function ScoreDetail() {
    const { slug } = useParams();
    const score = scores.find(p => p.slug === slug);
  return (
<>
    <Header/>
    <BreadCrumbs/>
    <WarningSection>
        <li>Audio without text alternatives</li>
        <li>PDF without text alternatives</li>
    </WarningSection>
    <main id="main-content">
        <h1>{score.title}</h1>
        <p>{score.composer}</p>
        <p>
        {score.year}
        </p>
        <a href={score.pdf} className="primary-button">Download PDF</a>
    </main>
    
    <Footer/>
</>
  );
}

export default ScoreDetail;