import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../../context/context";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaStar,
} from "react-icons/fa";
import "./reviews.css";

const FeaturedTours = () => {
  const [scrollPerClick, setScrollPerClick] = useState(400);
  const { reviews, tours_data } = useGlobalContext();

  let randomIndex = [];
  let featuredReviews = [];

  while (randomIndex.length < 10) {
    const randomNum = Math.floor(Math.random() * 15);
    if (!randomIndex.includes(randomNum)) {
      randomIndex.push(randomNum);
    }
  }

  randomIndex.map((index) => {
    featuredReviews.push({ tour: tours_data[index], review: reviews[index] });
  });

  const numCards = 3;
  const cardWidth = 74 / 3; // Adjust the percentage based on your desired width
  const sliderWidth = numCards * cardWidth;

  const tour = featuredReviews.map((item, index) => (
    <div className="c-card c-card-review" key={index}>
      <div className="c-card-images">
        <img
          className="c-card__image"
          src={`${process.env.PUBLIC_URL}/images/${item.tour.img}`}
          alt={item.tour.name}
        />
        <img
          className="c-card__avatar"
          src={`${process.env.PUBLIC_URL}/images/${item.review.img}`}
          alt={item.review.name}
        />
      </div>
      <div className="c-card__text">
        <h3 className="c-card__header review-header">{item.tour.name}</h3>
        <div className="date-and-rating">
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              return <FaStar className="star" key={index} />;
            })}
          </div>
          <p className="review-date">{item.review.date}</p>
        </div>
        <p>{item.review.review}</p>
      </div>
      <Link to={`/tours/${item.tour.id}`}>
        <button className="btn c-card__btn">Show Tour</button>
      </Link>
    </div>
  ));

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
    <div className="c-reviews">
      <h2 className="c-reviews__heading">
        Happy <span className="c-reviews__heading--highlight">reviews</span>
      </h2>
      <p className="c-reviews__text">
        At our travel agency, we pride ourselves on delivering unforgettable
        experiences that exceed our clients' expectations. But don't just take
        our word for it – read on to hear what our customers have to say about
        their trips with us.
      </p>
      <FaChevronCircleLeft
        className="c-reviews__chevron chevron-prev"
        onClick={sliderScrollLeft}
      />
      <div className="c-reviews__cards" ref={ref}>
        {tour}
      </div>
      <FaChevronCircleRight
        className="c-reviews__chevron chevron-next"
        onClick={sliderScrollRight}
      />
    </div>
  );
};

export default FeaturedTours;
