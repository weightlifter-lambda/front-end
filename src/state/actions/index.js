import * as types from "../types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const register = credentials => dispatch => {
  console.log("actions", credentials);
  dispatch({ type: types.REGISTER_START });
  return axiosWithAuth()
    .post(`/auth/signup`, credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: types.REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAIL, payload: err });
    });
};

export const login = credentials => dispatch => {
  dispatch({ type: types.LOGIN_START });
  return axiosWithAuth()
    .post(`/auth/login`, credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token,
        id: res.data.id
      });
    })
    .catch(err => console.log(err));
};
