import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import React from 'react';

class ConfirmModal extends React.Component {

  closeModal = () => {
    this.props.toggleModal();
  }

  showModal = () => {
  }

  onSubmit = () => {
    this.props.submit();
    this.closeModal();
  }


  render() {
    return (
      <>
        <MDBModal isOpen={this.props.modal} toggle={this.closeModal} showModal={this.showModal} size="lg" centered >
          <MDBModalHeader toggle={this.closeModal} >Are you sure?</MDBModalHeader>
          <MDBModalBody>
            {this.props.message}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo" onClick={this.closeModal} className="font-weight-bold">Cancel</MDBBtn>
            <MDBBtn color="default" onClick={this.onSubmit} className="font-weight-bold">Confirm</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ConfirmModal;
