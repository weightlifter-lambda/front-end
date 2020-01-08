import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../../App.css";

const ExerciseCard = () => {
  return (
    <div className="workout-card">
      <Link to="/entry">
          <h1>Name</h1>
          <h2>Region</h2>  
      </Link>
    </div>

  );
};

export default ExerciseCard;
