import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { IDEAS, 
  // CLOUDINARY_CLOUD_NAME, 
} from '../data/constants';

import Idea from './Idea';
import GeneratorBar from './GeneratorBar';
import AddContent from './AddContent';

const MainContainer = ({ideaId, setIdeasData}) => {

  const [idea, setIdea] = useState({
    content: {},
    loaded: false,
  });

  useEffect(() => {
    if (ideaId) {
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
    }
  },[ideaId]);

  return (
    <div id="main-content">
      <Switch>
        <Route path="/add-content">
          <AddContent />
        </Route>
        <Route path="/:idea_id">
          <GeneratorBar setIdeasData={setIdeasData} />
            {
              idea.loaded
              ? <div><Idea idea={idea.content} /></div>
              : <p>Loading idea...</p>
            }
            <p>Generate a new idea above, or select one from history on left.</p>
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;
