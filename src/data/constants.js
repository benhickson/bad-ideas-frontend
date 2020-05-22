let API_ENDPOINT;
if (process.env.NODE_ENV !== 'production') {
  API_ENDPOINT = 'http://localhost:3000/api/v1';
} else {
  API_ENDPOINT = 'https://bad-ideas-backend.herokuapp.com/api/v1';
}

const IDEAS =         API_ENDPOINT+'/ideas';
const RECENT_IDEAS =  API_ENDPOINT+'/ideas/recent';
const LOGIN =         API_ENDPOINT+'/login';
const GENERATE_IDEA = API_ENDPOINT+'/ideas/generate';
const UPLOAD_IMAGE = API_ENDPOINT+'/idea_images';

const CLOUDINARY_CLOUD_NAME = 'badideas';
const CLOUDINARY_UPLOAD_PRESET = 'unsigned_uploads_v1';

export { 
  API_ENDPOINT, IDEAS, RECENT_IDEAS, LOGIN, GENERATE_IDEA, UPLOAD_IMAGE,
  CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET,
};
