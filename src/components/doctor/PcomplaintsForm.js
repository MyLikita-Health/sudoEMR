import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Table,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';
import { _warningNotify } from '../utils/helpers';
import { FaArrowRight } from 'react-icons/fa';
import { MdSave } from 'react-icons/md';
import { savePresentingComplaints } from '../../redux/actions/doctor';
import { Scrollbars } from 'react-custom-scrollbars';
import { iconStyle, iconButtonStyle } from '../utils/styles-helper';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import CustomButton from '../comp/components/Button';
import SpeechInput from '../comp/speech-to-text/SpeechInput';

class PcomplaintsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: '',
      complaint: '',
      formRecords: [],
    };
  }

  componentDidMount() {
    this.setState({ formRecords: this.props.presentingComplaints });
    // console.log(this.props.presentingComplaints)
  }

  onDurationChange = (e) => {
    this.setState({ duration: e.target.value });
  };

  onComplaintChange = (e) => {
    this.setState({ complaint: e.target.value });
  };

  onPeriodChange = (e) => {
    this.setState({ period: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { complaint } = this.state;
    if (complaint === '') {
      return _warningNotify('Please fill all the fields');
    }

    const formData = { complaint };
    console.log(formData);

    this.setState((prev) => ({
      formRecords: [...prev.formRecords, formData],
      complaint: '',
    }));
  };

  componentWillUnmount() {
    this.handleSave();
  }

  handleSave = () => {
    const { formRecords } = this.state;
    this.props.saveComplaints(formRecords);
  };

  handleNext = () => {
    if (this.state.formRecords !== [])
      return localStorage.setItem(
        'presenting_complaints',
        JSON.stringify(this.state.formRecords)
      );
  };

  onHistoryChange = (text, index) => {
    const { formRecords } = this.state;
    let itemToEdit = formRecords.filter((item, i) => i === index)[0];
    itemToEdit.history = text;
    formRecords[index] = itemToEdit;
    this.setState({ formRecords });
  };

  render() {
    const { formRecords, history, complaint } = this.state;
    // const {  } = this.props;
    const dropdownItems = [];
    for (let i = 0; i <= 15; i++) {
      dropdownItems.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }

    return (
      <Card>
        <CardHeader tag="h6" className='py-2'>Presenting Complaints</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autohide>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <div className="col-md-12">
                  <label> </label>
                  <SpeechInput
                    tag="textarea"
                    value={complaint}
                    onInputChange={(text) => this.setState({ complaint: text })}
                  />
                </div>
              </FormGroup>
              <CustomButton className="btn btn-sm btn-primary offset-md-9">
                <MdSave size={16} style={iconStyle} /> Save Complaint
              </CustomButton>
            </Form>
            {/* {JSON.stringify(this.props)} */}
            <PComplaintsTable
              formRecords={formRecords}
              history={history}
              onHistoryChange={this.onHistoryChange}
            />
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <button
            onClick={() => {
              this.handleSave();
              this.props.history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/history/previousmedicalhistory`
              );
            }}
            style={iconButtonStyle}
            className="btn btn-sm btn-outline-primary col-sm-3 col-xs-3 offset-sm-9 offset-xs-9 offset-md-9 col-md-3">
            Next
            <FaArrowRight />
          </button>
        </CardFooter>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveComplaints: (data) => dispatch(savePresentingComplaints(data)),
  };
}

function mapStateToProps(state) {
  return {
    presentingComplaints: state.doctor.presentingComplaints,
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PcomplaintsForm);

export const PComplaintsTable = ({
  formRecords = [],
  showHistory = true,
  onHistoryChange = (f) => f,
}) => {
  const rows = [];
  formRecords.forEach((record, i) => {
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{record.complaint}</td>
        {showHistory && (
          <td>
            <SpeechInput
              type="textarea"
              className="form-control"
              value={formRecords[i].history}
              onInputChange={(text) => onHistoryChange(text, i)}
            />
          </td>
        )}
      </tr>
    );
  });

  return (
    <div>
      {!showHistory && <h5>Presenting Complaints</h5>}
      <Table bordered striped hover size="sm" className="mt-2">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Complaints</th>
            {showHistory && <th>History of Presenting Complaints</th>}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
