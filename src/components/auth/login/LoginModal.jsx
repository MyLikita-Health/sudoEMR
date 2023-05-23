import { Row, Col, Modal } from 'reactstrap'
import React from 'react'
import sudoEMR from '../../../images/sudoEMR...png'
import { BsX } from 'react-icons/bs'
import { TextInput } from '../../comp/components'

export default function LoginModal({ openModal, closeModal }) {
  return (
    <div>
      <Modal isOpen={openModal}>
        <div className="p-4">
          <div className="d-flex align-items-center justify-content-between">
            <img
              src={sudoEMR}
              className="auth_logo"
              style={{ width: 150 }}
              alt="sudoEMR logo"
            />
            <BsX className="modal_closer" onClick={closeModal} />
          </div>
          <Row className="mt-3">
            <Col md={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="auth_heading">Login</h4>
                </div>
                <div>
                  <p className="already_have_account">
                    Don't have an account?{' '}
                    <span className="login_text" onClick={closeModal}>
                      Register
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <h5 className="auth_heading mt-5">User Information</h5>
          <Row>
            <Col md={12}>
              <div>
                <label className="input_label mt-2">
                  Username <span className="star">*</span>
                </label>
                <TextInput />
              </div>
            </Col>
            <Col md={12}>
              <div>
                <label className="input_label mt-2">
                  Password <span className="star">*</span>
                </label>
                <TextInput />
              </div>
            </Col>
          </Row>

          <Row className="d-flex align-items-center mt-4">
            <Col md={8}>
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  I have read and agree to the terms of{' '}
                  <span className="login_text">sudoEMR</span>
                </label>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <button className="app_primary_button auth_button_1 pl-5 pr-5">
                  Login
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  )
}
