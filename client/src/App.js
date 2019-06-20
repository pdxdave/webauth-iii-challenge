import React from 'react';
import './App.css';
import {NavLink, Route, withRouter} from 'react-router-dom';


import Login from './components/auth/Login';
import Users from './components/users/Users';
import SignUp from './components/auth/signUp'

function App(props) {
 
  const logout = e => {
     e.preventDefault();
     localStorage.removeItem('jwt')
     props.history.push('/login')
  }

  return (

    <div>
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>&nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>&nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          <button onClick={logout}>Logout</button>
         </nav>
      </header>
      <main>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={Users}/>
        <Route path="/register" component={SignUp}/>
      </main>
    </div>
  );
}

export default withRouter(App);
