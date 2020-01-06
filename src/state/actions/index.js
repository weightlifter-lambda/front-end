import * as types from "../types";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const register = credentials => dispatch => {
  console.log("actions", credentials);
  dispatch({ type: types.REGISTER_START });
  return axiosWithAuth()
    .post(`/auth/signup`, credentials)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
