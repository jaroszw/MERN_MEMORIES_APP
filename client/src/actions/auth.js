import { AUTH } from '../reducers/actionTypes';
import * as api from '../api/index';

export const signin = (formData, history) => async (dispatch) => {
  try {
    console.log(formData, history);
    const { data } = api.signin(formData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = api.signup(formData);
    console.log(formData, history);
  } catch (error) {
    console.log(error);
  }
};
