import React, {useState} from 'react';
import axios from 'axios';
import './style.scss';

import { REGISTER, LOGIN } from '../../config/constants';

const Login = ({ setLoggedIn }) => {

  const [data, setData] = useState({
    email: '',
    password: '',
    displayName: '',
  });

  const [registerVisible, setRegisterVisible] = useState(false);

  const registerOrLogin = async (event) => {
    event.preventDefault();

    let endpoint;
    let body;
    if (registerVisible) {
      // register
      endpoint = REGISTER;
      body = {user: {
        email: data.email, 
        password: data.password, 
        display_name: data.displayName,
      }};
    } else {
      // login
      endpoint = LOGIN;
      body = {user: {
        email: data.email, 
        password: data.password,
      }};
    }

    // send the request
    try {
      const response = await axios.post(endpoint, body);
      if ([200, 201].includes(response.status)) {
        localStorage.setItem('auth_token', response.data.jwt);
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleRegisterVisibility = () => {
    setRegisterVisible(current => !current);
  }

  return (
    <div id="login">
      <div id="login-logo">The<br />Bad Idea<br />Machine</div>
      <form onSubmit={registerOrLogin}>
        <label className="login-fields" htmlFor="email">Email
          <input type="text" name="email" id="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} autoComplete="off" />
        </label>
        <label className="login-fields" htmlFor="password">Password
          <input type="password" name="password" id="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} autoComplete="off" />
        </label>
        {
          registerVisible
          ? <label className="login-fields" htmlFor="displayName">Display Name
              <input type="text" name="displayName" id="displayName" value={data.displayName} onChange={e => setData({...data, displayName: e.target.value})} autoComplete="off" />
            </label>
          : null
        }
        <button type="submit" id="login-button">{registerVisible ? 'Create Account' : 'Sign In'}</button>
      </form>
      <button id="toggle-form-button" onClick={toggleRegisterVisibility}>{registerVisible ? 'Sign In' : 'Create Account'}</button>
    </div>
  );
}

export default Login;
