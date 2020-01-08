import React, { useState } from "react";
import { connect } from "react-redux";

const initialState = {
  weight: "",
  reps: "",
  sets: ""
};

const JournalForm = props => {
  const [state, setState] = useState(initialState);
  const handleChanges = e => {};

  return (
    <form>
      <input
        type="text"
        name="weight"
        onChange={handleChanges}
        placeholder="weight"
      />
      <input
        type="text"
        name="reps"
        onChange={handleChanges}
        placeholder="reps"
      />
      <input
        type="text"
        name="sets"
        onChange={handleChanges}
        placeholder="sets"
      />
      <button> Submit </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, {})(JournalForm);
