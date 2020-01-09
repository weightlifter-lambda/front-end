import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { deleteJournal } from "../../state/actions";
import "../../App.css";

const JournalEntry = props => {
  const { name, date, id } = props.i;
  return (
    <div className="journal-entry">
      <h1>{name}</h1>
      <p>{date}</p>
      <button>Edit</button>
      <button onClick={e => props.deleteJournal(id)}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { deleteJournal })(JournalEntry);
