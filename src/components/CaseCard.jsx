import { NavLink } from "react-router-dom";

function CaseCard({ caseItem }) {

    return (
        <div>
            
            <h2><NavLink to={`/ux-design-cases/${caseItem.slug}`} className="case-card">
            {caseItem.title}
            </NavLink></h2>
            <p>{caseItem.description}</p>
            <a href={caseItem.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={caseItem.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    );
}

export default CaseCard;