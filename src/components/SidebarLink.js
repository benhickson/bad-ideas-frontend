import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ id, text, selected }) => {

  // 256 characters is about 16 em... let's round up to 20 to be safe.
  // 256 / 20 = 12.8
  // const maxHeightEms = (text.length / 12.8) + 1;

  // TODO: attempted the above, in concert with settings in App.css... still getting some UI jank.
  // reccommend integrating http://shinychang.github.io/React-Text-Truncate/ instead.

  return (
    <NavLink 
      to={`/${id}`} 
      // activeStyle={{ 'max-height': `${maxHeightEms}em` }} 
      className={`sidebar-link${selected ? ' selected' : ''}`}
    >
      {text}
    </NavLink>
  );
}

export default SidebarLink;
