import React from "react";
// import WorkoutForm from "./WorkoutForm";

const Dashboard = () => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.logout(user);
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 800);
  // };
  return (
    <div>
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      {/* <form onSubmit={handleSubmit}> */}
      <button> Sign Out</button>
      {/* <form> */}
      {/* <WorkoutForm /> */}
    </div>
  );
};

export default Dashboard;
