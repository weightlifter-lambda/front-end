import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";


const WorkoutCard = () => {
  return (
    <div className="card-container">
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>

      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
      <div className="workout-card">
        <Link to="/entry" className="workout-card-link">
            <h1>Bench Press</h1>
            <h2>Region</h2>
            <p>Monday, January 6th, 2020</p>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
