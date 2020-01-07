import React from "react";
import WorkoutForm from "./WorkoutForm";

const Dashboard = props => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.logout(user);
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 800);
  // };

  const signOut = () => {
    localStorage.clear("token");
    props.history.push("/");
  };

  return (
    <div>
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      {/* <form onSubmit={handleSubmit}> */}
      <button onClick={signOut}> Sign Out</button>
      {/* <form> */}
      <WorkoutForm />
    </div>
  );
};

export default Dashboard;
