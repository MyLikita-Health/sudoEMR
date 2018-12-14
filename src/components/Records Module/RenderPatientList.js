import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PatientTable from './PatientTable';
import PropTypes from 'prop-types';

/**
 * This component renders the table that consist
 * the table of patients and also a search textbox
 * that filters the patient with whatever you input
 */
export default class RenderPatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  //handles the change in the search text field
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  render() {
    const {
      patientlist,
      openDoctorsModal,
      error,
      openModal,
      renderEditButton,
    } = this.props;
    return (
      <div>
        {/* search text field */}
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <br />

        {/* the table component */}
        <PatientTable
          patientlist={patientlist}
          filterText={this.state.filterText}
          openDoctorsModal={openDoctorsModal}
          error={error}
          /*
                this part is used to enable in-records delete operations
                to activate this action, uncomment the code below
              */
          // deletepatientrecords={this.props.deletepatientrecords}
          openModal={openModal}
          renderEditButton={renderEditButton}
        />
      </div>
    );
  }
}

//setting the default props
RenderPatientList.defaultProps = {
  patientlist: [],
};

// RenderPatientList.propTypes = {
//   patientlist: PropTypes.array
// }
