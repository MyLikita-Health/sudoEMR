import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

// const URI = 'https://api.github.com/search/users';

const AsyncTypeAhead = ({ options, name, labelkey = "label", ref }) => {
  const [singleSelections, setSingleSelections] = useState([]);

  console.error({ singleSelections });
  if (singleSelections.length > 0) {
    sessionStorage.removeItem(name);
    sessionStorage.setItem(name, JSON.stringify(singleSelections[0]));
  }
  return (
    <Typeahead
      ref={ref}
      id="basic-typeahead-single"
      labelKey={labelkey}
      onChange={setSingleSelections}
      clearButton
      options={options}
      placeholder={`Select ${name}`}
      selected={singleSelections}
    />
  );
};
export default AsyncTypeAhead;
