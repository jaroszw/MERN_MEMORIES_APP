import { combineReducers } from 'redux';
import postsReducers from './posts';
import authReducers from './auth';

export default combineReducers({
  posts: postsReducers,
  auth: authReducers,
});
