import React from 'react';

const SidebarLink = ({id, text, selected, setCurrentIdeaId}) => {
  return (
    <button onClick={() => setCurrentIdeaId(id)} className={`sidebar-link ${selected ? 'selected' : null}`}>{text}</button>
  );
}

export default SidebarLink;
