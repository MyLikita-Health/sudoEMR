import React, { Component } from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';

class LaboratorySetupForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labCode: '',
      subLabCode: '',
      labName: '',
    };
  }

  logChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { labCode, subLabCode, labName } = this.state;
    return (
      <div>
        <Card>
          <CardHeader>
            <h4>Service Form</h4>
          </CardHeader>
          <CardBody>
            <div className="">
              <form>
                <div className="">
                  <label className="">Lab Code</label>
                  <input
                    type="text"
                    name="labCode"
                    className="form-control"
                    onChange={this.logChange}
                    value={labCode}
                  />
                </div>
                <div className="">
                  <label className="">Sub Lab Code</label>
                  <input
                    type="text"
                    name="subLabCode"
                    className="form-control"
                    onChange={this.logChange}
                    value={subLabCode}
                  />
                </div>
                <div className="">
                  <label className="">Lab Name</label>
                  <input
                    type="text"
                    name="labName"
                    className="form-control"
                    onChange={this.logChange}
                    value={labName}
                  />
                </div>
              </form>

              <div className="">
                <button className="btn btn-default btn-secondary">
                  Create
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>List of Supplied Drugs</CardHeader>
          <CardBody>
            <div>
              <i>No item found</i>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LaboratorySetupForms;
