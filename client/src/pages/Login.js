import { MDBBtn, MDBCol, MDBContainer, MDBNavLink, MDBRow, MDBTabContent, MDBTabPane} from 'mdbreact';
import React, { Component } from 'react';
import axios from '../axios';
import { getData as Constants, setLanguage } from '../Constants';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
      settingLang: '',
      error: '',
      activeItem: '0',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmitStudent.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitStudent(e) {
    e.preventDefault()
    let info = this.state;

    if (info.account === '' || info.password === '') {
      this.setState({ error: Constants('ERR_INCOMPLETE_FIELDS') })
      return
    }

    axios.post('/login', {
      username: this.state.account,
      password: this.state.password,
    })
      .then(res => {
        console.log(res.data);
        if (res.data[0].id) {
          console.log('login successful')
          // this.props.login('student')
          this.props.history.push(`/dashboard`)
        } else {
          this.setState({ error: res.data.msg })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  studentsLogin = () => {
    return (
      <MDBContainer className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmitStudent}>
              <MDBRow>
                <MDBCol md="9" className="text-left">
                  <h1 className="h3 mb-3 font-weight-bold">{'Login'}</h1>
                </MDBCol>
                <MDBCol md="3" className="text-right">
                </MDBCol>
              </MDBRow>
              <div className="form-group">
                <label>{Constants('ACCOUNT')}</label>
                <input
                  type="account"
                  className="form-control"
                  name="account"
                  placeholder={Constants('ENTER_ACCOUNT')}
                  value={this.state.account}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>{Constants('PASSWORD')}</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder={Constants('ENTER_PASSWORD')}
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <p className="red-text d-flex justify-content-center my-3 pt-2">
                {this.state.error}
              </p>
              <MDBBtn
                color="indigo" onClick={this.onSubmit}
                className="btn-block font-weight-bold"
                type = "submit"
              >
                {Constants('LOGIN')}
              </MDBBtn>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <MDBNavLink to='/register' color="mdb-color" className="text-right justify-content-end mt-5">{Constants('GO_TO_REGISTER')}</MDBNavLink>
          </div>
        </div>
      </MDBContainer>
    )
  }

  render() {
    return (
      <MDBContainer>
      <div>
        {this.studentsLogin()}
      </div>
    </MDBContainer>
    )
  }
}

export default Login;
