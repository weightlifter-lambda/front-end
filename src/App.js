import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SignUpForm2 from "./components/SignUpForm2";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import JournalEntry from "./components/dashboard/JournalEntry";
import "./App.css";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Link to="/register">Register</Link>
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        <Route path="/register" render={props => <SignUpForm2 {...props} />} />
        <Route path="/entry" render={props => <JournalEntry {...props} />} />
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isLoggedIn={props.isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  console.log("APP STATE", state);
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(App);
