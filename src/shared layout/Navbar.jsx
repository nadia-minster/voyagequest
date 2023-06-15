import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import { useGlobalContext } from "../context/context";
import { FaCalendarAlt } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const { bookedTour } = useGlobalContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className={`c-navbar ${isMobile && "c-navbar-mobile"}`}>
      <Link to={"/"}>
        <span className="c-navbar__logo">VoyageQuest</span>
      </Link>
      {!isMobile ? (
        <div className="c-navbar__links">
          <Link className="c-navbar__links--link" to="/tours">
            All Tours
          </Link>
          <Link className="c-navbar__links--link" to="/saved-recipes">
            Selected Deals
          </Link>
          <Link className="c-navbar__links--link" to="/start-quiz">
            Quiz
          </Link>
          <Link to="/booking" className="btn c-mobilenav__btn">
            {bookedTour.length > 0 && `(${bookedTour.length})`}
            <FaCalendarAlt className="c-mobilenav__btn--icon" />
          </Link>
        </div>
      ) : (
        <MobileNavbar />
      )}
    </nav>
  );
};

export default Navbar;
