import React from "react";
import "../../App.css";


const ExerciseCard = props => {
  console.log(props.data);
  return (
    <div className="journal-container">
      <div className="journal-card">
            <h1>Name</h1>
            <h1>Region</h1>
      </div>
    </div>
  );
};

export default ExerciseCard;
