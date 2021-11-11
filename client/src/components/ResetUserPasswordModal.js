import { Checkbox, FormControlLabel } from "@material-ui/core";
import { MDBBtn, MDBCol, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import axios from '../axios';

// teacher account password reset
class ResetUserPasswordModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showPassword: false,
      error: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    let info = this.state;
    if (info.oldPassword === '' || info.newPassword === '' || info.confirmPassword === '') {
      this.setState({ error: 'Incomplete Fields'})
      return
    }

    if (info.newPassword !== info.confirmPassword) {
      this.setState({ error: 'New Password does not match' })
      return
    }

    let obj = {};

    axios.post('student/user/resetPassword', {
      account: this.props.account,
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword
    })
      .then(res => {
        if (res.data.success) {
          console.log('successful reset password')
          obj.success = true;
          obj.message = 'Successfully reset password'
          this.props.submit(obj);
          this.closeModal();
        } else {
          let error = 'Error resetting password'

          switch (res.data.error) {
            case 'current password incorrect':
              error = 'Current password incorrect'
              break;
            case 'no such account':
              error = 'No such account'
              break;
            default:
              error = 'Error resetting password'
          }
          this.setState({ error: error })
        }
      })
      .catch(err => {
        obj.success = false;
        obj.message = 'Error resetting password';
        this.props.submit(obj);
        this.closeModal();
        console.log(err)
      })
  }

  closeModal = () => {
    this.props.toggleModal();
    this.clearStates();
  }

  showHide = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  clearStates = () => {
    this.setState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showPassword: false,
      error: ''
    });
  }

  render() {
    const styles = {
      label: {
        display: 'flex',
        alignItems: 'center'
      }
    };

    return (
      <>
        <MDBModal isOpen={this.props.modal} toggle={this.closeModal} showModal={this.showModal} size="lg" centered >
          <MDBModalHeader toggle={this.closeModal} >{'Reset Password'}</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <form>
                <MDBRow>
                  <MDBCol md="4" style={styles.label}>
                    <label>{'Current Password'}</label>
                  </MDBCol>
                  <MDBCol md="8">
                    <input
                      type={this.state.showPassword ? 'text' : 'password'}
                      className="form-control"
                      name="currentPassword"
                      placeholder={'Enter Current Password'}
                      value={this.state.currentPassword}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md="4" style={styles.label}>
                    <label>{'New Password'}</label>
                  </MDBCol>
                  <MDBCol md="8">
                    <input
                      type={this.state.showPassword ? 'text' : 'password'}
                      className="form-control"
                      name="newPassword"
                      placeholder={'Enter New Password'}
                      value={this.state.newPassword}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md="4" style={styles.label}>
                    <label>{'Re-enter New Password'}</label>
                  </MDBCol>
                  <MDBCol md="8">
                    <input
                      type={this.state.showPassword ? 'text' : 'password'}
                      className="form-control"
                      name="confirmPassword"
                      placeholder={'Re-enter New Password'}
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md="4" style={styles.label}></MDBCol>
                  <MDBCol md="8">
                    <FormControlLabel
                      control={
                        <Checkbox color="primary" checked={this.state.showPassword} onChange={() => this.showHide()} />
                      }
                      label={'Show Password'}
                    />
                  </MDBCol>
                </MDBRow>
                {this.state.error !== '' &&
                  <>
                    <p className="red-text d-flex justify-content-center mb-3 pt-2">
                      {this.state.error}
                    </p>
                  </>
                }
              </form>
            </MDBContainer>

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo" onClick={this.closeModal} className="font-weight-bold">{'Cancel'}</MDBBtn>
            <MDBBtn color="default" onClick={this.onSubmit} className="font-weight-bold">{'Confirm'}</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ResetUserPasswordModal;
