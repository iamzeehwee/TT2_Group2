import { MDBBtn, MDBCol, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBRow } from 'mdbreact';
import React, { Component } from 'react';

// view student or teachers under Manage section
class ViewUserModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: [],
      error: '',
      user: {},
    }
  }

  closeModal = () => {
    this.props.toggleModal();
    this.clearStates();
  }

  clearStates = () => {
    this.setState({
      user: [],
      error: ''
    });
  }

  showModal = () => {
    this.setState({user: this.props.user})
  }

  render() {
    const styles = {
      label: {
        display: 'flex',
        alignItems: 'center'
      }
    };

    let header = '';
    if (this.props.type === 'student') {
      header = 'View Student'
    } else if (this.props.type === 'teacher') {
      header = 'View Teacher'
    }

    return (
      <>
        <MDBModal isOpen={this.props.modal} toggle={this.closeModal} showModal={this.showModal} centered >
          <MDBModalHeader toggle={this.closeModal} >{header}</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
                <>
                  <MDBRow>
                    <MDBCol md="3" style={styles.label}>
                      <p>Account</p>
                    </MDBCol>
                    <MDBCol md="9">
                      <p className="font-weight-bolder">{this.state.user.account}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="3" style={styles.label}>
                      <p>Name</p>
                    </MDBCol>
                    <MDBCol md="9">
                      <p className="font-weight-bolder">{this.state.user.name}</p>
                    </MDBCol>
                  </MDBRow>
                </>
              <br />
              {this.state.error !== '' &&
                <p className="red-text d-flex justify-content-center mb-3 pt-2">
                  {this.state.error}
                </p>
              }
            </MDBContainer>

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo" onClick={this.closeModal} className="font-weight-bold">Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ViewUserModal;
