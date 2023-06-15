import { useState } from "react";
import NoSavedTours from "./NoSavedTours";
import SingleBookedTour from "./SingleBookedTour";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import "./booking.css";

const Booking = () => {
  const { bookedTour } = useGlobalContext();

  return (
    <div className="booking-main">
      {bookedTour.length === 0 ? (
        <NoSavedTours />
      ) : (
        bookedTour.map((tour) => <SingleBookedTour tourId={tour} key={tour} />)
      )}
      {bookedTour.length > 0 && (
        <button
          className="btn checkout-btn"
          onClick={() => window.open("https://nadia-minster.com", "_blank")}
        >
          Book
        </button>
      )}
    </div>
  );
};

export default Booking;
