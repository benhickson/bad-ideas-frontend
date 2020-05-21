import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ setLoggedIn, setIdeasData }) => {
  return (
    <div id="navbar">
      {/* <a id="logo" href="/">The Bad Idea Machine</a> */}
      <Link to='/' id="logo">The Bad Idea Machine</Link>
      <button className="nav-link" onClick={() => {
        console.log('logged out');
        localStorage.removeItem('auth_token');
        setLoggedIn(false);
        setIdeasData(d => ({...d, ideasLoaded: false, ideas: [] }));
      }}>Log Out</button>
      <NavLink to='/add-content' className="nav-link" activeClassName="active">Add Content</NavLink>
    </div>
  );
}

export default Navbar;
