import React, { useState, useEffect } from 'react';
// import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
// import { CLOUDINARY_CLOUD_NAME } from '../data/constants';

const Idea = ({idea}) => {

  const {
    // id, 
    image_alt_text, image_host_name, image_base_path, image_filename, text
  } = idea;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [image_filename]);

  const image_height = 300;

  return (
    <>
      <div className="idea-wrapper" style={imageLoaded ? null : {display: 'none'}}>
        {
          image_host_name === 'Cloudinary'
          ? <img src={image_base_path+'c_scale,f_auto,h_'+image_height * 2+',q_auto/'+image_filename} alt={image_alt_text} onLoad={() => setImageLoaded(true)} />
            /* Not working for some reason, likely related to setImageLoaded */
            /* <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
              <Image publicId={image_filename} onLoad={() => setImageLoaded(true)} >
                <Transformation height={image_height * 2} crop="scale" quality="auto" fetchFormat="auto" />
              </Image>
            </CloudinaryContext> */
          : <img src={image_base_path+image_filename+'/450/300.webp'} alt={image_alt_text} onLoad={() => setImageLoaded(true)} />
        }
        <h2 className="idea-text">{text}</h2>
      </div>
      <p style={imageLoaded ? {display: 'none'} : null}>Loading idea...</p>
    </>
  );

};

export default Idea;
