import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";
function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumbs">
      <ol>
        <li>
          <Link to="/" className="plain-link">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} >
              <span aria-hidden="true" className="breadcrumbs-separator">/</span>
              {isLast ? (
                <span aria-current="page" className="breadcrumbs-last">{decodeURIComponent(value)}</span>
              ) : (
                <Link to={to} className="plain-link">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

    </nav>
  );
}
export default BreadCrumbs;