import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from './axios.js';
import NavBar from './components/NavBar';
import Routes from './Routes';

const UserContext = React.createContext();

const initialState = {
  user: {
    role: '',
    isAuthenticated: false,
    getAuth: false, // received server data
    language: 'eng'
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loginUser':
      console.log('call login user')
      return {
        ...state,
        isAuthenticated: true,
        getAuth: action.payload.getAuth,
      };
    case 'logoutUser':
      console.log('call logout user')
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
      };
    case 'getUser':
      return {
        ...state,
        getAuth: action.payload.getAuth
      };
    default:
      return state;
  }
};

// re-render when there is change to user state
const UserContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState.user);
  if (!state.getAuth) {
    state.getAuth = true;
    console.log("SETTING IF USEER LOGIN")
    localStorage.setItem("isLoggedIn", true);
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        login: (role) =>
          dispatch({ type: 'loginUser', payload: { authenticated: true} }),
        logout: () =>
          dispatch({ type: 'logoutUser', payload: { authenticated: false } })
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

const App = () => (
  <UserContextProvider>
    <UserContext.Consumer>
      {user => (
        <Router>
          <div className='flyout'>
            <NavBar logout={user.logout} auth={user.isAuthenticated} />
            <main style={{ marginTop: '4rem' }}>
              {/* {user.getAuth && */}
                <Routes login={true} auth={true} />

            </main>
          </div>
        </Router>
      )}
    </UserContext.Consumer>
  </UserContextProvider>
);

export default App;
