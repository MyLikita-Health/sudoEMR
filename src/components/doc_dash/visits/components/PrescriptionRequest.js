import React, { useEffect, useState } from "react";
import { Row, Col, Table, Input, Button } from "reactstrap";
// import DrugsTable from './DrugsTable'
import { Typeahead } from "react-bootstrap-typeahead";
// import { FaPlus } from 'react-icons/fa'
// import { Scrollbars } from 'react-custom-scrollbars'
// // import { savePrescriptionRequest } from '../../redux/actions/doctor'
// import FooterButtons from './components/FooterButtons'
// import { useHistory, withRouter } from "react-router";
// import { compose } from 'redux'

import AutoComplete from "../../../comp/components/AutoComplete";
import { apiURL } from "../../../../redux/actions";
import { _fetchApi2 } from "../../../../redux/actions/api";
import CollapsibleCard from "../../../CollapsibleCard.js";
import CustomButton from "../../../comp/components/Button";
import CustomModal from "../../../comp/components/CustomModal";
import { FaPrint } from "react-icons/fa";
import PrintPrescription from "../PrintPrescription";

function NewPrescriptionRequest(props) {
  const {
    prescriptionList = [],
    handleConsultationChange,
    emptyPrescription,
    defaultOpen = false,
  } = props;
  const [drugFrequency, setDrugFrequency] = useState([]);
  const [drugs, setDrugs] = useState([]);
  const [, setFrequecyList] = useState([]);
  const [modal, setModal] = useState(false);
  const togglePrompt = () => setModal((p) => !p);

  // const prescriptionRequest = useSelector(
  //   (state) => state.doctor.prescriptionRequest,
  // )
  //   const drugs = useSelector((state) => state.pharmacy.drugs)
  // const facilityId = useSelector((state) => state.auth.user.facilityId)

  // const [prescriptionList, setPrescriptionList] = useState([
  //   {
  //     route: '',
  //     drug: '',
  //     dosage: '',
  //     duration: '',
  //     period: 0,
  //     frequency: '',
  //     drugs: [],
  //     prescriptionRequest: [],
  //     price: '',
  //     //   drugFreq: [],
  //   },
  // ])

  const handleInputChange = (_key, _value, i) => {
    console.log(_key, _value, i);
    let newList = [];

    prescriptionList.forEach((item, idx) => {
      if (i === idx) {
        newList.push({ ...item, [_key]: _value });
      } else {
        newList.push(item);
      }
    });
    handleConsultationChange("prescriptionRequestList", newList);
  };

  const handleInputChangeDrug = (value, i) => {
    let newList = [];

    prescriptionList.forEach((item, idx) => {
      if (i === idx) {
        newList.push({ ...item, ...value });
      } else {
        newList.push(item);
      }
    });
    handleConsultationChange("prescriptionRequestList", newList);
  };

  const getDrugFreq = () => {
    _fetchApi2(
      `${apiURL()}/frequency-setup/get?query_type=list&facilityId=${
        props.facilityId
      }`,
      (data) => {
        if (data && data.results) {
          let freq_list = [];
          data.results.forEach((item) => {
            if (
              freq_list.findIndex((p) => p.description === item.description) ===
              -1
            ) {
              freq_list.push(item);
            }
          });
          // let schList = data.results.map(a => a.description)
          setDrugFrequency(freq_list);
          setFrequecyList(data.results);
          // setDrugFrequency(data.results)
          //   setState({ drugFreq: data.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const getDrugs = () => {
    _fetchApi2(
      `${apiURL()}/drugs/drugs/all`,
      (data) => setDrugs(data.results),
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    getDrugs();
    getDrugFreq();
  }, []);

  // const onRouteChange = (name, value) => {

  // }

  // const handleDrugChange = (drug) => {}

  // const onDurationChange = (e) => {
  //   // setState({ duration: e.target.value })
  // }

  //   render() {
  const dropdownItems = [];
  for (let i = 1; i <= 10; i++) {
    dropdownItems.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const addNewPrescription = () => {
    console.log({ prescriptionList });
    let newState = [
      ...prescriptionList.map((i) => ({ ...i, mode: "view" })),
      emptyPrescription,
    ];
    console.log({ newState });
    handleConsultationChange("prescriptionRequestList", newState);
  };

  const removePrescription = (index) => {
    let newList = prescriptionList.filter((it, i) => i !== index);
    handleConsultationChange("prescriptionRequestList", newList);
  };

  // const editPrescription = (index) => {
  //   let newList = prescriptionList.map((it, i) => {
  //     if (i === index) {
  //       return {
  //         ...it,
  //         mode: "edit",
  //       };
  //     } else return it;
  //   });
  //   handleConsultationChange("prescriptionRequestList", newList);
  // };

  // const updatePrescription = (index) => {
  //   let newList = prescriptionList.map((it, i) => {
  //     if (i === index) {
  //       return {
  //         ...it,
  //         mode: "view",
  //       };
  //     } else return it;
  //   });
  //   handleConsultationChange("prescriptionRequestList", newList);
  // };
  const DetailsForm = ({ id }) => {
    const [additionalInfo, setAdditionalInfo] = useState("");
    const handleChange = (e) => {
      setAdditionalInfo(e.target.value);
    };
    return (
      <CustomModal isOpen={modal} toggle={togglePrompt}>
        <div>
          <h4>Add details</h4>
          <Input
            name="additionalInfo"
            type="textarea"
            value={additionalInfo}
            placeholder="Enter some other details..."
            onChange={handleChange}
          />
          <br />
          <Row>
            <Col md={12} className="text-right">
              <CustomButton
                color="success"
                onClick={() => {
                  togglePrompt();
                  handleInputChange("additionalInfo", additionalInfo, id);
                }}
              >
                Okay
              </CustomButton>
            </Col>
          </Row>
        </div>
      </CustomModal>
    );
  };
  const printReport = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "pharm-prescription"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  };
  return (
    <CollapsibleCard
      headerText="Prescription Request Sheet"
      defaultOpen={defaultOpen}
    >
      <div id="pharm-prescription">
        <PrintPrescription data={prescriptionList} />
      </div>
      <div className="text-right">
        <Button size="sm" color="primary" onClick={printReport}>
          <FaPrint /> Print
        </Button>
      </div>
      <iframe
        title="pharm-prescription"
        name="print_frame"
        width="0"
        height="0"
        src="about:blank"
        // style={styles}
      />
      <Table size="sm">
        <thead>
          <tr>
            <th className="text-center">Route</th>
            <th className="text-center">Drug</th>
            <th className="text-center">Dosage</th>
            <th className="text-center">Frequency</th>
            <th className="text-center">Duration</th>
            <th className="text-center">Period</th>
            <th className="text-center ">Details</th>
            <th className="text-center ">Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptionList.map(
            (item, i) => (
              <tr>
                <td>
                  <AutoComplete
                    name="route"
                    options={["IV", "IM", "Tabs", "Susp", "SC", "Syr", "Caps"]}
                    value={item.route}
                    // _ref={(ref) => (_route = ref)}
                    onChange={(it) => {
                      if (it.length) {
                        handleInputChange("route", it[0], i);
                      }
                    }}
                    onInputChange={(text) =>
                      handleInputChange("route", text, i)
                    }
                    style={{ width: 80 }}
                  />
                </td>
                {/* {JSON.stringify(drugs)} */}
                <td>
                  <Typeahead
                    align="justify"
                    id="drug"
                    // ref={(ref) => (_drugs_typeahead = ref)}
                    options={drugs}
                    labelKey={(item) => `${item.name}`}
                    onChange={(val) => {
                      if (val.length) {
                        handleInputChangeDrug(val[0], i);
                        // handleInputChange("drug_id", val[0].id, i);
                      }
                    }}
                    onInputChange={(text) => handleInputChange("name", text, i)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="dosage"
                    value={item.dosage}
                    className="form-control"
                    onChange={({ target: { value } }) =>
                      handleInputChange("dosage", value, i)
                    }
                    style={{ width: 80 }}
                  />
                </td>
                <td>
                  <AutoComplete
                    name="route"
                    options={drugFrequency}
                    value={item.frequency}
                    // _ref={(ref) => (frequency = ref)}
                    onChange={(item) => {
                      if (item.length) {
                        handleInputChange("frequency", item[0].description, i);
                      }
                    }}
                    onInputChange={(text) =>
                      handleInputChange("frequency", text, i)
                    }
                    //   label="Frequency"
                    labelClass="font-weight-normal"
                    labelKey="description"
                    style={{ width: 80 }}
                  />
                </td>
                <td>
                  {item.frequency === "STAT" ? null : (
                    <select
                      className="form-control"
                      value={item.duration}
                      onChange={({ target: { value } }) =>
                        handleInputChange("duration", value, i)
                      }
                    >
                      {dropdownItems}
                    </select>
                  )}
                </td>
                <td>
                  {item.frequency === "STAT" ? null : (
                    <select
                      className="form-control"
                      value={item.period}
                      onChange={({ target: { value } }) =>
                        handleInputChange("period", value, i)
                      }
                    >
                      {["-", "days", "weeks", "months", "years"].map(
                        (it, i) => (
                          <option key={i}>{it}</option>
                        )
                      )}
                    </select>
                  )}
                </td>
                <td className="">
                  <CustomButton
                    size="sm"
                    color="primary"
                    onClick={togglePrompt}
                  >
                    Details
                  </CustomButton>
                  <DetailsForm
                    id={i}
                    // onChangeHandler={(e) => {
                    //   setAdditionalInfo(e);
                    // }}
                    // detail={details}
                  />
                </td>
                <td className="">
                  {i === prescriptionList.length - 1 ? (
                    <CustomButton
                      size="sm"
                      className="mr-1"
                      onClick={addNewPrescription}
                    >
                      Add
                    </CustomButton>
                  ) : (
                    <CustomButton
                      size="sm"
                      color="danger"
                      onClick={() => removePrescription(i)}
                    >
                      Remove
                    </CustomButton>
                    // <CustomButton
                    //       size="sm"
                    //       className="mr-1"
                    //       onClick={() => updatePrescription(i)}
                    //       color="success"
                    //     >
                    //       Update
                    //     </CustomButton>
                  )}
                  {/* <CustomButton size="sm" className="mr-1" color="success">
                      Edit
                    </CustomButton>
                    <CustomButton size="sm" color="danger">
                      Remove
                    </CustomButton> */}
                </td>
              </tr>
            )
            //   // } else {
            //   //   return (
            //   //     <tr>
            //   //       <td className="text-center">{item.route}</td>
            //   //       <td className="text-center">{item.drug}</td>
            //   //       <td className="text-center">{item.dosage}</td>
            //   //       <td className="text-center">{item.frequency}</td>
            //   //       <td className="text-center">{item.duration}</td>
            //   //       <td className="text-center">{item.period}</td>
            //   //       <td className="text-center">
            //   //         <CustomButton
            //   //           size="sm"
            //   //           className="mr-1"
            //   //           color="success"
            //   //           onClick={() => editPrescription(i)}
            //   //         >
            //   //           Edit
            //   //         </CustomButton>
            //   //         <CustomButton
            //   //           size="sm"
            //   //           color="danger"
            //   //           onClick={() => removePrescription(i)}
            //   //         >
            //   //           Remove
            //   //         </CustomButton>
            //   //       </td>
            //   //     </tr>
            //   //   )
            //   // }
            // }
          )}
        </tbody>
      </Table>

      {/* <Form onSubmit={handleAddPrescription}>
              <FormGroup row>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4">
                  <label>Select Drugs</label>
                  
                </div>

                <div className="col-md-4">
                  <label>Dosage</label>
                  
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-4">
                  
              
                </div>
                <div className="col-md-4">
                  <label>Duration</label>
               
                </div>

                <div className="col-md-4">
                  <label>Period</label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      style={{ width: "16px", height: "16px" }}
                      type="radio"
                      name="period"
                      checked={period === "day"}
                      value="day"
                      onChange={onPeriodChange}
                    />
                    Day
                    <input
                      style={{ width: "16px", height: "16px" }}
                      type="radio"
                      name="period"
                      checked={period === "week"}
                      value="week"
                      onChange={onPeriodChange}
                    />
                    Week
                    <input
                      style={{ width: "16px", height: "16px" }}
                      type="radio"
                      name="period"
                      checked={period === "Month"}
                      value="Month"
                      onChange={onPeriodChange}
                    />
                    Month
                  </div>
                </div>
                <div className="col-md-4">
                  <label>Additional Instruction</label>
                  <SpeechInput
                    name="additionalInfo"
                    type="textarea"
                    className="form-control"
                    value={additionalInfo}
                    onInputChange={(text) =>
                      handleChange("additionalInfo", text)
                    }
                  />
                </div>
              </FormGroup>
              <div />
              <button
                type="submit"
                className="btn btn-sm btn-outline-primary offset-md-5"
                title="add prescription"
              >
                <FaPlus className="mr-1" />
                Add Prescription
              </button>
            </Form>
            <br /> */}
      {/* <div className="">
              <DrugsTable
                prescriptionRequest={state.prescriptionRequest}
                onRemove={removeDrug}
              />
            </div> */}
      {/* </Scrollbars>
        </CardBody> */}
      {/* <CardFooter className="p-0">
          <FooterButtons
            prev={() => {
              handleSubmit();
              history.push(
                `/me/doctors/visits/new/${
                  props.patient.patientHospitalId
                }/management/plan`
              );
            }}
            next={() => {
              handleSubmit();
              history.push(
                `/me/doctors/visits/new/${
                  props.patient.patientHospitalId
                }/management/radiologyinvestigations`
              );
            }}
          />
        </CardFooter> */}
    </CollapsibleCard>
  );
}

// const mapStateToProps = ({ doctor, pharmacy, auth }) => ({
//   prescriptionRequest: doctor.prescriptionRequest,
//   drugs: pharmacy.drugs,
//   facilityId: auth.user.facilityId,
// });

// const mapDispatchToProps = (dispatch) => ({
//   savePrescriptionRequest: (data) => dispatch(savePrescriptionRequest(data)),
// });

export default // compose(
//   withRouter,
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(
NewPrescriptionRequest;
// );
