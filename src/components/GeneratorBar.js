import React, { useState } from 'react';
import axios from 'axios';

import { GENERATE_IDEA } from '../config/constants';
import { Redirect } from 'react-router-dom';

const GeneratorBar = ({ setIdeasData }) => {

  const [newIdeaId, setNewIdeaId] = useState(null);

  const generateIdea = async (branded) => {
    try {
      const response = await axios.get(GENERATE_IDEA, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        params: {
          brand: branded ? 'any' : 'none',
        },
      });
      setIdeasData(d => ({ ...d, ideasLoaded: true, ideas: [response.data, ...d.ideas] }));
      setNewIdeaId(response.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  const generateBrandedIdea = () => {
    generateIdea(true);
  }
  const generateUnbrandedIdea = () => {
    generateIdea(false);
  }

  return(
    <div id="generator-bar">
      <button onClick={generateBrandedIdea} id="branded-generate-button">Generate Branded Idea</button>
      <button onClick={generateUnbrandedIdea} id="unbranded-generate-button">Generate Unbranded Idea</button>
      {
        newIdeaId
        ? <Redirect to={`/${newIdeaId}`} />
        : null
      }
    </div>
  )
};

export default GeneratorBar;
