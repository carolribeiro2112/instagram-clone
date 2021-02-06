import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {IStories} from '../../types/StoriesInterface';

const Stories = () => {

  const [story, setStory] = useState<IStories[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/stories')
      .then(response => setStory(response.data))
  },[])

  return(
    <div className="stories">
      <h2>Stories</h2>

      {
        story !== undefined &&
        story.map((item:IStories)=>(
          <div className="storie" key={item.id}>
            <div className="storie-image">
              <img src={item.userPicture} alt="user" />
            </div>
                
            <div className="storie-user">
              <strong>{item.user}</strong>
              <span>{item.time}</span>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default Stories;