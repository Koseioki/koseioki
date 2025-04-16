import { NavLink } from 'react-router-dom';
import './Cards.css'
function ComponentCard({ name, slug }) {
  const path = `/accessible-web-components/${slug}`;
  return (
    <div className="card-wrapper">
        <NavLink to={path} className="card-title">{name}</NavLink>
  </div>
  );
}
export default ComponentCard;