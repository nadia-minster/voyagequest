import "./tour.css";

const Itinerary = ({ itinerary }) => {
  if (!Array.isArray(itinerary)) {
    return null;
  }

  return itinerary.map((day) => (
    <div className="itinerary-single-item">
      <div className="day-and-title">
        <h4 className="tour-main-activity-title">{day.title}</h4>
        <h5 className="tour-main-day">{day.day}</h5>
      </div>
      <h4 className="tour-main-activity-description">{day.description}</h4>
    </div>
  ));
};

export default Itinerary;
