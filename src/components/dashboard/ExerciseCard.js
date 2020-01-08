import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";


const WorkoutCard = () => {
  return (
    <div className="workout-card">
      <Link to="/entry" style={{ textDecoration: 'none', color: 'black' }}>
          <h1>Name</h1>
          <h2>Region</h2>  
      </Link>
    </div>

  );
};

export default WorkoutCard;
