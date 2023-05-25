// import moment from 'moment'
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Alert, Button } from "reactstrap";
import { apiURL } from "../../../../redux/actions";
import { _updateApi } from "../../../../redux/actions/api";
import CustomButton from "../../../comp/components/Button";
import CustomModal from "../../../comp/components/CustomModal";
import CustomTable from "../../../comp/components/CustomTable";
import CollapsibleCard from "../../../CollapsibleCard.js";
import { getPrescriptionForPatient } from "../../../nurse/drug-schedule";
// import NewPrescriptionRequest from "./PrescriptionRequest";
// import PrescriptionForm from './PrescriptionForm'

function MedicationHistory({ isOpen, toggle, height = "40vh", newBtn = true }) {
  const { patientId } = useParams();
  const [medication, setMedications] = useState([]);
  const [modal, setModal] = useState(false);
  const toggelDrugs = () => setModal((p) => !p);
  const [mode] = useState("view");
  const location = useLocation();
  let doctorCond = location.pathname.includes("/me/doctors/visits");
  const isNurse = location.pathname.includes("nurse");

  const stopMedication = (drug) => {
    _updateApi(
      `${apiURL()}/drug-schedule/update-status`,
      {
        schedule_id: drug.id,
        query_type: "stop",
        reason: "",
      },
      () => {
        getMedicationHistory();
        //   setLoading(false);
        //   getDrugSchedule();
        //   _customNotify("Schedule updated!");
      },
      () => {
        //   setLoading(false);
        alert("An error occured");
      }
    );
  };

  // const editMedication = (med) => {
  //   setCurrentMed(med)
  //   setMode('edit')
  // }

  const fields = [
    {
      title: "Date",
      value: "created_at",
      custom: true,
      component: (item) => (
        <span>{moment(item.created_at).format("DD/MM/YYYY")}</span>
      ),
    },
    { title: "Medication", value: "medication" },
    // { title: 'Dosage', value: 'dosage' },
    // {
    //   title: 'Days',
    //   custom: true,
    //   component: (d) => <span>{d.duration}</span>,
    // },
    isNurse
      ? {}
      : {
          title: "Action",
          custom: true,
          component: (item) => (
            <>
              <CustomButton
                size="sm"
                color="warning"
                onClick={() => stopMedication(item)}
              >
                Stop
              </CustomButton>
              {/* <CustomButton
            size="sm"
            color="success"
            onClick={() => editMedication(item)}
          >
            Edit
          </CustomButton> */}
            </>
          ),
        },
  ];

  const getMedicationHistory = useCallback(() => {
    getPrescriptionForPatient(patientId, "current").then((resp) => {
      setMedications(resp);
      console.error({ resp });
    });
  }, [patientId]);

  useEffect(() => getMedicationHistory(), [getMedicationHistory]);

  return (
    <>
      <CustomModal isOpen={modal} toggle={toggelDrugs}>
        <h1>TESTING</h1>
        {/* <NewPrescriptionRequest
          prescriptionList={[]}
          emptyPrescription={[]}
          handleConsultationChange={(f) => f}
        /> */}
      </CustomModal>
      <CollapsibleCard
        headerText="Active Medications"
        defaultOpen={doctorCond ? true : isOpen}
        toggle={toggle}
        body="p-1"
        style={{ height, overflow: "scroll" }}
      >
        {newBtn && (
          <Button
            size="sm"
            color="primary"
            className="float-right m-1"
            onClick={toggelDrugs}
          >
            Create New
          </Button>
        )}
        {mode === "view" && (
          <CustomTable size="sm" fields={fields} data={medication} />
        )}
        {/* {mode === 'edit' && <EditMedication medication={currentMed} />} */}
        {/* //   ) : null} */}
        {!medication && !medication.length ? <Empty /> : null}
      </CollapsibleCard>
    </>
  );
}

const Empty = () => (
  <Alert color="primary" className="text-center">
    No active medication found.
  </Alert>
);

// function EditMedication() {
//   return (
//     <div>
//       <PrescriptionForm form={{}} />
//     </div>
//   )
// }

export default MedicationHistory;
