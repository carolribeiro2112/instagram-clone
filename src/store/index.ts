import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import reducerUsers from './ducks/Users/reducer';
import reducerPosts from './ducks/Posts/reducer';

const createRootReducer = () => combineReducers({
  user: reducerUsers,
  posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export {store}