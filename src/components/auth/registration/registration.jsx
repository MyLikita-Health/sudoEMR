/* eslint-disable default-case */
import React from 'react';
import AccountFields from './account-fields';
import Confirmation from './Confirmation';
import Success from './Success';
import SurveyFields from './SurveyFields';

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name: null,
  email: null,
  password: null,
  age: null,
  colors: [],
};
class Registration extends React.PureComponent {
  state = {
    step: 1,
    fieldValues: {},
  };

  saveValues = field_value => {
    fieldValues = Object.assign({}, fieldValues, field_value);
  };

  nextStep = () => this.setState(prevState => ({ step: prevState.step + 1 }));

  prevStep = () => this.setState(prevState => ({ step: prevState.step - 1 }));

  submit = () => {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance
    this.nextStep();
  };

  showStep = () => {
    switch (this.state.step) {
      case 1:
        return (
          <AccountFields
            fieldValues={fieldValues}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
          />
        );
      case 2:
        return (
          <SurveyFields
            fieldValues={fieldValues}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
          />
        );
      case 3:
        return (
          <Confirmation
            fieldValues={fieldValues}
            previousStep={this.previousStep}
            submitRegistration={this.submitRegistration}
          />
        );
      case 4:
        return <Success fieldValues={fieldValues} />;
    }
  };

  render() {
    const style = { width: `${(this.state.step / 4) * 100}%` };

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    );
  }
}

export default Registration;
