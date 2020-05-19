import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} />
        <Sidebar />
        <MainContainer />
      </>
    :
      <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
