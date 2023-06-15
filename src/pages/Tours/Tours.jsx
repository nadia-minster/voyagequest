import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tours = (props) => {
  const [sortedTours, setSortedTours] = useState([]);

  const handleReset = () => {
    props.setLocationValue([]);
    props.setPriceValue([]);
  };

  useEffect(() => {
    let filteredTours = props.tours;
    if (props.priceValue && props.priceValue.length > 0) {
      filteredTours = filteredTours.filter((tour) => {
        const price = tour.price;
        if (props.priceValue.includes("1000") && price <= 1000) {
          return true;
        }
        if (
          props.priceValue.includes("2000") &&
          price > 1000 &&
          price <= 3000
        ) {
          return true;
        }
        if (props.priceValue.includes("3001") && price > 3000) {
          return true;
        }
        return false;
      });
    }

    if (props.locationValue && props.locationValue.length > 0) {
      filteredTours = filteredTours.filter((tour) => {
        return props.locationValue.includes(tour.location);
      });
    }

    if (props.sortValue === "high") {
      filteredTours = [...filteredTours].sort((a, b) => b.price - a.price);
    } else if (props.sortValue === "low") {
      filteredTours = [...filteredTours].sort((a, b) => a.price - b.price);
    } else if (props.sortValue === "featured") {
      filteredTours = [...filteredTours].sort(
        (a, b) => b.featured - a.featured
      );
    }

    setSortedTours(filteredTours);
  }, [
    props.tours,
    props.priceValue,
    props.locationValue,
    props.sortValue,
    handleReset,
  ]);

  return (
    <div className="all-tours-grid">
      {sortedTours.length === 0 ? (
        <div className="no-tours">
          <h2>No tours fit your serach</h2>
          <button className="btn" onClick={() => handleReset()}>
            Reset
          </button>
        </div>
      ) : (
        sortedTours.map((tour) => {
          return (
            <div className="tour-grid" key={tour.id}>
              <img
                className="tour-grid-img"
                src={`${process.env.PUBLIC_URL}/images//${tour.img}`}
                alt={`${tour.name}`}
              />
              <div className="tour-grid-info">
                <h4>{tour.name}</h4>
                <p>{tour.info}</p>
                <ul className="extra-tour-info">
                  <li>
                    <span>Location: </span>
                    {tour.location}
                  </li>
                  <li>
                    <span>Price: </span>${tour.price}
                  </li>
                </ul>
                <Link to={`/tours/${tour.id}`} className="btn tour-page-btn">
                  See Tour
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Tours;
