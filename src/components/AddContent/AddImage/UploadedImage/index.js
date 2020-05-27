import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import './style.scss';

const UploadedImage = ({publicId}) => {
  
  const [imageLoaded, setImageLoaded] = useState(false);
  // const [description, setDescription] = useState('');
  // const [contentGroupId, setContentGroupId] = useState('');

  const image_height = 300; // for the cloudinary transformation, keep this the same as the main display.

  // const saveImageDetails = (publicId, description, contentGroupId)

  return (
    <div className="uploaded-image-container" style={imageLoaded ? null : {display: 'none'}}>
      <div className="image-box">
        <Image publicId={publicId} width="300" onLoad={() => setImageLoaded(true)} >
          <Transformation height={image_height * 2} crop="scale" quality="auto" fetchFormat="auto" />
        </Image>
      </div>
      <div className="options-box">
        {/* Options will go here. */}
        {/* <label htmlFor={`description-${publicId}`}>Description:
          <input id={`description-${publicId}`} type="text" name="description" placeholder="Description" value={description} 
                 onChange={event => setDescription(event.target.value)} />
        </label>
        <label htmlFor={`content-group-${publicId}`}>Content Group:
          <input type="checkbox" />Group 1
          <input type="checkbox" name="" />Group 1
        </label>
        <button className={description + contentGroupId !== '' ? null : 'disabled'}>Save</button> */}
      </div>
    </div>
  )
}

export default UploadedImage;
