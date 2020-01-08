// All Actions
import * as types from "../types";

// Initial State
const initialState = {
  fetchingData: false,
  isLoggedIn: false,
  addNewEx: false,
  error: "",
  id: "",
  data: []
};

// Reducer
const mainReducer = (state = initialState, action) => {
  console.log("STATE CHANGES", state);
  console.log("payload", action.payload);
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
        id: action.id
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: false,
        error: action.payload
      };

    case types.LOGOUT:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: false,
        id: ""
      };

    // case types.GET_EXERCISE_START:
    //   return {
    //     ...state,
    //     fetchingData: true
    //   };

    // case types.GET_EXERCISE_SUCCESS:
    //   return {
    //     ...state,
    //     fetchingData: false,
    //     data: action.payload,
    //     error: ""
    //   };

    // case types.GET_EXERCISE_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };

    // case types.NEW_EXERCISE_START:
    //   return {
    //     ...state,
    //     addNewEx: true
    //   };

    // case types.NEW_EXERCISE_SUCCESS:
    //   return {
    //     ...state,
    //     addNewEx: false,
    //     data: [...state.data, action.payload],
    //     error: ""
    //   };

    // case types.NEW_EXERCISE_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };

    case types.JOURNAL_START:
      return {
        ...state
      };
    case types.JOURNAL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: ""
      };

    case types.JOURNAL_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case types.NEW_JOURNAL_START:
      return {
        ...state
      };
    case types.NEW_JOURNAL_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: ""
      };

    case types.NEW_JOURNAL_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
