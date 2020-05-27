import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext } from 'cloudinary-react';
import './style.scss';
import { openUploadWidget } from '../../../util/CloudinaryService';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET, UPLOAD_IMAGE } from '../../../config/constants';
import UploadedImage from './UploadedImage';

const GOOGLE_IMAGE_SEARCH_API_KEY = process.env.REACT_APP_GOOGLE_IMAGE_SEARCH_API_KEY;

const AddImage = () => {

  const [imagePublicIds, setImagePublicIds] = useState([]);

  const saveNewImageUploadToDatabase = async (publicId) => {
    
    setImagePublicIds(ids => [...ids, publicId]);
    
    try {
      const response = await axios.post(UPLOAD_IMAGE, {
        public_id: publicId,
        description: null,
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      if (response.status === 202) {
        console.log('image', publicId, 'accepted into database');
        // TODO: offer a green check in the box to indicate
      }
    } catch (error) {
      console.log(error);
      // TODO: show a red X in the box to indicate
    }

  };

  const beginImageUpload = () => {
    const uploadOptions = {
      cloudName: CLOUDINARY_CLOUD_NAME,
      uploadPreset: CLOUDINARY_UPLOAD_PRESET,
      googleApiKey: GOOGLE_IMAGE_SEARCH_API_KEY,
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success'){
          saveNewImageUploadToDatabase(photos.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  const generateUploadedImageComponents = (imagePublicIds) => {
    return imagePublicIds.map(id => <UploadedImage key={id} publicId={id} />)
  }

  return (
    <div id="add-image">
      <button id="upload-image-button" onClick={() => beginImageUpload()}>Upload Image</button>
      {
        imagePublicIds.length > 0
        ? <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
            {generateUploadedImageComponents(imagePublicIds)}
          </CloudinaryContext>
        : null    // no image uploaded yet
      }
    </div>
  );
}

export default AddImage;


