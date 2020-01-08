import React from "react";
import "../../App.css";

const JournalEntry = props => {
  const { name, date } = props.i;
  return (
    <div className="journal-entry">
      <h1>{name}</h1>
      <p>{date}</p>
      <button> edit </button>
      <button> delete </button>
    </div>
  );
};

export default JournalEntry;
