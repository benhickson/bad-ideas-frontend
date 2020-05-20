import React from 'react';

const Navbar = ({setLoggedIn}) => {
  return (
    <div id="navbar">
      <a id="logo" href="/">The Bad Idea Machine</a>
      <button className="nav-link" onClick={() => {
        console.log('logged out');
        localStorage.removeItem('auth_token');
        setLoggedIn(false);
      }}>Log Out</button>
      {/* <a className="nav-link" href="/">Link 1</a> */}
      {/* <a className="nav-link" href="">Link 2</a> */}
    </div>
  );
}

export default Navbar;
