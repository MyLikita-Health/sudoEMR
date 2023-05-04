import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
// import { getDocLabCommission } from '../../redux/actions/lab'
// import CustomButton from "../comp/components/Button";
import { formatNumber } from '../utils/helpers'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { MdViewAgenda } from 'react-icons/md'
import { useHistory } from 'react-router'
// import { useHistory } from "react-router";

function NavUserInfo({ logout }) {
  // const history = useHistory();
  // const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)
  const accDetails = useSelector((state) => state.lab.doctorCommission) || {
    amt_generated: 0,
    collected: 0,
    balance: 0,
  }

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  useEffect(() => {
    // dispatch(getDocLabCommission())
  }, [])

  const viewDetails = () => {
    toggle()
    history.push(`/me/lab/doctors-report-fees-details/${user.username}`)
  }

  return (
    <div className="d-flex flex-row align-items-center justify-content-between mx-1">
      <div className="d-flex flex-column align-items-center justify-content-between mx-1">
        {/* <span className="text-white">USER:</span> */}
        {/* <div className="d-flex flex-column mr-1 ml-2">
          <span className="text-white font-weight-bold">{`${user.firstname} ${
            user.lastname
          }`}</span>
        </div> */}
        {/* {JSON.stringify(accDetails)} */}
      </div>
      {user.role === 'Doctor' ? (
        <Button color="success" className="mx-1" onClick={toggle}>
          <MdViewAgenda /> View Bal.
        </Button>
      ) : null}
      {/* <Button outline color='light'><MdSettings  size={18} /></Button> */}

      {/* <Button
        color="success"
        size="sm"
        onClick={() => history.push("/me/lab/patients/reports")}
      >
        <MdReceipt /> Reports
      </Button> */}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="text-center">
          Account Balance
        </ModalHeader>
        <ModalBody>
          <>
            <h5 className="font-weight-bold">
              Amount Generated : ₦ {formatNumber(accDetails.amt_generated) || 0}
            </h5>
            <h5 className="font-weight-bold">
              Amount Collected : ₦ {formatNumber(accDetails.collected) || 0}
            </h5>
            <h5 className="font-weight-bold">
              Balance: ₦ {formatNumber(accDetails.balance) || 0}
            </h5>
          </>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={viewDetails}>
            View Details
          </Button>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      {/* <CustomButton color="warning" className="mx-1" size="sm" onClick={logout}>
        Logout
      </CustomButton> */}
    </div>
  )
}

export default NavUserInfo
