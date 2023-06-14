import { useState } from "react";
import { useParams } from "react-router-dom";
import TourInfo from "./TourInfo";
import Itinerary from "./Itinerary";
import SingleTourReviews from "./SingleTourReviews";
import { useGlobalContext } from "../../context/context";
import "./tour.css";

const TourPage = () => {
  const { bookedTour, setBookedTour, tours_data, reviews } = useGlobalContext();
  const [activeSection, setActiveSection] = useState("Tour Info");
  const { id } = useParams();
  const { location, name, price, img_large, itinerary, info_extended } =
    tours_data[id - 1];

  const tourId = id;
  const changeSection = (section) => {
    setActiveSection(section.target.textContent);
  };

  return (
    <div className="single-tour">
      <div className="tour-card">
        <img
          src={`${process.env.PUBLIC_URL}/images/${img_large}`}
          alt={name}
          className="tour-main-image"
        />
        <div className="tour-main-info">
          <ul className="tour-main-nav">
            <li
              className={
                activeSection === "Tour Info" ? "tour-main-nav-active" : null
              }
              onClick={(e) => changeSection(e)}
            >
              Tour Info
            </li>
            <li
              className={
                activeSection === "Itinerary" ? "tour-main-nav-active" : null
              }
              onClick={(e) => changeSection(e)}
            >
              Itinerary
            </li>
            <li
              className={
                activeSection === "Reviews" ? "tour-main-nav-active" : null
              }
              onClick={(e) => changeSection(e)}
            >
              Reviews
            </li>
          </ul>
          <div className="visible-section">
            {activeSection === "Tour Info" && (
              <TourInfo
                name={name}
                info_extended={info_extended}
                location={location}
                price={price}
              />
            )}
            {activeSection === "Itinerary" && (
              <Itinerary itinerary={itinerary} />
            )}
            {activeSection === "Reviews" && (
              <SingleTourReviews reviews={reviews} />
            )}
          </div>
        </div>
        <button
          className="btn btn-mainpage-tour"
          onClick={() => setBookedTour([...bookedTour, tourId])}
        >
          Book Today
        </button>
      </div>
    </div>
  );
};

export default TourPage;
