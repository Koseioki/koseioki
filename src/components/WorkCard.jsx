import './Cards.css'
import { NavLink } from 'react-router-dom';
function WorkCard({ image, title, link, description }) {
  return (
    <article className="card-wrapper">
      <h3 ><NavLink to={link} className="card-title"> {title}</NavLink></h3>
      <p>{description}</p>
    </article>
  );
}
export default WorkCard;