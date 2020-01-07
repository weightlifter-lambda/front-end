import React from "react";
import WorkoutForm from "./WorkoutForm";

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
      <WorkoutForm />
      <button onClick={signOut}> Sign out </button>
    </div>
  );
};

export default Dashboard;
