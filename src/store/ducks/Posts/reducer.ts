import {Posts,PostsTypes} from './types';

const initialStatePosts: Posts = {
  arrayPosts: []
}

function reducerPosts(state=initialStatePosts, action:any) {
  switch(action.type) {
    case PostsTypes.GET_POSTS:
      return {
        arrayPosts: action.payload,
      }
      default:
        return state
  }
}

export default reducerPosts;