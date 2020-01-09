import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { deleteJournal } from "../../state/actions";
import "../../App.css";

const JournalEntry = props => {
  const { name, date, id } = props.i;
  const [editing, setEditing] = useState(false);
  console.log(editing);

  const isEditing = () => {
    setEditing(!editing);
  };
  return (
    <div className="journal-entry">
      {editing ? (
        <form>
          <input type="text" name="name" />
          <input type="date" name="date" />
          <button> Save </button>
        </form>
      ) : (
        <>
          <h1>{name}</h1>
          <p>{date}</p>
          <button onClick={isEditing}>Edit</button>
        </>
      )}
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
