import { AUTH, LOGOUT } from "./actionTypes";

const initialState = {
  authData: JSON.parse(localStorage.getItem("profile")) || null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducers;
