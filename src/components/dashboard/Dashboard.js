import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout, getExercise } from "../../state/actions";
import JournalForm from "./JournalForm";
import ExerciseCard from "./ExerciseCard";

const Dashboard = props => {
  // useEffect(() => {
  //   props.getExercise();
  // }, []);

  const signOut = () => {
    localStorage.clear("token");
    props.logout();
    props.history.push("/");
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Workout Dashboard</h1>
      </header>
      <JournalForm />
      <ExerciseCard />
      <button className="sign-out-btn" onClick={signOut}>
        {" "}
        Sign Out
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { logout, getExercise })(Dashboard);
