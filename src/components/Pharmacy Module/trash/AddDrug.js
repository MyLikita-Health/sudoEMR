import React from 'react';
import FreeScrollBar from 'react-free-scrollbar';
import {
  Card,
  CardBody,
  Table,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from 'reactstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import FaEdit from 'react-icons/lib/fa/edit';
import FaRemove from 'react-icons/lib/io/android-remove';
import { _postData, _convertArrOfObjToArr } from '../helpers';

class AddDrugForm extends React.Component {
  constructor(prosp) {
    super(props);

    this.state = {
      date_brought: new Date(),
      name: '',
      unit_of_issue: '',
      quantity: '',
      price: '',
      expiry_date: '',
      validationText: '',
    };
  }

  render() {
    const {
      date_brought,
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
      onInputChange,
      validationText,
    } = this.state;
    return (
      <form>
        <div className="row">
          <label className="col-md-2">Date:</label>
          <input
            className="form-control col-md-4"
            value={date_brought.toLocaleDateString()}
            name="date_brought"
            disabled
          />
        </div>
        <br />
        <div className="row">
          <label className="col-md-2">Item Name:</label>
          <input
            className="form-control col-md-4"
            value={name}
            name="name"
            onChange={onInputChange}
          />
          <label className="col-md-2">Unit of Issue</label>
          <input
            className="form-control col-md-4"
            value={unit_of_issue}
            name="unit_of_issue"
            onChange={onInputChange}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-md-2">Quantity:</label>
          <input
            className="form-control col-md-4"
            value={quantity}
            name="quantity"
            onChange={onInputChange}
          />
          <label className="col-md-2">Price</label>
          <input
            className="form-control col-md-4"
            value={price}
            name="price"
            onChange={onInputChange}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-md-2">Expiry Date:</label>
          <input
            className="form-control col-md-4"
            value={expiry_date}
            name="expiry_date"
            onChange={onInputChange}
          />
        </div>
        {validationText.length && (
          <p style={{ color: 'red', textAlign: 'center' }}>{validationText}</p>
        )}
      </form>
    );
  }
}

export default class AddDrug extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      editModalIsOpen: false,
    };
  }

  onInputChange = ({ target }) =>
    this.setState({ [target.name]: target.value, validationText: '' });

  onAddClick = e => {
    e.preventDefault();
    const {
      date_brought,
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
      list,
    } = this.state;
    if (
      name === '' ||
      unit_of_issue === '' ||
      quantity === '' ||
      price === '' ||
      expiry_date === ''
    )
      return this.setState({ validationText: 'Please fill all fields' });
    const formData = {
      date_brought,
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
    };

    let newList = list.concat(formData);

    this.setState(() => ({ list: newList }));
    this.clearFields();
    // console.log(newList);

    // const route = 'drugs/addDrugs';

    // _postData({ route, data });
    // console.log(data);
  };

  clearFields = () => {
    this.setState({
      name: '',
      unit_of_issue: '',
      quantity: '',
      price: '',
      expiry_date: '',
    });
  };

  clearTable = () => {
    this.setState({ list: [] });
  };

  onSubmitClick = e => {
    e.preventDefault();
    let data = _convertArrOfObjToArr(this.state.list);
    let route = 'drugs/addDrugs';
    _postData({ route, data });
    this.clearTable();
  };

  onRemoveClick = item => {
    const { list } = this.state;
    let newList = list.filter(i => i.name !== item.name);
    this.setState({ list: newList });
  };

  toggleEditModal = () =>
    this.setState(prevState => ({
      editModalIsOpen: !prevState.editModalIsOpen,
    }));

  onEditClick = item => {
    this.toggleEditModal();
  };

  render() {
    const {
      date_brought,
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
      list,
      validationText,
    } = this.state;
    const { onInputChange, onSubmitClick, onAddClick } = this;
    return (
      <Card>
        <h5 className="text-center">Add New Stock to Store</h5>
        <CardBody>
          <AddDrugForm
            date_brought={date_brought}
            name={name}
            unit_of_issue={unit_of_issue}
            quantity={quantity}
            price={price}
            expiry_date={expiry_date}
            onInputChange={onInputChange}
            validationText={validationText}
          />
          <button
            type="submit"
            className="offset-md-8 col-xs-6 col-sm-6 col-md-3 btn btn-outline-secondary"
            onClick={onAddClick}>
            <FaPlus />
            Add to list
          </button>
          <ListTable
            list={list}
            onEditClick={this.onEditClick}
            onRemoveClick={this.onRemoveClick}
          />
          <EditModal
            editModalIsOpen={this.state.editModalIsOpen}
            toggleEditModal={this.toggleEditModal}
          />
        </CardBody>
        <button className="btn btn-outline-primary" onClick={onSubmitClick}>
          Submit
        </button>
      </Card>
    );
  }
}

const ListTable = ({ list, onEditClick, onRemoveClick }) => (
  <div style={{ width: '100%', height: '25vh' }}>
    <FreeScrollBar>
      <Table striped hover bordered responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Name</th>
            <th>Unit of Issue</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expiry Date</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.date_brought.toLocaleDateString()}</td>
              <td>{item.name}</td>
              <td>{item.unit_of_issue}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.expiry_date}</td>
              <td>
                <button
                  className="btn btn-outline-primary col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  onClick={() => onEditClick(item)}>
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  onClick={() => onRemoveClick(item)}>
                  <FaRemove />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </FreeScrollBar>
  </div>
);

const EditModal = ({ currentItem, toggleEditModal, editModalIsOpen }) => (
  <Modal isOpen={editModalIsOpen} toggle={toggleEditModal}>
    <ModalHeader toggle={toggleEditModal}>Edit Drug Information</ModalHeader>
    <ModalBody>
      <AddDrugForm
        date_brought={date_brought}
        name={name}
        unit_of_issue={unit_of_issue}
        quantity={quantity}
        price={price}
        expiry_date={expiry_date}
        onInputChange={onInputChange}
        validationText={validationText}
      />
    </ModalBody>
    <ModalFooter>
      <button>Save</button>
    </ModalFooter>
  </Modal>
);
