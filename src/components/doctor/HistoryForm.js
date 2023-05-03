import React from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import "./historyForm.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Typeahead } from "react-bootstrap-typeahead";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars";
import { savePComplaintsHisory } from "../../redux/actions/doctor";
import SpeechInput from "../comp/speech-to-text/SpeechInput";
import PreviousMedicalHistoryForm from "./PreviousMedicalHistoryForm";
// import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions/index";

class HistoryForm extends React.Component {
  state = {
    history: {
      others: "",
      pastMedicalHistory: "",
      pastSurgicalHistory: "",
      allergy: "",
      drugAllergy: "",
      social: "",
      otherAllergies: "",
      otherSocialHistory: "",
      obtsGyneaHistory: "",
      drugHistory: "",
      hypertensive: "",
      hypertensiveDuration: null,
      hypertensiveRegularOnMedication: null,
      diabetic: "",
      optimalSugarControl: null,
      asthmatic: "",
      pbnh: "",
      nutrition: "",
      immunization: "",
      development: "",
    },
    formRecords: [],
    drugs: [],
    prescriptionRequest: [],
  };

  // handleResethypertension = () => {
  //   if(this.state.hypertensive === 'no'){
  //     this.setState( {
  //       hypertensiveDuration: null,
  //       hypertensiveRegularOnMedication: null,
  //     })
  //   }
  // }
  onInputChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({ history: { ...prev.history, [name]: value } }));
  };

  onRadioInputChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({ history: { ...prev.history, [name]: value } }));
  };

  handleSpeechInputChange = (value, name) => {
    this.setState((prev) => ({ history: { ...prev.history, [name]: value } }));
  };

  componentDidMount() {
    this.setState({ history: this.props.historyOfPComplaints });
    fetch(`${apiURL()}/drugs/drugs/all`)
      .then((results) => results.json())
      .then((data) => this.setState({ drugs: data.results }))
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this.handleSubmit();
  }
  handleDrugChange = (drug) => {
    // console.log(drug)
    let drugs = [];
    drug.forEach((d) => (d.drug ? drugs.push(d.drug) : drugs.push(d.label)));

    let drugStr = drugs.join(", ");
    this.setState((prev) => ({
      history: { ...prev.history, drugAllergy: drugStr },
    }));
  };
  // onCheckboxChange=(e)=> {
  //     this.setState(prevState => ({ [e.target.name]: prevState.[e.target.name] }));
  // }
  inputChange = (value, key) => {
    // console.log(key, value)
    this.setState((prev) => ({ history: { ...prev.history, [key]: value } }));
  };

  handleSubmit = () => {
    // e.preventDefault();
    const {
      others,
      pastMedicalHistory,
      pastSurgicalHistory,
      allergy,
      drugAllergy,
      social,
      otherAllergies,
      otherSocialHistory,
      obtsGyneaHistory,
      drugHistory,
      hypertensive,
      diabetic,
      hypertensiveDuration,
      hypertensiveRegularOnMedication,
      optimalSugarControl,
      asthmatic,
      pbnh,
      nutrition,
      immunization,
      development,
    } = this.state.history;
    const formData = {
      others,
      pastMedicalHistory,
      pastSurgicalHistory,
      allergy,
      drugAllergy,
      social,
      otherAllergies,
      otherSocialHistory,
      obtsGyneaHistory,
      drugHistory,
      hypertensive,
      diabetic,
      hypertensiveDuration,
      hypertensiveRegularOnMedication,
      optimalSugarControl,
      asthmatic,
      pbnh,
      nutrition,
      immunization,
      development,
    };
    if (
      others === "" &&
      pastMedicalHistory === "" &&
      pastSurgicalHistory === "" &&
      allergy === "" &&
      drugAllergy === "" &&
      social === "" &&
      otherAllergies === "" &&
      otherSocialHistory === "" &&
      obtsGyneaHistory === "" &&
      drugHistory === "" &&
      hypertensive === "" &&
      diabetic === "" &&
      asthmatic === "" &&
      pbnh === "" &&
      nutrition === "" &&
      immunization === "" &&
      development === ""
    )
      return;
    this.props.saveHistory(formData);
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#0069D9",
      width: "50px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  renderView = ({ style, ...props }) => {
    const viewStyle = {
      padding: 15,
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  };

  render() {
    // const { drugs } = this.props;
    const {
      pastMedicalHistory,
      pastSurgicalHistory,
      allergy,
      // drugAllergy,
      otherAllergies,
      otherSocialHistory,
      obtsGyneaHistory,
      drugHistory,
      hypertensive,
      diabetic,
      hypertensiveDuration,
      hypertensiveRegularOnMedication,
      optimalSugarControl,
      asthmatic,
      pbnh,
      nutrition,
      immunization,
      development,
    } = this.state.history;
    const { handleDrugChange } = this;
    return (
      <Card>
        <CardHeader tag="h6">Past Medical History</CardHeader>
        <CardBody style={{ height: 400 }}>
          {/* {JSON.stringify(this.state)} */}
          <Scrollbars
            renderThumbVertical={this.renderThumb}
            renderView={this.renderView}
          >
            <Form>
              <FormGroup row>
                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}>
                      Known Hypertensive?
                    </label>
                    {/* <CustomInput onChange={e => console.log(e.target.value)} type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" /> */}
                    <div>
                      <input
                        className="mr-1"
                        type="radio"
                        name="hypertensive"
                        checked={hypertensive === "Yes"}
                        onChange={this.onInputChange}
                        value="Yes"
                        style={{ width: "16px", height: "16px" }}
                      />
                      Yes
                      <input
                        className="mr-1"
                        type="radio"
                        name="hypertensive"
                        checked={hypertensive === "No"}
                        onChange={(e) => {
                          this.onInputChange(e);
                          this.setState((prev) => ({
                            history: {
                              ...prev.history,
                              hypertensiveDuration: null,
                              hypertensiveRegularOnMedication: null,
                            },
                          }));
                        }}
                        value="No"
                        style={{
                          width: "16px",
                          height: "16px",
                          marginLeft: 10,
                        }}
                      />
                      No
                    </div>
                  </div>
                  {hypertensive === "Yes" ? (
                    <>
                      <div>
                        <label>For how long?</label>
                        <input
                          className="form-control"
                          type="text"
                          name="hypertensiveDuration"
                          value={hypertensiveDuration}
                          onChange={this.onInputChange}
                        />
                      </div>

                      <div>
                        <label>Regular on medications?</label>
                        <input
                          className="form-control"
                          type="text"
                          name="hypertensiveRegularOnMedication"
                          value={hypertensiveRegularOnMedication}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}>
                      Known Diabetic?
                    </label>
                    <div>
                      <input
                        className="mr-1"
                        type="radio"
                        name="diabetic"
                        checked={diabetic === "Yes"}
                        onChange={this.onInputChange}
                        value="Yes"
                        style={{ width: "16px", height: "16px" }}
                      />
                      Yes
                      <input
                        className="mr-1"
                        type="radio"
                        name="diabetic"
                        checked={diabetic === "No"}
                        onChange={(e) => {
                          this.onInputChange(e);
                          this.setState((prev) => ({
                            history: {
                              ...prev.history,
                              optimalSugarControl: null,
                            },
                          }));
                        }}
                        value="No"
                        style={{
                          width: "16px",
                          height: "16px",
                          marginLeft: 10,
                        }}
                      />
                      No
                    </div>
                  </div>
                  {diabetic === "Yes" ? (
                    <div>
                      <label>Optimal Sugar Control?</label>
                      <input
                        className="mr-1 form-control"
                        type="text"
                        name="optimalSugarControl"
                        value={optimalSugarControl}
                        onChange={this.onInputChange}
                      />
                    </div>
                  ) : null}
                </div>
              </FormGroup>
              <FormGroup row>
                <div
                  className="col-md-6"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <label style={{ fontWeight: "bold" }}>Known Asthmatic?</label>
                  <div>
                    <input
                      className="mr-1"
                      type="radio"
                      name="asthmatic"
                      checked={asthmatic === "yes"}
                      onChange={this.onInputChange}
                      value="yes"
                      style={{ width: "16px", height: "16px" }}
                    />
                    Yes
                    <input
                      className="mr-1"
                      type="radio"
                      name="asthmatic"
                      checked={asthmatic === "no"}
                      onChange={this.onInputChange}
                      value="no"
                      style={{ width: "16px", height: "16px", marginLeft: 10 }}
                    />
                    No
                  </div>
                </div>
              </FormGroup>
              <FormGroup row>
                {/* <div className="col-md-6">
                  <label>Others</label>
                  <SpeechInput
                    tag="textarea"
                    name="others"
                    value={others}
                    onInputChange={text =>
                      this.handleSpeechInputChange(text, 'others')
                    }
                    className="form-control"
                  />
                </div> */}
                <div className="col-md-6">
                  <label>Past Medical History</label>
                  <SpeechInput
                    tag="textarea"
                    name="pastMedicalHistory"
                    value={pastMedicalHistory}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "pastMedicalHistory")
                    }
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Past Surgical History</label>
                  <SpeechInput
                    tag="textarea"
                    name="pastSurgicalHistory"
                    value={pastSurgicalHistory}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "pastSurgicalHistory")
                    }
                    className="form-control"
                  />
                </div>
              </FormGroup>

              <FormGroup row>
                <div className="col-md-6">
                  <label>Allergy</label>

                  <div>
                    {/* <span style={{ marginRight: 20 }}>
                      <input
                        onChange={() => {
                          let soc = this.state.history.allergy;
                          let oldList = soc.split(',');
                          if (oldList.indexOf('foodstuff') !== -1) {
                            let newList = oldList.filter(
                              (i) => i !== 'foodstuff'
                            );
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                allergy: newList.join(','),
                              },
                            }));
                          } else {
                            let newList = oldList;
                            newList.push('foodstuff');
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                allergy: newList.join(','),
                              },
                            }));
                          }
                        }}
                        name="allergy"
                        value="foodstuff"
                        type="checkbox"
                        checked={this.state.history.allergy.includes(
                          'foodstuff'
                        )}
                      />
                      Food Stuff
                    </span> */}
                    {/* <input
                      onChange={() => {
                        let soc = this.state.history.allergy;
                        let oldList = soc.split(',');
                        if (oldList.indexOf('flower') !== -1) {
                          let newList = oldList.filter(i => i !== 'flower');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              allergy: newList.join(','),
                            },
                          }));
                        } else {
                          let newList = oldList;
                          newList.push('flower');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              allergy: newList.join(','),
                            },
                          }));
                        }
                      }}
                      name="allergy"
                      value="flower"
                      type="checkbox"
                      checked={this.state.history.allergy.includes('flower')}
                    />
                    Flower
                    <input
                      onChange={() => {
                        let soc = this.state.history.allergy;
                        let oldList = soc.split(',');
                        if (oldList.indexOf('dust') !== -1) {
                          let newList = oldList.filter(i => i !== 'dust');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              allergy: newList.join(','),
                            },
                          }));
                        } else {
                          let newList = oldList;
                          newList.push('dust');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              allergy: newList.join(','),
                            },
                          }));
                        }
                      }}
                      name="allergy"
                      value="dust"
                      type="checkbox"
                      checked={this.state.history.allergy.includes('dust')}
                    />
                    Dust/Smoke */}
                    <span>
                      <input
                        className="mr-1"
                        onChange={() => {
                          let soc = this.state.history.allergy;
                          let oldList = soc.split(",");
                          if (oldList.indexOf("drugs") !== -1) {
                            let newList = oldList.filter((i) => i !== "drugs");
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                allergy: newList.join(","),
                              },
                            }));
                          } else {
                            let newList = oldList;
                            newList.push("drugs");
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                allergy: newList.join(","),
                              },
                            }));
                          }
                        }}
                        name="allergy"
                        value="drugs"
                        type="checkbox"
                        checked={this.state.history.allergy.includes("drugs")}
                        style={{ width: "16px", height: "16px" }}
                      />
                      Drugs
                    </span>
                  </div>

                  {allergy.includes("drugs") && (
                    <div>
                      <label>Drug Name</label>
                      {this.props.historyOfPComplaints.drugAllergy === "" ||
                      this.state.history.drugAllergy === "" ? (
                        <Typeahead
                          align="justify"
                          id="drug"
                          ref={(ref) => (this._drugs_typeahead = ref)}
                          options={this.state.drugs}
                          labelKey={(item) => `${item.drug}`}
                          onChange={(val) => {
                            if (val.length) {
                              handleDrugChange(val);
                            }
                          }}
                          // onInputChange={(text) => handleDrugChange(text)}
                          allowNew={true}
                        />
                      ) : (
                        <span className="form-control d-flex justify-content-between align-items-center">
                          {this.state.history.drugAllergy}
                          <FaTimes
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              this.setState((prev) => ({
                                history: {
                                  ...prev.history,
                                  drugAllergy: "",
                                },
                              }))
                            }
                          />
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label>Social History</label>
                  <div>
                    {/* <input
                      onChange={() => {
                        let soc = this.state.history.social;
                        let oldList = soc.split(',');
                        if (oldList.indexOf('married') !== -1) {
                          let newList = oldList.filter(i => i !== 'married');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              social: newList.join(','),
                            },
                          }));
                        } else {
                          let newList = oldList;
                          newList.push('married');
                          this.setState(prev => ({
                            history: {
                              ...prev.history,
                              social: newList.join(','),
                            },
                          }));
                        }
                      }}
                      name="social"
                      value="married"
                      type="checkbox"
                      checked={this.state.history.social.includes('married')}
                    />
                    Married */}
                    <span style={{ marginRight: 20 }}>
                      <input
                        className="mr-1"
                        style={{ width: "16px", height: "16px" }}
                        onChange={() => {
                          let soc = this.state.history.social;
                          let oldList = soc.split(",");
                          if (oldList.indexOf("smoking") !== -1) {
                            let newList = oldList.filter(
                              (i) => i !== "smoking"
                            );
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                social: newList.join(","),
                              },
                            }));
                          } else {
                            let newList = oldList;
                            newList.push("smoking");
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                social: newList.join(","),
                              },
                            }));
                          }
                        }}
                        name="social"
                        value="smoking"
                        type="checkbox"
                        checked={this.state.history.social.includes("smoking")}
                      />
                      Smoking
                    </span>
                    <span>
                      <input
                        className="mr-1"
                        style={{ width: "16px", height: "16px" }}
                        onChange={() => {
                          let soc = this.state.history.social;
                          let oldList = soc.split(",");
                          if (oldList.indexOf("alcohol") !== -1) {
                            let newList = oldList.filter(
                              (i) => i !== "alcohol"
                            );
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                social: newList.join(","),
                              },
                            }));
                          } else {
                            let newList = oldList;
                            newList.push("alcohol");
                            this.setState((prev) => ({
                              history: {
                                ...prev.history,
                                social: newList.join(","),
                              },
                            }));
                          }
                        }}
                        name="social"
                        value="alcohol"
                        type="checkbox"
                        checked={this.state.history.social.includes("alcohol")}
                      />
                      Alcohol
                    </span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6">
                  <label>Other Allergies</label>
                  <SpeechInput
                    tag="textarea"
                    name="otherAllergies"
                    value={otherAllergies}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "otherAllergies")
                    }
                    className="form-control"
                  />
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6">
                  <label>Other Social History:</label>
                  <SpeechInput
                    tag="textarea"
                    name="otherSocialHistory"
                    value={otherSocialHistory}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "otherSocialHistory")
                    }
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Drug History:</label>
                  <SpeechInput
                    tag="textarea"
                    name="drugHistory"
                    value={drugHistory}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "drugHistory")
                    }
                    className="form-control"
                  />
                </div>
              </FormGroup>

              <FormGroup row>
                <div className="col-md-6">
                  <label>Obts & Gynea History:</label>
                  <SpeechInput
                    tag="textarea"
                    name="obtsGyneaHistory"
                    value={obtsGyneaHistory}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, "obtsGyneaHistory")
                    }
                    className="form-control"
                  />
                </div>
              </FormGroup>
            </Form>
            <PreviousMedicalHistoryForm
              onInputChange={this.inputChange}
              pbnh={pbnh}
              nutrition={nutrition}
              immunization={immunization}
              development={development}
            />
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <button
            className="btn btn-sm btn-outline-primary col-md-3"
            onClick={() => {
              this.handleSubmit();
              this.props.history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/history/presentingcomplaints`
              );
            }}
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              this.props.history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/examination/vitalsigns`
              );
            }}
            className="btn btn-sm btn-outline-primary offset-md-6 col-md-3"
          >
            Next
            <FaArrowRight />
          </button>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = ({
  doctor: { historyOfPComplaints },
  pharmacy: { drugs },
}) => ({
  historyOfPComplaints,
  drugs,
});
const mapDispatchToProps = (dispatch) => ({
  saveHistory: (data) => dispatch(savePComplaintsHisory(data)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HistoryForm);
