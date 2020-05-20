import React from 'react';

const SidebarLink = ({id, text, selected, setCurrentIdeaId}) => {
  return (
    <button onClick={() => setCurrentIdeaId(id)} className={`sidebar-link${selected ? ' selected' : ''}`}>{text}</button>
  );
}

export default SidebarLink;
