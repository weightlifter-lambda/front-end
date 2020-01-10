import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout, getJournal } from "../../state/actions";
import Loader from "react-loader-spinner";
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
      <div className="journal-entry-container">
        {props.data.length === 0 ||
          (props.fetchingData === true && (
            <Loader type="Circles" color="#FBB338" height={80} width={80} />
          ))}
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
  return {
    ...state,
    data: state.data
  };
};

export default connect(mapStateToProps, { logout, getJournal })(Dashboard);
