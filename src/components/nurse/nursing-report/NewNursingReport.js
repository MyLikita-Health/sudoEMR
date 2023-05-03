import React, { useState } from "react";
import { Input } from "reactstrap";
import CustomButton from "../../comp/components/Button";
import { checkEmpty } from "../../utils/helpers";

function NewNursingReport({ loading, handleSubmit }) {
  const [report, setReport] = useState("");

  const onSubmit = () => {
    handleSubmit(report);
  };

  return (
    <div className='p-2'>
      <div className="my-2">
      <Input
        value={report}
        onChange={(e) => setReport(e.target.value)}
        type="textarea"
        
      />
      </div>
      <CustomButton
        loading={loading}
        disabled={checkEmpty(report)}
        onClick={onSubmit}
      >
        Submit
      </CustomButton>
    </div>
  );
}

export default NewNursingReport;
