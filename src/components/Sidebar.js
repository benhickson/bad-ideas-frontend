import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { RECENT_IDEAS } from '../data/constants';

import SidebarLink from './SidebarLink';

const Sidebar = ({currentIdeaId, setCurrentIdeaId, ideasData, setIdeasData}) => {

  const [offset, setOffset] = useState(0)

  useEffect(()=> {
    const fetchRecentIdeas = async () => {
      try {
        const response = await axios.get(RECENT_IDEAS+'/'+offset, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          }
        });
        setIdeasData(d => ({...d, ideasLoaded: true, ideas: [...d.ideas, ...response.data.ideas] }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentIdeas();
  }, [setIdeasData, offset]);         // does this make sense to use in the dependency array?

  const generateIdeaComponents = (ideas, currentIdeaId) => {
    return ideas.map(idea => {
      const selected = (idea.id === currentIdeaId) ? true : false;
      return <SidebarLink key={idea.id} id={idea.id} text={idea.text} selected={selected} setCurrentIdeaId={setCurrentIdeaId} />
    });
  };

  return (
    <div id="sidebar">
      <div id="sidebar-heading">
        <button style={{cursor: 'initial'}} className="sidebar-heading-link">Recent Ideas</button>
      </div>
      {
        ideasData.ideasLoaded
        ? generateIdeaComponents(ideasData.ideas, currentIdeaId)
        : <p>Loading...</p>
      }
      <button onClick={() => setOffset(ideasData.ideas.length)} className="sidebar-heading-link"><br />Load More<br />&nbsp;</button>
    </div>
  );
};

export default Sidebar;
