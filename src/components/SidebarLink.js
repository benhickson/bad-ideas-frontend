import React from 'react';

const SidebarLink = ({id, text, selected}) => {
  return (
    <a href={id} className={`sidebar-link ${selected ? 'selected' : null}`}>{text}</a>
  );
}

export default SidebarLink;
