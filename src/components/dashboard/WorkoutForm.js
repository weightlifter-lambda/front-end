import React from "react";
import ReactDOM from "react-dom";

const WorkoutForm = () => {
  return (
    <div>
      <form>
        <label>New Workout</label>
        <input type="text" id="new-workout" name="new-workout" />
        <button> Create </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
