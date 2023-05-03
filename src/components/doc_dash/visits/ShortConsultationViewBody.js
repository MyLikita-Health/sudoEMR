import React from "react";
import { Col, Row } from "reactstrap";
import RadioGroup from "../../comp/components/RadioGroup";
// import CollapsibleCard from "../../CollapsibleCard";
import UserGuide from "../components/UserGuide";
import LabHistory from "./components/LabHistory";
import LabInvestigationRequests from "./components/LabInvestigationRequests";
import ManagementDecision from "./components/ManagementDecision";
import MedicationHistory from "./components/MedicationHistory";
import MedicationReport from "./components/MedicationReport";
import NursingDressingReq from "./components/NursingDressingReq";
import PatientInfoTopBar from "./components/PatientInfoTopBar";
import NewPrescriptionRequest from "./components/PrescriptionRequest";
import VitalSignsHistory from "./components/VitalSignsHistory";
import DiseaseSelector from "./DiseaseSelector";
import DoctorEncountersHistory from "./DoctorEncountersHistory";
import CollapsibleCard from "../../CollapsibleCard.js";

function ShortConsultationViewBody({
  sectionIsDisabled,
  sheetIsValid,
  consultation,
  handleConsultationChange,
  emptyPrescription,
  admissionMode,
  loading,
  patientInfo,
  submit,
  tabs,
  setconsultStatus = (g) => g,
  consultStatus,
  time_laps,
  timeLast,
}) {
  const getAlert = () => {
    return timeLast <= time_laps
      ? null
      : alert(
          `This consultation is more than ${time_laps} days, Please do a new consultation`
        );
  };
  return (
    <>
      <PatientInfoTopBar
        patientInfo={patientInfo}
        sheetIsValid={sheetIsValid}
        loading={loading}
        submit={submit}
      />
      <Row className="m-0">
        <Col md={8} className="p-0 px-1">
          {!sheetIsValid ? (
            <div
              style={{
                backgroundImage: `url(${require("../../../images/steth.jpg")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "85vh",
              }}
            ></div>
          ) : (
            <>
              <CollapsibleCard headerText="Consultation Sheet" defaultOpen>
                <div style={{ height: "73vh", overflow: "scroll" }}>
                  {/* {JSON.stringify(consultation.prescriptionRequestList)} */}
                  <div className="row m-0">
                    <div className="mb-1 col-md-8 p-0 px-1">
                      {/* <label htmlFor="">Presenting Complaints</label> */}
                      <div>
                        <label className="font-weight-bold">
                          Clerking Notes:
                        </label>
                        <textarea
                          value={consultation.presentingComplaint}
                          onChange={({ target: { value } }) =>
                            handleConsultationChange(
                              "presentingComplaint",
                              value
                            )
                          }
                          className="form-control"
                          rows={5}
                          disabled={!sheetIsValid}
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="font-weight-bold">
                          Treatment Plan:
                        </label>
                        <textarea
                          value={consultation.treatmentPlan}
                          onChange={({ target: { value } }) =>
                            handleConsultationChange("treatmentPlan", value)
                          }
                          className="form-control"
                          rows={5}
                          disabled={!sheetIsValid}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 px-1 p-0">
                      <RadioGroup
                        options={
                          tabs &&
                          tabs.map((a) => ({
                            name: a,
                            label: a,
                          }))
                        }
                        onChange={(n, v) => {
                          setconsultStatus(
                            timeLast <= time_laps ? v : "New Consultation"
                          );
                          getAlert();
                        }}
                        value={consultStatus}
                      />
                      <DiseaseSelector />
                    </div>
                  </div>
                  <NewPrescriptionRequest
                    patientInfo={patientInfo}
                    prescriptionList={consultation.prescriptionRequestList}
                    emptyPrescription={emptyPrescription}
                    handleConsultationChange={handleConsultationChange}
                  />

                  <LabInvestigationRequests
                    patientInfo={patientInfo}
                    labInvestigations={consultation.labInvestigations}
                    handleConsultationChange={handleConsultationChange}
                  />

                  <NursingDressingReq
                    nursingRequests={consultation.nursingRequests}
                    handleConsultationChange={handleConsultationChange}
                  />
                </div>
                <ManagementDecision
                  // admissionMode={admissionMode}
                  sheetIsValid={sheetIsValid && !admissionMode}
                  managementPlan={consultation.managementPlan}
                  handleConsultationChange={handleConsultationChange}
                />
              </CollapsibleCard>
            </>
          )}
        </Col>
        {sheetIsValid ? (
          <Col className="p-0" md={sectionIsDisabled ? 4 : 0}>
            <VitalSignsHistory />
            <MedicationHistory height="30vh" newBtn={false} />
            <MedicationReport />
            <LabHistory type="doctor" />
          </Col>
        ) : (
          <Col md={4} className="p-0">
            <DoctorEncountersHistory />
            <UserGuide />
          </Col>
        )}
      </Row>
    </>
  );
}

export default ShortConsultationViewBody;
