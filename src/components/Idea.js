import React from 'react'

const Idea = ({idea}) => {

  const {
    // id, 
    image_alt_text, image_base_path, image_filename, text
  } = idea;

  return (
    <div className="idea-wrapper">
      <img src={image_base_path+image_filename+'/450/300.webp'} alt={image_alt_text} />
      <h2 className="idea-text">{text}</h2>
    </div>
  );

};

export default Idea;
