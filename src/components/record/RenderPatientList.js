import React, { Component } from 'react';
import * as JsSearch from 'js-search'
import PatientTable from './PatientTable';
import {recordsDB} from './Patientlist';
import { url } from '../utils/helpers';
import { _fetchApi } from '../../redux/actions/api';
import { TiUserAdd } from 'react-icons/ti';
import { FaBed } from 'react-icons/fa';
import { Button } from 'reactstrap';
import {useHistory} from 'react-router'
// import PropTypes from 'prop-types';

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
      list: [],
      searchResults: [],
      search: [],
      isLoading: false,
      isError: false,
      searchQuery:""
    };
  }

  async componentDidMount(){
    this.setState({ isLoading: true });
    recordsDB
      .get('unassigned')
      .then(records => {
          this.setState({ 
            list: records.unassignedPatients, 
            isLoading: false 
          })
          this.rebuildIndex()
      }).catch(err => console.log(err))
    _fetchApi(
      `${url}/patientrecords/unassignedPatientlist`,
      ({ results }) => {
        if(results.length) {
          recordsDB
            .get('unassigned')
            .then(doc => 
              recordsDB
                .put({ _id: 'unassigned', _rev: doc._rev,  unassignedPatients: results })
                .then(() => {
                  console.log('updated recordsDB')
                })
                .catch(err => console.log(err))
            )
            .catch(() => {
              recordsDB
                .put({ _id: 'unassigned', unassignedPatients: results })
                .then(() => {
                  console.log('added to recordsDB')
                })
                .catch(err => console.log(err))
            })
          this.setState({ list: results, isLoading: false });
          this.rebuildIndex()
        }
      },
      err => {
        console.log(err.toString());
        this.setState({ isLoading: false })
      }
    )
  }

  rebuildIndex = () => {
    const { list } = this.state;
    const dataToSearch = new JsSearch.Search("fullname")
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("fullname")
    dataToSearch.addIndex("fullname")
    dataToSearch.addIndex("id")
    dataToSearch.addIndex("phoneNo")
    dataToSearch.addIndex("address")
    dataToSearch.addDocuments(list)
    this.setState({ search: dataToSearch, isLoading: false })
  }

  searchData = text => {
    // console.log(e.target.value)
    const { search } = this.state;
    const queryResult = search.search(text)
    this.setState({ searchQuery: text, searchResults: queryResult })
  }

  handSubmit = e => {
    e.preventDefault()
  }

  //handles the change in the search text field
  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    });
  };

  render() {
    const { list, searchResults, searchQuery, isLoading } = this.state;
    const queryResults = searchQuery === "" ? list : searchResults
    const {
      openDoctorsModal,
      error,
      openModal,
      renderEditButton,
      loading,
    } = this.props;
    return (
      <div>
        <AddPatientButton />
        {/* search text field */}
        
        {/* the table component */}
        <PatientTable
          patientlist={queryResults}
          filterText={this.state.filterText}
          openDoctorsModal={openDoctorsModal}
          error={error}
          /*
                this part is used to enable in-records delete operations
                to activate this action, uncomment the code below
              */
          // deletepatientrecords={this.props.deletepatientrecords}}
          openModal={openModal}
          loading={isLoading}
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

function AddPatientButton () {
  const history = useHistory()
  return (
    <div className="row m-1 mb-2">
    <Button
      onClick={() => {
        history.push('/me/records/new');
      }}
      color="primary"
      className="d-flex flex-row align-items-center col-md-3 col-lg-3"
      outline
    >
      <TiUserAdd size={24} style={{ marginRight: 5, marginLeft: 5 }} />
      Add new patient
    </Button>
    <Button
      color="primary"
      outline
      onClick={() => {
        history.push('/me/records/bed');
      }}
      className="d-flex flex-row align-items-center offset-md-6 offset-lg-6 col-md-3 col-lg-3"
    >
      <FaBed size={24} style={{ marginRight: 5, marginLeft: 5 }} />
      Bed Allocation
    </Button>
  </div>
  )
}