import React, { useState } from 'react';
import axios from 'axios';

import { GENERATE_IDEA } from '../data/constants';
import { Redirect } from 'react-router-dom';

const GeneratorBar = ({ setIdeasData }) => {

  const [newIdeaId, setNewIdeaId] = useState(null);

  const generateIdea = async () => {
    try {
      const response = await axios.get(GENERATE_IDEA, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      setIdeasData(d => ({ ...d, ideasLoaded: true, ideas: [response.data, ...d.ideas] }));
      setNewIdeaId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div id="generator-bar">
      <button onClick={generateIdea} id="generate-button">Generate New Idea</button>
      {
        newIdeaId
        ? <Redirect to={`/${newIdeaId}`} />
        : null
      }
    </div>
  )
};

export default GeneratorBar;
