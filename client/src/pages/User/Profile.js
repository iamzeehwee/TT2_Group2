import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBJumbotron, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import axios from '../../axios';
import EditUserModal from '../../components/EditUserModal';
import ResetUserPasswordModal from '../../components/ResetUserPasswordModal';
import SuccessFailModal from '../../components/SuccessFailModal';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      student: {},
      previousClasses: [],
      errors: '',
      editModal: false,
      isLoggedOut: false,
      resetPasswordModal: false,
      successFailModal: false,
      message: '',
      success: false,
    }
  }

  componentDidMount() {
    axios.get('/student/student/profile').then(res => {
      let info = res.data;
      this.setState({
        student: info,
      })
    }).catch(error => {
      console.log(error)
    })

    axios.get('/student/student/previousClasses').then(res => {
      let info = res.data;
      console.log(info);
      this.setState({
        previousClasses: info,
      })
    }).catch(error => {
      console.log(error)
    })
  }

  init = () => {
    this.componentDidMount();
  }

  submit = (obj) => {
    this.setState({ success: obj.success, message: obj.message, isLoggedOut: obj.loggedOut });
    this.toggleSuccessFailModal();
  }

  toggleSuccessFailModal = () => {
    if (this.state.isLoggedOut && this.state.successFailModal) {
      window.location.reload();
    }
    if (this.state.success && this.state.successFailModal) {
      this.init();
    }

    this.setState({ successFailModal: !this.state.successFailModal });
  }

  toggleEditModal = () => {
    this.setState({ editModal: !this.state.editModal });
  }

  toggleResetPasswordModal = () => {
    this.setState({ resetPasswordModal: !this.state.resetPasswordModal });
  }

  displayClasses = () => {
    return (
      <>
        {this.state.classes.length && this.state.classes.map((cls) =>
          <MDBRow key={cls.year}>
            <MDBCol md="3">
              <p>{cls.year}</p>
            </MDBCol>
            <MDBCol md="9">
              <p>{cls.class}</p>
            </MDBCol>
          </MDBRow>
        )}
      </>
    )
  }

  submit = (obj) => {
    this.setState({ success: obj.success, message: obj.message, isLoggedOut: obj.loggedOut });
    this.toggleSuccessFailModal();
  }

  displayPreviousClasses = () => {
    if (this.state.previousClasses.length === 0) {
      return (
        <>
          <MDBRow>
            <MDBCol md="12">None</MDBCol>
          </MDBRow>
        </>
      )
    }
    return (
      <>
        <MDBRow>
          {this.state.previousClasses.map((cls) =>
            <MDBCol md="12">{cls.module + " Tutorial " + cls.class + " AY " + cls.year + " Semester " + cls.semester}</MDBCol>
          )}
        </MDBRow>
      </>
    )
  }

  render() {
    const styles = {
      cardNav: {
        color: 'black'
      },
      card: {
        cursor: 'pointer'
      },
      header: {
        position: 'fixed',
        zIndex: '9',
        width: '100%',
        top: 0,
        paddingTop: '64px',
        background: 'white'
      },
      headerContainer: {
        paddingLeft: '50px',
        paddingRight: '50px'
      },
      content: {
        paddingTop: '80px',
        paddingLeft: '50px',
        paddingRight: '50px'
      },
      label: {
        display: 'flex',
        alignItems: 'center'
      }
    };

    return (
      <>
        <div style={styles.header}>
          <MDBContainer style={styles.headerContainer}>
            <MDBRow className="pt-2">
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <h1 className="text-center my-1 font-weight-bold">{'Profile'}</h1>
              </MDBCol>
              <MDBCol md="3">
                <div style={{ float: 'right' }} >
                  <MDBBtn color="indigo" className="font-weight-bold" onClick={() => this.toggleEditModal()}>
                    {/* <MDBIcon icon="edit" className="mr-2" /> */}
                    {'Edit'}
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="mt-0 mb-0" />
        </div>

        <MDBContainer style={styles.content}>
          <MDBJumbotron className="py-3 px-3">
            <MDBRow className="px-5">
              <MDBCol md="8">
                <MDBRow className="my-4">
                  <MDBCol md="4" className="font-weight-bolder">{'Username'}</MDBCol>
                  <MDBCol md="8">{this.state.student.account}</MDBCol>
                </MDBRow>
                <MDBRow className="my-4">
                  <MDBCol md="4" className="font-weight-bolder">{'Email'}</MDBCol>
                  <MDBCol md="8">{this.state.student.email}</MDBCol>
                </MDBRow>
                <MDBRow className="my-4">
                  <MDBCol md="4" className="font-weight-bolder">{'Name'}</MDBCol>
                  <MDBCol md="8">{this.state.student.name}</MDBCol>
                </MDBRow>
                <MDBRow className="my-4">
                  <MDBCol md="4" className="font-weight-bolder" style={styles.label}>{'Password'}</MDBCol>
                  <MDBCol md="8">
                    <MDBBtn outline color="amber" className="font-weight-bold" onClick={() => this.toggleResetPasswordModal()}>
                      <MDBIcon icon="redo-alt" className="mr-2" />
                      {'Reset Password'}
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow >
          </MDBJumbotron >
        </MDBContainer >
        <SuccessFailModal init={this.init} success={this.state.success} message={this.state.message} modal={this.state.successFailModal} toggleModal={this.toggleSuccessFailModal}></SuccessFailModal>
        <EditUserModal submit={this.submit} modal={this.state.editModal} toggleModal={this.toggleEditModal} user={this.state.student} type={"student"} />
        <ResetUserPasswordModal submit={this.submit} modal={this.state.resetPasswordModal} toggleModal={this.toggleResetPasswordModal} account={this.state.student.account} />
      </>
    )
  }
}

export default Profile;
