import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneratorBar from './GeneratorBar';
import Idea from './Idea';
import { IDEAS } from '../data/constants';

const IdeaContainer = ({ ideaId, setCurrentIdeaId }) => {

  const [idea, setIdea] = useState({
    content: {},
    loaded: false,
  });

  useEffect(() => {
    if (ideaId) {

      setIdea(d => ({ ...d, loaded: false }));
      
      setCurrentIdeaId(parseInt(ideaId));

      const fetchIdea = async () => {
        try {
          const response = await axios.get(IDEAS + '/' + ideaId, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
          });
          setIdea(d => ({ ...d, loaded: true, content: response.data }));
        } catch (error) {
          console.log(error);
        }
      };

      fetchIdea();      
    }
  },[ideaId, setCurrentIdeaId]);  // why do react warnings recommend putting setCurrentIdeaId in this dependency array?

  return(
    idea.loaded
    ? <div><Idea idea={idea.content} /></div>
    : <p>Loading idea...</p>
  );
}

export default IdeaContainer;