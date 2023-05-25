import React, { useState, useEffect, useCallback } from "react";
import AppointmentForm from "./AppointmentForm";
import { Card, CardHeader } from "reactstrap";
import { FaTimes } from "react-icons/fa";
import { iconClass } from "./NewAppointment2";
import { FiSend } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { withRouter, useHistory } from "react-router";
import { useSelector } from "react-redux";
// import {
//   getAppointment,
//   updateAppointment,
//   deleteAppointment,
//   appointmentFunc,
// } from "../actions/appointmentsAction";
import { WarningModal } from "../../comp/components/Modal";
import { _customNotify } from "../../utils/helpers";
import BackButton from "../../comp/components/BackButton";
import { useQuery } from "../../../hooks";
import { appointmentFunc } from "../actions/appointmentsAction";

function ViewAppointment() {
  const query = useQuery();
  let _id = query.get("appointmentId");
  const { facilityId, id } = useSelector((state) => state.auth.user);
  const [appointment, setAppointment] = useState({});
  const [editable, toggleEditable] = useState(false);
  const [showWarning, toggleShowWarning] = useState(false);

  const history = useHistory();

  const closeWarning = () => toggleShowWarning(false);

  const openWarning = () => toggleShowWarning(true);

  const getAppointmentByDoc = useCallback(
    (query_type = "select_one") => {
      const formData = {
        facilityId,
        id: _id,
        user_id: id,
        query_type: query_type,
      };
      let err = () => {
        console.log("error occur");
      };
      appointmentFunc(
        formData,
        (d) => {
          let data = d && d.results[0];

          setAppointment({ ...data });
        },
        err
      );
    },
    [facilityId, id, _id]
  );

  useEffect(() => {
    // getAppointmentDetails(_id, _setApt);
    getAppointmentByDoc("select_one");
  }, [getAppointmentByDoc]);

  const onInputChange = (name, value) =>
    setAppointment({
      ...appointment,
      [name]: value,
    });
  const _deleteAppointment = () => {
    const formData = {
      facilityId,
      id: _id,
      query_type: "delete",
    };
    let err = () => {
      console.log("error occur");
    };
    appointmentFunc(
      formData,
      () => {
        getAppointmentByDoc("select");
        _customNotify("Appointment Deleted!");
        history.push("/me/doctors/appointments");
      },
      err
    );
  };

  const _updateAppointment = () => {
    // updateAppointment(
    //   appointment._id,
    //   appointment,
    //   () => toggleEditable(false),
    //   (err) => console.log(err)
    // );
  };

  return (
    <>
      <BackButton />
      <Card className="mt-xs-2">
        <CardHeader
          tag="div"
          className="row m-0 d-flex flex-direction-row justify-content-between align-items-center"
        >
          <h6 className="col-md-6 col-lg-6">View Appointment</h6>

          <div className="d-flex flex-direction-row">
            {/* {!editable && (
              <button
                className={`btn btn-outline-dark mr-md-2 ${iconClass}`}
                onClick={() => toggleEditable(true)}
              >
                <FaEdit size={20} /> Edit
              </button>
            )} */}
            <button
              className={`btn btn-outline-danger ${iconClass}`}
              onClick={openWarning}
            >
              <MdDelete size={20} /> Delete Appointment
            </button>
          </div>
        </CardHeader>

        <AppointmentForm
          nameNotEditable={true}
          editable={editable}
          appointment={appointment}
          onInputChange={onInputChange}
        />

        {editable && (
          <div className="d-flex flex-direction-row justify-content-center">
            <div className="btn-group btn-group mt-2 mb-2">
              <button
                className="btn btn-outline-primary mr-1"
                onClick={_updateAppointment}
              >
                <span className={iconClass}>
                  <FiSend size={20} className="mr-1" />
                  Update
                </span>
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => toggleEditable(false)}
              >
                <span className={iconClass}>
                  <FaTimes size={20} className="mr-1" />
                  Cancel
                </span>
              </button>
            </div>
          </div>
        )}

        <WarningModal
          title="Delete Warning"
          body="This action is not reversible, Are you sure you want to delete?"
          isOpen={showWarning}
          toggle={closeWarning}
          okay={_deleteAppointment}
        />
      </Card>
    </>
  );
}

export default withRouter(ViewAppointment);
