import React, {useState} from 'react';
import axios from 'axios';

import { LOGIN } from '../config/constants';

const Login = ({ setLoggedIn }) => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const login = (event, email, password) => {
    event.preventDefault();
    const loginPost = async () => {
      try {
        const response = await axios.post(LOGIN, {user: {email, password}});
        if (response.status === 200) {
          localStorage.setItem('auth_token', response.data.jwt);
          setLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loginPost();
  }

  return (
    <div id="login">
      <div id="login-logo">The<br />Bad Idea<br />Machine</div>
      <form onSubmit={(event) => login(event, data.email, data.password)}>
        <label className="login-fields" htmlFor="email">Email
          <input type="text" name="email" id="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} autoComplete="off" />
        </label>
        <label className="login-fields" htmlFor="password">Password
          <input type="password" name="password" id="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} autoComplete="off" />
        </label>
        <button type="submit" id="login-button">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
