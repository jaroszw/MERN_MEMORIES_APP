import {
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
} from '../reducers/actionTypes';
import * as api from '../api/index';

export const signup = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_START });
    const { data } = await api.signUp(formData);
    dispatch({ type: SIGN_UP_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error });
    console.log(error);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN_START });
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGN_IN_SUCCESS, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({ type: SIGN_IN_FAILURE, payload: error });
  }
};

<<<<<<< HEAD
export const googleSignIn = (formData, history) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch({ type: GOOGLE_SIGN_IN_START });
    const { data } = await api.googleSignIn(formData);
    console.log('RETURNDE', data);
    // dispatch({ type: GOOGLE_SIGN_IN_SUCCESS, payload: data });
    // history.push('/');
  } catch (error) {
    dispatch({ type: GOOGLE_SIGN_IN_FAILURE, payload: error });
    console.log(error, error.message);
=======
export const googleSingin = (tokenId, history) => async (dispatch) => {
  try {
    // dispatch({ type: GOOGLE_SIGN_IN_START });
    const data = await api.googleSingin({ tokenId });
    // api.dispatch({ type: GOOGLE_SIGN_IN_SUCCESS, payloda: data });
  } catch (error) {
    dispatch({ type: GOOGLE_SIGN_IN_FAILURE, payload: error });
>>>>>>> d7cd1e4435e0611bd10a62d7e37af6124a6f5300
  }
};
