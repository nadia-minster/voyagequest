import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import { useMediaQuery } from "react-responsive";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import background from "../../assets/background.png";
import backgroundPlaceholder from "../../assets/background-lowres.jpg";
import "./home.css";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const navigate = useNavigate();
  const word = isMobile ? " trip" : " adventure";
  const { setSearch } = useGlobalContext();
  const [searchInput, setSearchInput] = useState({
    location: "Asia",
    budget: "1000",
  });

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.src = background;
    backgroundImage.onload = () => {
      setImageLoaded(true);
    };
  }, []);

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
    setSearch(searchInput);
    navigate("/tours", {
      state: {
        location: searchInput.location,
        price: searchInput.budget,
      },
    });
  };

  return (
    <header
      className="c-hero"
      style={{
        background: `${
          imageLoaded ? `url(${background})` : `url(${backgroundPlaceholder})`
        }`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="c-hero__heading">
        Find your <span className="c-hero__heading--highlight">perfect</span>
        {word}
      </h1>
      <form onSubmit={handleSubmit} className="c-hero__form">
        <div className="c-hero__form--inputgroup">
          <label htmlFor="searchLocation" className="hidden-label">
            Choose your location
          </label>
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
          <label htmlFor="searchLocation" className="hidden-label">
            Choose your location
          </label>
          <FaDollarSign className="icon" />
          <select
            name="budget"
            id="budget"
            className="form-input"
            onChange={handleBudgetSelect}
          >
            <option value="1000">$1000</option>
            <option value="2000">$1000-$3000</option>
            <option value="3001">$3000+</option>
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
