import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './CaseCard.css';

function CaseCard({ caseItem }) {
    const path = `/ux-design-cases/${caseItem.slug}`;
    const navigate = useNavigate();
    const handleClick = () => {
        if (path) {
            navigate(path);
        } else {
            console.log("No path provided");
        }
    }

    return (
        <li>
            {/* <hr aria-hidden="true" /> */}
            <div className="case-card" onClick={handleClick}>
    
                    <img src={caseItem.image} className="case-card-thumbnail" alt="" aria-hidden="true" />
          

                <div className="card-text">
                    <h2>
                        <NavLink to={`/ux-design-cases/${caseItem.slug}`} className="headings card-title">
                            {caseItem.title}
                        </NavLink>
                    </h2>

                    {caseItem.summary.map((block, i) => (
                        <p key={`summary-${i}`} className="paragraph">{block.text}</p>
                    ))}
                    <img src={caseItem.clientLogo} className="client-logo" alt={`Client: ${caseItem.client}`} />

                

                </div>
            </div>
        </li>
    );
}

export default CaseCard;