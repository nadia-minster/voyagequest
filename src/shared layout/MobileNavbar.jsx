import { useState } from "react";
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { bookedTour } = useGlobalContext();
  return (
    <nav className="c-mobilenav">
      <Link to="/booking" className="btn c-mobilenav__btn">
        {bookedTour.length > 0 && `(${bookedTour.length})`}
        <FaCalendarAlt className="c-mobilenav__btn--icon" />
      </Link>
      {!isMenuOpen ? (
        <FaBars
          className="c-mobilenav__menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <FaTimes
          className="c-mobilenav__menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
      <div
        className={`c-mobilenav__navigation ${
          isMenuOpen ? "c-mobilenav__open " : "c-mobilenav__hidden"
        }`}
      >
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/tours"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          All Tours
        </Link>
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/saved-recipes"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Selected Deals
        </Link>
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/start-quiz"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Quiz
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
