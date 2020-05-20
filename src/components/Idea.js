import React, { useState, useEffect } from 'react'

const Idea = ({idea}) => {

  const {
    // id, 
    image_alt_text, image_base_path, image_filename, text
  } = idea;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [idea])

  return (
    <>
      <div className="idea-wrapper" style={imageLoaded ? null : {display: 'none'}}>
        <img src={image_base_path+image_filename+'/450/300.webp'} alt={image_alt_text} onLoad={() => setImageLoaded(true)} />
        <h2 className="idea-text">{text}</h2>
      </div>
      <p style={imageLoaded ? {display: 'none'} : null}>Loading idea...</p>
    </>
  );

};

export default Idea;
