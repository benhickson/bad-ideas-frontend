import React, { useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { Redirect, useParams } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
library.add(farStar, fasStar);

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [ideasData, setIdeasData] = useState({
    ideas: [],
    ideasLoaded: false,
  });

  useEffect(() => {
    // log in the user if they have an auth_token set
    if (localStorage.getItem('auth_token')) {
      setLoggedIn(true);
    }
  }, []);

  let { idea_id: currentIdeaId } = useParams();

  // alternate way, without aliased destructuring
  // let { idea_id } = useParams();
  // let currentIdeaId = idea_id;

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} setIdeasData={setIdeasData} />
        <Sidebar currentIdeaId={currentIdeaId} ideasData={ideasData} setIdeasData={setIdeasData} />
        <MainContainer ideaId={currentIdeaId} setIdeasData={setIdeasData} />
      </>
    :
      <>
        <Redirect to="/" />
        <Login setLoggedIn={setLoggedIn} />
      </>
  );
}

export default App;
