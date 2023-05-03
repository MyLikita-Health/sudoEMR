import React, { useState, useEffect } from "react";
import { Pane, Checkbox } from "evergreen-ui";

export default function CheckBoxItem({ label, name, handleCheck, value = [] }) {
//   const [checked, setChecked] = useState(value.indexOf(label) !== -1);

//   useEffect(() => setChecked(value.indexOf(label)), [value]);

  return (
    <Pane>
        {/* {value} */}
      <Checkbox
        label={label}
        checked={value.indexOf(label)!==-1}
        onChange={({ target }) => {
          handleCheck(name, target.checked, label);
        //   setChecked(target.checked);
        }}
      />
    </Pane>
  );
}
