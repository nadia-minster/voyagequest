const SortButton = (props) => {
  return (
    <div>
      <label htmlFor="sort" className="sort-label">
        Sort By:
      </label>
      <select name="sort" id="sort" onChange={props.onChange}>
        <option value="featured">Featured Tours</option>
        <option value="high">Price High To Low</option>
        <option value="low">Price Low To High</option>
      </select>
    </div>
  );
};

export default SortButton;
