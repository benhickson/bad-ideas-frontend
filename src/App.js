import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer />
    </>
  );
}

export default App;
