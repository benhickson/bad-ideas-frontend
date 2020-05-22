import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ id, text, selected }) => {
  return (
    <Link to={`/${id}`} className={`sidebar-link${selected ? ' selected' : ''}`}>{text}</Link>
  );
}

export default SidebarLink;
