import React from 'react';
import axios from 'axios';

import { GENERATE_IDEA } from '../data/constants';

const GeneratorBar = ({ setCurrentIdeaId, setIdeasData }) => {

  const generateIdea = async () => {
    try {
      const response = await axios.get(GENERATE_IDEA, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      setIdeasData(d => ({ ...d, ideasLoaded: true, ideas: [response.data, ...d.ideas] }));
      setCurrentIdeaId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div id="generator-bar">
      <button onClick={generateIdea} id="generate-button">Generate New Idea</button>
    </div>
  )
};

export default GeneratorBar;
