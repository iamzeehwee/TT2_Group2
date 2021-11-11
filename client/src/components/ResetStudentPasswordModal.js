import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import React, { Component } from 'react';
import axios from '../axios';
import Constants from '../Constants';

// student account password reset
class ResetStudentPasswordModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  resetPassword = () => {
    axios.post('/student/resetPassword', {
      account: this.props.account
    })
      .then(res => {
        console.log(res.data)
        if (res.data.success) {
          console.log('successful reset password')
          this.props.toggleModal();
          this.props.init();
        } else {
          console.log('error adding student')
          this.setState({ error: res.data.error })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggleModal} centered>
          <MDBModalHeader toggle={this.props.toggleModal}>{Constants('RESET_PASSWORD')}</MDBModalHeader>
          <MDBModalBody>
            <h5 className="text-center">{Constants('ACCOUNT')}: <strong className="font-weight-bold">{this.props.account}</strong></h5>
            <h6 className="text-center pt-2">{Constants('RESET_PASSWORD_BODY')}</h6>

            {this.state.error !== '' &&
              <p className="red-text d-flex justify-content-center mb-3 pt-2">
                {this.state.error}
              </p>
            }
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo" onClick={this.props.toggleModal} className="font-weight-bold">{Constants('CANCEL')}</MDBBtn>
            <MDBBtn color="default" onClick={() => this.resetPassword()} className="font-weight-bold">{Constants('CONFIRM')}</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ResetStudentPasswordModal;
