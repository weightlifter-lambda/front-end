import React from "react";
import ExerciseCard from './ExerciseCard';

const Dashboard = props => {

  const signOut = () => {
    localStorage.clear("token");
    props.history.push("/");
  };


  return (
    <div className="dashboard">
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      <ExerciseCard />
      <button className='sign-out-btn' onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
