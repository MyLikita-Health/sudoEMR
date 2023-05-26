import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { connect } from "react-redux";
import { saveVitalSigns } from "../../redux/actions/doctor";
import { compose } from "redux";

class CreateVitalSigns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vitalSigns: {
        tempreture: "",
        pulse: "",
        bloodpressure: "",
        vital_height: "",
        respiratoryRate: "",
        vital_weight: "",
      },
      formRecords: [],
    };
  }

  componentDidMount() {
    // this.setState({ data: (JSON.parse(localStorage.getItem("vital_signs")))})
    this.setState({ vitalSigns: this.props.vitalSigns });
  }

  handleSubmit = () => {
    // e.preventDefault();
    // this.props.setComponent('PcomplaintsForm');
    const {
      tempreture,
      pulse,
      bloodpressure,
      vital_height,
      respiratoryRate,
      vital_weight,
    } = this.state.vitalSigns;

    const formData = {
      tempreture,
      pulse,
      bloodpressure,
      vital_height,
      respiratoryRate,
      vital_weight,
    };

    if (
      tempreture === "" &&
      pulse === "" &&
      bloodpressure === "" &&
      vital_height === "" &&
      respiratoryRate === "" &&
      vital_weight
    )
      return;

    // localStorage.setItem('vital_signs', JSON.stringify(formData));
    this.props.saveVitalSigns(formData);
  };

  onInputChange = ({ target: { name, value } }) =>
    this.setState((prev) => ({
      vitalSigns: { ...prev.vitalSigns, [name]: value },
    }));

  render() {
    const {
      onInputChange,
      props: { history },
      state: {
        vitalSigns: { tempreture, pulse, bloodpressure, respiratoryRate },
      },
    } = this;
    return (
      <Card>
        <CardHeader tag="h6">Vital Signs</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars>
            <Form>
              {/* <label className='col-md-2'>Blood Pressure (mmHg):</label>
                <input name="bloodpressure" value={bloodpressure} onChange={onInputChange} className="form-control col-md-4" /> */}
              {/* <label className='col-md-2'>Height (m):</label>
                <input name="vital_height" value={vital_height} onChange={onInputChange} className="form-control col-md-4" /> */}

              {/* <FormGroup row> */}
              <FormGroup row>
                <div className="col-md-3 col-lg-3">
                  <label>Temperature</label>
                  <InputGroup>
                    <Input
                      name="tempreture"
                      value={tempreture}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">°C</InputGroupAddon>
                  </InputGroup>
                </div>

                <div className="offset-md-1 offset-lg-1 col-md-3 col-lg-3">
                  <label>Respiratory Rate</label>
                  <InputGroup>
                    <Input
                      name="respiratoryRate"
                      value={respiratoryRate}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">c/min</InputGroupAddon>
                  </InputGroup>
                </div>

                <div className="offset-md-1 offset-lg-1 col-md-3 col-lg-3">
                  <label>Blood Pressure:</label>
                  <InputGroup>
                    <Input
                      name="bloodpressure"
                      value={bloodpressure}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">mmHg</InputGroupAddon>
                  </InputGroup>
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-3 col-lg-3">
                  <label>Pulse Rate</label>
                  <InputGroup>
                    <Input
                      name="pulse"
                      value={pulse}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">b/min</InputGroupAddon>
                  </InputGroup>
                </div>
              </FormGroup>
            </Form>
          </Scrollbars>
        </CardBody>
        <CardFooter className="p-0">
          <button
            className="btn btn-sm btn-outline-primary col-sm-3 col-xs-3 col-md-3"
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/history/previousmedicalhistory`
              );
            }}
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/examination/systemexam`
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

  componentWillUnmount() {
    this.handleSubmit();
  }
}

function mapStateToProps(state) {
  return {
    vitalSigns: state.doctor.vitalSigns,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveVitalSigns: (data) => dispatch(saveVitalSigns(data)),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CreateVitalSigns);
