import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import ExerciseList from "./components/dashboard/ExerciseList";
import "./App.css";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Link to="/register">Register</Link>
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        <Route path="/register" render={props => <SignUpForm {...props} />} />
        <Route path="/journal/:id" render={props => <ExerciseList {...props} />} />
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
