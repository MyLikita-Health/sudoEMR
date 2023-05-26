import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  // InputGroupAddon,
  // InputGroup,
} from "reactstrap";
import DrugsTable from "./DrugsTable";
import { Typeahead } from "react-bootstrap-typeahead";
import { _warningNotify } from "../utils/helpers";
import { FaPlus } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars";
import { savePrescriptionRequest } from "../../redux/actions/doctor";
import FooterButtons from "./components/FooterButtons";
import { withRouter } from "react-router";
import { compose } from "redux";
import { v4 as uuidV4 } from "uuid";
import { apiURL } from "../../redux/actions/index";
import SpeechInput from "../comp/speech-to-text/SpeechInput";
import Autocomplete from "../../components/comp/components/AutoComplete";
import { _fetchApi2 } from "../../redux/actions/api";

class EditPrescriptionRequest extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      route: "",
      drug: "",
      dosage: "",
      duration: "",
      period: 0,
      frequency: "",
      drugs: [],
      prescriptionRequest: [],
      price: "",
      drugFreq: [],
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getDrugFreq = () => {
    _fetchApi2(
      `${apiURL()}/drugs/drugs_freq?facilityId=${this.props.facilityId}`,
      (data) => {
        if (data && data.results) {
          this.setState({ drugFreq: data.results });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  clearText = () => {
    this.setState({
      route: "",
      drug: "",
      dosage: "",
      duration: "",
      period: 0,
      frequency: "",
      price: "",
      additionalInfo: "",
    });
    this._drugs_typeahead.clear();
    this._route.clear();
  };

  getDrugs = () => {
    _fetchApi2(
      `${apiURL()}/drugs/drugs/all`,
      (data) => this.setState({ drugs: data.results }),
      (err) => console.log(err)
    );
  };

  componentDidMount() {
    this.setState({ prescriptionRequest: this.props.prescriptionRequest });
    this.getDrugs();
    this.getDrugFreq();
  }

  handleAddPrescription = (e) => {
    e.preventDefault();
    const {
      drug,
      dosage,
      duration,
      period,
      frequency,
      price,
      route,
      additionalInfo,
    } = this.state;
    if (drug === "") {
      return _warningNotify("Invalid prescription, please complete the form");
    }

    const formData = {
      _id: uuidV4(),
      route,
      drug,
      dosage,
      duration,
      period,
      frequency,
      price,
      additionalInfo,
    };
    // console.log(formData, this.state.prescriptionRequest)
    this.setState((prev) => ({
      prescriptionRequest: [...prev.prescriptionRequest, formData],
    }));
    this.clearText();
  };

  onRouteChange = (name, value) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { prescriptionRequest } = this.state;
    this.props.savePrescriptionRequest(prescriptionRequest);
  };

  removeDrug = (drug) => {
    const { prescriptionRequest } = this.state;
    let newList = prescriptionRequest.filter((d) => d.drug !== drug);
    this.setState({ prescriptionRequest: newList });
  };

  handleDrugChange = (drug) => this.setState({ drug });

  onPeriodChange = (e) => {
    this.setState({ period: e.target.value });
  };

  onDurationChange = (e) => {
    this.setState({ duration: e.target.value });
  };

  render() {
    const dropdownItems = [];
    for (let i = 0; i <= 10; i++) {
      dropdownItems.push(<option value={i}>{i}</option>);
    }

    const { history } = this.props;
    const {
      dosage,
      period,
      duration,
      frequency,
      route,
      additionalInfo,
    } = this.state;
    const { handleDrugChange, onRouteChange } = this;
    return (
      <Card>
        {/* {JSON.stringify(this.state)} */}
        <CardHeader tag="h6">Prescription Request</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autohide>
            <Form onSubmit={this.handleAddPrescription}>
              <FormGroup row>
                <div className="col-md-4">
                  <Autocomplete
                    name="route"
                    options={["IV", "IM", "Tabs", "Susp", "SC", "Syr", "Caps"]}
                    value={route}
                    _ref={(ref) => (this._route = ref)}
                    onChange={(item) => {
                      if (item.length) {
                        onRouteChange("route", item[0]);
                      }
                    }}
                    onInputChange={(text) => onRouteChange("route", text)}
                    label="Route"
                  />
                </div>
                <div className="col-md-4">
                  <label>Select Drugs</label>
                  <Typeahead
                    align="justify"
                    id="drug"
                    ref={(ref) => (this._drugs_typeahead = ref)}
                    options={this.state.drugs}
                    labelKey={(item) => `${item.name}`}
                    onChange={(val) => {
                      if (val.length) {
                        handleDrugChange(val[0].name);
                      }
                    }}
                    onInputChange={(text) => handleDrugChange(text)}
                  />
                </div>

                <div className="col-md-4">
                  <label>Dosage</label>
                  <input
                    type="text"
                    name="dosage"
                    value={dosage}
                    className="form-control"
                    onChange={this.onInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-4">
                  <Autocomplete
                    name="route"
                    options={this.state.drugFreq}
                    value={frequency}
                    _ref={(ref) => (this.frequency = ref)}
                    onChange={(item) => {
                      if (item.length) {
                        onRouteChange("frequency", item[0].description);
                      }
                    }}
                    onInputChange={(text) => onRouteChange("frequency", text)}
                    label="Frequency"
                    labelClass="font-weight-normal"
                    labelKey="description"
                  />
                </div>
                <div className="col-md-4">
                  <label>Duration</label>
                  <select
                    className="form-control"
                    value={duration}
                    onChange={this.onDurationChange}
                  >
                    {dropdownItems}
                  </select>
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
                      onChange={this.onPeriodChange}
                    />
                    Day
                    <input
                      style={{ width: "16px", height: "16px" }}
                      type="radio"
                      name="period"
                      checked={period === "week"}
                      value="week"
                      onChange={this.onPeriodChange}
                    />
                    Week
                    <input
                      style={{ width: "16px", height: "16px" }}
                      type="radio"
                      name="period"
                      checked={period === "Month"}
                      value="Month"
                      onChange={this.onPeriodChange}
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
                      this.handleChange("additionalInfo", text)
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

            <br />
            <div className="">
              <DrugsTable
                prescriptionRequest={this.state.prescriptionRequest}
                onRemove={this.removeDrug}
              />
            </div>
          </Scrollbars>
        </CardBody>
        <CardFooter className="p-0">
          <FooterButtons
            prev={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/management/plan`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/management/radiologyinvestigations`
              );
            }}
          />
        </CardFooter>
      </Card>
    );
  }

  componentWillUnmount() {
    this.handleSubmit();
  }
}

const mapStateToProps = ({ doctor, pharmacy, auth }) => ({
  prescriptionRequest: doctor.prescriptionRequest,
  drugs: pharmacy.drugs,
  facilityId: auth.user.facilityId,
});

const mapDispatchToProps = (dispatch) => ({
  savePrescriptionRequest: (data) => dispatch(savePrescriptionRequest(data)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditPrescriptionRequest);
