const Filter = (props) => {
  function handleFilterChange(event) {
    const { name, value } = event.target;
    const isChecked = event.target.checked;

    if (name === "price") {
      if (isChecked) {
        props.setPriceValue([...props.priceValue, value]);
      } else {
        const updatedPriceValue = props.priceValue.filter(
          (option) => option !== value
        );

        props.setPriceValue(updatedPriceValue);
      }
    } else if (name === "location") {
      if (isChecked) {
        props.setLocationValue([...props.locationValue, value]);
      } else {
        const updatedLocationValue = props.locationValue.filter(
          (option) => option !== value
        );
        props.setLocationValue(updatedLocationValue);
      }
    }
  }

  return (
    <div>
      <div className={`filter-menu ${props.isOpen && "open-filter-menu"}`}>
        <div className="price-filter">
          <label htmlFor="price" className="filter-label">
            Price:
          </label>
          <label htmlFor="1000" className="checkbox-label">
            <input
              type="checkbox"
              name="price"
              value="1000"
              id="1000"
              onChange={(event) => handleFilterChange(event)}
            />
            $500 - $1000
          </label>
          <label htmlFor="2000" className="checkbox-label">
            <input
              type="checkbox"
              name="price"
              value="3000"
              id="3000"
              onChange={(event) => handleFilterChange(event)}
            />
            $1000 - $3000
          </label>
          <label htmlFor="3001" className="checkbox-label">
            <input
              type="checkbox"
              name="price"
              value="3001"
              id="3001"
              onChange={(event) => handleFilterChange(event)}
            />
            $3000 and up
          </label>
        </div>
        <div className="filter-location">
          <label htmlFor="location" className="filter-label">
            Location:
          </label>
          <label htmlFor="europe" className="checkbox-label">
            <input
              type="checkbox"
              name="location"
              value="Europe"
              id="europe"
              onChange={(event) => handleFilterChange(event)}
            />
            Europe
          </label>
          <label htmlFor="south-america" className="checkbox-label">
            <input
              type="checkbox"
              name="location"
              value="South America"
              id="south-america"
              onChange={(event) => handleFilterChange(event)}
            />
            South America
          </label>
          <label htmlFor="asia" className="checkbox-label">
            <input
              type="checkbox"
              name="location"
              value="Asia"
              id="asia"
              onChange={(event) => handleFilterChange(event)}
            />
            Asia
          </label>
          <label htmlFor="north-america" className="checkbox-label">
            <input
              type="checkbox"
              name="location"
              value="North America"
              id="north-america"
              onChange={(event) => handleFilterChange(event)}
            />
            North America
          </label>
          <label htmlFor="oceania" className="checkbox-label">
            <input
              type="checkbox"
              name="location"
              value="Oceania"
              id="oceania"
              onChange={(event) => handleFilterChange(event)}
            />
            Oceania
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
