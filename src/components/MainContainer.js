import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { IDEAS } from '../data/constants';

import Idea from './Idea';
import GeneratorBar from './GeneratorBar';

const MainContainer = ({ideaId}) => {

  const [idea, setIdea] = useState({
    content: {},
    loaded: false,
  });

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const response = await axios.get(IDEAS + '/' + ideaId, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          }
        });
        setIdea(d => ({...d, loaded: true, content: response.data}));
      } catch (error) {
        console.log(error);
      }
    };
    fetchIdea();
  },[ideaId]);

  return (
    <div id="main-content">
      <GeneratorBar />
      {
        ideaId
        ? idea.loaded
          ? <div><Idea idea={idea.content} /></div>
          : <p>Loading idea...</p>
        : <p>Generate a new idea above, or select one from history on left.</p>
      }
    </div>
  );
}

export default MainContainer;
