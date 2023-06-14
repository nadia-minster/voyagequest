import { useState } from "react";
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="c-mobilenav">
      <button className="btn c-mobilenav__btn">
        <FaCalendarAlt className="c-mobilenav__btn--icon" />
      </button>
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
          to="/all-recipes"
        >
          All Tours
        </Link>
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/saved-recipes"
        >
          Selected Deals
        </Link>
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/saved-recipes"
        >
          Quiz
        </Link>
        <Link
          className="c-mobilenav__navigation--mobile-link"
          to="/saved-recipes"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
