import React, { Component } from 'react';
import { Table, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { _fetchData, _customNotify, _updateData } from '../helpers';
import Notifications from 'react-notify-toast';

export default class PathologistComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analysedTest: [],
      comment: '',
      commentModalOpen: false,
      currentTest: {},
      error: '',
    };
  }

  onCommentChange = e => this.setState({ comment: e.target.value });

  fetchAnalysedTest = () => {
    let route = 'lab/sampleAnalyzed';
    let success_callback = data => this.setState({ analysedTest: data });
    let error_callback = error => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  };

  componentDidMount() {
    this.fetchAnalysedTest();
  }

  toggleCommentModal = () =>
    this.setState(prevState => ({
      commentModalOpen: !prevState.commentModalOpen,
    }));

  openCommentModal = currentTest => {
    this.setState({ currentTest });
    this.toggleCommentModal();
  };

  updateTable = test_id => {
    const { analysedTest } = this.state;
    let newList = analysedTest.filter(test => test.test_id !== test_id);
    this.setState({ analysedTest: newList });
  };

  clearCommentText = () => this.setState({ comment: '' });

  onSaveCommentClick = () => {
    let { comment, currentTest } = this.state;
    let data = {
      comment,
      test_id: currentTest.test_id,
    };
    console.log(data);
    let route = 'lab/savePathologicalComment';
    let callback = () => _customNotify('Results Saved!');
    _updateData({ route, data, callback });
    this.clearCommentText();
    this.updateTable(currentTest.test_id);
  };

  render() {
    return (
      <div>
        <AnalysedTestTable
          analysedTest={this.state.analysedTest}
          openCommentModal={this.openCommentModal}
        />
        <Notifications options={{ zIndex: 200, top: '50px' }} />

        <CommentModal
          comment={this.state.comment}
          onCommentChange={this.onCommentChange}
          toggleCommentModal={this.toggleCommentModal}
          commentModalOpen={this.state.commentModalOpen}
          currentTest={this.state.currentTest}
          onSaveCommentClick={this.onSaveCommentClick}
        />
      </div>
    );
  }
}

const AnalysedTestTable = ({ analysedTest, openCommentModal }) => {
  let rows = [];
  analysedTest.forEach((test, i) => {
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{test.test_id}</td>
        <td>{test.patient_id}</td>
        <td>{test.test}</td>
        <td>{test.seen_by}</td>
        <td>
          <button
            className="btn btn-success col-md-12"
            onClick={() => openCommentModal(test)}>
            Add Pathologist Comment
          </button>
        </td>
      </tr>
    );
  });
  return (
    <Table bordered striped hover>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Test ID</th>
          <th>Patient ID</th>
          <th>Test</th>
          <th>Requested By</th>
          <th>Add Comment</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

const CommentModal = ({
  commentModalOpen,
  toggleCommentModal,
  currentTest,
  onSaveCommentClick,
  comment,
  onCommentChange,
}) => (
  <Modal isOpen={commentModalOpen} toggle={toggleCommentModal}>
    <ModalHeader toggle={toggleCommentModal}>
      Add Pathologist Comment
    </ModalHeader>
    <ModalBody>
      <label>Comment:</label>
      <textarea
        className="form-control"
        value={comment}
        onChange={onCommentChange}
      />
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-outline-primary" onClick={onSaveCommentClick}>
        Save Comment
      </button>
    </ModalFooter>
  </Modal>
);
