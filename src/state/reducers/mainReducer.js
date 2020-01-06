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
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        fetchingData: true,
        token: action.payload,
        id: action.id
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: true
      };

    case types.REGISTER_FAIL:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
