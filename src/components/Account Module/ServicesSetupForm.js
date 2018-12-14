import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
// import CaretUp from 'react-icons/lib/fa/caret-square-o-up'
import CaretUp from 'react-icons/lib/fa/caret-up';

export default class ServicesSetupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountType: null,
      head: null,
      accHead: null,
      headCode: null,
      description: null,
      amount: null,
      headModalIsOpen: false,
      headList: [],
      selectedHead: null,
    };
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleHeadModal = () =>
    this.setState(prevState => ({
      headModalIsOpen: !prevState.headModalIsOpen,
    }));

  selectHead = head => this.setState({ selectedHead: head });

  openHeadModal = () => {
    this.toggleHeadModal();
  };

  create = e => {
    e.preventDefault();
    const { head } = this.state;
    head ? this.createSub() : this.creatHead();
    this.resetForm();
  };

  creatHead = () => {
    const { accHead, headCode, description, amount } = this.state;
    let data = { head: accHead, headCode, description, amount };
    console.log(data);
  };

  createSub = () => {
    const { head, accHead, headCode, description, amount } = this.state;
    let data = { head, sub: accHead, subCode: headCode, description, amount };
    console.log(data);
  };

  resetForm = () => {
    this.setState({
      accountType: null,
      head: null,
      accHead: null,
      headCode: null,
      description: null,
      amount:null
    });
  };

  render() {
    const {
      onInputChange,
      toggleHeadModal,
      selectHead,
      openHeadModal,
      create,
    } = this;
    const {
      accountType,
      head,
      accHead,
      headCode,
      description,
      amount,
      headList,
      headModalIsOpen,
    } = this.state;
    return (
      <div>
        {' '}
        <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <CardHeader>Services Form</CardHeader>
          <CardBody>
            <form>
              <div className="row">
                <label className="col-xs-4 col-sm-3 col-md-2 col-lg-2">
                  Create{' '}
                </label>
                {/* <br /> */}
                <div className="col-lg-3">
                  <input
                    type="radio"
                    id="head"
                    name="accountType"
                    value="head"
                    checked={accountType === 'head'}
                    onChange={onInputChange}
                  />{' '}
                  <label htmlFor="head">Head</label>
                </div>
              </div>
              {/* <br /> */}
              <div className="row">
                <div className="offset-md-2 col-lg-3">
                  <input
                    type="radio"
                    id="sub-head"
                    name="accountType"
                    value="sub-head"
                    checked={accountType === 'sub-head'}
                    onChange={onInputChange}
                  />{' '}
                  <label htmlFor="sub-head">Sub-Head</label>
                </div>
              </div>
              <hr />
              {accountType && (
                <>
                  {accountType === 'sub-head' && (
                    <FormGroup row>
                      <label className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                        Head:
                      </label>
                      <input
                        type="text"
                        name="head"
                        value={head}
                        placeholder="please select a head"
                        className="form-control col-xs-12 col-sm-12 col-md-4 col-lg-4"
                      />
                      <span
                        onClick={openHeadModal}
                        style={{ cursor: 'pointer' }}>
                        <CaretUp size={30} />
                      </span>
                    </FormGroup>
                  )}
                  <FormGroup row>
                    <label className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                      {accountType === 'sub-head'
                        ? 'Sub Account'
                        : 'Account Head'}
                    </label>
                    <input
                      type="text"
                      name="accHead"
                      className="form-control col-xs-12 col-sm-12 col-md-4 col-lg-4"
                      onChange={onInputChange}
                      value={accHead}
                    />
                    {accountType === 'head' && (
                      <>
                        <label className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                          Head Code
                        </label>
                        <input
                          type="text"
                          name="headCode"
                          className="form-control col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          onChange={onInputChange}
                          value={headCode}
                        />
                      </>
                    )}
                  </FormGroup>
                  <FormGroup row>
                    {accountType === 'head' && (
                      <>
                        <label className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                          Description:
                        </label>
                        <textarea
                          type="text"
                          name="description"
                          className="form-control col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          onChange={onInputChange}
                          value={description}
                        />
                      </>
                    )}
                    <label className="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      className="form-control col-xs-12 col-sm-12 col-md-4 col-lg-4"
                      onChange={onInputChange}
                      value={amount}
                    />
                  </FormGroup>{' '}
                  <FormGroup>
                    <button
                      className="offset-md-4 btn btn-danger"
                      onClick={() => this.setState({ accountType: null })}>
                      Cancel
                    </button>
                    <button
                      className="offset-md-2 btn btn-primary"
                      onClick={create}>
                      Create
                    </button>
                  </FormGroup>
                </>
              )}
            </form>

            <HeadModal
              headModalIsOpen={headModalIsOpen}
              toggleHeadModal={toggleHeadModal}
              headList={headList}
              selectHead={selectHead}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

const HeadModal = ({
  headModalIsOpen = false,
  toggleHeadModal = f => f,
  headList = [],
  selectHead = f => f,
}) => (
  <Modal isOpen={headModalIsOpen} toggle={toggleHeadModal}>
    <ModalHeader toggle={toggleHeadModal} />
    <ModalBody>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Head</th>
          </tr>
        </thead>
        <tbody>
          {headList.map((head, i) => (
            <tr key={i} onClick={() => selectHead(head)}>
              <td>{i + 1}</td>
              <td>{head.head}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ModalBody>
  </Modal>
);
