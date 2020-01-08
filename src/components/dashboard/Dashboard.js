import React from "react";
import ExerciseForm from "./ExerciseForm";
import ExerciseCard from './ExerciseCard';

const Dashboard = props => {

  const signOut = () => {
    localStorage.clear("token");
    props.history.push("/");
  };


  return (
    <div>
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      <ExerciseForm />
      <ExerciseCard />
      <button onClick={signOut}> Sign out </button>
    </div>
  );
};

export default Dashboard;
