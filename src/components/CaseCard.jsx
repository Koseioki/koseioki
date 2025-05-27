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
    
                    <img src={caseItem.image} alt="" aria-hidden="true" />
          

                <div className="card-text">
                    <h2>
                        <NavLink to={`/ux-design-cases/${caseItem.slug}`} className="headings">
                            {caseItem.title}
                        </NavLink>
                    </h2>
                    <p className="paragraph">{caseItem.description}</p>
                      {/* <NavLink role="presentation" to={`/ux-design-cases/${caseItem.slug}`} className="read-more-link" aria-hidden="true">Read More about the Project →</NavLink>  */}
                    

                </div>
            </div>
        </li>
    );
}

export default CaseCard;