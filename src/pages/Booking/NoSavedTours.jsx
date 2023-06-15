import { Link } from "react-router-dom";
import "./booking.css";

const NoSavedTours = () => {
  return (
    <div className="no-tours-to-display booking-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/no-tour.jpg`}
        alt="no tour chosen"
        className="no-tour-img"
      />
      <div className="no-tours-text">
        <h2>You haven't booked any tours yet.</h2>
        <p className="no-tours-paragraph">
          Don't miss out on the adventure of a lifetime! Check out our selection
          of handpicked tours and find the perfect one for you. Or take our fun
          quiz and discover which tour suits you best. Start planning your dream
          trip today!
        </p>
      </div>

      <Link to={"/tours"} className="btn btn-no-tour">
        Discover Tours
      </Link>
    </div>
  );
};

export default NoSavedTours;
