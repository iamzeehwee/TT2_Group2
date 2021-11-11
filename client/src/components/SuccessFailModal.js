import { MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBFooter } from 'mdbreact';
import React, { Component } from 'react';

class SuccessFailModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  closeModal = () => {
    this.props.toggleModal();
    // this.props.init();
  }

  showModal = () => {
  }

  header = () => {
    return this.props.success ? "Success" : "Fail"
  }

  render() {
    const styles = {
      label: {
        display: 'flex',
        alignItems: 'center'
      },
      timeDate: {
        width: '100%'
      },
      text: {
        paddingTop: '5px',
        fontSize: '20px',
      }
    };

    return (
      <>
        <MDBModal isOpen={this.props.modal} toggle={this.closeModal} showModal={this.showModal} size="lg" centered >
          <MDBModalHeader toggle={this.closeModal}></MDBModalHeader>
          <MDBModalBody className="text-center">
            {this.props.success
              ? <MDBIcon size="10x" className="green-text pr-3" far icon="check-circle" />
              : <MDBIcon size="10x" className="red-text pr-3" far icon="times-circle" />
            }
            <div style={styles.text}>
            {this.props.message}
            </div>
          </MDBModalBody>
          <MDBFooter className="text-center">
            <MDBBtn color="indigo" onClick={this.closeModal} className="font-weight-bold">Close</MDBBtn>
          </MDBFooter>


        </MDBModal>
      </>
    );
  }
}

export default SuccessFailModal;
