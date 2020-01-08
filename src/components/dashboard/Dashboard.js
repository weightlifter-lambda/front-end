import React from "react";
import WorkoutForm from "./WorkoutForm";

const Dashboard = props => {
<<<<<<< HEAD
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.logout(user);
  //   setTimeout(() => {
  //     props.history.push("/");
  //   }, 800);
  // };
=======
>>>>>>> master

  const signOut = () => {
    localStorage.clear("token");
    props.history.push("/");
  };

<<<<<<< HEAD
=======

>>>>>>> master
  return (
    <div>
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      {/* <form onSubmit={handleSubmit}> */}
      <button onClick={signOut}> Sign Out</button>
      {/* <form> */}
      <WorkoutForm />
      <button onClick={signOut}> Sign out </button>
    </div>
  );
};

export default Dashboard;
