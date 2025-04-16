import { NavLink } from 'react-router-dom';
import './Cards.css'
function ComponentCard({ title, image, slug }) {
  const path = `/accessible-web-components/${slug}`;
  return (
    <div className="card-wrapper component-card">
      <img src={image} alt=""/>
        <NavLink to={path} className="card-title">{title}</NavLink>
  </div>
  );
}
export default ComponentCard;