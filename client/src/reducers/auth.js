import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOGOUT,
} from './actionTypes';

const initialState = {
  // authData: JSON.parse(localStorage.getItem('profile')) || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  isLoading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return { ...state, isLoading: true };

    case SIGN_UP_SUCCESS:
      return { ...state, isLoading: false };

    case SIGN_UP_FAILURE:
      return { ...state, error: action.payload };

    case SIGN_IN_START:
      return { ...state, isLoading: true };

    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };

    case SIGN_IN_SUCCESS:
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...action.payload,
        })
      );
      return { ...state, user: action.payload, isLoading: false };

    case LOGOUT:
      localStorage.removeItem('user');
      return { ...state, user: null };

    default:
      return state;
  }
};

export default authReducers;
