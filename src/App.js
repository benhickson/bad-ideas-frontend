import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const currentIdea = 2;

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} />
        <Sidebar currentSelectedIdea={currentIdea} />
        <MainContainer ideaId={currentIdea} />
      </>
    :
      <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
