import React, {useState, useEffect} from 'react';
import axios from 'axios';

import constants from '../data/constants';

import SidebarLink from './SidebarLink';

const Sidebar = ({currentSelectedIdea}) => {

  const [data, setData] = useState({
    ideas: [],
    ideasLoaded: false,
  });

  useEffect(()=> {
    const fetchRecentIdeas = async () => {
      try {
        const response = await axios.get(constants.IDEAS_ENDPOINT);
        setData(d => ({...d, ideasLoaded: true, ideas: response.data}));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentIdeas();
  }, []);

  const generateIdeaComponents = (ideas, currentSelectedIdea) => {
    return ideas.map(idea => {
      const selected = (idea.id === currentSelectedIdea) ? true : false;
      return <SidebarLink key={idea.id} id={idea.id} text={idea.text} selected={selected} />
    });
  };

  return (
    <div id="sidebar">
      <div id="sidebar-heading">
        <button className="sidebar-heading-link">Recent Ideas</button>
      </div>
      {
        data.ideasLoaded
        ? generateIdeaComponents(data.ideas, currentSelectedIdea)
        : <p>Loading...</p>
      }
    </div>
  );
};

export default Sidebar;
