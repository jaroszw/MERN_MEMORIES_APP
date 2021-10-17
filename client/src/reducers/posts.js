import { FETCH_ALL } from '../constants/actionTypes';

const reducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return posts;
  }
};

export default reducers;
