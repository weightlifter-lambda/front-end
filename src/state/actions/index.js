import * as types from "../types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { bindActionCreators } from "redux";

// USER

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
      localStorage.setItem("id", res.data.id);
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

// JOURNALS

export const getJournal = id => dispatch => {
  dispatch({ type: types.JOURNAL_START });
  return axiosWithAuth()
    .get(`/journals/users/${id}`)
    .then(res => {
      console.log("HELLO", res.data);
      dispatch({ type: types.JOURNAL_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.JOURNAL_FAIL, payload: err.data });
    });
};

export const newJournal = data => dispatch => {
  dispatch({ type: types.NEW_JOURNAL_START });
  return axiosWithAuth()
    .post("/journals", data)
    .then(res =>
      dispatch({ type: types.NEW_JOURNAL_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: types.NEW_JOURNAL_FAIL, payload: err.data })
    );
};

export const deleteJournal = data => dispatch => {
  dispatch({ type: types.DELETE_JOURNAL_START });
  return axiosWithAuth()
    .delete(`/journals/${data}`)
    .then(res => {
      console.log("DELETED", res);
      dispatch({ type: types.DELETE_JOURNAL_SUCCESS, payload: data });
    })
    .catch(err =>
      dispatch({ type: types.DELETE_JOURNAL_FAIL, payload: err.data })
    );
};

// EXERCISE

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
