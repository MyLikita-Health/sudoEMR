import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { FaPrint } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Row } from "reactstrap";
import { apiURL } from "../../../redux/actions";
import { _fetchApi, _fetchApi2 } from "../../../redux/actions/api";
import AutoComplete from "../../comp/components/AutoComplete";
import { _warningNotify } from "../../utils/helpers";
import LabRequestTable from "./LabRequestTable";

function LabRequestForm({
  note,
  handleAdd,
  selectedLabs,
  receiptDisplayed,
  amount,
  handleNoteChange,
  patientInfo,
}) {
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const [labList, setLabList] = useState([]);
  //   const [selectedLab, setSelectedLab] = useState({})
  let _labTest = useRef();

  const getAllLabTests = () => {
    _fetchApi2(
      `${apiURL()}/lab/service/all/${facilityId}?query_type=list`,
      (data) => {
        if (data && data.results) {
          setLabList(data.results);
        }
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    getAllLabTests();
  }, []);

  const handleAddGroupedTest = (list, dept, group, test) => {
    // console.log(list, dept, group, test);
    // const { selectedLabs } = this.state;
    // let rand = Math.floor(Math.random() * 10);
    const {
      description,
      title,
      percentage,
      price,
      noOfLabels,
      // subhead,
      specimen,
      collect_sample,
      to_be_analyzed,
      to_be_reported,
      account,
      print_type,
      upload_doc,
      children,
    } = test;
    let barcode = `${moment().format("YYMMDDhhmmss")}`;

    // if test has barcode
    if (parseInt(test.noOfLabels) > 0) {
      // create an array to contain name of all tests to show on the barcode
      // let testNames = [];
      // test.children &&
      //   test.children.forEach((i) => testNames.push(i.description));

      // if the lab test has not been selected
      if (selectedLabs.findIndex((i) => i.group === group) === -1) {
        // console.log('not found');
        let newList = [];
        // let recList = [];
        let newAmt = 0;

        newList.push({
          department: dept,
          description: test.description,
          group,
          test: test.title,
          price: test.price,
          specimen,
          percentage: test.percentage,
          code: parseInt(test.noOfLabels) > 0 ? barcode : "",
          collect_sample: test.collect_sample,
          to_be_analyzed: test.to_be_analyzed,
          to_be_reported: test.to_be_reported,
          account: test.account,
          print_type: test.print_type,
          upload_doc: test.upload_doc,
          noOfLabels: test.noOfLabels,
          label_type: test.label_type,
          patient_name: patientInfo.name,
        });

        list.forEach((i) => {
          let currPrice =
            i.price && i.price !== 0 && i.price !== "0"
              ? i.price
              : i.children
              ? i.children.reduce((a, b) => a + parseInt(b.price), 0)
              : 0;
          newList.push({
            department: dept,
            description: i.description,
            group,
            test: i.title,
            price: currPrice,
            specimen,
            percentage: i.percentage,
            code: parseInt(test.noOfLabels) > 0 ? barcode : "",
            collect_sample: i.collect_sample,
            to_be_analyzed: i.to_be_analyzed,
            to_be_reported: i.to_be_reported,
            account: i.account,
            print_type: i.print_type,
            upload_doc: i.upload_doc,
            noOfLabels: i.noOfLabels,
            label_type: i.label_type,
            patient_name: patientInfo.name,
          });
          newAmt = parseInt(newAmt) + parseInt(currPrice);
        });
        // set the values
        let newSelectedLabs = [...selectedLabs, ...newList];

        let receiptD = [
          ...receiptDisplayed,
          {
            department: dept,
            description: description,
            group,
            test: title,
            price:
              price && price !== 0 && price !== "0"
                ? price
                : children
                ? children.reduce((a, b) => a + parseInt(b.price), 0)
                : 0,
            percentage: percentage,
            code: parseInt(noOfLabels) > 0 ? barcode : "",
            collect_sample,
            to_be_analyzed,
            to_be_reported,
            account,
            print_type,
            upload_doc,
            patient_name: patientInfo.name,
          },
        ];
        let amt = parseInt(amount) + parseInt(newAmt);

        handleAdd(newSelectedLabs, receiptD, amt);
      } else {
        // else if the test has already been added
        _warningNotify("Test already selected!");
      }
    }
    // console.log(list, dept, group);
  };

  const handleAddSingleTest = (test, dept) => {
    // const {} = this.state.investigation
    // const { selectedLabs } = this.state;
    const {
      description,
      group,
      title,
      percentage,
      price,
      specimen,
      noOfLabels,
      subhead,
      account,
      collect_sample,
      to_be_analyzed,
      to_be_reported,
      print_type,
      upload_doc,
      label_type,
    } = test;
    let barcode = `${moment().format("YYMMDDhhmmss")}`;
    if (
      selectedLabs.findIndex(
        (i) =>
          (i.test === test.title || i.test === test.test) &&
          i.group === group &&
          i.department === dept
      ) === -1
    ) {
      // console.log(test, dept, group, "not found");
      let selected_test = {
        department: dept,
        description,
        group,
        test: title,
        percentage,
        price,
        specimen,
        code: parseInt(test.noOfLabels) > 0 ? barcode : "",
        noOfLabels,
        subhead,
        account,
        collect_sample,
        to_be_analyzed,
        to_be_reported,
        print_type,
        upload_doc,
        label_type,
        patient_name: patientInfo.name,
      };
      let newSelected = [...selectedLabs, selected_test];
      let receiptD = [...receiptDisplayed, selected_test];
      let amt = parseInt(amount) + parseInt(test.price);
      handleAdd(newSelected, receiptD, amt);
    } else {
      _warningNotify("Test already selected!");
    }
  };

  const handleChange = (value) => {
    let barcode = `${moment().format("YYMMDDhhmmss")}`;
    let selected_test = {
      department: value,
      description: value,
      group: 0,
      test: value,
      percentage: 0,
      price: 0,
      specimen: 0,
      code: barcode,
      noOfLabels: "",
      subhead: "",
      account: "",
      collect_sample: "",
      to_be_analyzed: "",
      to_be_reported: "",
      print_type: "",
      upload_doc: "",
      label_type: "",
      patient_name: patientInfo.name,
    };
    let newSelected = [...selectedLabs, selected_test];
    let receiptD = [...receiptDisplayed, selected_test];
    handleAdd(newSelected, receiptD, 0);
  };

  const handleTestSelect = (data) => {
    console.log(data);
    if (data.length) {
      let lab = data[0];
      //   this.setState((prev) => ({
      //     investigation: {
      //       ...prev.investigation,
      //       test: lab.description,
      //       code: lab.title,
      //       sample: lab.specimen,
      //     },
      //   }));

      _fetchApi(`${apiURL()}/lab/get-children/${lab.title}`, (data) => {
        if (data.success) {
          if (data.results.length) {
            handleAddGroupedTest(
              data.results,
              `${lab.title.substr(0, 1)}000`,
              lab.title,
              lab
            );
            // console.log("has children", data.results);
          } else {
            handleAddSingleTest(lab, `${lab.title.substr(0, 1)}000`, "");
          }
        }
      });

      _labTest.clear();
    }
  };

  const removeTest = (test) => {
    // const { selectedLabs, receiptDisplayed } = this.state;
    let filteredSelected = selectedLabs.filter(
      (i) =>
        (i.test !== test.test && i.group !== test.test) ||
        i.department !== test.department
    );
    let filteredReceiptDisp = receiptDisplayed.filter(
      (i) =>
        (i.test !== test.test && i.group !== test.test) ||
        i.department !== test.department
    );
    let reducedAmt = parseInt(amount) - parseInt(test.price);

    handleAdd(filteredSelected, filteredReceiptDisp, reducedAmt);

    // if (parseInt(test.noOfLabels) > 0) {
    //   setLabels((p) =>
    //     p.filter(
    //       (i) => i.testCode !== test.subhead && i.testName !== test.description
    //     )
    //   );
    // }
  };
  const printReport = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "doctor-reporting-fees"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
    // window.frames["print_frame"].window.reload(false);
  };
  return (
    <>
      <div className="text-right mb-2">
        <Button size="sm" onClick={printReport} color="primary">
          <FaPrint /> Print
        </Button>
      </div>
      {/* {JSON.stringify(receiptDisplayed)} */}
      <Row>
        <Col>
          <Form>
            <FormGroup className="mb-0 mx-0">
              {/* <div className="col-md-6"> */}
              <AutoComplete
                options={labList}
                labelKey="description"
                name="labTest"
                label="Required Investigation"
                required
                _ref={(ref) => (_labTest = ref)}
                // onInputChange={(data) => {
                //   if (data.length) {
                //     let val = data[0].description;
                //     // handleChange(val);
                //     console.log(data, "LLDLDD");
                //   }
                // }}
                onChange={(data) => {
                  if (data.length) {
                    let val = data[0].description;
                    handleChange(val);
                    console.log(data, "LLDLDD");
                  }
                  handleTestSelect(data);
                }}
                allowNew={true}
                newSelectionPrefix="Please click to add new test: "
              />
              {/* </div> */}
              {/* <div className="col-md-6">
                      <label>Required Sample (optional)</label>
                      <input
                        name="sample"
                        value={sample}
                        onChange={this.onInputChange}
                        className="form-control"
                      />
                    </div> */}
            </FormGroup>
            <hr className="my-2" />
            <div>
              <label>Additional Note (optional)</label>
              <textarea
                name="note"
                value={note}
                onChange={handleNoteChange}
                className="form-control"
              />
            </div>

            {/* <div style={{ margin: 15 }}>
                    <button
                      type="submit"
                      className="btn btn-sm btn-outline-primary offset-md-5"
                      title="add request"
                    >
                      <FaPlus className="mr-1" />
                      Add Request
                    </button>
                  </div> */}
            {/* {JSON.stringify({
            selectedLabs,
          })} */}
          </Form>
        </Col>
        <Col>
          <div
          // id="doctor-reporting-fees"
          // style={{ height: '68vh', overflow: 'scroll' }}
          >
            {/* {JSON.stringify(receiptDisplayed)} */}
            <LabRequestTable
              formRecords={receiptDisplayed}
              onRemove={removeTest}
              patientInfo={patientInfo}
            />
          </div>
        </Col>
      </Row>
      {/* {JSON.stringify(receiptDisplayed)} */}

      <iframe
        title="doctor-reporting-fees"
        name="print_frame"
        width="0"
        height="0"
        src="about:blank"
        // style={styles}
      />
    </>
  );
}

export default LabRequestForm;
