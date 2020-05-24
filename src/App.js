import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { Redirect } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
library.add(farStar, fasStar);

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentIdeaId, setCurrentIdeaId] = useState(0);
  const [ideasData, setIdeasData] = useState({
    ideas: [],
    ideasLoaded: false,
  });

  // log the user in if they have an auth_token set
  if (!loggedIn && localStorage.getItem('auth_token')) {
    setLoggedIn(true);
  }

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} setIdeasData={setIdeasData} />
        <Sidebar currentIdeaId={currentIdeaId} ideasData={ideasData} setIdeasData={setIdeasData} />
        <MainContainer setCurrentIdeaId={setCurrentIdeaId} setIdeasData={setIdeasData} />
      </>
    :
      <>
        <Redirect to="/" />
        <Login setLoggedIn={setLoggedIn} />
      </>
  );
}

export default App;
