import { useState } from "react";
import tours_data from "../../data/tours.json";
import "./booking.css";

const SingleBookedTour = (props) => {
  const [discount, setDiscount] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const tour = tours_data.tours_data[props.tourId];

  console.log(tour);
  return (
    <div className="booking-container single-booking-container">
      {tour.name && (
        <div className="single-booking">
          <img
            src={`${process.env.PUBLIC_URL}/images/${tour.img}`}
            alt={tour.name}
            className="checkout-img"
          />
          <div className="booking-tour-text">
            <h2>{tour.name}</h2>
            <div className="booking-info">
              <h4>Location:</h4>
              <p>{tour.location}</p>
            </div>
            <div>
              <div className="booking-info">
                <h4>Duration:</h4>
                <p>5 days</p>
              </div>
              <div className="booking-info">
                <h4>Price:</h4>
                {discount === "QUIZ20" ? (
                  <h4>{`$${tour.price - tour.price * 0.2}`}</h4>
                ) : (
                  <p>${tour.price}</p>
                )}
              </div>
            </div>
            <div className="discount">
              <label htmlFor="discount-field" className="discount-label">
                discount code
              </label>
              <input
                value={discountCode}
                type="text"
                id="discount-field"
                placeholder="Your discount:"
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className="apply-btn"
                onClick={() => setDiscount(discountCode)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBookedTour;
