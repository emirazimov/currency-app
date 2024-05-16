import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarTitle">Navbar</div>
      <ul className="navbarMenu">
        <li>
          <Link className="links" to="/currency">
            currency
          </Link>
        </li>
        <li>
          <Link className="links" to="/actual-currency">
            actual currency
          </Link>
        </li>
      </ul>
    </div>
  );
};
