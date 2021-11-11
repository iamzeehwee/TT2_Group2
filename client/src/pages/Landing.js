import { MDBAnimation, MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React from 'react';
import logo from '../assets/budget.png';
import './Landing.css';

class Landing extends React.Component {

  loginBtn = () => {
    if (this.props.auth) {
      if (this.props.role === 'student') {
        return (
          <MDBBtn outline color='white' onClick={() => this.props.history.push(`/dashboard`)}>
          <MDBIcon icon="home" size="lg" className="mx-2" />
          <strong>Dashboard</strong>
        </MDBBtn>
        )
      } else {
        return (
          <MDBBtn outline color='white' onClick={() => this.props.history.push(`/teacher/dashboard`)}>
          <MDBIcon icon="home" size="lg" className="mx-2" />
          <strong>Dashboard</strong>
        </MDBBtn>
        )
      }
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

        {/* <MDBContainer className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold pt-5 pb-3">
            Why is it so great?
          </h2>
          <p className="lead grey-text w-responsive mx-auto pb-3">
            AI-powered edutainment system specially designed to motivate learning anytime, anywhere.
          </p>
          <MDBRow className="py-5">
            <MDBCol md="4">
              <MDBIcon icon="sync" size="5x" className="red-text" />
              <h5 className="font-weight-bold my-4">Immediate Feedback</h5>
              <p className="dark-grey-text mb-md-0 mb-5">
                Our Automatic Speech Recognition (ASR) technology provides an immediate automated feedback for students.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="book" size="5x" className="cyan-text" />
              <h5 className="font-weight-bold my-4">Individualized Teaching</h5>
              <p className="dark-grey-text mb-md-0 mb-5">
                Our system allows teachers to review every student's recording and provide feedback out of class time.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="chart-bar" size="5x" className="orange-text" />
              <h5 className="font-weight-bold my-4">Insightful Analytics</h5>
              <p className="dark-grey-text mb-md-0 mb-5">
                Our system provides teachers real-time overview of every student's learning progress and generates holistic class reports.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="my-5">
          <hr className="mb-5" />
          <MDBRow>
            <MDBCol md="8">
              <MDBView className="mb-md-0 mb-4">
                <img
                  className="img-fluid"
                  src={passageReading}
                  alt=""
                />
              </MDBView>
            </MDBCol>
            <MDBCol md="4" style={{ alignSelf: 'center' }}>
              <h2 className="font-weight-bold mb-3 p-0">
                <strong>Passage Reading</strong>
              </h2>
              <p className="dark-grey-text">
                Teacher uploads passage and students are able to identify mispronounced words they have mispronounced.
            </p>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <MDBRow>
            <MDBCol md="5" style={{ alignSelf: 'center' }}>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Pitch Visualization</strong>
              </h3>
              <p className="dark-grey-text">
                Teacher sets vocabulary words and students are able to visualize their pitch pronunciation.
            </p>
            </MDBCol>
            <MDBCol md="7">
              <MDBView className="mb-md-0 mb-4">
                <img
                  className="img-fluid"
                  src={pitchVisualization}
                  alt=""
                />
              </MDBView>
            </MDBCol>
          </MDBRow>

          <hr className="my-5" />
          <MDBRow>
            <MDBCol md="7">
              <MDBView className="mb-md-0 mb-4">
                <img
                  className="img-fluid"
                  src={insightfulAnalytics}
                  alt=""
                />
              </MDBView>
            </MDBCol>
            <MDBCol md="5" style={{ alignSelf: 'center' }}>
              <h2 className="font-weight-bold mb-3 p-0">
                <strong>Analytics</strong>
              </h2>
              <p className="dark-grey-text">
                Insightful statistics are available at both class and student level. Teacher can also view commonly
                mispronounced words for each passage to facilitate in-class teaching.
            </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer> */}
      </div>
    );
  }
}

export default Landing;
