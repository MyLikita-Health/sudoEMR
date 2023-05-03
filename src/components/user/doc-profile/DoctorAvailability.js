import React, { useState, useEffect } from "react";
import { Card, FormGroup } from "reactstrap";
import { apiURL } from "../../../redux/actions";
import AutoCompleteWithMultipleSelection from "../../comp/components/AutoCompleteWithMultipleSelection";
import CustomButton from "../../comp/components/Button";
import { _customNotify, _warningNotify } from "../../utils/helpers";

export function DocAvailable({
  onInputChange = (f) => f,
  profile = {},
  getProfile = (f) => f,
}) {
  const [editable, setEditable] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const obj = {
      availableDays: profile.availableDays,
      availableFromTime: profile.availableFromTime,
      availableToTime: profile.availableToTime,
    };
    updateAvailablility(obj);
  };

  useEffect(() => {
    if (profile.availableDays) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  }, []);

  const options = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const updateAvailablility = async (obj) => {
    setLoading(true);
    const id = profile.id;

    try {
      let response = await fetch(
        `${apiURL()}/users/doctor/availability/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        }
      );

      console.log(response);
      setLoading(false);
      _customNotify("Your availability has been updated successfully.");
      getProfile();
    } catch (error) {
      console.log(error);
      setLoading(false);
      _warningNotify("An error occured");
    }
  };

  const formValid =
    profile.availableDays &&
    profile.availableDays !== "" &&
    (profile.availableFromTime && profile.availableFromTime !== "") &&
    (profile.availableToTime && profile.availableToTime !== "");
  return (
    <Card className="p-3 bg-light mb-2 mt-2">
      <div
        className="text-center"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      >
        Specify the days and time you can be available for appointments.
      </div>
      <FormGroup row>
        <AutoCompleteWithMultipleSelection
          containerClass="col-md-6 col-lg-6"
          labelKey="availableDays"
          name="availableDays"
          value={profile.availableDays}
          multiple
          options={options}
          onChange={(e) => onInputChange("availableDays", e.join(","))}
          placeholder="Choose days you will be available"
          editable={editable}
          toggleEdit={() => setEditable((d) => !d)}
        />

        <div className="col-md-3 col-lg-3">
          <span style={{ marginRight: 5 }}>From (time) </span>
          <input
            className="form-control"
            type="time"
            name="availableFromTime"
            value={profile.availableFromTime}
            onChange={(e) => onInputChange("availableFromTime", e.target.value)}
          />
        </div>
        <div className="col-md-3 col-lg-3">
          <span style={{ marginRight: 5 }}>To (time) </span>
          <input
            className="form-control"
            type="time"
            name="availableToTime"
            value={profile.availableToTime}
            onChange={(e) => onInputChange("availableToTime", e.target.value)}
          />
        </div>
      </FormGroup>
      <center>
        <CustomButton
          loading={loading}
          onClick={handleSubmit}
          disabled={!formValid}
        >
          Update Availability
        </CustomButton>
      </center>
    </Card>
  );
}
