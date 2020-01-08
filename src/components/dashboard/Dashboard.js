import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout, getJournal } from "../../state/actions";
import JournalForm from "./JournalForm";
import JournalEntry from "./JournalEntry";

const Dashboard = props => {
  useEffect(() => {
    props.getJournal();
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
      <div className="journal-form-container">
        {props.data.map(i => (
          <JournalEntry key={i.id} i={i} />
        ))}
      </div>

      <button className="sign-out-btn" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.data);
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, { logout, getJournal })(Dashboard);
