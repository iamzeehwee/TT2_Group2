
import { MDBBtn, MDBCol, MDBContainer, MDBNavLink, MDBRow } from 'mdbreact';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import axios from '../axios';
import { getData as Constants } from '../Constants';
import SuccessFailModal from '../components/SuccessFailModal';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      email: '',
      nativeLanguage: '',
      date: '',
      error: '',
      message: '',
      success: false,
      successFailModal: false,
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state);
  }

  onSubmit(e) {
    this.setState({ error: '' })
    e.preventDefault()
    let info = this.state;

    if (info.account === '' || info.password === '' || info.passwordConfirmation === '' || info.passwordConfirmation === ''
      || info.name === '' || info.email === '' || info.nativeLanguage === '' || info.date === '') {
      this.setState({ error: Constants('ERR_INCOMPLETE_FIELDS') })
      return
    }

    if (info.password !== info.passwordConfirmation) {
      this.setState({ error: 'Passwords do not match.' })
      return
    }

    axios.post('/student/auth/register', {
      account: this.state.account,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      nativeLanguage: this.state.nativeLanguage,
      date: this.state.date
    })
      .then(res => {
        console.log(res)
        if (res.data.registered) {
          console.log('successful register')
          this.setState({success: true, message: 'Registered successfully!'})
          this.toggleSuccessFailModal();
        } else {
          console.log('Register error: ' + res.data.error)
          let error = Constants('ERR_REGISTER')
          switch (res.data.error) {
            case 'account already exists':
              error = Constants('ERR_ACCOUNT_EXISTS')
              break;
            default:
              error = Constants('ERR_REGISTER')
          }
          this.setState({ error: error })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {

  }

  toggleSuccessFailModal = () => {  
    if (this.state.success && this.state.successFailModal) {
      this.props.history.push(`/login`)
    }
    this.setState({ successFailModal: !this.state.successFailModal });
  }

  render() {
    const styles = {
      dropdown: {
        width: '100%',
        height: '40px',
        borderColor: 'lightGray',
        marginBottom: '20px'
      },
      timeDate: {
        width: '100%'
      }
    }

    return (
      <MDBContainer className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <MDBRow>
                <MDBCol md="9" className="text-left">
                  <h1 className="h3 mb-3 font-weight-bold">{Constants('REGISTER')}</h1>
                </MDBCol>
                {/* <MDBCol md="3" className="text-right">
                  <select className="browser-default custom-select" name="settingLang" value={getLanguage()} onChange={this.onChange}>
                    <option key='eng' value='eng'>English</option>
                    <option key='chi' value='chi'>中文</option>
                  </select>
                </MDBCol> */}
              </MDBRow>
              <div className="form-group">
                <label>{'Username'}</label>
                <input
                  type="account"
                  className="form-control"
                  name="account"
                  placeholder={'Enter Username'}
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
              <div className="form-group">
                <label>{'Confirm Password'}</label>
                <input
                  type="password"
                  className="form-control"
                  name="passwordConfirmation"
                  placeholder={'Confirm Password'}
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>{'Full Name'}</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={Constants('ENTER_NAME')}
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>{'School Email'}</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder={'Enter School Email'}
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div >
              <div className="form-group">
                <label>{'Native Language'}</label>
                <div>
                  <select name="nativeLanguage" onChange={this.onChange} className="browser-default custom-select" style={styles.dropdown}>
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
                </div>
                <div className="form-group">
                  <label>{'Start date of learning Korean'}</label>
                  <div>
                    <TextField
                      style={styles.timeDate}
                      name="date"
                      type="date"
                      onChange={this.onChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="form-group">
                <label>{Constants('LANGUAGE')}</label>
                <RadioGroup aria-label="language" name="language" value={this.state.language} onChange={this.onChange}>
                  <div>
                    <FormControlLabel className="mr-5" value="eng" control={<Radio className="py-0" size="small" color="primary" />} label="English" />
                    <FormControlLabel className="ml-5" value="chi" control={<Radio className="py-0" size="medium" color="primary" />} label="中文" />
                  </div>
                </RadioGroup>
              </div> */}
              {/* <div className="form-group">
                <label>{Constants('SCHOOL')}</label>
                <select className="browser-default custom-select" name="schoolId" onChange={this.onChange}>
                  <option key='' value=''>{Constants('SELECT_SCHOOL')}</option>
                  <option key='-1' value='-1'>{Constants('ADD_SCHOOL')}</option>
                  <option disabled>──────────</option>
                  {this.state.availableSchools && this.state.availableSchools.map((school, index) => {
                    return (
                      <option key={school.id} value={school.id}>{school.name}</option>
                    )
                  })}
                </select>
              </div> */}
              {/* Add School */}
              {/* {this.state.schoolId === '-1' &&
                <div className="form-group">
                  <label>{Constants('SCHOOL_NAME')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="newSchool"
                    placeholder={Constants('ENTER_SCHOOL_NAME')}
                    value={this.state.newSchool}
                    onChange={this.onChange}
                  />
                </div>
              }
              <div className="form-group">
                <label>{Constants('SCHOOL_PIN')}</label>
                <input
                  type="password"
                  className="form-control"
                  name="pin"
                  placeholder={Constants('ENTER_SCHOOL_PIN')}
                  value={this.state.pin}
                  onChange={this.onChange}
                />
              </div> */}
              <p className="red-text d-flex justify-content-center my-3 pt-2">
                {this.state.error}
              </p>
              <MDBBtn
                color="indigo" onClick={this.onSubmit}
                className="btn-block font-weight-bold"
              >
                {Constants('REGISTER')}
              </MDBBtn>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <MDBNavLink to='/login' color="mdb-color" className="text-right justify-content-end my-5">{Constants('GO_TO_LOGIN')}</MDBNavLink>
          </div>
        </div>
        <SuccessFailModal init={this.componentDidMount} success={this.state.success} message={this.state.message} modal={this.state.successFailModal} toggleModal={this.toggleSuccessFailModal}></SuccessFailModal>
      </MDBContainer>

    )
  }
}

export default Register;
