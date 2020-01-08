import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";


const WorkoutCard = () => {
  return (
    <div className="card-container">
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Exercise Name</h1>
            <h2>Region</h2>
            <p>Date</p>
        </Link>
      </div>
      {/* Journal Form Component */}
    </div>
  );
};

export default WorkoutCard;
