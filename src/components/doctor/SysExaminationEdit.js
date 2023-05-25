/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  FormGroup,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Label,
} from "reactstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SpeechInput from "../comp/speech-to-text/SpeechInput";
import { Scrollbars } from "react-custom-scrollbars";
import Mss from "./system-exams/Mss";
import Cvs from "./system-exams/Cvs";
import Respiratory from "./system-exams/Respiratory";
import Abdomen from "./system-exams/Abdomen";
import Cns from "./system-exams/Cns";
import { saveGPE } from "../../redux/actions/doctor";
import { GrDown, GrUp } from "react-icons/gr";

class SysExaminationEdit extends Component {
  state = {
    sysExam: {
      palpation: "",
      inspection: "",
      percussion: "",
      auscultation: "",
      generalexamination: "",
      mss: "",
      cvs: "",
      abdomen: "",
      respiratory: "",
      otherSysExamination: "",
      cns: "",
      eye_opening: 0,
      BVR: 0,
      BMR: 0,
      gcs: 0,
      RUL: 0,
      LUL: 0,
      RLL: 0,
      LLL: 0,
      palor: "",
      dehydration: "",
      icterus: "",
      cyanosis: "",
      rDistress: "",
      pedalEdema: "",
      gLymphadenopathy: "",
      otherFinding: "",
    },
    formRecords: [],
    modal: false,
    sysExamsCollapseOpen: true,
    vitalSignsCollapseOpen: false,
    moreSysExamsCollapseOpen: true,
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
    isOpen: true,
  };

  onPalorChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        palor: value,
      },
    }));
  };

  onDehydrationChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        dehydration: value,
      },
    }));
  };

  onIcterusChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        icterus: value,
      },
    }));
  };

  onPedalEdemaChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        pedalEdema: value,
      },
    }));
  };
  onCyanosisChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        cyanosis: value,
      },
    }));
  };

  onRDistressChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        rDistress: value,
      },
    }));
  };

  onGLymphadenopathyChange = ({ target: { value } }) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        gLymphadenopathy: value,
      },
    }));
  };
  handleChange = (value) => {
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        otherFinding: value,
      },
    }));
  };

  handleToggle = () => {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));
  };

  handleUpdate = (values) => {
    const { scrollTop, scrollHeight, clientHeight } = values;
    const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20);
    const bottomScrollTop = scrollHeight - clientHeight;
    const shadowBottomOpacity =
      (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
    // css(shadowTop, { opacity: shadowTopOpacity });
    // css(shadowBottom, { opacity: shadowBottomOpacity });
  };

  componentDidMount() {
    const { sysExam } = this.props;
    this.setState((prev) => ({
      sysExam: {
        ...prev.sysExam,
        palor: sysExam.palor,
        dehydration: sysExam.dehydration,
        icterus: sysExam.icterus,
        cyanosis: sysExam.cyanosis,
        rDistress: sysExam.rDistress,
        pedalEdema: sysExam.pedalEdema,
        gLymphadenopathy: sysExam.gLymphadenopathy,
        otherFinding: sysExam.otherFinding,
      },
    }));
  }

  toggleSysExamsCollapse = () =>
    this.setState((prev) => ({
      sysExamsCollapseOpen: !prev.sysExamsCollapseOpen,
    }));
  toggleVitalSignsCollapse = () =>
    this.setState((prev) => ({
      vitalSignsCollapseOpen: !prev.vitalSignsCollapseOpen,
    }));
  toggleMoreSysExamsCollapse = () =>
    this.setState((prev) => ({
      moreSysExamsCollapseOpen: !prev.moreSysExamsCollapseOpen,
    }));

  handleSubmit = () => {
    // e.preventDefault();
    const {
      palor,
      dehydration,
      icterus,
      cyanosis,
      rDistress,
      pedalEdema,
      gLymphadenopathy,
      otherFinding,
      palpation,
      inspection,
      percussion,
      auscultation,
      generalexamination,
      mss,
      cvs,
      abdomen,
      respiratory,
      otherSysExamination,
      cns,
      eye_opening,
      BVR,
      BMR,
      RUL,
      LUL,
      RLL,
      LLL,
    } = this.state.sysExam;
    const formData = {
      palor,
      dehydration,
      icterus,
      cyanosis,
      rDistress,
      pedalEdema,
      gLymphadenopathy,
      otherFinding,
      palpation,
      inspection,
      percussion,
      auscultation,
      generalexamination,
      mss,
      cvs,
      abdomen,
      respiratory,
      otherSysExamination,
      cns,
      eye_opening,
      BVR,
      BMR,
      RUL,
      LUL,
      RLL,
      LLL,
      gcs: parseInt(eye_opening) + parseInt(BVR) + parseInt(BMR),
    };
    if (
      palpation === "" &&
      inspection === "" &&
      percussion === "" &&
      auscultation === "" &&
      generalexamination === "" &&
      otherFinding === "" &&
      mss === "" &&
      cvs === "" &&
      abdomen === "" &&
      respiratory === "" &&
      otherSysExamination === "" &&
      cns === "" &&
      eye_opening === 0 &&
      BVR === 0 &&
      BMR === 0 &&
      RUL === 0 &&
      LUL === 0 &&
      RLL === 0 &&
      LLL === 0
    )
      return;
    this.props.saveGPE(formData);
    // return localStorage.setItem('system_examination', JSON.stringify(formData));
  };

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  componentWillUnmount() {
    const obj = {
      palor: this.state.sysExam.palor,
      dehydration: this.state.sysExam.dehydration,
      icterus: this.state.sysExam.icterus,
      cyanosis: this.state.sysExam.cyanosis,
      rDistress: this.state.sysExam.rDistress,
      pedalEdema: this.state.sysExam.pedalEdema,
      gLymphadenopathy: this.state.sysExam.gLymphadenopathy,
      otherFinding: this.state.sysExam.otherFinding,
    };
    this.props.saveGPE(obj);
  }
  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#0069D9",
      width: "50px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const {
      sysExam: { respiratory, mss, cvs, abdomen, cns },
      sysExamsCollapseOpen,
    } = this.state;
    const { toggleSysExamsCollapse } = this;
    const { history } = this.props;

    return (
      <Card>
        <CardHeader tag="h6">System Examination</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars renderThumbVertical={this.renderThumb}>
            {/* {JSON.stringify(this.state)} */}
            <div>
              <div
                style={{ cursor: "pointer" }}
                onClick={toggleSysExamsCollapse}
              >
                <CardHeader
                  tag="div"
                  className="d-flex flex-direction-row justify-content-between btn p-0 pl-2 pr-2"
                  onClick={this.handleToggle}
                  style={{ height: "40px" }}
                >
                  <span style={{ fontWeight: "bold" }}>
                    General Physical Examination
                  </span>
                  <span>{sysExamsCollapseOpen ? <GrDown /> : <GrUp />}</span>
                </CardHeader>
              </div>
              <Collapse isOpen={sysExamsCollapseOpen}>
                <FormGroup row>
                  <div className="col-md-2 ml-4">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Palor
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="palor"
                            value="None"
                            checked={this.state.sysExam.palor === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPalorChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="palor"
                            value="Mild"
                            checked={this.state.sysExam.palor === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPalorChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="palor"
                            value="Moderate"
                            checked={this.state.sysExam.palor === "Moderate"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPalorChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="palor"
                            value="Severe"
                            checked={this.state.sysExam.palor === "Severe"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPalorChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-2">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Dehydration
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="dehydration"
                            value="None"
                            checked={this.state.sysExam.dehydration === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onDehydrationChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="dehydration"
                            value="Mild"
                            checked={this.state.sysExam.dehydration === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onDehydrationChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="dehydration"
                            value="Moderate"
                            checked={
                              this.state.sysExam.dehydration === "Moderate"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onDehydrationChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="dehydration"
                            value="Severe"
                            checked={
                              this.state.sysExam.dehydration === "Severe"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onDehydrationChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-2">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Icterus
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="icterus"
                            value="None"
                            checked={this.state.sysExam.icterus === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onIcterusChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="icterus"
                            value="Mild"
                            checked={this.state.sysExam.icterus === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onIcterusChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="icterus"
                            value="Moderate"
                            checked={this.state.sysExam.icterus === "Moderate"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onIcterusChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="icterus"
                            value="Severe"
                            checked={this.state.sysExam.icterus === "Severe"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onIcterusChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-2">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Cyanosis
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="cyanosis"
                            value="None"
                            checked={this.state.sysExam.cyanosis === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onCyanosisChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="cyanosis"
                            value="Mild"
                            checked={this.state.sysExam.cyanosis === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onCyanosisChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="cyanosis"
                            value="Moderate"
                            checked={this.state.sysExam.cyanosis === "Moderate"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onCyanosisChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="cyanosis"
                            value="Severe"
                            checked={this.state.sysExam.cyanosis === "Severe"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onCyanosisChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-3">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Respiratory Distress
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="rDistress"
                            value="None"
                            checked={this.state.sysExam.rDistress === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onRDistressChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="rDistress"
                            value="Mild"
                            checked={this.state.sysExam.rDistress === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onRDistressChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="rDistress"
                            value="Moderate"
                            checked={
                              this.state.sysExam.rDistress === "Moderate"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onRDistressChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="rDistress"
                            value="Severe"
                            checked={this.state.sysExam.rDistress === "Severe"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onRDistressChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-2 ml-4">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        Pedal Edema
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="pedalEdema"
                            value="None"
                            checked={this.state.sysExam.pedalEdema === "None"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPedalEdemaChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="pedalEdema"
                            value="Mild"
                            checked={this.state.sysExam.pedalEdema === "Mild"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPedalEdemaChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="pedalEdema"
                            value="Moderate"
                            checked={
                              this.state.sysExam.pedalEdema === "Moderate"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPedalEdemaChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="pedalEdema"
                            value="Severe"
                            checked={this.state.sysExam.pedalEdema === "Severe"}
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onPedalEdemaChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="col-md-3">
                    <FormGroup>
                      <Label
                        for="exampleCheckbox"
                        className="font-weight-bold mt-2 mb-0"
                      >
                        General Lymphadenopathy
                      </Label>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="gLymphadenopathy"
                            value="None"
                            checked={
                              this.state.sysExam.gLymphadenopathy === "None"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onGLymphadenopathyChange}
                          />
                          None
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="gLymphadenopathy"
                            value="Mild"
                            checked={
                              this.state.sysExam.gLymphadenopathy === "Mild"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onGLymphadenopathyChange}
                          />
                          Mild
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="gLymphadenopathy"
                            value="Moderate"
                            checked={
                              this.state.sysExam.gLymphadenopathy === "Moderate"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onGLymphadenopathyChange}
                          />
                          Moderate
                        </label>
                        <label className="m-0 ml-3">
                          <Input
                            type="radio"
                            name="gLymphadenopathy"
                            value="Severe"
                            checked={
                              this.state.sysExam.gLymphadenopathy === "Severe"
                            }
                            style={{ width: "16px", height: "16px" }}
                            onChange={this.onGLymphadenopathyChange}
                          />
                          Severe
                        </label>
                      </div>
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <label>Other Finding</label>
                    <SpeechInput
                      type="textarea"
                      name="otherFinding"
                      onInputChange={(text) => this.handleChange(text)}
                      value={this.state.sysExam.otherFinding}
                      className="form-control"
                    />
                  </div>
                </FormGroup>
              </Collapse>
              <div className="row">
                <div className="col-md-12 col-lg-12 mt-2">
                  <Cvs cvs={cvs} />
                </div>
                <div className="col-md-12 col-lg-12 mt-2">
                  <Respiratory respiratory={respiratory} />
                </div>
                <div className="col-md-12 col-lg-12 mt-2">
                  <Abdomen abdomen={abdomen} />
                </div>
                <div className="col-md-12 col-lg-12 mt-2">
                  <Cns cns={cns} />
                </div>
                <div className="col-md-12 col-lg-12 mt-2 mb-3">
                  <Mss mss={mss} />
                </div>
              </div>
            </div>
          </Scrollbars>
        </CardBody>
        <CardFooter className="p-0">
          <button
            className="btn btn-sm btn-outline-primary col-sm-3 col-xs-3 col-md-3"
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/examination/vitalsigns`
              );
            }}
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/examination/athropometry`
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

const mapStateToProps = ({ doctor }) => ({ sysExam: doctor.systemExam });

const mapDispatchToProps = (dispatch) => ({
  saveGPE: (data) => dispatch(saveGPE(data)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SysExaminationEdit);
