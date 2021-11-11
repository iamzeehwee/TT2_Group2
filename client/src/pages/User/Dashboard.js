import { MDBAnimation, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from "mdbreact";
import React from "react";
import { NavLink } from 'react-router-dom';
import progressImage from '../../assets/progress.png';
import teacherImage from '../../assets/teach.png';
import scriptImage from '../../assets/script.png'
import axios from '../../axios';


class Dashboard extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    selectedIndex: 0,
    name:''
  }

  drawerWidth = 240;

  componentDidMount = () => {
    axios.get('/student/student/profile').then(res => {
      let info = res.data;
      this.setState({name: info.name});
    }).catch(error => {
      console.log(error)
    })
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
      content: {
        paddingTop: '80px',
        paddingLeft: '50px',
        paddingRight: '50px'
      },
      listItem: {
        color: 'black'
      },
      img: {
        paddingTop: '30px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }
    };

    return (
      <>
        <div style={styles.header}>
          <MDBContainer>
            <MDBRow className="pt-2">
              <MDBCol md="12">
                <h1 className="text-center my-1 font-weight-bold">{'Dashboard'}</h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="mt-0 mb-0" />
        </div>

        <MDBContainer style={styles.content}>
          <MDBRow style = {{paddingTop: "100px"}}>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <NavLink to={`/script`} activeClassName="activeClass" style={styles.cardNav}>
                  <MDBView hover>
                    <MDBCard className="my-3 grey lighten-4" style={styles.card}>
                      <MDBCardImage 
                        style={styles.img}
                        cascade
                        className="img-fluid"
                        src={scriptImage}
                        
                      />
                      <MDBCardBody className="text-center">
                        <MDBCardTitle>
                          <strong>{'Test'}</strong>
                        </MDBCardTitle>
                      </MDBCardBody>
                      <MDBMask overlay="blue-light"></MDBMask>
                    </MDBCard>
                  </MDBView>
                </NavLink>

              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <NavLink to={`/example`} activeClassName="activeClass" style={styles.cardNav}>
                  <MDBView hover>
                    <MDBCard cascade className="my-3 grey lighten-4" style={styles.card}>
                      <MDBCardImage
                        style={styles.img} 
                        cascade
                        className="img-fluid"
                        src={teacherImage}
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>{'Test1'}</strong>
                        </MDBCardTitle>
                      </MDBCardBody>
                      <MDBMask overlay="blue-light"></MDBMask>
                    </MDBCard>
                  </MDBView>
                </NavLink>

              </MDBAnimation>
            </MDBCol>

            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <NavLink to={`/progress`} activeClassName="activeClass" style={styles.cardNav}>
                  <MDBView hover>
                    <MDBCard cascade className="my-3 grey lighten-4" style={styles.card}>
                      <MDBCardImage
                        style={styles.img} 
                        cascade
                        className="img-fluid"
                        src={progressImage}
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>{'Data'}</strong>
                        </MDBCardTitle>
                      </MDBCardBody>
                      <MDBMask overlay="blue-light"></MDBMask>
                    </MDBCard>
                  </MDBView>
                </NavLink>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default Dashboard;
