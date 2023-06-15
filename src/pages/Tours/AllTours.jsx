import { useState } from "react";
import SearchSection from "./SearchSection";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Tours from "./Tours";
import "./tours.css";

const AllTours = () => {
  const { state } = useLocation();
  const { tours_data } = useGlobalContext();
  const [sortValue, setSortValue] = useState("featured");
  const [priceValue, setPriceValue] = useState(state ? state.price : []);
  const [locationValue, setLocationValue] = useState(
    state ? state.location : []
  );
  console.log(priceValue, locationValue);
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
        setPriceValue={setPriceValue}
        setLocationValue={setLocationValue}
      />
    </div>
  );
};

export default AllTours;
