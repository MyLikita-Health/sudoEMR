import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import CollapsibleCard from "../../../CollapsibleCard.js";

function NursingDressingReq({
  nursingRequests = {},
  handleConsultationChange,
}) {
  // const [form, setForm] = useState({})
  const handleFormChange = ({ target: { name, value } }) => {
    let newState = { ...nursingRequests, [name]: value };
    handleConsultationChange("nursingRequests", newState);
  };
  // setForm((p) => ({ ...p, [name]: value }))

  return (
    <CollapsibleCard headerText="Dressing/Nursing Request Sheet">
      <Form>
        <FormGroup row className="m-0 p-0">
          <label>Dressing Information</label>
          <Input
            tag="textarea"
            name="dressingInfo"
            value={nursingRequests.dressingInfo}
            onChange={handleFormChange}
          />

          <label>Nursing Requests</label>
          <Input
            tag="textarea"
            name="nursingReq"
            value={nursingRequests.nursingReq}
            onChange={handleFormChange}
          />
        </FormGroup>
      </Form>
    </CollapsibleCard>
  );
}

export default NursingDressingReq;
