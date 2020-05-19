import React, {useState} from 'react';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="login">
      <div id="login-logo">The<br />Bad Idea<br />Machine</div>
      <label className="login-fields" htmlFor="email">Email
        <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label className="login-fields" htmlFor="password">Password
        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button id="login-button" onClick={() => props.setLoggedIn(true)}>Sign In</button>
    </div>
  );
}

export default Login;
