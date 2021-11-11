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

class EditUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      project_id: "",
      category_id: "",
      name: "",
      description: "",
      amount: "",
      created_at: "",
      created_by: "",
      updated_at: "",
      updated_by: "",
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
      .post("student/user/updateProfile", {
        // update user name
        account: info.account,
        name: info.name,
        classId: this.props.user.class_id,
        initialAccount: info.initialAccount,
        email: info.email,
        nativeLanguage: info.nativeLanguage,
        date: info.date,
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
      id: user.id,
      project_id: user.project_id,
      category_id: user.category_id,
      name: user.initialAccount,
      description: user.description,
      amount: user.amount,
      created_at: user.created_at,
      created_by: user.created_by,
      updated_at: user.updated_at,
      updated_by: user.updated_by,
    });
  };

  clearStates = () => {
    this.setState({
      selectedClasses: [],
      initialName: "",
      description: "",
      amount: "",
      error: "",
    });
  };

  formatClasses = (classes) => {
    let arr = [];
    for (let cl of classes) {
      arr.push({
        value: cl.class_id,
        label: cl.module + " Tutorial " + cl.class,
      });
    }
    return arr;
  };

  displayExtraDetails = () => {
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
    if (this.props.type === "student") {
      return (
        <>
          <MDBRow className="mt-3">
            <MDBCol md="2" style={styles.label}>
              <label>Native Language</label>
            </MDBCol>
            <MDBCol md="10">
              <select
                value={this.state.nativeLanguage}
                name="nativeLanguage"
                onChange={this.onChange}
                className="browser-default custom-select"
                style={styles.dropdown}
              >
                <option>Choose your Native Language</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Basque">Basque</option>
                <option value="Bengali">Bengali</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Catalan">Catalan</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="English">English</option>
                <option value="Estonian">Estonian</option>
                <option value="Fiji">Fiji</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Javanese">Javanese</option>
                <option value="Korean">Korean</option>
                <option value="Latin">Latin</option>
                <option value="Latvian">Latvian</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Macedonian">Macedonian</option>
                <option value="Malay">Malay</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Maltese">Maltese</option>
                <option value="Maori">Maori</option>
                <option value="Marathi">Marathi</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Nepali">Nepali</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Quechua">Quechua</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Samoan">Samoan</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Spanish">Spanish</option>
                <option value="Swahili">Swahili</option>
                <option value="Swedish ">Swedish </option>
                <option value="Tamil">Tamil</option>
                <option value="Tatar">Tatar</option>
                <option value="Telugu">Telugu</option>
                <option value="Thai">Thai</option>
                <option value="Tibetan">Tibetan</option>
                <option value="Tonga">Tonga</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Welsh">Welsh</option>
                <option value="Xhosa">Xhosa</option>
              </select>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3">
            <MDBCol md="2" style={styles.label}>
              <label>Starting date of learning Korean</label>
            </MDBCol>
            <MDBCol md="10">
              <TextField
                style={styles.timeDate}
                name="date"
                type="date"
                value={this.state.date}
                onChange={this.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBCol>
          </MDBRow>
        </>
      );
    }
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
                    <label>Email</label>
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

                {this.displayExtraDetails()}

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

export default EditUserModal;