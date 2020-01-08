import React, { useState } from "react";
import { connect } from "react-redux";

import { newJournal } from "../../state/actions";

const JournalForm = props => {
  const [id] = useState(props.id);
  const [state, setState] = useState({
    name: "",
    date: "",
    userId: id
  });
  console.log(state);

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="name"
      />
      <input
        type="date"
        name="date"
        onChange={handleChanges}
        placeholder="date"
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

export default connect(mapStateToProps, { newJournal })(JournalForm);
