import React from "react";
import { connect } from "react-redux";
import { deleteJournal } from "../../state/actions";
import "../../App.css";

const JournalEntry = () => {
  return (
    <div className="journal-entry">
        <h1>Exercise Name</h1>
        <h2>Region</h2>
        <p>Date</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { deleteJournal })(JournalEntry);
