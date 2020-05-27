import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import './style.scss';
import { openUploadWidget } from '../../../util/CloudinaryService';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET, ADD_BRAND } from '../../../config/constants';

const GOOGLE_IMAGE_SEARCH_API_KEY = process.env.REACT_APP_GOOGLE_IMAGE_SEARCH_API_KEY;

const AddBrand = () => {

  const [imagePublicId, setImagePublicId] = useState('');
  const [brandName, setBrandName] = useState('');

  const beginImageUpload = () => {
    const uploadOptions = {
      cloudName: CLOUDINARY_CLOUD_NAME,
      uploadPreset: CLOUDINARY_UPLOAD_PRESET,
      googleApiKey: GOOGLE_IMAGE_SEARCH_API_KEY,
      multiple: false, // disallow multiple image selection, since a brand can only have one image
    };

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        console.log(photo);
        if (photo.event === 'success'){
          // saveNewImageUploadToDatabase(photo.info.public_id);
          setImagePublicId(photo.info.public_id);
        }
      } else {
        console.log(error);
      }
    });
  };

  const saveBrand = async () => {
    console.log('saving', imagePublicId, brandName);

    try {
      const response = await axios.post(ADD_BRAND, {
        name: brandName,
        public_id: imagePublicId,
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      if (response.status === 202) {
        console.log('brand', brandName, 'accepted into database');
        // TODO: offer a green check in the box to indicate
      }
    } catch (error) {
      console.log(error);
      // TODO: show a red X in the box to indicate
    }
  }

  const renderImage = (publicId) => {
    const image_height = 200; // for the cloudinary transformation, keep this the same as the main display.
    return (
      <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
        <Image publicId={publicId} width="200">
          <Transformation height={image_height * 2} crop="scale" quality="auto" fetchFormat="auto" />
        </Image>
      </CloudinaryContext>
    )
  }

  return (
    <div id="add-brand">
      {
        imagePublicId.length > 0
        ? renderImage(imagePublicId)
        : null
      }
      <button id="upload-brand-image-button" onClick={beginImageUpload}>Select Image</button>
      <input type="text" placeholder="Enter Name" value={brandName} onChange={event => setBrandName(event.target.value)} />
      <button id="save-brand-button" className={
        imagePublicId.length > 0 && brandName.length > 0
        ? null
        : 'disabled'
      } onClick={saveBrand}>Save</button>
    </div>
  );
}

export default AddBrand;
