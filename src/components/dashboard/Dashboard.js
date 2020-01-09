import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout, getJournal } from "../../state/actions";
import { BrowserRouter as Router, Link } from "react-router-dom";
import JournalForm from "./JournalForm";
import JournalEntry from "./JournalEntry";

const Dashboard = props => {
  useEffect(() => {
    props.getJournal(+localStorage.getItem("id"));
  }, []);

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
        {props.data.map(i => (
          <Link to="/entry" className="workout-card-link">
              <JournalEntry key={i.id} i={i} />
          </Link>
        ))}
      <button className="sign-out-btn" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { logout, getJournal })(Dashboard);
