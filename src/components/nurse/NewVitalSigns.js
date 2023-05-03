import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  // Card,
  // CardBody,
  // CardHeader,
} from "reactstrap";
import { useQuery } from "../../hooks";
import { apiURL } from "../../redux/actions";
import { _postApi } from "../../redux/actions/api";
import { getInPatients } from "../../redux/actions/records";
// import BackButton from "../comp/components/BackButton";
import CustomButton from "../comp/components/Button";
import Loading from "../comp/components/Loading";
import { checkEmpty, _customNotify, _warningNotify } from "../utils/helpers";
import { getAllocationInfo } from "./api";
// import { NURSING_ROUTE_ROOT } from "./routes";

const initialForm = {
  date: "",
  patient_id: "",
  body_temp: "",
  pulserate: "",
  bloodpressure: "",
  repiratoryrate: "",
  fastingblood: "",
  randomblood: "",
  spo2: ""
};

const VitalSignForm = ({ history, toggleVital = (f) => f }) => {
  const query = useQuery();
  const dispatch = useDispatch();
  //   const patient_id = query.get("patientId");
  const allocation_id = query.get("allocation_id");
  const inPatientsList = useSelector((state) => state.records.inPatientsList);
  //   const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState(initialForm);
  const [allocationInfo, setAllocationInfo] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [next_allo_id, setNextAlloId] = useState(null);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const _getAllocationInfo = useCallback(
    () => {
      setLoading(true);
      getAllocationInfo(
        allocation_id,
        (data) => {
          setLoading(false);
          if (data && data.results) {
            let currAllo = data.results[0];
            setAllocationInfo(currAllo);
            let currIdx = inPatientsList.findIndex(
              (i) => i.allocation_id === currAllo.allocation_id,
            );
            if (inPatientsList.length) {
              //   console.log(currAllo, currIdx, inPatientsList);
              // let nextAllo = inPatientsList[curr]
              setNextAlloId(
                currIdx === inPatientsList.length - 1
                  ? null
                  : inPatientsList[currIdx + 1].allocation_id,
              );
            }
          }
        },
        (err) => {
          setLoading(false);
          console.error(err);
        },
      );
    },
    [allocation_id, inPatientsList.length],
  );

  useEffect(
    () => {
      dispatch(getInPatients());
      if (allocation_id) {
        _getAllocationInfo();
      }
    },
    [allocation_id, _getAllocationInfo, dispatch],
  );

  const resetForm = () => setForm(initialForm);

  const saveVitals = (callback = (f) => f) => {
    setSubmitting(true);

    let data = {
      query_type: "new",
      body_temp: form.body_temp,
      pulse_rate: form.pulserate,
      blood_pressure: form.bloodpressure,
      respiratory_rate: form.repiratoryrate,
      fasting_blood_sugar: form.fastingblood,
      random_blood_sugar: form.randomblood,
      patient_id: allocationInfo.patient_id,
      spo2: form.spo2,
      time: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    _postApi(
      `${apiURL()}/vitals/new`,
      data,
      () => {
        setSubmitting(false);
        _customNotify("Vitals saved!");
        resetForm();
        callback();
      },
      (err) => {
        setSubmitting(false);
        console.log(err);
        _warningNotify("An error occured!");
      },
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   saveVitals(() => {
  //     if (next_allo_id) {
  //       history.push(
  //         `${NURSING_ROUTE_ROOT}/vital-signs/new-vitals?allocation_id=${next_allo_id}`,
  //       );
  //     } else {
  //       history.push(`${NURSING_ROUTE_ROOT}/vital-signs`);
  //     }
  //   });
  //   toggleVital();
  // };

  const submitAndClose = (e) => {
    e.preventDefault();

    saveVitals(() => {
      // history.push(`${NURSING_ROUTE_ROOT}/vital-signs`);
    });
    toggleVital();
  };

  const formIsValid = !checkEmpty(form);

  return (
    <>
      {/* <BackButton /> */}
      {/* <Card>
        <CardHeader className='h5'>Vital Sign</CardHeader>
        <CardBody> */}
          {loading && <Loading />}
          <div className='mb-4'>
            <h6>
              Patient: {allocationInfo.patient_name} (
              {allocationInfo.patient_id})
            </h6>
            <h6>
              Room: {allocationInfo.name} ({allocationInfo.class_type})
            </h6>
            <h6>
              Date Admitted:{" "}
              {moment(allocationInfo.allocated).format("DD-MM-YYYY hh:mm a")}
            </h6>
            {/* Up-Next: {next_allo_id} sort_index:{allocationInfo.sort_index} */}
            {JSON.stringify(allocationInfo)}....
          </div>
          <Form onSubmit={submitAndClose}>
            <FormGroup row>
              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='bloodtemp'>
                  Body Temperature (<sup>o</sup>C)
                </Label>
                <Input
                  type='text'
                  name='body_temp'
                  value={form.body_temp}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='pulserate'>Pulse Rate (beats/min)</Label>
                <Input
                  type='text'
                  name='pulserate'
                  value={form.pulserate}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='bloodpressure'>Blood Pressure (mmHg)</Label>
                <Input
                  type='text'
                  name='bloodpressure'
                  value={form.bloodpressure}
                  onChange={handleInputChange}
                />
              </div>
            </FormGroup>
            <FormGroup row>
              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='repiratoryrate'>
                  Repiratory Rate (beats/min)
                </Label>
                <Input
                  type='text'
                  name='repiratoryrate'
                  value={form.repiratoryrate}
                  onChange={handleInputChange}
                />
              </div>

              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='fastingblood'>Fasting Blood Sugar</Label>
                <Input
                  type='text'
                  name='fastingblood'
                  value={form.fastingblood}
                  onChange={handleInputChange}
                />
              </div>
              <div className='col-md-4 col-lg-4'>
                <Label htmlForm='randomblood'>Random Blood Sugar</Label>
                <Input
                  type='text'
                  name='randomblood'
                  value={form.randomblood}
                  onChange={handleInputChange}
                />
              </div><div className='col-md-4 col-lg-4'>
                <Label htmlForm='randomblood'>SPO2</Label>
                <Input
                  type='text'
                  name='spo2'
                  value={form.spo2}
                  onChange={handleInputChange}
                />
              </div>
            </FormGroup>
            <center>
              {/* {next_allo_id ? (
                <CustomButton
                  disabled={!formIsValid}
                  loading={submitting}
                  type='submit'
                  className='px-4 mr-2'
                >
                  Submit & Go to next patient
                  <FaArrowRight className='ml-2' />
                </CustomButton>
              ) : null} */}
              <CustomButton
                disabled={!formIsValid}
                loading={submitting}
                // type="submit"
                color='success'
                className='px-4'
                onClick={submitAndClose}
              >
                Submit 
              </CustomButton>
              {/* <CustomButton
                className="mx-2"
                onClick={() =>
                  history.push(
                    `${NURSING_ROUTE_ROOT}/vital-signs/new-vitals?allocation_id=${next_allo_id}`
                  )
                }
              >
                Next
              </CustomButton> */}
            </center>
          </Form>
        {/* </CardBody>
      </Card> */}
    </>
  );
};

export default VitalSignForm;
