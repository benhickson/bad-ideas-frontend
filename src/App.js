import React, { useState, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import './App.scss';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { Redirect, useLocation } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
library.add(farStar, fasStar);

const App = () => {

  ReactGA.initialize('UA-167983598-1');

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentIdeaId, setCurrentIdeaId] = useState(null);
  const [ideasData, setIdeasData] = useState({
    ideas: [],
    ideasLoaded: false,
  });

  // google analytics with React Router
  let location = useLocation();
  const firstRun = useRef(true);      // block the first one from being double-recorded
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      ReactGA.pageview(location.pathname)
    }
  }, [location]);

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
