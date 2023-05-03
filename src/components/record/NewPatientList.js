import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { getPatientList } from "../doc_dash/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
// import { FallbackComp } from "../comp/components/FallbackSkeleton";
import PatientTable from "./PatientTable";
// import InPatientTable from "../nurse/InPatientTable";
import AddPatientButton from "./patients/AddPatientButton";
// import PropTypes from 'prop-types';

/**
 * This component renders the table that consist
 * the table of patients and also a search textbox
 * that filters the patient with whatever you input
 */
export default function NewPatientList(props) {
  // const list = useSelector((state) => state.records.patientlist);
  const list = useSelector((state) => state.individualDoc.patients);
  const [isLoading] = useState(false);

  const { openDoctorsModal, error, openModal, renderEditButton } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPatientList())
    console.log('getting list')
    dispatch(getPatientList());
  }, []);

  return (
    <div>
      <AddPatientButton />
      {/* search text field */}

      <Switch>
        <Route exact path="/me/records/patients/list">
          <PatientTable
            patientlist={list}
            openDoctorsModal={openDoctorsModal}
            error={error}
            /*
                this part is used to enable in-records delete operations
                to activate this action, uncomment the code below
              */
            // deletepatientrecords={this.props.deletepatientrecords}}
            openModal={openModal}
            loading={isLoading}
            renderEditButton={renderEditButton}
          />
        </Route>
       
      </Switch>
    </div>
  );
}
