// All Actions
import * as types from "../types";

// Initial State
const initialState = {
  fetchingData: false,
  isLoggedIn: false,
  error: "",
  token: "",
  id: ""
};

// Reducer
const mainReducer = (state = initialState, action) => {
  console.log("STATE CHANGES", state);
  console.log(action.payload);
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        fetchingData: true
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        fetchingData: false
      };

    case types.REGISTER_FAIL:
      return {
        error: action.payload
      };

    case types.LOGIN_START:
      return {
        ...state,
        fetchingData: true
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: true,
        token: action.payload,
        id: action.id
      };

    default:
      return state;
  }
};

export default mainReducer;
