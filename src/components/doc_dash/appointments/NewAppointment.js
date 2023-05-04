import React, { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";
import { Card, CardHeader } from "reactstrap";
import { FaTimes, FaSave } from "react-icons/fa";
import { iconClass } from "./NewAppointment2";
import { FiSend } from "react-icons/fi";
import { useHistory, useRouteMatch } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import { appointmentFunc } from "../actions/appointmentsAction";
import {
  getPatientList,
  clearPatient,
  getPatient,
} from "../actions/patientsActions";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import moment from "moment";
import { saveFollowupAppointment } from "../../../redux/actions/doctor";
import BackButton from "../../comp/components/BackButton";
import { useQuery } from "../../../hooks";

function NewAppointment() {
  const match = useRouteMatch();
  const selected = match.params.patientId;
  const type = match.params.type;
  const query = useQuery();
  const new_date = query.get("date");
  const [appointment, setAppointment] = useState({
    patientId: "",
    start: new Date(),
    end: new Date(),
    date: "",
    location: "",
    appointmentType: selected ? "Follow-up" : "",
    patient_name: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const toggleSubmit = () => setSubmitting(!submitting);
  const history = useHistory();
  const dispatch = useDispatch();

  const patientList = useSelector((state) => state.individualDoc.patients);
  const { facilityId, id } = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getPatientList());
  }, [dispatch]);
  useEffect(() => {
    if (selected) {
      dispatch(
        getPatient(selected, (pat) =>
          onPatientNameChange(
            // pat._id,
            pat._id,
            `${pat.surname} ${pat.firstname}`
          )
        )
      );
    }
  }, [selected]);

  const onInputChange = (name, value) =>
    setAppointment({
      ...appointment,
      [name]: value,
    });

  const onPatientNameChange = (patientId, patient_name) => {
    setAppointment({
      ...appointment,
      patientId,
      patient_name,
    });
  };

  const submit = () => {
    toggleSubmit();
    const {
      patientId,
      start,
      location,
      appointmentType,
      notes,
      patient_name,
    } = appointment;
    if (patientId === "" || patient_name === "") {
      _warningNotify("Please submit a valid appointment");
    } else {
      console.log(start);
      const formData = {
        patientId,
        start_at: moment(start).format("YYYY-MM-DD hh:mm:ss"),
        end_at: moment(start).format("YYYY-MM-DD hh:mm:ss"),
        location,
        appointmentType,
        notes,
        patient_name,
        facilityId,
        user_id: id,
        query_type: "insert",
      };

      let err = () => {
        // _warningNotify("An error occurred");
        toggleSubmit();
      };
      appointmentFunc(
        formData,
        () => {
          toggleSubmit();
          _customNotify("Appointment created and added to calender");
          history.push(`/me/doctor/appointments`);
          //  history.push(
          //    `/me/doctor/patients/view/${patientId && patientId}/appointments`
          //  );
        },
        err
      );
      // console.log(formData);
    }
  };

  const saveFollowup = () => {
    const {
      patientId,
      start,
      location,
      appointmentType,
      notes,
      patient_name,
    } = appointment;
    const formData = {
      patientId,
      start: new Date(start),
      end: new Date(start),
      location,
      appointmentType,
      notes,
      patient_name,
      facilityId,
      user_id: id,
    };
    saveFollowupAppointment(formData);
  };

  return (
    <>
      <BackButton text="Go Back" />
      <Card className="mt-xs-2">
        <CardHeader tag="h6">New Appointment</CardHeader>
        <AppointmentForm
          editable={true}
          appointment={appointment}
          onInputChange={onInputChange}
          patients={patientList}
          clearPatient={clearPatient}
          onPatientNameChange={onPatientNameChange}
          nameNotEditable={selected}
          typeNotEditable={selected && type}
          new_date={new_date}
        />

        <div className="d-flex flex-direction-row justify-content-center">
          <div className="btn-group btn-group mt-2 mb-2">
            {selected && type ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  saveFollowup();
                  history.goBack();
                }}
              >
                <FaSave size={20} className="mr-1" />
                Save and continue
              </button>
            ) : (
              <>
                <button
                  className="btn btn-outline-primary mr-1"
                  onClick={submit}
                >
                  <span className={iconClass}>
                    <FiSend size={20} className="mr-1" />
                    Submit
                  </span>
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <span className={iconClass}>
                    <FaTimes size={20} className="mr-1" />
                    Cancel
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}

function mapStateToProps(state) {
  // return {
  //   patients: state.individualDoc.patients,
  // };
}

function mapDispatchToProps(dispatch) {
  return {
    // getPatients: () => dispatch(getPatientList()),
    // saveAppointment: (data, cb, err) =>
    //   dispatch(appointmentFunc(data, cb, err)),
    // clearPatient: () => dispatch(clearPatient()),
    // saveFollowupAppointment: (data) => dispatch(saveFollowupAppointment(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAppointment);
