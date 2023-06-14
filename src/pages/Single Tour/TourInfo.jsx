import "./tour.css";

const TourInfo = ({ name, info_extended, location, price }) => {
  return (
    <div className="tour-info">
      <h2 className="tour-main-header">{name}</h2>
      <p className="tour-main-text">{info_extended}</p>
      <div className="tour-main-extra-info">
        <p>
          <span>Location: </span>
          {location}
        </p>
        <p>
          <span>Price: </span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default TourInfo;
