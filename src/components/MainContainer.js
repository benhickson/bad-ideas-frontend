import React, { useState, useEffect } from 'react';
import axios from 'axios';

import constants from '../data/constants';

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
        const response = await axios.get(constants.IDEAS_ENDPOINT + '/' + ideaId);
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
        idea.loaded
        ? <Idea id={idea.content.id} text={idea.content.text} image={idea.content.image} />
        : <p>Loading idea...</p>
      }
    </div>
  );
}

export default MainContainer;
