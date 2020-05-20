import React, { useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentIdeaId, setCurrentIdeaId] = useState(null);
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

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} setIdeasData={setIdeasData} />
        <Sidebar currentIdeaId={currentIdeaId} setCurrentIdeaId={setCurrentIdeaId} ideasData={ideasData} setIdeasData={setIdeasData} />
        <MainContainer ideaId={currentIdeaId} setCurrentIdeaId={setCurrentIdeaId} />
      </>
    :
      <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
