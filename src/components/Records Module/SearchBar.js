import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

export default function SearchBar(props) {
  const handleFilterTextChange = e => {
    props.onFilterTextChange(e.target.value);
  };

  return (
    <form>
      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <FontAwesome.FaSearch size={30} />
        </div>
        <input
          type="text"
          placeholder="Search for a patient..."
          className="form-control col-xs-10 col-sm-10 col-md-10 col-lg-10"
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
      </div>
    </form>
  );
}
