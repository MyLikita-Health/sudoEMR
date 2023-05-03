import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { Row, Col } from 'reactstrap'
import { useQuery } from '../../../hooks'
import { apiURL } from '../../../redux/actions'
import { _fetchApi } from '../../../redux/actions/api'
import BackButton from '../../comp/components/BackButton'
import CustomButton from '../../comp/components/Button'
import CustomScrollbar from '../../comp/components/CustomScrollbar'
import useWindowDimensions from '../../comp/getWindowDimension'
import LabHistory from '../../doc_dash/visits/components/LabHistory'
import MedicationHistory from '../../doc_dash/visits/components/MedicationHistory'
import NurseryNote from '../../doc_dash/visits/components/NurseryNote'
import VitalSignsHistory from '../../doc_dash/visits/components/VitalSignsHistory'
import { getAgeFromDOB } from '../../utils/helpers'
import { NURSING_ROUTE_ROOT } from '../routes'
// import NursingRequests from '../nursing-requests'
import FluidChart from "./FluidChart";
import PatientNursingRequests from "./NursingRequests";
import PatientDrugSchedule from "./PatientDrugSchedule";
import TopBar from "./TopBar";
import TreatmentPlan from "./TreatmentPlan";

function DetailsContainer() {
  const { patientId } = useParams();
  const query = useQuery();
  const allocation_id = query.get("patient_id");
  const history = useHistory();
  const [patientInfo, setPatientInfo] = useState({});
  const [modalState, setModalState] = useState({
    medicationHistory: true,
    vitalHistory: true,
    treatmentPlan: true,
    nursingReq: true,
    fluidChart: true,
    labHistory: true,
  });

  useEffect(() => {
    if (patientId) {
      _fetchApi(`${apiURL()}/lab/patient/info/${patientId}`, (data) => {
        if (data) {
          console.log(data);
          setPatientInfo(data.results[0]);
        }
      });
    }
  }, [patientId]);

  const toggle = (name) => setModalState((p) => ({ ...p, [name]: !p[name] }));

  const collapseAll = () => {
    setModalState({
      medicationHistory: false,
      vitalHistory: false,
      treatmentPlan: false,
      nursingReq: false,
      fluidChart: false,
      labHistory: false,
    });
  };

  const expandAll = () => {
    setModalState({
      medicationHistory: true,
      vitalHistory: true,
      treatmentPlan: true,
      nursingReq: true,
      fluidChart: true,
      labHistory: true,
    })
  }

  const allCollapsed = Object.values(modalState).every((a) => !a)
  const { height } = useWindowDimensions();
  return (
    <div>
      <CustomScrollbar height={height}>
        <TopBar
          patientInfo={patientInfo}
          allCollapsed={allCollapsed}
          expandAll={expandAll}
          collapseAll={collapseAll}
          allocation_id={allocation_id}
        />
        <Row className="m-0">
          <Col md={4} className="p-0">
            <PatientDrugSchedule />
            <NurseryNote />
          </Col>
          <Col md={8} className="row m-0 p-0">
            <Col md={6} className="p-0">
              <VitalSignsHistory
                height="40vh"
                toggle={() => toggle("vitalHistory")}
                isOpen={modalState.vitalHistory}
              />
            </Col>
            <Col md={6} className="p-0">
              <MedicationHistory
                toggle={() => toggle("medicationHistory")}
                isOpen={modalState.medicationHistory}
              />
            </Col>
            <Col md={6} className="p-0">
              <TreatmentPlan
                toggle={() => toggle("treatmentPlan")}
                isOpen={modalState.treatmentPlan}
              />
            </Col>
            <Col md={6} className="p-0">
              <PatientNursingRequests
                toggle={() => toggle("nursingReq")}
                isOpen={modalState.nursingReq}
              />
            </Col>
            <Col md={6} className="p-0">
              <FluidChart
                toggle={() => toggle("fluidChart")}
                isOpen={modalState.fluidChart}
              />
            </Col>
            <Col md={6}>
              <LabHistory
                isOpen={modalState.labHistory}
                _toggle={() => toggle("labHistory")}
                type="doctor"
              />
            </Col>
          </Col>
        </Row>
      </CustomScrollbar>
    </div>
  );
}

export default DetailsContainer;
