import React from 'react';
import FreeScrollBar from 'react-free-scrollbar';
import {
  Card,
  CardBody,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import FaEdit from 'react-icons/lib/fa/edit';
import FaRemove from 'react-icons/lib/io/trash-a';
import { _postData, _convertArrOfObjToArr } from '../helpers';

class AddDrugForm extends React.Component {
  constructor(props) {
    super(props);
    let {
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
    } = this.props.currentItem;
    this.state = {
      date_brought: new Date(),
      name: name || '',
      unit_of_issue: unit_of_issue || '',
      quantity: quantity || '',
      price: price || '',
      expiry_date: expiry_date || '',
      validationText: '',
    };
  }

  clearFields = () => {
    this.setState({
      name: '',
      unit_of_issue: '',
      quantity: '',
      price: '',
      expiry_date: '',
    });
  };

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

    const { currentIndex, currentItem, editList, saveToList } = this.props;

    currentItem.name ? editList(formData, currentIndex) : saveToList(formData);

    this.clearFields();
  };

  render() {
    const {
      date_brought,
      name,
      unit_of_issue,
      quantity,
      price,
      expiry_date,
      validationText,
    } = this.state;
    const { onAddClick, onInputChange } = this;
    return (
      <form onSubmit={onAddClick}>
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
        {validationText.length ? (
          <p style={{ color: 'red', textAlign: 'center' }}>{validationText}</p>
        ) : null}
        <button
          type="submit"
          className="offset-md-5  col-xs-6 col-sm-6 col-md-2 btn btn-outline-secondary">
          {this.props.currentItem.name ? 'Save' : <FaPlus />}
        </button>
      </form>
    );
  }
}

AddDrugForm.defaultProps = {
  currentItem: {},
  editList: f => f,
  saveToList: f => f,
};

export default class AddDrug extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      currentItem: {},
      currentIndex: null,
      editModalIsOpen: false,
    };
  }

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

  saveCurrentItem = (currentItem, currentIndex) =>
    this.setState({ currentItem, currentIndex });

  onEditClick = (currentItem, i) => {
    // console.log(currentItem);
    this.toggleEditModal();
    this.saveCurrentItem(currentItem, i);
  };

  saveToList = data => {
    const { list } = this.state;
    let newList = list.concat(data);
    this.setState({ list: newList });
  };

  editList = (data, index) => {
    const { list } = this.state;
    // let newList = list.map(i => i.name === data.name ? data : i);
    let newList = [];
    list.forEach((item, i) => {
      if (i === index) newList.push(data);
      else newList.push(item);
    });
    // console.log(newList);
    this.setState({ list: newList });
    this.toggleEditModal()
  };

  render() {
    const { list, currentItem, currentIndex } = this.state;
    const { onSubmitClick, saveToList, editList } = this;
    return (
      <Card>
        <h5 className="text-center">Add New Stock to Store</h5>
        <CardBody>
          <AddDrugForm saveToList={saveToList} />

          <ListTable
            list={list}
            onEditClick={this.onEditClick}
            onRemoveClick={this.onRemoveClick}
          />
          <EditModal
            currentItem={currentItem}
            currentIndex={currentIndex}
            editList={editList}
            editModalIsOpen={this.state.editModalIsOpen}
            toggleEditModal={this.toggleEditModal}
          />
        </CardBody>
        <div>
          {/* <button className="btn btn-outline-danger offset-md-4">
          Close
        </button> */}
        <button className="btn btn-outline-primary offset-md-2" onClick={onSubmitClick}>
          Submit
        </button>
        </div>
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
            <th>Delete</th>
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
                  className="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  onClick={() => onEditClick(item, i)}>
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger col-xs-12 col-sm-12 col-md-12 col-lg-12"
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

const EditModal = ({
  currentItem,
  currentIndex,
  toggleEditModal,
  editModalIsOpen,
  editList,
}) => (
  <Modal isOpen={editModalIsOpen} toggle={toggleEditModal} size="lg">
    <ModalHeader toggle={toggleEditModal}>Edit Drug Information</ModalHeader>
    <ModalBody>
      <AddDrugForm
        currentItem={currentItem}
        currentIndex={currentIndex}
        editList={editList}
      />
    </ModalBody>
  </Modal>
);
