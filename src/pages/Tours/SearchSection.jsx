import { useState } from "react";
import FilterButton from "./Filter";
import SortButton from "./SortButton";
import { useMediaQuery } from "react-responsive";

const SearchSection = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSortChange = (event) => {
    props.setSortValue(event.target.value);
  };

  return (
    <div className={`search ${!isMobile && "search-desktop"}`}>
      <div className="search-section-closed">
        <SortButton onChange={handleSortChange} />
        <button className="filter-button" onClick={handleButtonClick}>
          Filter
        </button>
      </div>
      <FilterButton
        onChange={props.handleFilterChange}
        isOpen={isOpen}
        setPriceValue={props.setPriceValue}
        priceValue={props.priceValue}
        setLocationValue={props.setLocationValue}
        locationValue={props.locationValue}
      />
    </div>
  );
};

export default SearchSection;
