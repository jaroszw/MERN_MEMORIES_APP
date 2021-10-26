import { AUTH, LOGOUT } from './actionTypes';

const initialState = {
  authData: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action.data);
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log(action.data);
      localStorage.removeItem('profile');
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducers;
