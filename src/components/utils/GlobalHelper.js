import React, { useState, useEffect } from "react";
import { apiURL } from "../../redux/actions";
import { _fetchApi } from "../../redux/actions/api";
import SelectInput from "../comp/components/SelectInput";

export default function BranchName({value=f=>f,handleChange=f=>f,name , editable}) {
  const [getBranch, setGetBranch] = useState([]);

  const _getAllBranch = () => {
    _fetchApi(
      `${apiURL()}/account/get-all/branches`,
      (data) => {
        if (data.success) {
          setGetBranch(data.results);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    _getAllBranch();
  }, []);
  const getBranchName = getBranch.map((item) => item.branch_name);
  return (  
      <SelectInput
       editable={editable}
        name={name}
        label="Branch Name "
        labelClass="font-weight-normal"
        container="col-md-4 col-lg-4"
        options={getBranchName}
        onChange={handleChange}
        value={value}
      />
  );
}
