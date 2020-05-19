import React, {useState} from 'react';

const Login = (props) => {

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  return (
    <div id="login">
      <div id="login-logo">The<br />Bad Idea<br />Machine</div>
      <label className="login-fields" htmlFor="email">Email
        <input type="text" name="email" id="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} autoComplete="off" />
      </label>
      <label className="login-fields" htmlFor="password">Password
        <input type="password" name="password" id="password" value={data.password} onChange={e => setData({...data, password: e.target.value})} autoComplete="off" />
      </label>
      <button id="login-button" onClick={() => props.setLoggedIn(true)}>Sign In</button>
    </div>
  );
}

export default Login;
