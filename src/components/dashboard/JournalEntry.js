import React from "react";
import { connect } from "react-redux";
import { deleteJournal } from "../../state/actions";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";

const JournalEntry = props => {
  const { name, date, id } = props.i;
  return (
    <div className="journal-entry">
      <h1>{name}</h1>
      <p>{date}</p>
      <button className="card-button">Edit</button>
      <button className="card-button" onClick={e => props.deleteJournal(id)}>Delete</button>
      <Link to={`/journal/${id}`}>
        <button className="card-button">Journal</button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { deleteJournal })(JournalEntry);
