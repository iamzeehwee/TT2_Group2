import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from './axios.js';
import NavBar from './components/NavBar';
import { setLanguage } from './Constants';
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
      setLanguage(action.payload.language);
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        getAuth: action.payload.getAuth,
        language: action.payload.language,
        role: action.payload.role
      };
    case 'logoutUser':
      console.log('call logout user')
      setLanguage('eng');
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        language: 'eng'
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
    axios.get('/student/auth').then(res => {
      // received server data, user logged in but state not set yet
      if (res.data.user && !state.isAuthenticated && (res.data.user.role === 'student')) {
        dispatch({
          type: 'loginUser',
          payload: {
            authenticated: true,
            getAuth: true,
            language: res.data.user.language,
            role: 'student'
          }
        });
      } else if(res.data.user && !state.isAuthenticated && (res.data.user.role === 'teacher')) {
        dispatch({
          type: 'loginUser',
          payload: {
            authenticated: true,
            getAuth: true,
            language: res.data.user.language,
            role: 'teacher'
          }
        });
      } else if(res.data.user && !state.isAuthenticated && (res.data.user.role === 'admin')) {
        dispatch({
          type: 'loginUser',
          payload: {
            authenticated: true,
            getAuth: true,
            language: res.data.user.language,
            role: 'admin'
          }
        });
      } else if (!state.getAuth) { // received server data, user not logged in 
        dispatch({
          type: 'getUser',
          payload: {
            getAuth: true
          }
        });
      }
      return null
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        login: (role) =>
          dispatch({ type: 'loginUser', payload: { authenticated: true, role: role} }),
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
              {user.getAuth &&
                <Routes role={user.role} login={user.login} auth={user.isAuthenticated} />
              }
            </main>
          </div>
        </Router>
      )}
    </UserContext.Consumer>
  </UserContextProvider>
);

export default App;
