import React, {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import {getPosts} from '../../store/ducks/Posts/actions';
import {PostsItem, PostsState} from '../../store/ducks/Posts/types';
import { FiHeart } from 'react-icons/fi';

const Post = () => {

  const dispatch = useDispatch()

  const posts = useSelector((state:PostsState)=> state.posts.arrayPosts)

  useEffect(()=>{
    buscaPost()
  },[])

  const buscaPost = () => {
    axios.get('http://localhost:4000/posts')
      .then(response => dispatch(getPosts(response.data)))
  }

   const Likes = (item:any) => {
    
    let like = item.likes + 1
    
    axios.patch(`http://localhost:4000/posts/${item.id}`,{
      likes:like
    }) 

    buscaPost()
   }





  return(
    <>
      {
        posts !== null
        && posts.map((item:PostsItem)=> (
          <div className="post" key={item.id}>
            <header>
              <img src={item.userPicture} alt={item.user} />
              <div className="post-user">
                <strong>{item.user}</strong>
                <span>{item.location}</span>
              </div>
            </header>

            <div className="post-image">
              <img src={item.postPicture} alt="post" />
            </div>

            <div className="post-likes">
              <FiHeart onClick={()=> Likes(item)}/> {item.likes}
            </div>
            
            <p>{item.description}</p>
          </div>
        ))}
    </>
  )
}

export default Post;