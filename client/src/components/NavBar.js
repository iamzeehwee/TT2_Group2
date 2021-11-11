import { MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from 'mdbreact';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../axios';

class NavBar extends Component {
  goToLogin = () => {
    this.props.history.push(`/login`)
  }

  logout = () => {
    axios.post('/student/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.logout();
        this.props.history.push(`/`)
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    return (
      // IMPORTANT! So that modal will show above navbar (zIndex)
      <MDBNavbar color='indigo' dark expand='xs' fixed='top' scrolling style={{ zIndex: '10' }}>
        <MDBNavbarBrand href='/' className='font-weight-bold'>Project Expense Tracker</MDBNavbarBrand>
        <MDBNavbarNav right>
          {/* Show different navBar details depending on user logged in or not */}
          {this.props.auth ?
            <>
              <MDBNavItem>
                <MDBNavLink to='/dashboard'>
                  <MDBIcon icon="home" size="lg" className="mx-2" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/profile'>
                  <MDBIcon icon="user" size="lg" className="mx-2" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink onClick={() => this.logout()} to="/">
                  <MDBIcon icon="sign-out-alt" size="lg" className="mx-2" />
                </MDBNavLink>
              </MDBNavItem>
            </>
            :
            <MDBNavItem>
              <MDBNavLink to="/login">
                <MDBIcon icon="sign-in-alt" size="lg" className="mx-2" />
                <strong>Login</strong>
              </MDBNavLink>
            </MDBNavItem>
          }
        </MDBNavbarNav>
      </MDBNavbar>
    )
  };
}

export default withRouter(NavBar);
