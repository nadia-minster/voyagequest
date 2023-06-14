import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import "./navbar.css";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className={`c-navbar ${isMobile && "c-navbar-mobile"}`}>
      <Link to={"/"}>
        <span className="c-navbar__logo">VoyageQuest</span>
      </Link>
      {!isMobile ? (
        <div className="c-navbar__links">
          <Link className="c-navbar__links--link" to="/all-recipes">
            All Tours
          </Link>
          <Link className="c-navbar__links--link" to="/saved-recipes">
            Selected Deals
          </Link>
          <Link className="c-navbar__links--link" to="/saved-recipes">
            Quiz
          </Link>
          <Link className="c-navbar__links--link" to="/saved-recipes">
            About
          </Link>
        </div>
      ) : (
        <MobileNavbar />
      )}
    </nav>
  );
};

export default Navbar;
