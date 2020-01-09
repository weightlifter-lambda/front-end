import React, { useState } from "react";
import { connect } from "react-redux";

import { newJournal } from "../../state/actions";

const JournalForm = props => {
  const [id] = useState(+localStorage.getItem("id"));
  const [state, setState] = useState({
    name: "",
    date: "",
    userId: id
  });
  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.newJournal(state);
  };

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Name:</label>
        <input
          className="journal-form-input"
          type="text"
          name="name"
          onChange={handleChanges}
          placeholder="Name"
        />
      </div>

      <div className="input-container">
        <label>Date:</label>
        <input
          className="journal-form-input"
          type="date"
          name="date"
          onChange={handleChanges}
          placeholder="date"
        />
      </div>
      <button className="journal-form-btn">Submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { newJournal })(JournalForm);
