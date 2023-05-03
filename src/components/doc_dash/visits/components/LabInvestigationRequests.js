import React from "react"; // { Component, useEffect, useState }
// import {
//   // Form,
//   // FormGroup,
//   // Table,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   // Row,
//   // Col,
// } from "reactstrap";
// import {
//   _warningNotify,
//   checkEmpty,
// } from "../../../../components/utils/helpers";
// import { connect } from "react-redux";
// // import { FaTimes } from "react-icons/fa";
// import { Scrollbars } from "react-custom-scrollbars";
// import {
//   saveLabInvestigation,
//   saveLabRequest,
// } from "../../redux/actions/doctor";
// import FooterButtons from "./components/FooterButtons";
// import { withRouter } from "react-router";
// import { compose } from "redux";
// import { v4 as uuidV4 } from "uuid";
// import { getTestListFromServices } from "../lab/actions/labActions";
// import AutoComplete from "../comp/components/AutoComplete";
// import { _fetchApi } from "../../redux/actions/api";
// import { apiURL } from "../../redux/actions";
// import moment from "moment";
import LabRequestForm from "../../../../components/doctor/lab-test/LabRequestForm";
import CollapsibleCard from "../../../CollapsibleCard.js";
// import CollapsibleCard from "../../../../components/lab/NewLaboratory/CollapsibleCard";

function LabInvestigationRequests({
  labInvestigations,
  // : { selectedLabs, receiptDisplayed, note, amount },
  handleConsultationChange = (f) => f,
  patientInfo,
}) {
  // const [labList, setList] = useState([]);
  // const initState = {
  //   investigation: {
  //     test: "",
  //     sample: "",
  //     note: "",
  //   },
  //   test: {},
  //   formRecords: [],
  //   labList: [],
  //   selectedLabs: [],
  //   receiptDisplayed: [],
  //   amount: 0,
  // };
  // const [state, setState] = useState(initState);

  // useEffect(
  //   {
  //     // this.props.getTestListFromServices();
  //     // getAllLabTests();
  //     // this.setState({
  //     //   selectedLabs: this.props.labRequest,
  //     //   receiptDisplayed: this.props.labInvestigations,
  //     // });
  //   },
  //   []
  // );

  //   handleSave = () => {
  //     this.handleSubmit();
  //     const {
  //       athropometry,
  //       managementPlan,
  //       dressingRequest,
  //       problems,
  //       provisionalDiagnosis,
  //       systemExam,
  //       vitalSigns,
  //       pComplain,
  //       historyOfPComplaints,
  //       medicalHistory,
  //     } = this.props;
  //     // labInvestigation,prescriptionRequest
  //     if (
  //       checkEmpty(athropometry) &&
  //       checkEmpty(managementPlan) &&
  //       checkEmpty(dressingRequest) &&
  //       checkEmpty(problems) &&
  //       checkEmpty(provisionalDiagnosis) &&
  //       checkEmpty(systemExam) &&
  //       checkEmpty(vitalSigns) &&
  //       checkEmpty(pComplain) &&
  //       checkEmpty(historyOfPComplaints) &&
  //       checkEmpty(medicalHistory)
  //     )
  //       return _warningNotify("You cannot submit an empty visit form!");

  //     // let obj = {
  //     //   ...athropometry,
  //     //   ...managementPlan,
  //     //   observationRequest,
  //     //   ...dressingRequest,
  //     //   ...problems,
  //     //   ...provisionalDiagnosis,
  //     //   ...systemExam,
  //     //   ...vitalSigns,
  //     //   ...pComplain,
  //     //   ...history,
  //     //   ...medicalHistory,
  //     // };

  //     // console.log(obj)
  //     // const patientId = this.props.patient.id;
  //     // obj.patient_id = patientId;
  //     // obj.seen_by = this.props.doctor;
  //     this.props.submitDiagnosis();
  //   };

  //   handleSubmit = () => {
  //     const { selectedLabs, receiptDisplayed } = this.state;
  //     if (!selectedLabs.length) return;
  //     this.props.saveLabInvestigation(receiptDisplayed);
  //     this.props.saveLabRequest(selectedLabs);
  //     // return localStorage.setItem(
  //     //   'lab_investigation',
  //     //   JSON.stringify(this.state.formRecords)
  //     // );
  //   };

  const onInputChange = ({ target: { name, value } }) => {
    let newState = { ...labInvestigations, [name]: value };
    handleConsultationChange("labInvestigations", newState);
    // setState((prev) => ({
    //   investigation: { ...prev.investigation, [name]: value },
    // }));
  };

  //   handleReset = () => {
  //     this.setState({
  //       investigation: {
  //         test: "",
  //         sample: "",
  //         note: "",
  //       },
  //     });
  //     this._labTest.clear();
  //   };
  // handleAddRequest = (e) => {
  //   e.preventDefault();
  //   const { test, sample } = this.state.investigation;
  //   if (test === "") {
  //     return _warningNotify("Please fill the boxes");
  //   }
  //   const formData = { _id: uuidV4(), test, sample };
  //   this.setState((prevState) => ({
  //     formRecords: prevState.formRecords.concat(formData),
  //     investigation: {
  //       test: "",
  //       sample: "",
  //     },
  //   }));
  //   this.handleReset();
  // };

  // const onRemove = (req) => {
  //   const { formRecords } = this.state;
  //   const newList = formRecords.filter((item) => item.test !== req.test);
  //   this.setState({ formRecords: newList });
  // };

  //   componentWillUnmount() {
  //     this.handleSubmit();
  //   }

  // removeTest = (test) => {
  //   // console.log(test);
  //   // code: "201127075518"
  //   // department: "2000"
  //   // description: "Prothrombin time"
  //   // group: ""
  //   // noOfLabels: 1
  //   // percentage: 15
  //   // price: 2500
  //   // subhead: "2000"
  //   // test: "2003"
  //   const { selectedLabs, receiptDisplayed } = this.state;
  //   let filteredSelected = selectedLabs.filter(
  //     (i) =>
  //       (i.test !== test.test && i.group !== test.test) ||
  //       i.department !== test.department
  //   );
  //   let filteredReceiptDisp = receiptDisplayed.filter(
  //     (i) =>
  //       (i.test !== test.test && i.group !== test.test) ||
  //       i.department !== test.department
  //   );

  //   this.setState((prev) => ({
  //     ...prev,
  //     selectedLabs: filteredSelected,
  //     receiptDisplayed: filteredReceiptDisp,
  //     amount: parseInt(prev.amount) - parseInt(test.price),
  //   }));

  //   // if (parseInt(test.noOfLabels) > 0) {
  //   //   setLabels((p) =>
  //   //     p.filter(
  //   //       (i) => i.testCode !== test.subhead && i.testName !== test.description
  //   //     )
  //   //   );
  //   // }
  // };

  // handleAddGroupedTest = (list, dept, group, test) => {
  //   console.log(list, dept, group, test);
  //   const { selectedLabs } = this.state;
  //   // let rand = Math.floor(Math.random() * 10);
  //   const {
  //     description,
  //     title,
  //     percentage,
  //     price,
  //     noOfLabels,
  //     // subhead,
  //     specimen,
  //     collect_sample,
  //     to_be_analyzed,
  //     to_be_reported,
  //     account,
  //     print_type,
  //     upload_doc,
  //     children,
  //   } = test;
  //   let barcode = `${moment().format("YYMMDDhhmmss")}`;

  //   // if test has barcode
  //   if (parseInt(test.noOfLabels) > 0) {
  //     // create an array to contain name of all tests to show on the barcode
  //     // let testNames = [];
  //     // test.children &&
  //     //   test.children.forEach((i) => testNames.push(i.description));

  //     // if the lab test has not been selected
  //     if (selectedLabs.findIndex((i) => i.group === group) === -1) {
  //       // console.log('not found');
  //       let newList = [];
  //       // let recList = [];
  //       let newAmt = 0;
  //       list.forEach((i) => {
  //         let currPrice =
  //           i.price && i.price !== 0 && i.price !== "0"
  //             ? i.price
  //             : i.children
  //             ? i.children.reduce((a, b) => a + parseInt(b.price), 0)
  //             : 0;
  //         newList.push({
  //           department: dept,
  //           description: i.description,
  //           group,
  //           test: i.title,
  //           price: currPrice,
  //           specimen,
  //           percentage: i.percentage,
  //           code: parseInt(test.noOfLabels) > 0 ? barcode : "",
  //           collect_sample: i.collect_sample,
  //           to_be_analyzed: i.to_be_analyzed,
  //           to_be_reported: i.to_be_reported,
  //           account: i.account,
  //           print_type: i.print_type,
  //           upload_doc: i.upload_doc,
  //         });
  //         newAmt = parseInt(newAmt) + parseInt(currPrice);
  //       });
  //       // set the values
  //       this.setState((prev) => ({
  //         ...prev,
  //         selectedLabs: [...prev.selectedLabs, ...newList],
  //         receiptDisplayed: [
  //           ...prev.receiptDisplayed,
  //           {
  //             department: dept,
  //             description: description,
  //             group,
  //             test: title,
  //             price:
  //               price && price !== 0 && price !== "0"
  //                 ? price
  //                 : children
  //                 ? children.reduce((a, b) => a + parseInt(b.price), 0)
  //                 : 0,
  //             percentage: percentage,
  //             code: parseInt(noOfLabels) > 0 ? barcode : "",
  //             collect_sample,
  //             to_be_analyzed,
  //             to_be_reported,
  //             account,
  //             print_type,
  //             upload_doc,
  //           },
  //         ],
  //         amount: parseInt(prev.amount) + parseInt(newAmt),
  //       }));
  //     } else {
  //       // else if the test has already been added
  //       _warningNotify("Test already selected!");
  //       // let newAmt = 0;
  //       // list.forEach((i) => {
  //       //   if (i.group !== group) {
  //       //     newAmt = parseInt(newAmt) + parseInt(i.price);
  //       //   }
  //       // });
  //       // let filteredSelected = selectedLabs.filter((i) => i.group !== group);
  //       // let filteredRecDisp = receiptDisplayed.filter((i) => i.group !== group);
  //       // this.setState((prev) => ({
  //       //   ...prev,
  //       //   selectedLabs: filteredSelected,
  //       //   receiptDisplayed: filteredRecDisp,
  //       //   amount: parseInt(prev.amount) - parseInt(newAmt),
  //       // }));

  //       // if (parseInt(test.noOfLabels) > 0) {
  //       //   setLabels((p) =>
  //       //     p.filter(
  //       //       (i) =>
  //       //         i.testCode !== test.subhead && i.testName !== test.description
  //       //     )
  //       //   );
  //       // }
  //     }
  //   }
  //   // console.log(list, dept, group);
  // };

  // handleAddSingleTest = (test, dept) => {
  //   // const {} = this.state.investigation
  //   const { selectedLabs } = this.state;
  //   const {
  //     description,
  //     group,
  //     title,
  //     percentage,
  //     price,
  //     specimen,
  //     noOfLabels,
  //     subhead,
  //     account,
  //     collect_sample,
  //     to_be_analyzed,
  //     to_be_reported,
  //     print_type,
  //     upload_doc,
  //   } = test;
  //   let barcode = `${moment().format("YYMMDDhhmmss")}`;
  //   if (
  //     selectedLabs.findIndex(
  //       (i) =>
  //         (i.test === test.title || i.test === test.test) &&
  //         i.group === group &&
  //         i.department === dept
  //     ) === -1
  //   ) {
  //     // console.log(test, dept, group, "not found");
  //     let selected_test = {
  //       department: dept,
  //       description,
  //       group,
  //       test: title,
  //       percentage,
  //       price,
  //       specimen,
  //       code: parseInt(test.noOfLabels) > 0 ? barcode : "",
  //       noOfLabels,
  //       subhead,
  //       account,
  //       collect_sample,
  //       to_be_analyzed,
  //       to_be_reported,
  //       print_type,
  //       upload_doc,
  //     };
  //     this.setState((prev) => ({
  //       ...prev,
  //       selectedLabs: [...prev.selectedLabs, selected_test],
  //       receiptDisplayed: [...prev.receiptDisplayed, selected_test],
  //       amount: parseInt(prev.amount) + parseInt(test.price),
  //     }));
  //   } else {
  //     let newD = selectedLabs.filter(
  //       (i) =>
  //         i.test !== test.title || i.group !== group || i.department !== dept
  //     );
  //     this.setState((prev) => ({
  //       ...prev,
  //       selectedLabs: newD,
  //       receiptDisplayed: newD,
  //       amount: parseInt(prev.amount) - parseInt(test.price),
  //     }));
  //   }
  // };

  const handleAdd = (selected, receipt, amount) => {
    let newState = {
      ...labInvestigations,
      selectedLabs: selected,
      receiptDisplayed: receipt,
      amount,
      patient_name: patientInfo.name,
    };
    handleConsultationChange("labInvestigations", newState);
  };

  //   render() {
  //     const {
  //       state: {
  //         investigation: { note },
  //         selectedLabs,
  //         receiptDisplayed,
  //         amount,
  //       },
  //       props: { history },
  //       handleAdd,
  //     } = this;

  return (
    <CollapsibleCard headerText="Lab Investigation Request Sheet">
      {/* <CardHeader tag="h6">Lab Investigation Request</CardHeader> */}
      {/* <CardBody style={{ height: 400 }}> */}
      {/* {JSON.stringify({
        labInvestigations: labInvestigations.receiptDisplayed,
      })} */}
      {/* <Scrollbars> */}
      {/* {JSON.stringify(patientInfo)} */}
      <LabRequestForm
        note={labInvestigations.note}
        selectedLabs={labInvestigations.selectedLabs}
        receiptDisplayed={labInvestigations.receiptDisplayed}
        amount={labInvestigations.amount}
        handleAdd={handleAdd}
        handleNoteChange={onInputChange}
        patientInfo={patientInfo}
      />
      {/* </Scrollbars> */}
      {/* </CardBody>
        <CardFooter className="p-0">
          <FooterButtons
            prev={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/management/prescription`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/management/dressing`
              );
            }}
          />
        </CardFooter> */}
    </CollapsibleCard>
  );
  //   }
}

// const mapStateToProps = ({ doctor, diagnosis, auth, lab }) => ({
//   labInvestigations: doctor.labInvestigations,
//   labRequest: doctor.labRequest,
//   labTest: lab.validLabTests,
// });

// const mapDispatchToProblems = (dispatch) => ({
//   saveLabInvestigation: (data) => dispatch(saveLabInvestigation(data)),
//   saveLabRequest: (data) => dispatch(saveLabRequest(data)),
//   getTestListFromServices: () => dispatch(getTestListFromServices()),
// });

export default LabInvestigationRequests;
// compose(
//   withRouter,
//   connect(
//     mapStateToProps,
//     mapDispatchToProblems
//   )
// )(LabInvestigationRequests);
