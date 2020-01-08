import React, { useState } from "react";

const ExerciseForm = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    weight: "",
    sets: "",
    reps: "",
    notes: "",
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
      weight: workout.weight,
      sets: workout.sets,
      reps: workout.reps,
      notes: workout.notes
    };
    setWorkout([...workout, newWorkout]);
  };

  const submitForm = e => {
    e.preventDefault();
    addNewWorkout(workout);
    setWorkout({ exercise: "", weight: "", sets: "", reps: "", notes: "" });
  };

  return (
    <div className="workoutForm-container">
    <form className="workoutForm" onSubmit={submitForm}>

    <div class="dropdown">
      <div class="dropbtn">Date <i class="arrow down"></i></div>
        <div class="dropdown-content">
          <a href="#">Tuesday, January 7th, 2020</a>
          <a href="#">Monday, January 6th, 2020</a>
        </div>
    </div>

    <div class="dropdown">
      <div class="dropbtn">Muscle Group <i class="arrow down"></i></div>
        <div class="dropdown-content">
          <a href="#">Chest</a>
          <a href="#">Back</a>
          <a href="#">Legs</a>
          <a href="#">Arms</a>
        </div>
    </div>

      <label htmlFor="title">Chest</label>
      <input
        id="exercise"
        name="exercise"
        type="text"
        placeholder="Exercise"
        onChange={handleChanges}
        value={workout.exercise}
      />
      <input
        id="weight"
        name="weight"
        type="text"
        placeholder="Weight"
        onChange={handleChanges}
        value={workout.weight}
      />
      <input
        id="sets"
        name="sets"
        type="text"
        placeholder="Sets"
        onChange={handleChanges}
        value={workout.sets}
      />
      <input
        id="reps"
        name="reps"
        type="text"
        placeholder="Reps"
        onChange={handleChanges}
        value={workout.reps}
      />
      <input
        id="notes"
        name="notes"
        type="text"
        placeholder="Notes"
        onChange={handleChanges}
        value={workout.notes}
      />

      <button type="submit">Add Exercise</button>
    </form>
  </div>
  );
};

export default ExerciseForm;