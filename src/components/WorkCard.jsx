import './Cards.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function WorkCard({ image, title, link, linkType, description }) {

  // go to {link} when .card-wrapper is clicked

  const navigate = useNavigate();
  const handleClick = () => {
    //go to the link
    if (link) {
      if (linkType === "external") {
        window.open(link, "_self");
      } else {
        navigate(link);
      }
    } else {
      console.log("No link provided");
    }

  }

  return (
    <li>
      <article className="card-wrapper" onClick={handleClick}>
        <img src={image} alt="" aria-hidden="true" />
        <div className="card-text">
          <h2 className="card-title">
            {linkType === "external" ? (
              <a href={link} target="_self" className="card-title">
                {title}
              </a>
            ) : (
              <NavLink to={link} className="card-title">
                {title}
              </NavLink>
            )}

          </h2>
          <p>{description}</p>
        </div>
      </article>
    </li>
  );
}
export default WorkCard;