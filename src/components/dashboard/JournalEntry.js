import React from "react";
import { connect } from "react-redux";
import { deleteJournal } from "../../state/actions";
import "../../App.css";

const JournalEntry = props => {
  const { name, date, id } = props.i;
  return (
    <div className="journal-entry">
      <h1>{name}</h1>
      <p>{date}</p>
      <button> edit </button>
      <button onClick={e => props.deleteJournal(id)}> delete </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { deleteJournal })(JournalEntry);
