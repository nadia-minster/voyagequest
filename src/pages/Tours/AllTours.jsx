import { useState } from "react";
import SearchSection from "./SearchSection";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Tours from "./Tours";
import "./tours.css";

const AllTours = () => {
  const { state } = useLocation();
  const { tours_data } = useGlobalContext();
  const [sortValue, setSortValue] = useState("featured");
  const [priceValue, setPriceValue] = useState([]);
  const [locationValue, setLocationValue] = useState(
    state ? state.location : []
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const tours = tours_data;
  return (
    <div className="tours">
      <h2 className="tours-header">
        <span>Discover </span>Our Tours
      </h2>
      <SearchSection
        setSortValue={setSortValue}
        setPriceValue={setPriceValue}
        priceValue={priceValue}
        setLocationValue={setLocationValue}
        locationValue={locationValue}
      />

      <Tours
        tours={tours}
        sortValue={sortValue}
        priceValue={priceValue}
        locationValue={locationValue}
      />
    </div>
  );
};

export default AllTours;
