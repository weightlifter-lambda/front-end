import * as types from "../types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { bindActionCreators } from "redux";

export const register = credentials => dispatch => {
  console.log("actions", credentials);
  dispatch({ type: types.REGISTER_START });
  return axiosWithAuth()
    .post(`/auth/register`, credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: types.REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log("error", err);
      dispatch({ type: types.REGISTER_FAIL, payload: err.data });
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

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const getExercise = () => dispatch => {
  dispatch({ type: types.GET_EXERCISE_START });
  return axiosWithAuth()
    .get("/exercises")
    .then(res => {
      console.log(res);
      dispatch({ type: types.GET_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const newExercise = payload => dispatch => {
  console.log("NEW EX", payload);
  dispatch({ type: types.NEW_EXERCISE_START });
  return axiosWithAuth()
    .post("/exercises", payload)
    .then(res => {
      dispatch({ type: types.NEW_EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.NEW_EXERCISE_FAIL, payload: err.data });
    });
};
