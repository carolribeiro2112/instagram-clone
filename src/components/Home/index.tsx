import React from 'react';

import Form from '../Form';
import Post from '../Post';
import Stories from '../Stories';
import UserInfo from '../UserInfo';

const Home = () => {
  return(
    <div className="home">
        <div className="post-container">
          	<Form/>
            <Post/>
        </div>

        <div>
          <UserInfo/>
          <Stories/>
        </div> 
      </div>
  )
}

export default Home;