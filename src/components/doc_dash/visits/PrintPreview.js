import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { ConsultationRecord } from "../../comp/pdf-templates/consultations/consultation-record";
import { FaTimes } from "react-icons/fa";
import { Prescriptions } from "../../comp/pdf-templates/consultations/prescriptions-print";
import { LabResults } from "../../comp/pdf-templates/consultations/lab-result";

function DiganosisPrintPreview({
  facility,
  presenting_complaints,
  historyOfPComplaints,
  systemExam,
  athropometry,
  managementPlan,
  vitalSigns,
  problems,
  provisionalDiagnosis,
  dressingRequest,
  patientDetails,
  setPrint,
  prescriptionRequest,
  labDetails,
}) {
  return (
    <>
      <button
        className="btn btn-danger offset-md-11"
        onClick={() => setPrint(false)}
      >
        <FaTimes />
        <>Close</>
      </button>

      <center>
        <PDFViewer height="900" width="600">
          <ConsultationRecord
            logo={facility.logo}
            complaints={presenting_complaints}
            historyOfPComplaints={historyOfPComplaints}
            systemExam={systemExam}
            athropometry={athropometry}
            managementPlan={managementPlan}
            vitalSigns={vitalSigns}
            problems={problems}
            provisionalDiagnosis={provisionalDiagnosis}
            dressingRequest={dressingRequest}
            patientDetails={patientDetails}
            facilityInfo={facility}
          />
        </PDFViewer>
      </center>

      <center>
        <PDFViewer height="900" width="600">
          <Prescriptions
            logo={facility.logo}
            prescriptionRequest={prescriptionRequest}
            patientDetails={patientDetails}
            facilityInfo={facility}
          />
        </PDFViewer>
      </center>
      <center>
        <PDFViewer height="900" width="600">
          <LabResults
            logo={facility.logo}
            patientDetails={patientDetails}
            labDetails={labDetails}
            facilityInfo={facility}
          />
        </PDFViewer>
      </center>
    </>
  );
}

export default DiganosisPrintPreview;
