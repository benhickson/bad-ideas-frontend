import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { RECENT_IDEAS } from '../data/constants';

import SidebarLink from './SidebarLink';

const Sidebar = ({currentIdeaId, setCurrentIdeaId}) => {

  const [data, setData] = useState({
    ideas: [],
    ideasLoaded: false,
  });

  useEffect(()=> {
    const fetchRecentIdeas = async () => {
      try {
        const response = await axios.get(RECENT_IDEAS, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
          }
        });
        setData(d => ({...d, ideasLoaded: true, ideas: response.data.ideas}));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentIdeas();
  }, []);

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
        data.ideasLoaded
        ? generateIdeaComponents(data.ideas, currentIdeaId)
        : <p>Loading...</p>
      }
    </div>
  );
};

export default Sidebar;
