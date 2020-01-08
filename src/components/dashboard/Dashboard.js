import React from "react";
import { connect } from "react-redux";
import { logout } from "../../state/actions";
import ExerciseForm from "./ExerciseForm";
import ExerciseCard from "./ExerciseCard";


const Dashboard = props => {
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
      <ExerciseForm />
      <ExerciseCard />
      <button className='sign-out-btn' onClick={signOut}>Sign Out</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { logout })(Dashboard);
