import { MDBAnimation, MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React from 'react';
import logo from '../assets/budget.png';
import './Landing.css';

class Landing extends React.Component {

  loginBtn = () => {
    if (this.props.auth) {
        return (
          <MDBBtn outline color='white' onClick={() => this.props.history.push(`/dashboard`)}>
          <MDBIcon icon="home" size="lg" className="mx-2" />
          <strong>Dashboard</strong>
        </MDBBtn>
        )
    } else {
      return (
        <MDBBtn outline color='white' onClick={() => this.props.history.push(`/login`)}>
        <MDBIcon icon="sign-in-alt" size="lg" className="mx-2" />
        <strong>Login</strong>
      </MDBBtn>
      )
    }
  }

  render() {
    const styles = {
      section: {
        height: '100vh',
        width: '100%'
      }
    };

    return (
      <div id='apppage'>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={styles.section}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='7' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    Budget Management
                  </h1>
                  <h1 className='h1-responsive font-weight-bold'>
                    Simple and Interactive
                  </h1>
                  <hr className='hr-light' />
                  <h6>
                    A powerful tool to handle your budget and track your expenses
                  </h6>
                  <h6 className='mb-4'>
                    Integrated with <b className="font-weight-bold">Test</b>
                  </h6>
                  {this.loginBtn()}
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src={logo}
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Landing;
