import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import "./home.css";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const word = isMobile ? " trip" : " adventure";

  const [searchInput, setSearchInput] = useState({
    location: "Asia",
    budget: 1000,
  });

  const handleLocationSelect = (e) => {
    setSearchInput((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  const handleBudgetSelect = (e) => {
    setSearchInput((prevState) => ({
      ...prevState,
      budget: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  return (
    <header className="c-hero">
      <h1 className="c-hero__heading">
        Find your <span className="c-hero__heading--highlight">perfect</span>
        {word}
      </h1>
      <form onSubmit={handleSubmit} className="c-hero__form">
        <div className="c-hero__form--inputgroup">
          <label htmlFor="searchLocation">Choose your location</label>
          <FaMapMarkerAlt className="icon" />
          <select
            name="location"
            id="location"
            className="form-input"
            onChange={handleLocationSelect}
          >
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div className="c-hero__form--inputgroup">
          <label htmlFor="searchLocation">Choose your location</label>
          <FaDollarSign className="icon" />
          <select
            name="budget"
            id="budget"
            className="form-input"
            onChange={handleBudgetSelect}
          >
            <option value="cheap">$1000</option>
            <option value="medium">$1000-$2000</option>
            <option value="expensive">$2000+</option>
          </select>
        </div>
        <button type="submit" className="btn c-hero__form--button">
          Search tours
        </button>
      </form>
    </header>
  );
};

export default Hero;
