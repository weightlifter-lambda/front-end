import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";


const Journal = () => {
  return (
    <div className="journal-container">
      <div className="journal-card">
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

export default Journal;
