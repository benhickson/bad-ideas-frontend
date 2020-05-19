import React from 'react'

const Idea = ({id, text, image}) => {
  return (
    <div className="idea-wrapper">
      <img src={image} alt="need to pull from db" />
      <h2 className="idea-text">{text}</h2>
    </div>
  );
};

export default Idea;
