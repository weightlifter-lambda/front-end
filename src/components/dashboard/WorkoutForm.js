import React, { useState } from "react";

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    reps: ""
  });

  const handleChanges = e => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value
    });
  };

  const addNewWorkout = workout => {
    const newWorkout = {
      id: Date.now(),
      exercise: workout.exercise,
      reps: workout.reps
    };
    setWorkout([...workout, newWorkout]);
  };

  const submitForm = e => {
    e.preventDefault();
    addNewWorkout(workout);
    setWorkout({ exercise: "", reps: "" });
  };

  return (
    <form onSubmit={submitForm}>
    <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      <label htmlFor="title">Exercise</label>
      <input
        id="exercise"
        name="exercise"
        type="text"
        placeholder="Exercise"
        onChange={handleChanges}
        value={workout.exercise}
      />
      <label htmlFor="body">Reps</label>
      <textarea
        id="reps"
        name="reps"
        placeholder="Reps"
        onChange={handleChanges}
        value={workout.reps}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
