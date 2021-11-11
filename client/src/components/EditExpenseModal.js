import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
} from "mdbreact";
import React, { Component } from "react";
import axios from "../axios";
import TextField from "@material-ui/core/TextField";

class EditExpenseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      project_id: "",
      category_id: "",
      name: "",
      description: "",
      amount: "",
      created_by: "",
      error: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    let info = this.state;
    let obj = {};

    if (info.name === "" || info.description === "" || info.amount === "") {
      // incomplete fields
      this.setState({ error: "Please fill in all mandatory fields." });
      return;
    }
    axios
      .put(`localhost:5000/update/${this.props.expense.id}`, {
        // update user name
        project_id: this.props.expense.project_id,
        categoryID: 2,
        name: info.name,
        description: info.description,
        amount: info.amount,
        createdBy: this.props.user.name,
        updatedBy: this.props.user.name,
      })
      .then((res) => {
        if (res.data.success) {
          obj.success = true;
          obj.message = res.data.msg;
          obj.loggedOut = res.data.loggedOut;
          this.closeModal();
          this.props.submit(obj);
        } else {
          this.setState({ error: res.data.error });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closeModal = () => {
    this.props.toggleModal();
    this.clearStates();
  };

  showModal = () => {
    let user = this.props.user;
    let expense = this.props.expense;
    let project = this.props.project;
    let selectedOptions = [];
    let options = [];
    if (this.props.admin) {
      options = this.formatClasses(this.props.classes);
      let cl = this.props.user.classes.split(",");
      for (let option of options) {
        for (let cls of cl) {
          if (option.value == cls) {
            selectedOptions.push(option);
            break;
          }
        }
      }
    }
    this.setState({
      id: expense.id,
      project_id: expense.project_id,
      category_id: expense.category_id,
      name: expense.name,
      description: expense.description,
      amount: expense.amount,
      created_by: user.name,
      error: "",
    });
  };

  clearStates = () => {
    this.setState({
      id: "",
      project_id: "",
      category_id: "",
      name: "",
      description: "",
      amount: "",
      created_by: "",
      error: "",
    });
  };

  render() {
    const styles = {
      label: {
        display: "flex",
        alignItems: "center",
      },
      dropdown: {
        width: "100%",
        height: "40px",
        borderColor: "lightGray",
        marginBottom: "20px",
      },
      timeDate: {
        width: "100%",
      },
    };

    return (
      <>
        <MDBModal
          isOpen={this.props.modal}
          toggle={this.closeModal}
          showModal={this.showModal}
          size="lg"
          centered
        >
          <MDBModalHeader toggle={this.closeModal}>Edit Expense</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <form>
                <MDBRow className="mt-3">
                  <MDBCol md="2" style={styles.label}>
                    <label>Name</label>
                    <label className="red-text">*</label>
                  </MDBCol>
                  <MDBCol md="10">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mt-3">
                  <MDBCol md="2" style={styles.label}>
                    <label>Description</label>
                    <label className="red-text">*</label>
                  </MDBCol>
                  <MDBCol md="10">
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Enter Description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mt-3">
                  <MDBCol md="2" style={styles.label}>
                    <label>Amount</label>
                    <label className="red-text">*</label>
                  </MDBCol>
                  <MDBCol md="10">
                    <input
                      type="text"
                      className="form-control"
                      name="amount"
                      placeholder="Enter Amount"
                      value={this.state.amount}
                      onChange={this.onChange}
                    />
                  </MDBCol>
                </MDBRow>

                {this.state.error !== "" && (
                  <>
                    <br />
                    <p className="red-text d-flex justify-content-center mb-3 pt-2">
                      {this.state.error}
                    </p>
                  </>
                )}
              </form>
            </MDBContainer>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn
              color="indigo"
              onClick={this.closeModal}
              className="font-weight-bold"
            >
              {"Cancel"}
            </MDBBtn>
            <MDBBtn
              color="default"
              onClick={this.onSubmit}
              className="font-weight-bold"
            >
              {"Save"}
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default EditExpenseModal;
