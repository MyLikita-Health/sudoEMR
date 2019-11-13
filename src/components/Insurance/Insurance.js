import React, { Component } from "react";
import { InsuranceGuide } from "../Guides";
import InsuranceDashBoard from "./InsuranceDashBoard";

export default class Insurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isRoute: true,
      processing: false,
      details: {}
    };
  }

  toggleProcessingForm = () =>
    this.setState(prevState => ({ processing: !prevState.processing }));

  getDetails = details => {
    this.setState({ details });
    this.toggleProcessingForm();
  };

  toggleRoute = () =>
    this.setState(prevState => ({ isRoute: !prevState.isRoute }));

  render() {
    const { details, processing } = this.state;
    const { toggleProcessingForm } = this;
    return (
      <div className="row" style={{ backgroundColor: "#ffffff" }}>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <div className="pharmacy-guide-container">
            <InsuranceGuide />
          </div>
        </div>
        <div
          className="col-xs-12 col-s-12 col-md-8 col-lg-6"
          style={{ height: "85vh", border: "1px solid #007bff" }}
        >
          <InsuranceDashBoard
            details={details}
            processing={processing}
            toggleProcessingForm={toggleProcessingForm}
          />
        </div>
        <div className="col-xs-12 col-md-12 col-md-12 col-lg-3"></div>
      </div>
    );
  }
}
