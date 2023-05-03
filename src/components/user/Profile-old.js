import React from 'react';
import { connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, Card,CardTitle, CardText } from 'reactstrap'
import SalesDetails from './SalesDetails';
// import { FiRepeat } from 'react-icons/fi';
// import { FaYenSign, FaSave, FaLink } from 'react-icons/fa';

function Profile({
  modal,
  toggle,
  user
}) {
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Profile</ModalHeader>
      <ModalBody tag="div">
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6" style={{margin:'7.5px 0'}}>
            <Card body outline color="secondary">
              <CardTitle tag="h6">User Details</CardTitle>
              <CardText>
                <div>
                  <span style={{fontWeight:'bold', marginRight: 5}}>User: </span>
                  <span>{user.lastname} {user.firstname}</span>
                </div>
                <div>
                  <span style={{fontWeight:'bold', marginRight: 5}}>Role: </span>
                  <span>{user.role}</span>
                </div>
              </CardText>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{margin:'7.5px 0'}}>
            <SalesDetails user={user.username} />
          </div>
        </div>
        
      </ModalBody>
      {/* <ModalFooter>
        <button className="btn btn-primary col-md-3" disabled>
          Update
        </button>
      </ModalFooter> */}
    </Modal>
  )
}

function mapStateToProps({ auth }){
  return {
    user: auth.user
  }
}

export default connect(mapStateToProps)(Profile);