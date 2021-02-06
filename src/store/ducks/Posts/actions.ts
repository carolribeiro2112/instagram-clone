import {action} from 'typesafe-actions';
import {Posts, PostsTypes} from './types';

export const getPosts = (payload: Posts) => action(PostsTypes.GET_POSTS,payload)