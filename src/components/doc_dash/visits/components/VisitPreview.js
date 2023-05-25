import React from "react";
import { Alert, Card } from "reactstrap";
// import moment from 'moment'
import { useState } from "react";
import { useEffect } from "react";
import { _fetchApi } from "../../../../redux/actions/api";
import { apiURL } from "../../../../redux/actions";
import { useParams, useHistory, useLocation } from "react-router";
// import {useSear} from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import Loading from "../../../comp/components/Loading";
import { getAgeFromDOB, _customNotify } from "../../../utils/helpers";
import {
  getPatientConsultationList,
  getPatientOperationNotesList,
  // getPatientVisits,
  // getVisitDetails2,
  updateVisit,
} from "../../actions/visitsActions";
// import BackButton from "../../../comp/components/BackButton";
import { useQuery } from "../../../../hooks";
// import { LabRequestTable } from '../../../doctor/lab-test/LabRequestTable'
// import CustomButton from '../../../comp/components/Button'
// import { useDispatch } from "react-redux";
// import moment from 'moment'
// import { FaEdit, FaSave } from 'react-icons/fa'
// import Textarea from './Textarea'
import VisitPreviewItem from "./VisitPreviewItem";
import CustomButton from "../../../comp/components/Button";
import moment from "moment";
// import VisitDatesPicker from './VisitDatesPicker'
import { getConsultationRecord } from "./helper";
import LabHistory from "./LabHistory";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEye,
  FaNotesMedical,
  FaSuperpowers,
} from "react-icons/fa";
// import { URLSearchParams } from 'url'
import { IoMdDocument } from "react-icons/io";
import VitalSignsHistory from "./VitalSignsHistory";
import MedicationHistory from "./MedicationHistory";
import MedicationReport from "./MedicationReport";
import VisitHistory from "./VisitHistory";
import OpDetailView from "../operation-notes/OpDetailView";
import SurgicalNoteList from "./SurgicalNoteList";

export const consultationViewQueryTypes = {
  CONSULTATION: "Encounters",
  OP_NOTES: "Surgeries",
};

function VisitPreview() {
  // const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // const { search } = useLocation()
  const query = useQuery();
  // const visitId = query.get("visit_id");
  const patientType = query.get("patientType");
  const [loading, setLoading] = useState(false);
  const isNurse = location.pathname.includes("nurse");
  const [patientDetails, setPatientDetails] = useState({});
  const today = moment().format("YYYY-MM-DD");
  // const [visitDetails, setVisitDetails] = useState({})
  // const [visitList, setVisitList] = useState({})
  const { patientId } = useParams();
  const [isEditting, setIsEditting] = useState(false);
  const [selected, setSelected] = useState({});
  const [visitDays, setVisitDays] = useState([]);
  const [visitList, setVisitList] = useState([]);
  const [loadingVisitDates, setLoadingVisitDates] = useState(false);
  const [loadingOpDates, setLoadingOpDates] = useState(false);
  const [, setViewType] = useState(consultationViewQueryTypes.CONSULTATION);
  const [isLoadingRecord, setIsLoadingRecord] = useState(false);
  const [isLoadingConsult, setIsLoadingConsult] = useState(false);

  const [surgeryDays, setSurgeryDays] = useState([]);
  // const [surgeryList, setSurgeryList] = useState([]);

  const [queryDate, setQueryDate] = useState({
    date: today,
    type: consultationViewQueryTypes.CONSULTATION,
  });

  useEffect(() => {
    setLoadingOpDates(true);
    setLoadingVisitDates(true);
    getConsultationRecord(
      "visit_days",
      (data) => {
        setLoadingVisitDates(false);
        if (data && data.results && data.results.length) {
          setVisitDays(data.results.map((p) => p.created_at));
          setQueryDate((p) => ({
            ...p,
            date: data.results && data.results[0].created_at,
          }));
        }
      },
      patientId,
      () => setLoadingVisitDates(false)
    );
    getConsultationRecord(
      "surgery_days",
      (data) => {
        setLoadingOpDates(false);
        if (data && data.results && data.results.length) {
          setSurgeryDays(data.results.map((p) => p.created_at));
          // setQueryDate(data.results && data.results[0].created_at)
        }
      },
      patientId,
      () => setLoadingOpDates(false)
    );
  }, [patientId]);

  const handleEdit = ({ target: { name, value } }) => {
    console.log(name, value);
    setSelected((p) => ({ ...p, [name]: value }));
  };
  // const patientVisits = useSelector(
  //   (state) => state.individualDoc.patientVisits,
  // )

  useEffect(() => {
    _fetchApi(`${apiURL()}/lab/patient/info/${patientId}`, (data) => {
      setLoading(false);
      if (data && data.results && data.results.length) {
        console.log(data);
        setPatientDetails(data.results[0]);
      }
    });
  }, [patientId]);

  useEffect(() => {
    // setLoading(true)

    // getVisitDetails2(visitId, (data) => setVisitDetails(data))
    if (queryDate.type === consultationViewQueryTypes.CONSULTATION) {
      setIsLoadingConsult(true);
      getPatientConsultationList(
        patientId,
        (data) => {
          setViewType(queryDate.type);
          if (data.results) {
            setVisitList(data.results);
            setIsLoadingConsult(false);
          }
        },
        "by_date",
        queryDate.date
      );
    } else if (queryDate.type === consultationViewQueryTypes.OP_NOTES) {
      setIsLoadingRecord(true);
      getPatientOperationNotesList(
        patientId,
        (data) => {
          setViewType(queryDate.type);
          if (data.results) {
            console.log(data.results);
            setVisitList(data.results);
            setIsLoadingConsult(false);
          }
        },
        "by_date",
        queryDate.date
      );
    }
  }, [patientId, queryDate.date, queryDate.type]);

  const saveUpdate = () => {
    setIsEditting(false);
    setSelected({});
    updateVisit(selected, () => {
      getPatientConsultationList(patientId, (data) => {
        if (data.results) {
          // console.log(data.results, 'data.results/')
          setVisitList(data.results);
        }
      });
    });
    _customNotify("Update saved!");
  };

  // const addQuery = (key, value) => {
  //   let pathname = location.pathname;
  //  // returns path: '/app/books'
  //   let searchParams = new URLSearchParams(location.search);
  //  // returns the existing query string: '?type=fiction&author=fahid'
  //   searchParams.set(key, value);
  //   history.push({
  //            pathname: pathname,
  //            search: searchParams.toString()
  //      });
  //  };

  //   const removeQuery = (key) => {
  //   let pathname = location.pathname;
  //  // returns path: '/app/books'
  //   let searchParams = new URLSearchParams(location.search);
  //  // returns the existing query string: '?type=fiction&author=fahid'
  //   searchParams.delete(key);
  //   history.push({
  //            pathname: pathname,
  //            search: searchParams.toString()
  //      });
  //  };

  return (
    <Card className="p-0">
      {loading && <Loading />}
      {/* {JSON.stringify(queryDate)} */}
      {/* {JSON.stringify(visitDetails.labInvestigations)} */}

      <div className="d-flex flex-direction-row justify-content-between mb-1">
        <CustomButton
          color="success"
          size="sm"
          onClick={() =>
            history.push(
              "/me/doctors/visits/new-summary/view?section=in-patients"
            )
          }
        >
          <FaArrowLeft className="mr-2" />
          Back
        </CustomButton>
        <div>
          <span className="font-weight-bold m-0 mx-2">
            {patientDetails.name} ({patientDetails.id}),
          </span>
          <span className="font-weight-bold m-0 mx-2">
            <span>{getAgeFromDOB(patientDetails.dob)}, </span>
            <span>{patientDetails.gender}</span>
          </span>
        </div>

        {isNurse ? (
          <div></div>
        ) : (
          <div>
            {patientDetails.name !== undefined && (
              <>
                <CustomButton
                  color="secondary"
                  size="sm"
                  className="mr-1"
                  onClick={() =>
                    history.push(
                      `/me/doctors/medical-report/new?patient_details=${JSON.stringify(
                        patientDetails
                      )}&patientType=${patientType}`
                    )
                  }
                >
                  <FaSuperpowers size={20} className="mr-2" />
                  Medical Report
                </CustomButton>
                <CustomButton
                  color="dark"
                  size="sm"
                  className="mr-1"
                  onClick={() =>
                    history.push(
                      `/me/doctors/surgical-note/new?patient_id=${patientDetails.id}&patient_name=${patientDetails.name}&patientType=${patientType}`
                    )
                  }
                >
                  <IoMdDocument size={20} className="mr-2" />
                  New Surgical Consent
                </CustomButton>
              </>
            )}
            <CustomButton
              color="primary"
              size="sm"
              className="mr-1"
              onClick={() => {
                // history.goBack();
                history.push(
                  `/me/doctors/past-records/${patientDetails.id}?view_type=Consultation&patientType=${patientType}`
                );
              }}
            >
              <FaEye size={20} className="mr-2" />
              View Attachment
            </CustomButton>
            <CustomButton
              color="info"
              size="sm"
              className="mr-1"
              onClick={() =>
                history.push(
                  `/me/doctors/operation-notes/new/${patientDetails.id}?section=disabled&patient_id=${patientDetails.id}&show_back=true&patientType=${patientType}`
                )
              }
            >
              <FaNotesMedical size={20} className="mr-2" />
              New Operation Note
            </CustomButton>
            <CustomButton
              size="sm"
              color="success"
              onClick={() =>
                history.push(
                  `/me/doctors/visits/new-summary/${patientDetails.id}?section=disabled&patient_id=${patientDetails.id}&show_back=true&patientType=${patientType}`
                )
              }
            >
              <IoMdDocument size={20} className="mr-2" />
              New Review
            </CustomButton>
          </div>
        )}
      </div>
      <>
        {/* <CardTitle tag="h5" className="text-right">
          <span className="mr-2">Visit Date:</span>
          {moment(visitDetails.createdAt).format("DD-MM-YYYY")}
          {facility.facility_id === "doctors" ? null : (
            <Button
              className="ml-5"
              color="dark"
              onClick={() => setPrint(true)}
            >
              Print Consultation
              <AiFillPrinter size="22" className="ml-2" />
            </Button>
          )}
        </CardTitle> */}

        <div>
          <div className="row m-0">
            <div className="col-md-1 p-0">
              <VisitHistory
                title={consultationViewQueryTypes.CONSULTATION}
                height="55vh"
                visitDays={visitDays}
                setQueryDate={setQueryDate}
                queryDate={queryDate}
                loading={loadingVisitDates}
              />
              <VisitHistory
                title={consultationViewQueryTypes.OP_NOTES}
                height="20vh"
                visitDays={surgeryDays}
                setQueryDate={setQueryDate}
                queryDate={queryDate}
                loading={loadingOpDates}
              />
            </div>
            <div
              className="col-md-7 p-0"
              style={{ height: "85vh", overflow: "scroll" }}
            >
              {/* {JSON.stringify(visitList)} */}
              {isLoadingRecord || isLoadingConsult ? <Loading /> : null}
              {queryDate.type === consultationViewQueryTypes.CONSULTATION
                ? visitList.map((visitDetails, i) => (
                    <VisitPreviewItem
                      key={i}
                      type={queryDate.type}
                      visitDetails={visitDetails}
                      isEditting={isEditting}
                      setIsEditting={setIsEditting}
                      setSelected={setSelected}
                      selected={selected}
                      handleEdit={handleEdit}
                      saveUpdate={saveUpdate}
                    />
                  ))
                : visitList.map((op, i) => <OpDetailView key={i} op={op} />)}
              {!visitList.length && (
                <Alert className="text-center">
                  No past consultation record found for this patient.
                </Alert>
              )}
            </div>
            <div className="col-md-4 p-0">
              <VitalSignsHistory />
              <MedicationHistory height="30vh" newBtn={false} />
              <MedicationReport />
              <SurgicalNoteList
                type="doctor"
                hidden={true}
                height={"65vh"}
                isOpen={false}
              />
              <LabHistory
                type="doctor"
                queryDate={queryDate.date}
                hidden={true}
                height={"65vh"}
                isOpen={true}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-direction-row justify-content-between">
          <CustomButton>
            <FaArrowLeft className="mr-1" />
            Previous Visit
          </CustomButton>
          <CustomButton>
            Next Visit
            {/* ({visitDays[nextDateIndex]}) */}
            <FaArrowRight className="ml-1" />
          </CustomButton>
        </div>
      </>
    </Card>
  );
}

export default VisitPreview;
