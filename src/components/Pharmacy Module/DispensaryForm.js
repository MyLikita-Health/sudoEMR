import React, { Component } from 'react';
import { Table, Button, Card, CardHeader, CardBody, CardFooter, 
    FormGroup, ModalHeader, ModalFooter, ModalBody, Modal } from 'reactstrap';
import { today } from '../helpers';
import { FaPlus } from 'react-icons/fa';

class DispensaryForm extends Component {
    state = {
      date: today,
        dosage: '',
        quantity_dispense: '',
      patientID: '',
      drugs: '',
      dispense: [],
      error: '',
      modalIsOpen: false
    };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
        error: '',
      [name]: value,
    });
  }

  toggleModal = () => this.setState(prev => ({ modalIsOpen: !prev.modalIsOpen }))

  resetForm = () => {
      this.setState({
        patientID:'',
        drugs:'',
        dosage:"",
        quantity_dispense:''
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { patientID, drugs, dosage, quantity_dispense } = this.state;

    if(patientID===''||drugs===''||dosage===''||quantity_dispense===''){
        this.setState({ error: 'Please complete the form' })
    } else {
        this.setState(prevState => ({ 
            modalIsOpen: false,
            dispense: prevState.dispense.concat({
                patientID: this.state.patientID,
                drugs: this.state.drugs,
                dosage: this.state.dosage,
                quantity_dispense: this.state.quantity_dispense,
               
            }),
        }), () => this.resetForm());
    }
    
  }

  handleDelete = (deleteItem) => {
    let itemToDelte = this.state.dispense.filter((item)=> item !== deleteItem)
     this.setState({dispense: itemToDelte})
  }

  render() {
      const {
          handleChange, 
          handleDelete, 
          handleSubmit, 
          state: { 
              error,
              date, 
              patientID, 
              drugs, 
              dispense, 
            dosage, 
            quantity_dispense,
            modalIsOpen
            }
        } = this;
    return (
        <Card>
            <CardHeader><h5 className="text-center">Dispensary Form</h5></CardHeader>
            <CardBody>
                <div>
                <FormGroup row>
                    <div className="col-md-4 col-lg-6">
                        <label>Date</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="date"
                            name="date"
                            value={today}
                        />
                    </div>
                        <div className="col-md-6 col-lg-6">
                        <label>Patient ID</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            value={patientID}
                            name="patientID"
                        />
                    </div>
                </FormGroup>
                
                <button 
                    className="btn btn-primary offset-md-5 offset-lg-5 col-md-2 col-lg-2 btn-sm"
                    onClick={this.toggleModal}
                >
                    <FaPlus />
                </button>
            </div>
        </CardBody>
        <br />
        {dispense.length ? 
        <>
            <CardHeader>
                <h6 align="center">Dispensary Details</h6>
            </CardHeader>
            <CardBody>
                <DispensaryTable dispense={dispense} handleDelete={handleDelete} />
            </CardBody>
            <CardFooter>
                <Button 
                    size="sm" 
                    color="success" 
                    onClick={handleSubmit}
                    className="offset-md-5 offset-lg-5 col-md-2 col-lg-2"
                >Submit</Button>
            </CardFooter>
        </>
        : null}
        <DispensaryFormModal 
            modalIsOpen={modalIsOpen}
            handleChange={handleChange} 
            drugs={drugs} 
            quantity_dispense={quantity_dispense} 
            dosage={dosage} 
            toggleModal={this.toggleModal}
            handleSubmit={handleSubmit}
            error={error}
        />
        </Card>
      
    );
  }
}

function DispensaryFormModal({
    modalIsOpen,
    toggleModal,
    handleChange,
    drugs,
    quantity_dispense,
    dosage,
    handleSubmit,
    error
}) {
    return (
        <Modal isOpen={modalIsOpen} toggle={toggleModal} size="lg">
            <ModalHeader toggle={toggleModal}>Drug to Dispense</ModalHeader>
            <ModalBody>
            <form >
                <FormGroup row>
                    <div className="col-md-6 col-lg-6">
                        <label>Drugs</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="drugs"
                            value={drugs}
                        />
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <label>Dosage</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="dosage"
                            value={dosage}
                        />
                    </div>
                </FormGroup>
                <FormGroup row>
                
                    <div className="col-md-6 col-lg-6">
                        <label>Quantity Dispensed</label>
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="quantity_dispense"
                            value={quantity_dispense}
                        />
                    </div>
                </FormGroup>
                {error!==''? <center><p style={{color:'red'}}>{error}</p></center>:null}
                
            </form>
            </ModalBody>
            <ModalFooter>
                <input 
                    onClick={handleSubmit} 
                    type="submit" 
                    className="btn btn-primary offset-md-5 offset-lg-5 col-md-2 col-lg-2 btn-sm" 
                />
            </ModalFooter>
        </Modal>
    )
}


function DispensaryTable ({ dispense, handleDelete }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>PatientID</th>
                <th>Drugs</th>
                <th>Dosage</th>
                <th>Quantity Dispensed</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {dispense.map((item, index) => (
                <tr key={index}>
                <td> {item.patientID}</td>
                <td>{item.drugs}</td>
                <td>{item.dosage}</td>
                <td>{item.quantity_dispense}</td>

                <td>
                    
                <Button outline size="sm" color="danger" onClick={() => handleDelete(item)}>delete</Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}
export default DispensaryForm;
