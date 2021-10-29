import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "./actionTypes";

const initialState = {
  posts: [],
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload };
    case CREATE: {
      return { ...state, posts: [...state.posts, action.payload] };
    }
    case UPDATE:
      return state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.posts.filter((post) => post._id !== action.payload);
    case LIKE: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post._id === action.payload._id ? action.payload : post;
        }),
      };
    }
    default:
      return state;
  }
};

export default postsReducers;
