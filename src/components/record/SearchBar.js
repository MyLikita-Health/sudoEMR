import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
// import { SearchInput } from 'evergreen-ui';

export default function SearchBar({
  placeholder = "",
  filterText = "",
  onFilterTextChange = (f) => f,
  _ref = null,
  container = "",
}) {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className={`form-group has-search ${container}`}>
      <span className="form-control-feedback">
        <FaSearch />
      </span>
      <input
        ref={_ref}
        name="filterText"
        value={filterText}
        onChange={handleFilterTextChange}
        type="text"
        className="form-control"
        placeholder={
          placeholder !== "" ? placeholder : "Search for a patient..."
        }
      />
    </div>
  );
}
