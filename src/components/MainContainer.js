import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

import { IDEAS, 
  // CLOUDINARY_CLOUD_NAME, 
} from '../data/constants';

import Idea from './Idea';
import GeneratorBar from './GeneratorBar';
import AddContent from './AddContent';

const MainContainer = ({ideaId, setCurrentIdeaId, setIdeasData}) => {

  const [idea, setIdea] = useState({
    content: {},
    loaded: false,
  });

  useEffect(() => {
    if (ideaId) {
      const fetchIdea = async () => {
        try {
          const response = await axios.get(IDEAS + '/' + ideaId, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
          });
          setIdea(d => ({...d, loaded: true, content: response.data}));
        } catch (error) {
          console.log(error);
        }
      };
      fetchIdea();      
    }
  },[ideaId]);

  // const image_height = 300;

  return (
    <div id="main-content">
      <GeneratorBar setCurrentIdeaId={setCurrentIdeaId} setIdeasData={setIdeasData} />
      {
        ideaId
        ? idea.loaded
          ? <div><Idea idea={idea.content} /></div>
          : <p>Loading idea...</p>
        : <p>Generate a new idea above, or select one from history on left.</p>
      }

      {/* <CloudinaryContext cloudName={CLOUDINARY_CLOUD_NAME}>
        <Image publicId="samples/landscapes/nature-mountains" height={image_height} onLoad={() => console.log('loaded!')} >
          <Transformation height={image_height * 2} crop="scale" quality="auto" fetchFormat="auto" />
        </Image>
      </CloudinaryContext> */}

      <AddContent />
    </div>
  );
}

export default MainContainer;

// const image_height = 300;
// <img height={image_height} src={`http://res.cloudinary.com/badideas/image/upload/h_${image_height * 2},f_auto,q_auto/v1/samples/landscapes/nature-mountains`} alt=""/>