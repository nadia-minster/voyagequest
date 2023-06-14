import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./cards.css";

const FeaturedTours = () => {
  const [scrollPerClick, setScrollPerClick] = useState(400);
  const { tours_data } = useGlobalContext();

  const numCards = 3;
  const cardWidth = 74 / 3; // Adjust the percentage based on your desired width
  const sliderWidth = numCards * cardWidth;

  const allTours = tours_data
    .filter((tour) => tour.featured)
    .map((tour) => (
      <div className="c-card" key={tour.id.toString()}>
        <img
          className="c-card__image"
          src={`${process.env.PUBLIC_URL}/images/${tour.img}`}
          alt={tour.name}
        />
        <h3 className="c-card__header">{tour.name}</h3>
        <p className="c-card__text">{tour.info}</p>
        <Link to={`/tours/${tour.id}`}>
          <button className="btn c-card__btn">Learn More</button>
        </Link>
      </div>
    ));

  const sliderScrollLeft = () => {
    const newScrollAmount = ref.current.scrollLeft - scrollPerClick;
    ref.current.scrollTo({
      top: 0,
      left: newScrollAmount,
      behavior: "smooth",
    });
  };

  const sliderScrollRight = () => {
    const newScrollAmount = ref.current.scrollLeft + scrollPerClick;
    ref.current.scrollTo({
      top: 0,
      left: newScrollAmount,
      behavior: "smooth",
    });
  };
  const ref = React.useRef(null);

  return (
    <div className="c-featured">
      <h2 className="c-featured__heading">
        Featured <span className="c-featured__heading--highlight">tours</span>
      </h2>
      <p className="c-featured__text">
        Discover our hand-picked collection of the most exceptional tours around
        the world. These featured tours offer unique experiences, amazing
        service, and unforgettable memories.
      </p>
      <div className="c-featured__whitebg"></div>
      <FaChevronCircleLeft
        className="c-featured__chevron chevron-prev"
        onClick={sliderScrollLeft}
      />
      <div className="c-featured__cards" ref={ref}>
        {allTours}
      </div>
      <FaChevronCircleRight
        className="c-featured__chevron chevron-next"
        onClick={sliderScrollRight}
      />
    </div>
  );
};

export default FeaturedTours;
