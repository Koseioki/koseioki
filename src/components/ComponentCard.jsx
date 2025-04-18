import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Cards.css'
function ComponentCard({ title, image, slug, description }) {
  const path = `/accessible-web-components/${slug}`;
  const navigate = useNavigate();

  // go to {path} when .card-wrapper is clicked

  const handleClick = () => {
    //go to the path
    if (path) {
      navigate(path);
    } else {
      console.log("No path provided");
    }

  }


  return (
    <li className="card-wrapper component-card" onClick={handleClick}>
      {/* <div> */}
      <img src={image} alt="" aria-hidden="true"/>
      {/* </div> */}
      <div className="card-text">
      <h2>
        <NavLink to={path} className="card-title">{title}</NavLink>
        </h2>
        <p>{description}</p>
        </div>
  </li>
  );
}
export default ComponentCard;