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
    <li className="card-wrapper score-card"  onClick={handleClick}>
        <img src={image} alt="" />
      <div className="card-text">
      <h2><NavLink to={`/concert-band-scores/${slug}`} className="card-title">
        {title}
        </NavLink></h2>
        <p>{composer}</p>
        <p>Grade: {grade}</p>
      </div>
    </li>
  );
}
export default ScoreCard;