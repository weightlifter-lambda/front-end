import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { deleteJournal, editJournal } from "../../state/actions";
import "../../App.css";

const JournalEntry = props => {
  const { name, date, id } = props.i;
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState({
    name: name,
    date: date,
    id: id
  });
  console.log(editing);

  const isEditing = () => {
    setEditing(!editing);
  };

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.editJournal(state);
    setEditing(!editing);
  };

  return (
    <div className="journal-entry">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={name}
            onChange={handleChanges}
          />
          <input
            type="date"
            name="date"
            placeholder={date}
            onChange={handleChanges}
          />
          <button> Save </button>
        </form>
      ) : (
        <>
          <h1>{name}</h1>
          <p>{date}</p>
          <button onClick={isEditing} className="card-button">
            Edit
          </button>
        </>
      )}
      <button className="card-button" onClick={e => props.deleteJournal(id)}>
        Delete
      </button>
      <Link className="card-button" to={`/journal/${id}`}>
        <div>Journal</div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { deleteJournal, editJournal })(
  JournalEntry
);
