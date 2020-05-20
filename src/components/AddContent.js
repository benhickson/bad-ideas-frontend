import React, { useState } from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from '../data/constants';
import { fetchPhotos, openUploadWidget } from '../util/CloudinaryService';

const AddContent = () => {

  const [imagePublicId, setImagePublicId] = useState('');

  const saveNewImageUploadToDatabase = (publicId) => {
    console.log(publicId, 'saved to db');
    setImagePublicId(publicId);
  };

  const beginImageUpload = (tag) => {
    const uploadOptions = {
      cloudName: CLOUDINARY_CLOUD_NAME,
      tags: [tag],
      uploadPreset: CLOUDINARY_UPLOAD_PRESET,
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === 'success'){
          saveNewImageUploadToDatabase(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  const image_height = 300;

  return (
    <div id="add-content">
      <button onClick={() => beginImageUpload()}>Upload Image</button>
      {
        imagePublicId
        ? <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
            <Image publicId={imagePublicId} height={image_height} onLoad={() => console.log(imagePublicId, 'loaded')} >
              <Transformation height={image_height * 2} crop="scale" quality="auto" fetchFormat="auto" />
            </Image>
          </CloudinaryContext>
        : <p>no image uploaded yet.</p>
      }

    </div>
  );
}

export default AddContent;


