import React, { useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentIdeaId, setCurrentIdeaId] = useState(null);

  useEffect(() => {
    // log in the user if they have an auth_token set
    if (localStorage.getItem('auth_token')) {
      setLoggedIn(true);
    }
  }, []);

  const currentIdea = 3;

  return (
    loggedIn
    ?
      <>
        <Navbar setLoggedIn={setLoggedIn} />
        <Sidebar currentIdeaId={currentIdeaId} setCurrentIdeaId={setCurrentIdeaId} />
        <MainContainer ideaId={currentIdeaId} />
      </>
    :
      <Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
