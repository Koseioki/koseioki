import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Cards.css'


function ScoreCard({ title, composer, image, slug, grade}) {
  const path = `/concert-band-scores/${slug}`;
  const navigate = useNavigate();
  const handleClick = () => {


    // go to {path} when .card-wrapper is clicked

    //go to the path
    if (path) {
      navigate(path);
    } else {
      console.log("No path provided");
    }
  }


  return (
    <li className="card-wrapper" onClick={handleClick}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <NavLink to={`/concert-band-scores/${slug}`} className="card-title">
        <h2>{title}</h2>
        </NavLink>
        <p>{composer}</p>
        <p>Grade: {grade}</p>
      </div>
    </li>
  );
}
export default ScoreCard;