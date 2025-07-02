import './Cards.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function WorkCard({ image, title, link, description }) {

  // go to {link} when .card-wrapper is clicked

  const navigate = useNavigate();
  const handleClick = () => {
    //go to the link
    if (link) {
      navigate(link);
    } else {
      console.log("No link provided");
    }

  }

  return (
    <li className="card-wrapper" onClick={handleClick}>
      <img src={image} alt="" aria-hidden="true" />
      <div className="card-text">
        <h3>
          <NavLink to={link} className="card-title">
            {title}
          </NavLink>
        </h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
export default WorkCard;