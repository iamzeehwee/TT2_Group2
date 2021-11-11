import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/User/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/User/Profile';
import Register from './pages/Register';

class Routes extends React.Component {

  render() {
    // only if logged in
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth === true
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )

    // only if not logged in
    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth === false
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )

    return (
      <Switch>
        <Route exact path='/' component={(props) => <Landing role = {this.props.role} auth={true} {...props} />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={(props) => <Login login={this.props.login} {...props} />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path='/dashboard' component={(props) => <Dashboard {...props} />} />
        {/* Redirect to landing page if page does not exist */}
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Routes;
