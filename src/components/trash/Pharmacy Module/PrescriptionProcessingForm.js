import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import FreeScrollBar from 'react-free-scrollbar';
import Loading from '../loading';
import {
  _fetchData,
  _postData,
  _customNotify,
  _warningNotify,
  _updateData
} from '../helpers';
import Notifications from 'react-notify-toast';

export default class PrescriptionProcessingForm extends Component {
  constructor(props) {
    super(props);

    // the inital state is being set here
    this.state = {
      // userDetails: {},
      prescriptions: [],
      quantityDispensed: [],
      price: [],
      total: 0,
      addDrugMmodal: false,
      changeDrugModal: false,
      drugList: [],
      searchTerm: '',
      validationText: '',
      drugToChange: '',
      prescriptionByIdErr: '',
      drugListErr: '',
      drugDetails: {
        drug: '',
        quantity: '',
        price: '',
        prescription: '',
      },
    };
  }

  // fetchUserDetails(id) {
  //   let self = this;

  //   let route = `patientrecords/fetchUserById?id=${id}`;
  //   let cb = data => {
  //     self.setState({ userDetails: Object.assign({}, data[0]) });
  //   };
  //   _fetchData({ route, callback: cb });
  // }

  fetchPrescription(id) {
    let route = `prescriptionrequests/getPrescriptionById?id=${id}`;
    let success_callback = data => this.setState({ prescriptions: data });
      
    let error_callback = error => this.setState({ prescriptionByIdErr: error });

    _fetchData({ route, success_callback, error_callback });
  }

  fetchDrugList = () => {
    let route = `drugs/allDrugs`;
    let success_callback = data => this.setState({ drugList: data });
    let error_callback = error => this.setState({ drugListErr: error });

    _fetchData({ route, success_callback, error_callback });
  };

  componentDidMount() {
    let id = this.props.details.id;
    // this.fetchUserDetails(id);
    this.fetchPrescription(id);
    this.fetchDrugList();
  }

  /**
   * onQuantityDispensedInputChange()
   * Does major calculations when the quantity of the drugs
   * to be dispensed changes and updates the state of the neccessary
   * changes.
   */
  onQuantityDispensedInputChange = (e, price, i) => {
    let value = e.target.value;
    let initialPrice = this.state.price;
    initialPrice[i] = price * value;
    let quantityDispensed = this.state.quantityDispensed;
    quantityDispensed[i] = value;
    let total = initialPrice.reduce((a, b) => a + b);
    // console.log(total);
    this.setState({
      quantityDispensed,
      price: initialPrice,
      total,
    });
  };

  onQuantityDispensed = (e, prescription, i) => {
    let value = parseInt(e.target.value);
    let { prescriptions } = this.state;
    let newPres = Object.assign({}, prescription, {
      quantity_dispensed: value,
    });
    prescriptions[i] = newPres;
    // console.log(prescriptions)
    this.setState({ prescriptions });
  };

  toggle = () => {
    this.setState(prevState => ({ addDrugMmodal: !prevState.addDrugMmodal }));
  };

  /**
   * The following four methods onDrugChange(), onQuantityChange(), onPrescriptionChange()
   * onPriceChange() takes care of the onChange event of the Add Drug Form
   */
  onDrugChange = e => {
    let value = e.target.value;
    this.setState({
      drugDetails: Object.assign({}, this.state.drugDetails, { drug: value }),
    });
  };

  onQuantityChange = e => {
    let value = e.target.value;
    this.setState({
      drugDetails: Object.assign({}, this.state.drugDetails, {
        quantity: value,
      }),
    });
  };

  onPrescriptionChange = e => {
    let value = e.target.value;
    this.setState({
      drugDetails: Object.assign({}, this.state.drugDetails, {
        prescription: value,
      }),
    });
  };

  onPriceChange = e => {
    let value = e.target.value;
    this.setState({
      drugDetails: Object.assign({}, this.state.drugDetails, { price: value }),
    });
  };

  /**
   * updatePrescriptionList()
   * Updates the prescription list accordingly with the newly
   * passed in drug.
   */
  updatePrescriptionList = data => {
    let prescriptionList = this.state.prescriptions;
    let newPrescriptionList = prescriptionList.concat(data);
    this.setState({ prescriptions: newPrescriptionList });
  };

  /**
   * addDrug()
   * Takes care of adding drug to the drugs list, it submits
   * the newly added drug to the database, does validation before
   * taking any action, also updates the state so that the changes
   * can reflect without having to reload the browser.
   */
  addDrug = () => {
    //gets the values of the new form from the state
    let { prescription, price, drug, quantity } = this.state.drugDetails;
    // gets basic details about the patient which would be appended to the request
    const { details } = this.props;
    // performs the validation
    if (prescription === '' || price === '' || drug === '' || quantity === '') {
      return this.setState({ validationText: 'Please fill all the fields' });
    }

    // all the data about the new drug to be added, id = patient's id
    let data = {
      id: details.id,
      dosage: prescription,
      drug_status: 'pending',
      date: new Date(),
      price,
      drug,
      seen_by: details.seen_by,
      quantity,
    };
    // the submission to the database is done here
    let route = 'prescriptionrequests/addDrugWithQuantity';
    let cb = () => console.log(data);
    _postData({ route, data, cb });
    this.updatePrescriptionList(data);
    _customNotify('Drug added Successfully');
    this.toggle();
  };

  /**
   * toggleDrugModal()
   * Toggles the modal containing the list of all drugs
   */
  toggleDrugModal = () => {
    this.setState(prevState => ({
      changeDrugModal: !prevState.changeDrugModal,
    }));
  };

  dispense(prescription) {
    let { patient_id, drug_request_id, quantity_dispensed} = prescription;
    //submit dispension
    let route = 'prescriptionrequests/dispenseSingle';
    let data = {patient_id,  drug_request_id, quantity_dispensed }
    let callback = () => _customNotify("record submitted")
    _updateData({ route, data, callback })
    //reduce the quantity in stock
    //reduce the patient's balance

  }

  /**
   * handleDispense()
   * event handler for dispense button click
   * Submits the data and dispenses drugs to the customers
   */
  handleDispense = () => {
    const { prescriptions } = this.state;
    prescriptions.forEach(prescription => this.dispense(prescription))

    // let quantity = this.state.quantityDispensed;
    // if (!quantity.length)
    //   return _warningNotify('Empty form cannot be Submitted!');

    // prescriptions.forEach((p, i) => (p.quantity = quantity[i]));
    // let result = {}
    // for(let i=0; i<prescriptions.length; i++){
    //   result[prescriptions[i].drug_request_id] = quantityDispensed[i]
    // }
    // this.props.dispenseDrugs(prescriptions);
    // console.log(quantityDispensed);
    // let route = 'prescriptionrequests/dispenseSingle';
    // let newList = []
  
    // newList.push(prescriptions.map(obj => obj.drug_request_id),prescriptions.map(obj => obj.quantity_dispensed))
    // let data = 
    // let callback = () => _customNotify("record submitted")
    // _updateData({ route, data: prescriptions, callback })
    // console.log(prescriptions)
  };

  changeDrug = drugDetails => {
    let { drugToChange, prescriptions } = this.state;
    // console.log(`Please change ${drugToChange} to ${drug.drug} on ${prescriptions}`);
    // let newPrescription = prescriptions.map(p => {
    //     p.drug === drugToChange ? p = Object.assign({}, p, {drug: drug.drug}) : p
    // })
    let newDrugsList = prescriptions.map(item =>
      item.drug === drugToChange
        ? (item = Object.assign({}, item, {
            drug: drugDetails.drug,
            price: drugDetails.price,
          }))
        : item
    );
    // console.log(newDrugsList);
    this.setState({ prescriptions: newDrugsList });
    // change the drugToChange to the newly selected drug
    // _customNotify("Drug replaced successfully!")
    this.toggleDrugModal();
  };

  onSearchTermChange = e => {
    let searchTerm = e.target.value;
    this.setState({ searchTerm: searchTerm });
    // this.search(searchTerm);
  };

  search = searchTerm => {
    let drugList = this.state.drugList;
    let newList = drugList.filter(drug => drug.drug === searchTerm);
    this.setState({ drugList: newList });
  };

  openChangeDrugTable = drug => {
    this.setState({ drugToChange: drug });
    this.toggleDrugModal();
  };

  render() {
    const { details, toggleProcessingForm } = this.props;
    const {
      userDetails,
      drugList,
      drugDetails,
      validationText,
      prescriptions,
      prescriptionByIdErr,
    } = this.state;
    const {
      onDrugChange,
      onQuantityChange,
      onPriceChange,
      onPrescriptionChange,
      addDrug,
    } = this;
    const { drug, quantity, price, prescription } = drugDetails;
    const rows = [];
    prescriptions.forEach((prescription, i) => {
      rows.push(
        <tr key={i}>
          <td>
            <span
              onClick={() => this.openChangeDrugTable(prescription.drug)}
              className="anchor"
              title="change this drug">
              {prescription.drug}
            </span>
          </td>
          <td>{prescription.dosage}</td>
          {/* <td>fdds{prescription.drug_request_jd}</td> */}

          <td>{prescription.price}</td>
          <td>
            <input
              type="text"
              name="quantityDispensed"
              className="form-control"
              // value={this.state.quantityDispensed[i]}
              value={prescription.quantity_dispensed}
              onFocus={e => e.target.value = ''}
              onChange={
                e =>
                  // this.onQuantityDispensedInputChange(e, prescription.price, i)
                  this.onQuantityDispensed(e, prescription, i)
                // console.log(prescription.quantityDispensed)
              }
            />
          </td>
          {/* <td>{this.state.price[i]}</td> */}
          
          {/* <td>
            <button
              className="btn btn-primary"
              onClick={() => this.dispense(prescription)}>
              Dispense
            </button>
          </td> */}
        </tr>
      );
    });

    return (
      <>
        <form className="row">
          <div className="form-group col-md-2">
            <label style={{marginRight:'.5em'}}>ID: </label>
            <strong>{details.id}</strong>
          </div>
          <div className="form-group col-md-4">
            <label style={{marginRight:'.5em'}}>Name: </label>
            <strong>{`${details.surname} ${details.firstname}`}</strong>
          </div>
          <div className="form-group col-md-2">
            <label style={{marginRight:'.5em'}}>Gender: </label>
            <strong>{details.gender}</strong>
          </div>
          <div className="form-group col-md-4">
            <label style={{marginRight:'.5em'}}>Date of Birth:</label>
            <strong>{details.DOB}</strong>
          </div>
        </form>

        <br />

        <h5 className="text-center">Pending Drugs</h5>

        {/* <div style={{ width: '100%', height: '28vh' }}>
              <FreeScrollBar> */}
        {!prescriptions.length ? (
          !prescriptionByIdErr.length ? (
            <Loading />
          ) : (
            <p className="text-center">
              <em>No record found</em>
            </p>
          )
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Drugs</th>
                <th>Prescription</th>
                <th>Unit Price</th>
                <th>Qty Dispensed</th>
                {/* <th>Price</th> */}
                {/* <th>Dispense</th> */}
              </tr>
            </thead>
            <tbody>
              {rows}
              {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th>Total</th>
                        <th>{this.state.total}</th>
                      </tr> */}
            </tbody>
          </Table>
        )}
        {/* </FreeScrollBar>
            </div> */}

        <button
          className="btn btn-outline-primary btnS offset-xs-1 offset-sm-2 offset-md-3"
          onClick={this.handleDispense}>
          Dispense
        </button>

        <button
          className="btn btn-outline-success offset-xs-1 offset-sm-1 offset-md-1"
          title="Add a drug to the list"
          onClick={this.toggle}>
          Add Drug
        </button>

        <button
          className="btn btn-outline-danger offset-xs-1 offset-sm-1 offset-md-1"
          title="close"
          onClick={toggleProcessingForm}>
          Close
        </button>

        <Modal size="lg" isOpen={this.state.addDrugMmodal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Drugs</ModalHeader>
          <ModalBody>
            <Card>
              <CardBody>
                <AddDrugForm
                  drug={drug}
                  quantity={quantity}
                  price={price}
                  prescription={prescription}
                  onDrugChange={onDrugChange}
                  onQuantityChange={onQuantityChange}
                  onPriceChange={onPriceChange}
                  onPrescriptionChange={onPrescriptionChange}
                  addDrug={addDrug}
                  validationText={validationText}
                />
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.changeDrugModal}
          toggle={this.toggleDrugModal}>
          <ModalHeader toggle={this.toggleDrugModal}>
            Change this drug
          </ModalHeader>
          <ModalBody>
            <SearchBar
              searchTerm={this.state.searchTerm}
              onSearchTermChange={this.onSearchTermChange}
            />
            <DrugsTable
              searchTerm={this.state.searchTerm}
              changeDrug={this.changeDrug}
              drugList={drugList}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

const AddDrugForm = ({
  drug,
  quantity,
  price,
  prescription,
  onDrugChange,
  onQuantityChange,
  onPriceChange,
  onPrescriptionChange,
  addDrug,
  validationText,
}) => (
  <form>
    <div className="row">
      <label className="col-md-2">Drug</label>
      <input
        className="form-control col-md-4"
        value={drug}
        onChange={onDrugChange}
      />
      <label className="col-md-2">Quantity</label>
      <input
        className="form-control col-md-4"
        value={quantity}
        onChange={onQuantityChange}
      />
    </div>
    <br />
    <div className="row">
      <label className="col-md-2">Price</label>
      <input
        className="form-control col-md-4"
        value={price}
        onChange={onPriceChange}
      />
      <label className="col-md-2">Prescription</label>
      <input
        className="form-control col-md-4"
        value={prescription}
        onChange={onPrescriptionChange}
      />
    </div>
    <p style={{ color: 'red' }}>{validationText}</p>
    <button
      onClick={e => {
        e.preventDefault();
        addDrug();
      }}
      className="btn btn-outline-secondary">
      Add
    </button>
  </form>
);

const SearchBar = ({ searchTerm, onSearchTermChange }) => (
  <div>
    <input
      type="text"
      className="form-control"
      placeholder="search for a drug by name"
      value={searchTerm}
      onChange={onSearchTermChange}
    />
  </div>
);

const DrugsTable = ({ drugList, changeDrug, searchTerm }) => {
  let rows = [];
  drugList.forEach((drug, i) => {
    if (drug.drug.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    rows.push(
      <tr
        key={i}
        onClick={() => changeDrug(drug)}
        style={{ cursor: 'pointer' }}>
        <td>{drug.drug}</td>
        <td>{drug.quantity}</td>
        <td>{drug.price}</td>
      </tr>
    );
  });
  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <FreeScrollBar>
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        <Table hover bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity in Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </FreeScrollBar>
    </div>
  );
};
