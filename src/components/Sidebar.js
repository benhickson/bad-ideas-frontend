import React, { useEffect } from 'react';
import axios from 'axios';

import { RECENT_IDEAS } from '../data/constants';

import SidebarLink from './SidebarLink';

const Sidebar = ({currentIdeaId, setCurrentIdeaId, ideasData, setIdeasData}) => {

  useEffect(()=> {
    const fetchRecentIdeas = async () => {
      try {
        const response = await axios.get(RECENT_IDEAS, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          }
        });
        setIdeasData(d => ({...d, ideasLoaded: true, ideas: response.data.ideas}));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentIdeas();
  });

  const generateIdeaComponents = (ideas, currentIdeaId) => {
    return ideas.map(idea => {
      const selected = (idea.id === currentIdeaId) ? true : false;
      return <SidebarLink key={idea.id} id={idea.id} text={idea.text} selected={selected} setCurrentIdeaId={setCurrentIdeaId} />
    });
  };

  return (
    <div id="sidebar">
      <div id="sidebar-heading">
        <button className="sidebar-heading-link">Recent Ideas</button>
      </div>
      {
        ideasData.ideasLoaded
        ? generateIdeaComponents(ideasData.ideas, currentIdeaId)
        : <p>Loading...</p>
      }
    </div>
  );
};

export default Sidebar;
