import React, { useState } from "react";
import { connect } from "react-redux";

import { newExersize } from "../../state/actions";

const initialState = {
  name: "",
  region: ""
};

const ExerciseForm = props => {
  const [exForm, setExForm] = useState(initialState);
  console.log(exForm);
  const handleChanges = e => {
    setExForm({
      ...exForm,
      //   [e.target.name]:
      //     e.target.name === "region"
      //       ? e.target.value.toLowerCase()
      //       : e.target.value
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.newExersize(exForm);
    setExForm(initialState);
  };

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChanges}
        placeholder="Exercise"
      />
      <input
        type="text"
        name="region"
        id="region"
        onChange={handleChanges}
        placeholder="Region"
      />
      <button className="add-exercise-btn"> Add Excersize </button>
    </form>
  );
};

const mapStateTopProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateTopProps, { newExersize })(ExerciseForm);
